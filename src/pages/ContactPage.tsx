import React from "react";
import { Star, TrendingUp, Award, Users } from "lucide-react";

const ClientResultsPage: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      age: 32,
      result: "Lost 30lbs in 12 weeks",
      quote:
        "The trainers at Project Reshape changed my life. Their personalized approach and constant support helped me achieve results I never thought possible. I'm stronger, more confident, and healthier than ever.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      beforeAfter: {
        before: "185lbs",
        after: "155lbs",
      },
      program: "Fat Loss Transformation",
    },
    {
      name: "Mike Chen",
      age: 28,
      result: "Gained 15lbs of muscle",
      quote:
        "After years of struggling to build muscle, the team here created a program that finally worked. The results speak for themselves. I've never felt stronger or more athletic.",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      beforeAfter: {
        before: "165lbs",
        after: "180lbs",
      },
      program: "Muscle Building Program",
    },
    {
      name: "Emma Davis",
      age: 35,
      result: "Completed first marathon",
      quote:
        "From couch to marathon in 8 months! The online coaching program kept me motivated and injury-free throughout my journey. I never thought I could run 26.2 miles.",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      beforeAfter: {
        before: "0 miles",
        after: "26.2 miles",
      },
      program: "Athletic Performance",
    },
    {
      name: "David Rodriguez",
      age: 45,
      result: "Reversed diabetes markers",
      quote:
        "Not only did I lose weight, but my doctor was amazed at how my health markers improved. My diabetes is now under control, and I feel 20 years younger.",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      beforeAfter: {
        before: "220lbs",
        after: "185lbs",
      },
      program: "Health Transformation",
    },
    {
      name: "Lisa Thompson",
      age: 29,
      result: "Gained confidence & strength",
      quote:
        "The mental transformation was just as important as the physical one. I learned to love exercise and push my limits. I'm now training for my first powerlifting competition.",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      beforeAfter: {
        before: "95lb squat",
        after: "185lb squat",
      },
      program: "Strength Training",
    },
    {
      name: "James Wilson",
      age: 38,
      result: "Lost 45lbs, gained energy",
      quote:
        "I was skeptical about online coaching, but it exceeded all my expectations. The support, accountability, and expertise helped me completely transform my lifestyle.",
      image:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      beforeAfter: {
        before: "245lbs",
        after: "200lbs",
      },
      program: "Online Transformation",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      number: "500+",
      label: "Lives Transformed",
      description: "Clients who have achieved their fitness goals",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      number: "98%",
      label: "Success Rate",
      description: "Clients who reach their transformation goals",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      number: "4.9★",
      label: "Average Rating",
      description: "Client satisfaction across all programs",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      number: "95%",
      label: "Retention Rate",
      description: "Clients who continue their fitness journey",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            CLIENT RESULTS
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real people, real transformations. See how our clients have achieved
            their fitness goals with our proven methods and unwavering support.
            These success stories represent the dedication of our clients and
            the effectiveness of our personalized approach.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              SUCCESS STORIES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every transformation tells a unique story of dedication,
              perseverance, and the power of expert guidance. Here are just a
              few of our incredible clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    Age {testimonial.age}
                  </p>
                  <p className="text-yellow-400 font-semibold mb-2">
                    {testimonial.result}
                  </p>
                  <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {testimonial.program}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center bg-gray-200 rounded-lg p-4">
                    <div className="text-center">
                      <p className="text-gray-600 text-sm">Before</p>
                      <p className="font-bold text-gray-900">
                        {testimonial.beforeAfter.before}
                      </p>
                    </div>
                    <div className="text-yellow-400">→</div>
                    <div className="text-center">
                      <p className="text-gray-600 text-sm">After</p>
                      <p className="font-bold text-gray-900">
                        {testimonial.beforeAfter.after}
                      </p>
                    </div>
                  </div>
                </div>

                <blockquote className="text-gray-600 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              TRANSFORMATION GALLERY
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visual proof of the incredible transformations our clients achieve
              through dedication and our proven methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-black/50 rounded-lg p-6 text-center"
              >
                <div className="bg-gray-700 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">
                    Before/After Photo {item}
                  </span>
                </div>
                <h3 className="text-white font-bold mb-2">
                  12 Week Transformation
                </h3>
                <p className="text-gray-300 text-sm">
                  Amazing results achieved through dedication
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 font-bold tracking-wider transition-colors duration-300">
              VIEW MORE RESULTS
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            READY TO BE OUR NEXT SUCCESS STORY?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join hundreds of clients who have transformed their lives with
            Project Reshape. Your success story starts with a single decision
            to take action.
          </p>
          <button className="bg-black hover:bg-black text-white px-12 py-4 text-lg font-bold tracking-wider transition-colors duration-300">
            START YOUR TRANSFORMATION
          </button>
        </div>
      </section>
    </div>
  );
};

export default ClientResultsPage;
