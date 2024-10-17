import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout
