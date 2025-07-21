import React from "react";
import { User, Users2, Utensils, Calendar, Clock, Target } from "lucide-react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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

const PersonalTrainingPage: React.FC = () => {
  const services = [
    {
      title: "1-on-1 Personal Training",
      description:
        "Dedicated one-on-one sessions with our expert trainers for maximum results and personalized attention.",
      image:
        "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: [
        "Customized workout plans",
        "Form correction",
        "Progress tracking",
        "Flexible scheduling",
      ],
    },
    {
      title: "Small Group Training",
      description:
        "Train with friends in small groups while maintaining personalized attention and motivation.",
      image:
        "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: [
        "2-4 person groups",
        "Shared motivation",
        "Cost effective",
        "Social accountability",
      ],
    },
    {
      title: "Nutrition Coaching",
      description:
        "Comprehensive nutrition plans and coaching tailored to support your specific fitness goals.",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: [
        "Custom meal plans",
        "Macro tracking",
        "Supplement guidance",
        "Lifestyle integration",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-8">
            PERSONAL TRAINING
          </h1>
          <img
            src="/home.png"
            alt="Coach motivating client"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              World-Class Coaching, Personalised to RESHAPE your life!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Project Reshape, our elite team of coaches is committed to
              delivering the results you deserve—with unmatched attention to
              detail. From training and nutrition to lifestyle, sleep, and
              recovery, every aspect of your journey is carefully monitored to
              help you become the strongest, healthiest version of yourself.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Maximum Results, Minimum Time.{" "}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets Project Reshape apart is our personal investment in your
              success. We go above and beyond to help you achieve truly
              life-changing results. But don’t just take our word for it — hear
              from our clients and their incredible transformations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Before and After Transformation
              </h2>
              <Link
                to="/client-results"
                className="mt-8 inline-block bg-[#ecf86e] hover:bg-orange-700 text-white px-8 py-3 text-lg font-bold tracking-wider transition-colors duration-300"
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Kickstart your fitness journey with us today.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simply enquire now to find the best personal training plan for
                you to achieve the results you want.
              </p>
            </div>
            <div>
              <img
                src="/personaltraining.png"
                alt="Fitness Journey"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalTrainingPage;
