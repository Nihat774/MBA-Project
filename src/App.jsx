import Footer from "./components/Footer"
import Header from "./components/Header"
import ScrollToTop from "./components/ScrollToTop"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <div className="px-10 md:px-20">
      <Header />
      <HomePage />
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
