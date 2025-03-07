import Carousel from "../components/Carousel"
import FAQSection from "../components/FAQSection"
import Hero from "../components/Hero"
import MapComponent from "../components/MapComponent"
import RegisterForm from "../components/RegisterForm"
import WhatsAppButton from "../components/WatsUppButton"

const Home = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <MapComponent />
      <RegisterForm />
      <FAQSection />
      <WhatsAppButton />
    </>
  )
}

export default Home