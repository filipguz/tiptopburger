import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularDishes from './components/PopularDishes'
import About from './components/About'
import Menu from './components/Menu'
import OrderCTA from './components/OrderCTA'
import Hours from './components/Hours'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <PopularDishes />
        <About />
        <Menu />
        <OrderCTA />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
