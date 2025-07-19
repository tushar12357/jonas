import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Slick carousel settings for fade-in effect
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: "linear",
  pauseOnHover: true,
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="mb-10 relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="block mb-2">WORLD CLASS COACHES</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-normal">
              THAT WILL GUIDE YOU EVERY STEP OF THE WAY
            </span>
          </h1>

          <Link
            to="/contact"
            className="inline-block bg-yellow-400  text-white px-12 py-4 text-lg font-bold tracking-wider transition-colors duration-300 transform hover:scale-105"
          >
            ENQUIRE NOW
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* 2. More Than Just Training Section */}
      <section className="py-20 mx-10 rounded-xl  bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-8">
                More than just training — we are with you every step of the way
              </h2>
            </div>
            <div>
              <Slider {...carouselSettings}>
                <div>
                  <img
                    src="/home.png"
                    alt="Coach motivating client"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="/home2.png"
                    alt="Group training session"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="/whyus2.png"
                    alt="Tracking fitness progress"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Before and After Transformation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Before and After Transformation
              </h2>
              <Link
                to="/client-results"
                className="mt-8 inline-block bg-yellow-400  text-white px-8 py-3 text-lg font-bold tracking-wider transition-colors duration-300"
              >
                SEE MORE
              </Link>
            </div>
            <div>
              <Slider {...carouselSettings}>
                <div>
                  <img
                    src="/beforeafter1.png"
                    alt="Transformation 1"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="/beforeafter2.png"
                    alt="Transformation 2"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="/beforeafter3.png"
                    alt="Transformation 3"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="/beforeafter4.png"
                    alt="Transformation 4"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* 4. World-Class Coaching Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                World-Class Coaching, Personalised to RESHAPE your life!
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mb-12 leading-relaxed">
                At Project Reshape, our elite team of coaches is committed to
                delivering the results you deserve—with unmatched attention to
                detail. From training and nutrition to lifestyle, sleep, and
                recovery, every aspect of your journey is carefully monitored to
                help you become the strongest, healthiest version of yourself.
              </p>
            </div>
            <div>
              <Slider {...carouselSettings}>
                <div>
                  <img
                    src="/home.png"
                    alt="One-on-one coaching"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="/home2.png"
                    alt="Nutrition planning"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="/whyus2.png"
                    alt="Online coaching"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="/home3.png"
                    alt="Online coaching"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Proven Method Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Proven Method of Coaching & Results
          </h2>
          <p className="text-xl  max-w-4xl mx-auto mb-12 leading-relaxed">
            From day one, we craft a fully personalized training and lifestyle
            plan tailored to your current fitness level, body type, lifestyle
            habits, and any past or existing injuries. Our precise,
            results-driven approach is designed to deliver the fastest and most
            sustainable progress possible. Refined through the transformation
            journeys of over 1,000 clients across Dubai and beyond, our method
            is led by a world-class team of expert coaches.
          </p>
          <img
            src="/home4.png"
            alt="Proven Method"
            className="mx-auto rounded-lg w-full max-w-2xl"
          />
        </div>
      </section>

      {/* 6. Our Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Train with us in the gym, at home, or online — wherever you are,
              we’ll create a personalised plan to help you reach your goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group bg-black py-10 rounded-xl cursor-pointer">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6  transition-colors">
                <span className="text-white text-2xl font-bold">1:1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Personal Training
              </h3>
              <p className="text-white">
                Train one-on-one with the world’s top personal trainers in
                private gyms worldwide. Optimise your training, nutrition, and
                lifestyle with the ultimate personal training experience.
              </p>
              <Link
                to="/personal-training"
                className="mt-4 inline-block text-yellow-400 font-bold"
              >
                EXPLORE NOW
              </Link>
            </div>
            <div className="text-center bg-black py-10 rounded-xl group cursor-pointer">
              <div className="w-20 h-20  bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6  transition-colors">
                <span className="text-white text-2xl font-bold">💻</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Online Transformation Blueprint
              </h3>
              <p className="text-white">
                Transform anywhere with Project Reshape’s results-driven online
                training.
              </p>
              <Link
                to="/online-transformation"
                className="mt-4 inline-block text-yellow-400  font-bold"
              >
                EXPLORE NOW
              </Link>
            </div>
            <div className="text-center bg-black py-10 rounded-xl group cursor-pointer">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6  transition-colors">
                <span className="text-white text-2xl font-bold">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Client Results
              </h3>
              <p className="text-white">
                See the transformations of our clients and the results you can
                expect.
              </p>
              <Link
                to="/client-results"
                className="mt-4 inline-block text-yellow-400  font-bold"
              >
                EXPLORE NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Five Pillars Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What results can you expect?
              </h2>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                We track every metric, every part of your journey
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <p className="text-xl text-gray-600 max-w-4xl mb-12 leading-relaxed">
                If you’ve trained with other coaches, or followed strict diets —
                yet still felt disappointed by the lack of real progress —
                you’re not alone. The truth is, most programs fail because they
                rely on guesswork, generic plans, and unsustainable methods.At
                PROJECT RESHAPE, we’ve developed a proven, highly refined system
                that delivers consistent, measurable results — particularly in
                reducing body fat and improving body composition. This is not a
                one-size-fits-all approach. Our method is built on years of
                experience, real-world results, and a deep understanding of
                human performance.By combining precisely tailored training,
                intelligent nutrition coaching, and ongoing expert guidance, we
                help clients achieve real changes — often within just a few
                weeks. Whether your goal is to lose stubborn fat, build lean
                muscle, or simply feel and perform better, our system is
                designed to work efficiently with as little as 3 focused hours
                of training per week.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xl text-gray-600 max-w-4xl mb-12 leading-relaxed">
                The 5 Pillars Driving Your Transformation: From Nutrition to
                Recovery, Every Element Is Measured and Optimized for Real
                Results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Client Success Stories & FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            Our Clients’ Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <p className="text-xl text-gray-600 italic">
                "Project Reshape changed my life! The personalized coaching and
                support helped me lose 20kg and feel stronger than ever." - Jane
                D.
              </p>
              <div className="flex justify-center mt-4">★★★★★</div>
            </div>
            <div>
              <p className="text-xl text-gray-600 italic">
                "The best decision I ever made. The coaches are incredible, and
                the results speak for themselves!" - Mark S.
              </p>
              <div className="flex justify-center mt-4">★★★★★</div>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                What makes Project Reshape different?
              </h3>
              <p className="text-gray-600">
                Our personalized, data-driven approach ensures every aspect of
                your journey is tailored to your unique needs, delivering
                sustainable results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                How soon can I see results?
              </h3>
              <p className="text-gray-600">
                Many clients see noticeable changes within a few weeks, with
                significant transformations in 8-12 weeks, depending on your
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
