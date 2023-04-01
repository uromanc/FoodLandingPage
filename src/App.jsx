import { Carrousel } from './components/Carrousel'
import { Favorites } from './components/Favorites'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Promotions } from './components/Promotions'
import { SocialMedia } from './components/SocialMedia'

function App () {
  return (
    <main className="mx-auto">
      {/* <h1 className="text-6xl font-semibold">Food Landing Page</h1> */}
      <Navbar />
      <Carrousel />
      <Favorites />
      <Promotions />
      <SocialMedia />
      <Footer />
    </main>
  )
}

export default App
