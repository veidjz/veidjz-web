;(() => {
  let k
  let t
  try {
    k = 'veidjz-theme'
    t = localStorage.getItem(k)
    if (t !== 'light' && t !== 'dark') {
      t = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    document.documentElement.setAttribute('data-theme', t)
  } catch {}
})()
