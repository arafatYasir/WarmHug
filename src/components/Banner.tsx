import { Link } from "react-router-dom";
import slide1 from "../assets/slide1.webp"
import slide2 from "../assets/slide2.webp"
import slide3 from "../assets/slide3.webp"

const Banner = () => {
    return (
        <div className="carousel w-full mt-10">
            <div id="slide1" className="carousel-item relative w-full">

                <img
                    src={slide1}
                    className="w-full h-[400px] object-center" />

                <div className="absolute z-50 flex flex-col items-center justify-center inset-0 text-white bg-black opacity-80">
                    <h2 className="text-xl md:text-3xl font-bold mb-2">WarmHug in Rajshahi</h2>
                    <p className="md:text-lg max-w-72 md:max-w-full text-center">Bringing warmth to those in need this winter. Join us in making a difference!</p>
                    <Link to="/campaigns" className="mt-4 px-6 py-3 bg-[#60A5FA] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition">
                        Donate Now
                    </Link>
                </div>

                <div className="absolute z-50 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">

                <img
                    src={slide2}
                    className="w-full h-[400px] object-center" />

                <div className="absolute z-50 flex flex-col items-center justify-center inset-0 bg-black opacity-80 text-white">
                    <h2 className="text-xl md:text-3xl font-bold mb-2">WarmHug in Khulna</h2>
                    <p className="md:text-lg max-w-72 md:max-w-full text-center">Bringing warmth to those in need this winter. Join us in making a difference!</p>
                    <Link to="/campaigns" className="mt-4 px-6 py-3 bg-[#60A5FA] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition">
                        Donate Now
                    </Link>
                </div>
                <div className="absolute z-50 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">

                <img
                    src={slide3}
                    className="w-full h-[400px] object-center" />

                <div className="absolute z-50 flex flex-col items-center justify-center inset-0 bg-black opacity-80 text-white">
                    <h2 className="text-xl md:text-3xl font-bold mb-2">WarmHug in Dhaka</h2>
                    <p className="md:text-lg max-w-72 md:max-w-full text-center">Bringing warmth to those in need this winter. Join us in making a difference!</p>
                    <Link to="/campaigns" className="mt-4 px-6 py-3 bg-[#60A5FA] text-white font-semibold rounded-lg hover:bg-[#2563EB] transition">
                        Donate Now
                    </Link>
                </div>
                <div className="absolute z-50 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;