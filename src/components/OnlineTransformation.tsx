import React from 'react';
import { Smartphone, Video, Calendar, MessageCircle } from 'lucide-react';

const OnlineTransformation: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Access",
      description: "Access your workouts and track progress anywhere with our mobile app."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Virtual Coaching",
      description: "Live video sessions with your personal trainer from the comfort of your home."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your schedule with our easy online booking system."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Get answers to your questions anytime with our dedicated support team."
    }
  ];

  return (
    <section id="online-transformation" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              ONLINE TRANSFORMATION
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your body from anywhere in the world with our comprehensive 
              online coaching programs. Get the same world-class training and support, 
              delivered digitally.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 font-bold tracking-wider transition-colors duration-300">
              START YOUR TRANSFORMATION
            </button>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Online Training"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineTransformation;