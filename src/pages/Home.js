import React from 'react';
import 'animate.css';

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            {/* Hero Section */}
            <section className="text-center bg-purple-600 text-white py-16 animate__animated animate__fadeInUp">
                <h1 className="text-4xl font-bold mb-4">Welcome to the Skill Test Website</h1>
                <p className="mb-4">Enhance your skills with our expertly crafted tests</p>
                <button  className="bg-white text-blue-500 font-semibold py-2 px-4 rounded animate__fadeInUp">Take Test</button>
            </section>

            {/* Featured Tests */}
            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Featured Tests</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border p-4 rounded animate__animated animate__fadeInLeft">
                        <h3 className="font-semibold text-xl">Frontend Development</h3>
                        <p>Test your HTML, CSS, and JavaScript skills.</p>
                        <a href="/test" className="text-blue-600 hover:text-gray-600 underline mt-1">Take Test</a>
                    </div>
                    <div className="border p-4 rounded animate__animated animate__fadeInLeft">
                        <h3 className="font-semibold text-xl">Backend Development</h3>
                        <p>Evaluate your knowledge of server-side programming.</p>
                        <a href="/test" className="text-blue-600 hover:text-gray-600 underline mt-1">Take Test</a>
                    </div>
                    <div className="border p-4 rounded animate__animated animate__fadeInLeft">
                        <h3 className="font-semibold text-xl">Data Science</h3>
                        <p>Assess your proficiency in data analysis and machine learning.</p>
                        <a href="/test" className="text-blue-600 hover:text-gray-600 underline mt-1">Take Test</a>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="border p-4 animate__animated animate__fadeInLeft">
                        <img src="/images/test1.jfif" alt="Choose Test" className="mx-auto mb-2 w-32 h-32 object-cover"/>
                        <h3 className="font-semibold text-xl">Choose a Test</h3>
                        <p>Pick a test from our wide range of skill categories.</p>
                    </div>
                    <div className="border p-4 animate__animated animate__fadeInUp">
                        <img src="/images/test2.avif" alt="Take Test" className="mx-auto mb-2 w-32 h-32 object-cover"/>
                        <h3 className="font-semibold text-xl">Take the Test</h3>
                        <p>Complete the test within the given time limit.</p>
                    </div>
                    <div className="border p-4 animate__animated animate__fadeInRight">
                        <img src="/images/test4.jfif" alt="Get Results" className="mx-auto mb-2 w-32 h-32 object-cover"/>
                        <h3 className="font-semibold text-xl">Get Results</h3>
                        <p>Receive your scores and see how you performed.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="my-8 bg-gray-100 py-8 animate__delay-2s">
                <h2 className="text-2xl font-bold mb-4 text-center">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border p-4 rounded">
                        <p>"The tests are well-structured and really helped me identify my strengths and weaknesses."</p>
                        <h4 className="mt-2 font-semibold">- John Doe</h4>
                    </div>
                    <div className="border p-4 rounded">
                        <p>"A fantastic resource for anyone looking to improve their skills."</p>
                        <h4 className="mt-2 font-semibold">- Jane Smith</h4>
                    </div>
                    <div className="border p-4 rounded">
                        <p>"I love the variety of tests available. It’s a great way to challenge yourself."</p>
                        <h4 className="mt-2 font-semibold">- Bob Johnson</h4>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center my-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Test Your Skills?</h2>
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded">Get Started</button>
            </section>
        </div>
    );
};

export default Home;
