import { FaHandsHelping, FaTshirt, FaUsers } from "react-icons/fa";

const About = () => {
    return (
        <section className="bg-gradient-to-b from-[#1E3A8A] to-blue-500 text-white py-16 my-14">
            {/* About Section */}
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">About WarmHug</h2>
                <p className="text-lg leading-relaxed">
                    Winter can be harsh, especially for those without proper clothing.
                    <span className="font-semibold"> WarmHug</span> is dedicated to collecting and distributing warm clothes
                    to underprivileged communities. Together, we can spread warmth and kindness!
                </p>
            </div>

            {/* How You Can Help Section */}
            <div className="max-w-6xl mx-auto mt-12 px-6">
                <h3 className="text-3xl font-semibold text-center mb-6">How You Can Help</h3>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                    {/* Donate */}
                    <div className="p-6 bg-white text-blue-900 rounded-lg shadow-lg">
                        <FaTshirt className="text-5xl mx-auto mb-4" />
                        <h4 className="text-xl font-semibold">Donate</h4>
                        <p className="mt-2 text-gray-700">
                            Contribute warm clothes, blankets, or funds to support those in need.
                        </p>
                        <button className="mt-4 bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-lg">
                            Donate Now
                        </button>
                    </div>

                    {/* Volunteer */}
                    <div className="p-6 bg-white text-blue-900 rounded-lg shadow-lg">
                        <FaUsers className="text-5xl mx-auto mb-4" />
                        <h4 className="text-xl font-semibold">Volunteer</h4>
                        <p className="mt-2 text-gray-700">
                        Help us collect, sort, and distribute donations to communities
                        </p>
                        <button className="mt-4 bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-lg">
                            Join Us
                        </button>
                    </div>

                    {/* Spread the Word */}
                    <div className="p-6 bg-white text-blue-900 rounded-lg shadow-lg">
                        <FaHandsHelping className="text-5xl mx-auto mb-4" />
                        <h4 className="text-xl font-semibold">Spread the Word</h4>
                        <p className="mt-2 text-gray-700">
                            Share our mission with friends & family to expand our reach.
                        </p>
                        <button className="mt-4 bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-lg">
                            Share Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
