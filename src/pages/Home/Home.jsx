import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Stats from "../../components/Stats/Stats"
import Program from "../../components/Program/Program"
import Why from "../../components/Why/Why"
import Students from "../../components/Students/Students"
import CTA from "../../components/CTA/CTA"
import Footer from "../../components/Footer/Footer"

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Program />
      <Why />
      <Students/>
      <CTA />
      <Footer/>

                 {/* <div className="home">
                   <h1>hello home</h1>
                 </div> */}
    </>
  );
}

export default Home;
