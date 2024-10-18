import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="relactive container bg-slate-100">
      <h3>Welcome Home!</h3>
    </div>
  )
}
