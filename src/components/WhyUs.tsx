import React from "react";
import { Award, Users, Target, Clock } from "lucide-react";

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-12 h-12 text-yellow-200" />,
      title: "Certified Trainers",
      description:
        "Our team consists of highly qualified and certified personal trainers with years of experience.",
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-200" />,
      title: "Personalized Approach",
      description:
        "Every program is tailored specifically to your goals, fitness level, and lifestyle.",
    },
    {
      icon: <Target className="w-12 h-12 text-yellow-200" />,
      title: "Proven Results",
      description:
        "Our clients consistently achieve their fitness goals through our systematic approach.",
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-200" />,
      title: "Flexible Scheduling",
      description:
        "Train when it works for you with our flexible scheduling options and online programs.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            WHY CHOOSE US?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another gym. We're your partners in transformation,
            committed to helping you achieve results that last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/50 p-8 rounded-lg text-center hover:bg-black/70 transition-colors duration-300"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
