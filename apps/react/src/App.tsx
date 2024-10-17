import Layout from '@/layout'
import Seo from '@/seo'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
      <Seo />
      <Layout>
        <div>Test Deploy</div>
      </Layout>
    </HelmetProvider>
  )
}
export default App
