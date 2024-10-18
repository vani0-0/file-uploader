import { ChevronLeft, House } from 'lucide-react'

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">404</h1>
          <h2 className="text-2xl font-semibold tracking-tight">Page not found</h2>
        </div>
        <div className="space-y-4">
          <p className="text-stone-600">We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.</p>
          <div className="w-full max-w-sm mx-auto">
            <img className="w-32 h-32 mx-auto rounded-2xl" src="https://placehold.co/128x128" alt="placeholder" />
          </div>
        </div>
        <div className="space-x-4">
          <button className="w-full" type="button">
            <House className="h-4 w-4" />
            Return Home
          </button>
          <button className="outline w-full" type="button">
            <ChevronLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>

  )
}

export default ErrorPage
