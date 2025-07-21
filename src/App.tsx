import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WhyUsPage from "./pages/WhyUsPage";
import PersonalTrainingPage from "./pages/PersonalTrainingPage";
import OnlineTransformationPage from "./pages/OnlineTransformationPage";
import ClientResultsPage from "./pages/ClientResultsPage";
import EnquireNow from "./components/EnquireNow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home contactRef={contactRef} />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route
              path="/personal-training"
              element={<PersonalTrainingPage />}
            />
            <Route
              path="/online-transformation"
              element={<OnlineTransformationPage />}
            />
            <Route path="/client-results" element={<ClientResultsPage />} />
          </Routes>
        </main>
        <section ref={contactRef} className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/contactus.png"
                  alt="Contact"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Get in Touch
                </h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                      placeholder="Your Email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#ecf86e] text-white px-8 py-3 text-lg font-bold tracking-wider transition-colors duration-300"
                  >
                    ENQUIRE NOW
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <EnquireNow scrollToContact={scrollToContact} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
