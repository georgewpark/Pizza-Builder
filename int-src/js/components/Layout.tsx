import { ReactNode } from 'react'

type LayoutProps = {
  page: string
  children: ReactNode
}

const Layout = ({ page, children }: LayoutProps) => {
  return <div className={`container ${page}`}>{children}</div>
}

export default Layout
