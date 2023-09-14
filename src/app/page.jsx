"use client"
import Navbar from "./components/navbar";
import Header from "./components/header";
import Present2 from "./components/present2";
import Present from "./components/present";
import Testimonials from "./components/testimonials";
import Gallery from "./components/gallery";
import Cta from "./components/cta";
import Contact from "./components/contact";
import Footer from "./components/footer";


const Home = () => {

    return (
        <main className="flex flex-col px-8 pb-8">

            <Navbar />

            <Header />

            <Present2 />

            <Present />

            <Testimonials />
            
            <Gallery />

            <Cta />

            <Contact />

            <Footer />
            
        </main>
    );

}


export default Home;