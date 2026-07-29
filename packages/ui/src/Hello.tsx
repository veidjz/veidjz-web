import type { ReactNode } from 'react'

export interface HelloProps {
  children?: ReactNode
}

export function Hello({ children = 'veidjz' }: HelloProps) {
  return <p>{children}</p>
}
