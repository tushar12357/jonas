import React from "react";
import {
  Award,
  Users,
  Target,
  Clock,
  Heart,
  Trophy,
  Shield,
  Zap,
} from "lucide-react";

const WhyUsPage: React.FC = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-12">
            MORE THAN A GYM. A LIFE-CHANGING EXPERIENCE
          </h1>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed mb-16">
            At Project Reshape, we're not your typical gym. We’re a
            results-driven training facility with a singular focus: your
            transformation. No distractions, no crowded machines — just a
            private, purpose-built space with exclusive equipment you won’t find
            anywhere else.
          </p>
          <img
            src="/whyus.png"
            alt="Training Facility"
            className="rounded-lg shadow-lg mx-auto w-full max-w-4xl"
          />
        </div>
      </section>

      {/* Image Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">#1</h2>
                <p className="text-lg">A Dedicated Training Facility</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">#2</h2>
                <p className="text-lg">
                  We Bring The 'Personal' Back Into Personal Training
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">#3</h2>
                <p className="text-lg">
                  Proven Accountability For Fail-Proof Results
                </p>
              </div>
            </div>
            <img
              src="/whyus2.png"
              alt="Training Facility"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#ecf86e] p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">
                A DEDICATED TRAINING FACILITY
              </h3>
              <ul className="mt-4 text-gray-800">
                <li>Private, crowd-free space</li>
              </ul>
            </div>
            <div className="bg-[#ecf86e] p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">PERSONALIZED TRAINING</h3>
              <ul className="mt-4 text-gray-800">
                <li>Top 1% world-class trainers</li>
              </ul>
            </div>
            <div className="bg-[#ecf86e] p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">PROVEN ACCOUNTABILITY</h3>
              <ul className="mt-4 text-gray-800">
                <li>Daily check-ins to stay on track</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* Stats Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-[#ecf86e] mb-6">500+</div>
              <p className="text-white text-lg">Lives Transformed</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#ecf86e] mb-6">10+</div>
              <p className="text-white text-lg">Years of Excellence</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#ecf86e] mb-6">98%</div>
              <p className="text-white text-lg">Client Success Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#ecf86e] mb-6">24/7</div>
              <p className="text-white text-lg">Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUsPage;
