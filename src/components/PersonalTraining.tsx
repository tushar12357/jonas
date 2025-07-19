import React from "react";

const PersonalTraining: React.FC = () => {
  const services = [
    {
      title: "1-on-1 Personal Training",
      description:
        "Dedicated one-on-one sessions with our expert trainers for maximum results.",
      image:
        "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      title: "Small Group Training",
      description:
        "Train with friends in small groups while maintaining personalized attention.",
      image:
        "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      title: "Nutrition Coaching",
      description:
        "Comprehensive nutrition plans tailored to support your fitness goals.",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="personal-training" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            PERSONAL TRAINING
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of personalized fitness coaching designed
            specifically for your unique goals and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-400 hover:bg-orange-700 text-white px-8 py-3 font-bold tracking-wider transition-colors duration-300">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonalTraining;
