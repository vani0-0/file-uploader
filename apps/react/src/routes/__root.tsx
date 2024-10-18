import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import React from 'react'

const Route = createRootRoute({
  component: RootComponent,
})

const TanStackDevtools
 = import.meta.env.PROD
   ? () => null
   : React.lazy(() => import('@tanstack/router-devtools').then(res => ({
     default: res.TanStackRouterDevtools,
   })))

function RootComponent() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 flex flex-col items-center bg-slate-50">
        <Outlet />
      </main>
      <SiteFooter />
      <TanStackDevtools position="bottom-right" />
    </div>
  )
}

export { Route }
