import React from "react";

const HealthTipsPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 md:px-0">
      {/* Health Tips Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Health & Wellness Tips
        </h1>
        <p className="text-xl text-gray-600">
          Discover the secrets to maintaining a healthy lifestyle
        </p>
      </div>

      {/* Mental Health Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Mental Wellness
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Stress Management</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Practice daily meditation or deep breathing exercises</li>
              <li>• Maintain a regular sleep schedule</li>
              <li>• Take regular breaks during work</li>
              <li>• Engage in activities you enjoy</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Mindfulness Practices
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Start your day with gratitude journaling</li>
              <li>• Practice mindful eating</li>
              <li>• Take mindful walks in nature</li>
              <li>• Set aside time for self-reflection</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sleep Tips Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Better Sleep Habits
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Evening Routine</h3>
              <p className="text-gray-600">
                Establish a calming bedtime routine that helps you unwind. Avoid
                screens for at least an hour before bed and create a peaceful
                sleep environment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Sleep Schedule</h3>
              <p className="text-gray-600">
                Maintain consistent sleep and wake times, even on weekends. Aim
                for 7-9 hours of quality sleep each night.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Sleep Environment</h3>
              <p className="text-gray-600">
                Keep your bedroom cool, dark, and quiet. Invest in a comfortable
                mattress and pillows that support good sleep posture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Self-Care Tips Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Daily Self-Care
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Morning Routine</h3>
            <ul className="space-y-3 text-gray-600">
              <li>1. Hydrate with water upon waking</li>
              <li>2. Practice light stretching or yoga</li>
              <li>3. Eat a balanced breakfast</li>
              <li>4. Plan your day's priorities</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Evening Routine</h3>
            <ul className="space-y-3 text-gray-600">
              <li>1. Review your day's accomplishments</li>
              <li>2. Light stretching or gentle yoga</li>
              <li>3. Practice relaxation techniques</li>
              <li>4. Prepare for tomorrow</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Productivity Tips */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Work-Life Balance
        </h2>
        <div className="bg-blue-50 p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Time Management</h3>
              <p className="text-gray-600 mb-4">
                Learn to prioritize tasks and set boundaries between work and
                personal time. Use time-blocking techniques to maintain focus
                and productivity.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Set clear working hours</li>
                <li>• Take regular breaks</li>
                <li>• Use productivity tools</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Stress Relief</h3>
              <p className="text-gray-600 mb-4">
                Incorporate stress-relief activities into your daily routine to
                maintain mental and physical well-being.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Regular exercise breaks</li>
                <li>• Mindful breathing exercises</li>
                <li>• Hobby time allocation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tips Section */}
      <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Quick Health Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Stay Hydrated</h3>
            <p>
              Drink at least 8 glasses of water daily to maintain optimal health
              and energy levels
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Move Regularly</h3>
            <p>
              Take a 5-minute movement break for every hour of sitting to boost
              circulation
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Practice Gratitude</h3>
            <p>
              Take a moment each day to appreciate the positive aspects of your
              life
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTipsPage;
