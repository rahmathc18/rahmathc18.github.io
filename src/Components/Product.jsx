import Cards from "./Cards";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PageTitle from "./PageTitle";

function Product() {
    return (
        <div>
        <Navbar />
        <PageTitle />
        <Cards />
        <Contact />
        <Footer />
        </div>
    )
}

export default Product;