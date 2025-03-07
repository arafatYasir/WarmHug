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
                    <div className="p-6 bg-white text-blue-900 rounded-lg shadow-lg hover:shadow-2xl transition">
                        <FaTshirt className="text-5xl mx-auto mb-4" />
                        <h4 className="text-xl font-semibold">Donate</h4>
                        <p className="mt-2 text-gray-700">
                        Donate warm clothes, blankets, or funds to help those in need stay warm during winter.
                        </p>
                    </div>

                    {/* Volunteer */}
                    <div className="p-6 bg-white text-blue-900 rounded-lg shadow-lg hover:shadow-2xl transition">
                        <FaUsers className="text-5xl mx-auto mb-4" />
                        <h4 className="text-xl font-semibold">Volunteer</h4>
                        <p className="mt-2 text-gray-700">
                        Join us in collecting and distributing donations to ensure warmth reaches those who need it.
                        </p>
                    </div>

                    {/* Spread the Word */}
                    <div className="p-6 bg-white text-blue-900 rounded-lg shadow-lg hover:shadow-2xl transition">
                        <FaHandsHelping className="text-5xl mx-auto mb-4" />
                        <h4 className="text-xl font-semibold">Spread the Word</h4>
                        <p className="mt-2 text-gray-700">
                        Share our mission to raise awareness and encourage more donations and volunteers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
