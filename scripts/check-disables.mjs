import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const forbidden = [
  ['eslint', 'disable'].join('-'),
  ['biome', 'ignore'].join('-'),
  ['@ts', 'ignore'].join('-'),
  ['@ts', 'expect', 'error'].join('-'),
]

const skipDirNames = new Set([
  '.git',
  '.next',
  'coverage',
  'dist',
  'node_modules',
  'playwright-report',
  'storybook-static',
  'test-results',
])

const skipFileNames = new Set(['next-env.d.ts', 'pnpm-lock.yaml'])

const sourceExt = new Set([
  '.cjs',
  '.css',
  '.js',
  '.jsx',
  '.md',
  '.mdx',
  '.mjs',
  '.ts',
  '.tsx',
])

async function walk(dir, out) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    if (skipDirNames.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.') && entry.name !== '.github') continue
      await walk(full, out)
      continue
    }
    if (skipFileNames.has(entry.name)) continue
    if (!sourceExt.has(path.extname(entry.name))) continue
    out.push(full)
  }
}

const files = []
await walk(root, files)

const hits = []
for (const file of files) {
  const text = await readFile(file, 'utf8')
  for (const token of forbidden) {
    if (text.includes(token)) {
      hits.push(`${path.relative(root, file)}: ${token}`)
    }
  }
}

if (hits.length > 0) {
  console.error('Forbidden disable / ignore directives found:')
  for (const hit of hits) console.error(`  ${hit}`)
  process.exit(1)
}

console.log(`check-disables: ok (${files.length} files)`)
