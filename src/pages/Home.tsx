import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="container mx-auto font-poppins">
            <header>
                <Navbar />
            </header>

            <Footer />
        </div>
    );
};

export default Home;