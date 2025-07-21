import React from "react";
import {
  Smartphone,
  Video,
  Calendar,
  MessageCircle,
  Download,
  Users,
  Trophy,
  Clock,
} from "lucide-react";
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

const OnlineTransformationPage: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Access",
      description:
        "Access your workouts, track progress, and stay connected with your coach anywhere with our comprehensive mobile app.",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Virtual Coaching",
      description:
        "Live video sessions with your personal trainer from the comfort of your home, office, or anywhere you choose to train.",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description:
        "Book sessions that fit your schedule with our easy online booking system and flexible time slots.",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "24/7 Support",
      description:
        "Get answers to your questions anytime with our dedicated support team and instant messaging with your coach.",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Workout Library",
      description:
        "Access hundreds of workout videos, exercise demonstrations, and training programs in our extensive library.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description:
        "Join our online community of like-minded individuals for motivation, accountability, and shared experiences.",
    },
  ];

  const faqs = [
    {
      question: "What makes your training facility different?",
      answer:
        "Our facility offers a private, crowd-free space with exclusive equipment designed for your transformation, unlike typical crowded gyms.",
    },
    {
      question: "How are training programs personalized?",
      answer:
        "Programs are tailored to your specific goals, fitness level, lifestyle, and preferences by our top 1% world-class trainers.",
    },
    {
      question: "What kind of results can I expect?",
      answer:
        "With our science-based approach and proven accountability, clients achieve consistent, fail-proof results tailored to their goals.",
    },
    {
      question: "Do you offer flexible scheduling?",
      answer:
        "Yes, we provide flexible scheduling options and comprehensive online programs to fit your availability.",
    },
    {
      question: "Is the training safe?",
      answer:
        "Absolutely, our programs prioritize safety with proper form, injury prevention, and progressive overload principles.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-black mb-8">
                A personalised online training program built for you.{" "}
              </h1>
              <p className="text-xl text-black mb-8 leading-relaxed">
                With expert guidance, a proven, tailored plan, and full support
                on diet and training, Project Reshape’s online coaching helps
                you achieve incredible transformation results — wherever you
                are.
              </p>
            </div>
            <div className="relative">
              <img
                src="/online.png"
                alt="Online Training"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Our Online Personal Training Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            How our online personal training works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img
              src="/online2.png"
              alt="Before and After Transformation 1"
              className="rounded-lg shadow-md"
            />
            <img
              src="/online4.png"
              alt="Before and After Transformation 1"
              className="rounded-lg shadow-md"
            />

            <div className="bg-[#ecf86e] p-6 rounded-lg shadow-md flex flex-col justify-center">
              <p className="text-lg">
                At Project Reshape, our "maximum results, minimum time" approach
                drives everything we do — including online coaching. You commit
                to a set period, and we create a personalised training and
                nutrition plan around your goals, driven by expert guidance and
                accountability to help you achieve the best possible results in
                that time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Expect Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            What You Can Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <img
              src="/online3.png"
              alt="Training Session 1"
              className="rounded-lg shadow-md"
            />
            <img
              src="/online5.png"
              alt="Training Session 2"
              className="rounded-lg shadow-md"
            />
            <div className="bg-[#ecf86e] p-6 rounded-lg shadow-md flex flex-col justify-center">
              <p className="text-lg">
                What You Can Expect — we’re global leaders in our field for one
                simple reason — we consistently deliver outstanding results in
                record time for thousands of clients around the world. That same
                results-focused approach and commitment to excellence is the
                foundation of our online personal training program. So if you’re
                ready to put in the effort and follow the program precisely, you
                can be confident that you’ll achieve incredible results too —
                regardless of your age, experience, or where you’re starting
                from.
              </p>
            </div>
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
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-[#ecf86e] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-700 transition-colors">
                <span className="text-white text-2xl font-bold">1:1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Personal Training
              </h3>
              <p className="text-gray-600">
                Train one-on-one with the world’s top personal trainers in
                private gyms worldwide. Optimise your training, nutrition, and
                lifestyle with the ultimate personal training experience.
              </p>
              <Link
                to="/personal-training"
                className="mt-4 inline-block text-[#ecf86e] hover:text-orange-700 font-bold"
              >
                EXPLORE NOW
              </Link>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-[#ecf86e] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-700 transition-colors">
                <span className="text-white text-2xl font-bold">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Online Transformation Blueprint
              </h3>
              <p className="text-gray-600">
                Transform anywhere with Project Reshape’s results-driven online
                training.
              </p>
              <Link
                to="/online-transformation"
                className="mt-4 inline-block text-[#ecf86e] hover:text-orange-700 font-bold"
              >
                EXPLORE NOW
              </Link>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 bg-[#ecf86e] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-700 transition-colors">
                <span className="text-white text-2xl font-bold">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Client Results
              </h3>
              <p className="text-gray-600">
                See the transformations of our clients and the results you can
                expect.
              </p>
              <Link
                to="/client-results"
                className="mt-4 inline-block text-[#ecf86e] hover:text-orange-700 font-bold"
              >
                EXPLORE NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineTransformationPage;
