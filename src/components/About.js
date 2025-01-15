import React from "react";
import { useNavigate } from "react-router-dom";
import johnDoe from "../images/trainer1.jpg";
import janeSmith from "../images/nutritionist1.jpg";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About FitLife</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            FitLife is a platform dedicated to helping individuals achieve their
            fitness goals through personalized workout plans, nutrition advice,
            and a supportive community. Our team of certified trainers and
            nutritionists work together to provide you with the best guidance
            for your fitness journey.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            We believe that fitness should be accessible to everyone, regardless
            of their experience level or background. Our mission is to provide
            the tools, knowledge, and support needed to help you live a
            healthier, more active lifestyle.
          </p>
          {/* Additional Section: Our Team */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mb-6">
            Our expert team of trainers and nutritionists are here to help you
            succeed. From creating tailored workout plans to providing expert
            nutrition advice, they are dedicated to guiding you every step of
            the way.
          </p>
          <div className="flex space-x-6 mb-4">
            <div className="text-center">
              <img
                src={johnDoe}
                alt="Trainer 1"
                className="w-24 h-24 rounded-full mx-auto mb-2"
              />
              <h3 className="font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Certified Fitness Trainer</p>
            </div>
            <div className="text-center">
              <img
                src={janeSmith}
                alt="Nutritionist 1"
                className="w-24 h-24 rounded-full mx-auto mb-2"
              />
              <h3 className="font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Certified Nutritionist</p>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="mt-12 px-4 md:px-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              What Our Users Say
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md max-w-xs">
                <p className="text-gray-600 mb-4">
                  "FitLife has completely transformed my fitness journey. I feel
                  healthier and more confident every day!"
                </p>
                <p className="font-semibold text-gray-800">Sarah T.</p>
                <p className="text-gray-500">Weight Loss Success</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md max-w-xs">
                <p className="text-gray-600 mb-4">
                  "Thanks to FitLife's personalized workout plans, I've seen
                  real strength gains. I’m stronger than I’ve ever been!"
                </p>
                <p className="font-semibold text-gray-800">Mark L.</p>
                <p className="text-gray-500">Muscle Building Success</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={() => {
                navigate("/workouts");
                window.scrollTo(0, 0);
              }}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
