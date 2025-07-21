import React from "react";

const ClientResults: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      result: "Lost 30lbs in 12 weeks",
      quote:
        "The trainers at Project Reshape changed my life. Their personalized approach and constant support helped me achieve results I never thought possible.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
    {
      name: "Mike Chen",
      result: "Gained 15lbs of muscle",
      quote:
        "After years of struggling to build muscle, the team here created a program that finally worked. The results speak for themselves.",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
    {
      name: "Emma Davis",
      result: "Completed first marathon",
      quote:
        "From couch to marathon in 8 months! The online coaching program kept me motivated and injury-free throughout my journey.",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
  ];

  return (
    <section id="client-results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            CLIENT RESULTS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people, real transformations. See how our clients have achieved
            their fitness goals with our proven methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-yellow-200 font-semibold mb-4">
                {testimonial.result}
              </p>
              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-200 hover:bg-yellow-200 text-black px-8 py-3 font-bold tracking-wider transition-colors duration-300">
            SEE MORE RESULTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientResults;
