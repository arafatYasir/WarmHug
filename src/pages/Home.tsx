import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="container mx-auto font-poppins">
            <header>
                <Navbar />
                <Banner />
            </header>
            <About />
            <Footer />
        </div>
    );
};

export default Home;