import Header from './components/Header'
import Hero from './components/Hero'
import StarProject from './components/StarProject'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BeamsBackground from './components/BeamsBackground'

function App() {
  return (
    <div className="relative min-h-screen">
      <BeamsBackground intensity="medium" />
      <Header />
      <main>
        <Hero />
        <StarProject />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
