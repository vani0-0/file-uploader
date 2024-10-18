import { FolderOpen } from 'lucide-react'

function SiteHeader() {
  return (
    <header className="h-16 flex items-center justify-center sticky border-b drop-shadow-sm">
      <div className="container">
        <a href="/">
          <div className="cursor-pointer flex space-x-2">
            <FolderOpen />
            <span className="text-lg font-semibold">File Uploader</span>
          </div>
        </a>
      </div>
    </header>
  )
}

export default SiteHeader
