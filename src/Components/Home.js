import Blogs from "./Blogs";
import Cards from "./Cards";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PageTitle from "./PageTitle";


function Home() {
    return (
        <>
        <Navbar />
        <PageTitle />
        <Blogs />
        <Cards />
        <Contact />
        <Footer />


        </>
    )
}

export default Home;