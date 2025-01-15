import React, { useState } from "react";
import WorkoutDetails from "./Workouts/WorkoutDetails";

const Workouts = () => {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [userGoal, setUserGoal] = useState("");
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [showWorkoutPlans, setShowWorkoutPlans] = useState(false);
  const [selectedRecommendations, setSelectedRecommendations] = useState(null);

  const workoutPlans = [
    {
      title: "Beginner Full-Body",
      description: "Perfect for those just starting their fitness journey",
      duration: "45 mins",
      level: "Beginner",
      image: "/images/beginner-fullbody.jpg",
      imageCredit:
        "https://www.google.com/search?q=hiit%20cardio%20image&udm=2&tbs=rimg:CSzmXeNP7dz3YdNiyNgPbBEPsgIAwAIA2AIA4AIA&cs=1&hl=en&sa=X&ved=0CBoQuIIBahcKEwiwt_zp1_SKAxUAAAAAHQAAAAAQJQ&biw=1920&bih=997&dpr=1#vhid=JAAepfWe6BEmKM&vssid=mosaic",
    },
    {
      title: "Strength Training",
      description: "Build muscle and increase strength",
      duration: "60 mins",
      level: "Intermediate",
      image: "/images/strength-training.jpg",
      imageCredit:
        "https://www.google.com/search?q=strength+training&sca_esv=7b844f1bc8109de5&udm=2&cs=1&hl=en&biw=1920&bih=997&ei=QhSGZ7auOqzt1e8Pt9THkQw&oq=strenght&gs_lp=EgNpbWciCHN0cmVuZ2h0KgIIADINEAAYgAQYsQMYQxiKBTINEAAYgAQYsQMYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYsQMYCjIKEAAYgAQYsQMYCjIKEAAYgAQYsQMYCjIKEAAYgAQYsQMYCjINEAAYgAQYsQMYgwEYCkimHVAAWPkXcAB4AJABAJgBUqAB0gSqAQE4uAEDyAEA-AEBmAIIoALnBMICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAgcQABiABBgKwgIFEAAYgASYAwCSBwE4oAflLQ&sclient=img#vhid=ZSOFOYNdLjpMfM&vssid=mosaic&sca_esv=7b844f1bc8109de5&udm=2&cs=1&hl=en&biw=1920&bih=997&ei=QhSGZ7auOqzt1e8Pt9THkQw&oq=strenght&gs_lp=EgNpbWciCHN0cmVuZ2h0KgIIADINEAAYgAQYsQMYQxiKBTINEAAYgAQYsQMYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYsQMYCjIKEAAYgAQYsQMYCjIKEAAYgAQYsQMYCjIKEAAYgAQYsQMYCjINEAAYgAQYsQMYgwEYCkimHVAAWPkXcAB4AJABAJgBUqAB0gSqAQE4uAEDyAEA-AEBmAIIoALnBMICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAgcQABiABBgKwgIFEAAYgASYAwCSBwE4oAflLQ&sclient=img%23imgrc%3DabjmEQ4lUM3QQM",
    },
    {
      title: "HIIT Cardio",
      description: "High-intensity interval training for maximum calorie burn",
      duration: "30 mins",
      level: "Advanced",
      image: "/images/hiit-cardio.jpg",
      imageCredit:
        "https://www.google.com/search?q=high%20intensity%20interval%20training&hl=en&udm=2&tbs=rimg:CXalH96T-wpsYWu8DLoM8xSlsgIAwAIA2AIA4AIA&cs=1&sa=X&ved=0CB4QuIIBahcKEwj40OL_2vSKAxUAAAAAHQAAAAAQBw&biw=1920&bih=997&dpr=1#vhid=xdgNfXTNNnSLHM&vssid=mosaic",
    },
    {
      title: "Yoga for Relaxation",
      description: "Improve flexibility and reduce stress",
      duration: "45 mins",
      level: "All Levels",
      image: "/images/yoga-relaxation.jpg",
      imageCredit:
        "https://www.google.com/search?q=yoga%20image&hl=en&udm=2&tbs=rimg:CVGXtvjfdVeOYZCz_19KoJHWTsgIAwAIA2AIA4AIA&cs=1&sa=X&ved=0CCAQuIIBahcKEwig2Nfm2PSKAxUAAAAAHQAAAAAQPw&biw=1920&bih=997&dpr=1#vhid=zlA1FtQQ8WTfMM&vssid=mosaic",
    },
  ];

  const workoutRecommendations = [
    // Weight Loss (Beginner)
    {
      title: "Beginner Full Body",
      level: "Beginner",
      duration: "25 minutes",
      calories: "150-200",
      exercises: [
        "Bodyweight squats - 12 reps",
        "Knee pushups - 8 reps",
        "Walking lunges - 10/leg",
        "Plank hold - 30 seconds",
        "Rest - 60 seconds",
        "Repeat 3 times",
      ],
      image: "/images/workouts/beginner-fullbody.jpg", // Add image URL
      imageCredit:
        "https://www.bodybuilding.com/content/the-ultimate-beginners-full-body-workout.html",
      sourceURL:
        "https://www.bodybuilding.com/content/the-ultimate-beginners-full-body-workout.html", // Add credit URL
    },

    // Weight Loss (Intermediate)
    {
      title: "Cardio Burn",
      level: "Intermediate",
      duration: "30 minutes",
      calories: "250-300",
      exercises: [
        "Jump rope - 1 minute",
        "High knees - 45 seconds",
        "Mountain climbers - 45 seconds",
        "Squat pulses - 30 seconds",
        "Rest - 30 seconds",
        "Repeat 4 times",
      ],
      image: "/images/workouts/cardio-burn.jpg", // Add image URL
      imageCredit:
        "https://unsplash.com/photos/man-tying-his-shoes-d3bYmnZ0ank",
      sourceURL:
        "https://health.clevelandclinic.org/the-many-benefits-of-a-cardio-workout",
    },

    // Weight Loss (Advanced)
    {
      title: "HIIT Cardio",
      level: "Advanced",
      duration: "30 minutes",
      calories: "300-400",
      exercises: [
        "High knees - 45 seconds",
        "Mountain climbers - 45 seconds",
        "Burpees - 30 seconds",
        "Jump squats - 45 seconds",
        "Rest - 30 seconds",
        "Repeat 3 times",
      ],
      image: "/images/workouts/hiit-cardio.jpg", // Add image URL
      imageCredit:
        "https://www.happiesthealth.com/articles/wellness-programmes/cardio-yoga-guide",
      sourceURL:
        "https://www.healthline.com/nutrition/benefits-of-hiit#benefits",
    },

    // Muscle Building (Beginner)
    {
      title: "Bodyweight Strength Training",
      level: "Beginner",
      duration: "30 minutes",
      calories: "200-250",
      exercises: [
        "Pushups - 10 reps",
        "Bodyweight squats - 15 reps",
        "Lunges - 10 reps per leg",
        "Glute bridges - 15 reps",
        "Plank - Hold for 30 seconds",
        "Repeat 3 times",
      ],
      image: "/images/workouts/bodyweight-training.jpg", // Add image URL
      sourceURL: "https://sochi.edu/top-10-benefits-of-bodyweight-training/",
    },

    // Muscle Building (Intermediate)
    {
      title: "Strength Builder",
      level: "Intermediate",
      duration: "45 minutes",
      calories: "250-300",
      exercises: [
        "Dumbbell squats - 15 reps",
        "Pushups - 12 reps",
        "Dumbbell rows - 12/arm",
        "Glute bridges - 15 reps",
        "Rest - 45 seconds",
        "Repeat 4 times",
      ],
      image: "/images/workouts/strength-builder.jpg", // Add image URL
      imageCredit:
        "https://unsplash.com/photos/person-weightlifting-painting-vqDAUejnwKw",
      sourceURL:
        "https://www.healthline.com/health/fitness/benefits-of-strength-training#what-it-is",
    },

    // Muscle Building (Advanced)
    {
      title: "Advanced Strength Circuit",
      level: "Advanced",
      duration: "60 minutes",
      calories: "350-400",
      exercises: [
        "Deadlifts - 10 reps",
        "Pull-ups - 8 reps",
        "Overhead press - 12 reps",
        "Barbell squats - 12 reps",
        "Rest - 1 minute",
        "Repeat 4 times",
      ],
      image: "/images/workouts/advanced-strength-circuit.jpg", // Add image URL
      imageCredit:
        "https://www.livestrong.com/article/332111-how-effective-is-circuit-training-vs-lifting-weights/",
      sourceURL:
        "https://www.livestrong.com/article/332111-how-effective-is-circuit-training-vs-lifting-weights/",
    },

    // General Fitness (Beginner)
    {
      title: "Full-Body Mobility",
      level: "Beginner",
      duration: "30 minutes",
      calories: "150-200",
      exercises: [
        "Bodyweight squats - 10 reps",
        "Arm circles - 20 seconds",
        "Step-ups (on a low surface) - 8 reps per leg",
        "Plank - Hold for 20 seconds",
        "Rest - 1 minute",
        "Repeat 3 times",
      ],
      image: "/images/workouts/full-body-mobility.jpg", // Add image URL
      credit:
        "https://nutritiouslife.com/sweat-often/mobility-training-for-beginners/",
    },

    // General Fitness (Intermediate)
    {
      title: "Cardio & Core Challenge",
      level: "Intermediate",
      duration: "40 minutes",
      calories: "250-300",
      exercises: [
        "Jumping jacks - 1 minute",
        "Plank with shoulder taps - 12 reps",
        "Bicycle crunches - 15 reps",
        "Mountain climbers - 20 seconds",
        "Rest - 30 seconds",
        "Repeat 4 times",
      ],
    },

    // General Fitness (Advanced)
    {
      title: "Endurance Builder",
      level: "Advanced",
      duration: "45 minutes",
      calories: "300-400",
      exercises: [
        "Burpees - 15 reps",
        "High knees - 30 seconds",
        "Pushup to side plank - 12 reps",
        "Lunges with dumbbells - 12 reps per leg",
        "Rest - 30 seconds",
        "Repeat 5 times",
      ],
      image: "/images/workouts/endurance-builder.jpg", // Add image URL
      imageCredit:
        "https://southcambridgephysio.co.uk/2022/06/24/running-guide/",
      sourceURL:
        "https://study.com/academy/lesson/the-benefits-of-building-muscular-strength-endurance.html",
    },
  ];

  const getRecommendedWorkouts = () => {
    if (!userGoal || !fitnessLevel) return [];

    let recommended = [...workoutRecommendations];

    // Filter by fitness level
    if (fitnessLevel === "beginner") {
      recommended = recommended.filter((plan) => plan.level === "Beginner");
    } else if (fitnessLevel === "intermediate") {
      recommended = recommended.filter(
        (plan) => plan.level === "Intermediate" || plan.level === "Intermidiate"
      );
    } else if (fitnessLevel === "advanced") {
      recommended = recommended.filter((plan) => plan.level === "Advanced");
    }

    // Filter or prioritize workouts based on the user's goal
    if (userGoal === "weight-loss") {
      recommended.sort((a, b) => {
        const aCalories = parseInt(a.calories.split("-")[1]);
        const bCalories = parseInt(b.calories.split("-")[1]);
        return bCalories - aCalories;
      });
    } else if (userGoal === "muscle") {
      recommended = recommended.filter(
        (plan) =>
          plan.title.toLowerCase().includes("strength") ||
          plan.title.toLowerCase().includes("builder")
      );
    } else if (userGoal === "fitness") {
      // Select workouts unique to "General Fitness"
      recommended = recommended.filter(
        (plan) =>
          plan.title.toLowerCase().includes("cardio") ||
          plan.title.toLowerCase().includes("flexibility") ||
          plan.title.toLowerCase().includes("balance")
      );
    }

    return recommended;
  };

  if (selectedWorkout) {
    return (
      <WorkoutDetails
        workout={selectedWorkout}
        onBack={() => setSelectedWorkout(null)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Workout Plans</h1>

      {/* Workout Plans Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {workoutPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Image for the workout */}
            <img
              src={plan.image}
              alt={plan.title}
              className="w-full h-48 object-cover rounded-lg mb-4 hover:cursor-pointer"
              title="Click to view the image credit"
              onClick={() => {
                // Open both sources in new tabs
                window.open(plan.imageCredit, "_blank");
              }}
            />

            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Duration: {plan.duration}</span>
              <span>Level: {plan.level}</span>
            </div>

            {/* View Details Button */}
            <button
              onClick={() => setSelectedWorkout(plan)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Featured Workout Plan */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Featured Workout of the Week
        </h2>
        <p className="text-gray-600 mb-6">
          This week’s pick: <strong>HIIT Cardio</strong>. Maximize your calorie
          burn in just 30 minutes with this advanced-level workout!
        </p>
        <button
          onClick={() => {
            window.scrollTo(0, 0); // Scroll to the top of the page
            setSelectedWorkout(
              workoutPlans.find((plan) => plan.title === "HIIT Cardio")
            );
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors"
        >
          Try Now
        </button>
      </div>

      {/* Benefits Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Work Out Regularly?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Improved Mental Health",
              description:
                "Exercise reduces stress, anxiety, and depression while boosting your mood.",
            },
            {
              title: "Better Sleep",
              description:
                "Regular physical activity can help you fall asleep faster and deepen your sleep.",
            },
            {
              title: "Increased Energy Levels",
              description:
                "Stay active and feel more energized throughout the day.",
            },
            {
              title: "Stronger Immunity",
              description:
                "Regular workouts strengthen your immune system, helping you stay healthier.",
            },
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Need help choosing?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Not sure which workout plan is right for you? Let us help you choose
          the best plan based on your goals!
        </p>
        <button
          onClick={() => setShowRecommendations(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors"
        >
          Get Personalized Recommendations
        </button>
      </div>

      {/* Personalized Recommendations Form */}
      {showRecommendations && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-6">
            Tell us about your goals
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">
                What's your main goal?
              </label>
              <select
                value={userGoal}
                onChange={(e) => setUserGoal(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select a goal</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle">Build Muscle</option>
                <option value="fitness">General Fitness</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                What's your fitness level?
              </label>
              <select
                value={fitnessLevel}
                onChange={(e) => setFitnessLevel(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <button
              onClick={() => setShowWorkoutPlans(true)}
              disabled={!userGoal || !fitnessLevel}
              className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-300"
            >
              Show My Recommendations
            </button>
          </div>
        </div>
      )}

      {/* Recommended Workout Plans */}
      {showWorkoutPlans && userGoal && fitnessLevel && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-6">
            Recommended Workouts for You
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {getRecommendedWorkouts().map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">{plan.title}</h4>
                <div className="mb-4 space-y-2">
                  <p className="text-gray-600">Level: {plan.level}</p>
                  <p className="text-gray-600">Duration: {plan.duration}</p>
                  <p className="text-gray-600">Calories: {plan.calories}</p>
                </div>
                <button
                  onClick={() => setSelectedRecommendations(plan)}
                  className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Workout
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Workout Modal */}
      {selectedRecommendations && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-4">
              {/* Display the workout image */}
              <img
                src={selectedRecommendations.image}
                alt={selectedRecommendations.title}
                title="Click to view the image credit"
                className="w-full h-48 object-cover rounded-lg mb-4 hover:cursor-pointer"
                onClick={() =>
                  window.open(selectedRecommendations.imageCredit, "_blank")
                }
              />
            </h3>
            <div className="mb-4">
              <p className="text-gray-600">
                Level: {selectedRecommendations.level}
              </p>
              <p className="text-gray-600">
                Duration: {selectedRecommendations.duration}
              </p>
              <p className="text-gray-600">
                Calories: {selectedRecommendations.calories}
              </p>
            </div>
            <div className="space-y-2 mb-6">
              <h4 className="font-semibold text-gray-700">Exercises:</h4>
              {selectedRecommendations.exercises.map((exercise, index) => (
                <p key={index} className="text-gray-600">
                  {exercise}
                </p>
              ))}
            </div>
            {/* Display the credit URL */}
            <a
              href={selectedRecommendations.sourceURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mb-4 block"
            >
              See the source
            </a>
            <button
              onClick={() => setSelectedRecommendations(null)}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workouts;
