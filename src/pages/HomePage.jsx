
import Partners from "../components/Partners"
import Contact from "../components/Contact"
import SimpleSlider from "../components/HomeSection"
import Address from "../components/Address"
import About from "../components/About"
import Services from "../components/Services"

function HomePage() {

  return (
    <main className="flex flex-col gap-[5vh]">
      <section id='' className="">
        <SimpleSlider />
      </section>

      <section id="about">
        <About />
      </section>


      {/* partners */}
      <section id="partners">
        <Partners />
      </section>

      <section id='address' className="">
        <Address />
      </section>

      <section id="services">
        <Services />
      </section>

      {/* contact us  */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}

export default HomePage