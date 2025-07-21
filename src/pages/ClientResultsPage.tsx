import React from "react";

const ClientResultsPage: React.FC = () => {
  const images = [
    "/client.png",
    "/client2.png",
    "/client3.png",
    "/client4.png",
    "/client5.png",
    "/client6.png",
    "/client7.png",
    "/client8.png",
    "/client9.png",
    "/client10.png",
    "/client11.png",
    "/client12.png",
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            Before And After Transformation
          </h1>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="bg-yellow-200 rounded-lg p-2 text-center"
              >
                <img
                  src={img}
                  alt={`Transformation ${index + 1}`}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientResultsPage;
