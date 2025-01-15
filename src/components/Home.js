import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Dumbbell,
  Coffee,
  Monitor,
  Smile,
  Star,
  Heart,
  Users,
} from "lucide-react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleStartJourney = () => {
    setShowModal(true); // Open modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate("/workouts"); // Redirect to the workout page
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img
          src="/images/fitlife-logo.png"
          alt="FitLife Logo"
          className="w-28 h-28"
        />
      </div>

      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
        Welcome to <span className="text-blue-600">FitLife</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 ">
        Your journey to a healthier, stronger you begins here.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <FeatureCard
          icon={<Dumbbell className="w-12 h-12 text-blue-600" />}
          title="Expert Workouts"
          description="Access professionally designed workout plans for all fitness levels"
        />

        <FeatureCard
          icon={<Coffee className="w-12 h-12 text-blue-600" />}
          title="Nutrition Guides"
          description="Discover healthy recipes and meal plans tailored to your goals"
        />
        <FeatureCard
          icon={<Monitor className="w-12 h-12 text-blue-600" />}
          title="Track Progress"
          description="Monitor your fitness journey with our advanced tracking tools"
        />
      </div>

      {/* Why Choose FitLife Section */}
      <div className="mt-12 px-4 md:px-0">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Why Choose FitLife?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Smile className="w-12 h-12 text-blue-600" />}
            title="Personalized Plans"
            description="Get workout and nutrition plans tailored specifically for your goals."
          />
          <FeatureCard
            icon={<Heart className="w-12 h-12 text-blue-600" />}
            title="Community Support"
            description="Join a community of fitness enthusiasts who inspire and motivate."
          />
          <FeatureCard
            icon={<Star className="w-12 h-12 text-blue-600" />}
            title="Proven Results"
            description="Our users have transformed their lives. You can too!"
          />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mt-12 px-4 md:px-0">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          How FitLife Works
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          FitLife is completely free and open to everyone. No account
          required—just follow these simple steps to get started:
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Users className="w-12 h-12 text-blue-600" />}
            title="Explore Workouts"
            description="Browse through a variety of workout plans suited for all fitness levels."
          />
          <FeatureCard
            icon={<Dumbbell className="w-12 h-12 text-blue-600" />}
            title="Choose Your Goal"
            description="Select a goal, whether it's weight loss, muscle building, or general fitness."
          />
          <FeatureCard
            icon={<Monitor className="w-12 h-12 text-blue-600" />}
            title="Start Your Journey"
            description="Follow the plan, track your progress, and keep improving—it's that easy!"
          />
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-12 px-4 md:px-0">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="bg-blue-50 p-6 rounded-lg shadow-md">
            <summary className="text-lg font-semibold text-gray-800 cursor-pointer">
              What is FitLife?
            </summary>
            <p className="text-gray-600 mt-2">
              FitLife is a platform dedicated to helping individuals achieve
              their fitness goals through personalized workout plans, nutrition
              advice, and a supportive community.
            </p>
          </details>
          <details className="bg-blue-50 p-6 rounded-lg shadow-md">
            <summary className="text-lg font-semibold text-gray-800 cursor-pointer">
              How can I join FitLife?
            </summary>
            <p className="text-gray-600 mt-2">
              You can start using FitLife right away without the need to sign
              up. Simply explore the platform and begin your fitness journey!
            </p>
          </details>
          <details className="bg-blue-50 p-6 rounded-lg shadow-md">
            <summary className="text-lg font-semibold text-gray-800 cursor-pointer">
              Is FitLife free to use?
            </summary>
            <p className="text-gray-600 mt-2">
              Yes, FitLife is completely free to use. We do not charge any fees
              for membership or any additional services.
            </p>
          </details>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-12 px-4 md:px-0">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Ready to start your fitness journey?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Whether you're a beginner or an experienced athlete, FitLife has the
          tools and resources to help you achieve your fitness goals. Start now
          and see real results!
        </p>
        <button
          onClick={handleStartJourney}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors"
        >
          Start Your Journey Today
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to FitLife!
            </h3>
            <p className="text-gray-600 mb-6">
              You're about to start your fitness journey. Choose your goal and
              fitness level to receive personalized plans!
            </p>
            <button
              onClick={handleCloseModal}
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
