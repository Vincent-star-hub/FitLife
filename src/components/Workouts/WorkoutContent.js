import React from "react";

const WorkoutContent = ({ type }) => {
  const content = {
    "Beginner Full-Body": {
      exercises: [
        { name: "Bodyweight Squats", sets: "3", reps: "12-15" },
        { name: "Push-ups (Modified if needed)", sets: "3", reps: "8-12" },
        { name: "Dumbbell Rows", sets: "3", reps: "12 each side" },
        { name: "Glute Bridges", sets: "3", reps: "15" },
        { name: "Plank Hold", sets: "3", duration: "30 seconds" },
      ],
      tips: [
        "Focus on proper form over speed",
        "Take breaks when needed",
        "Stay hydrated throughout",
        "Warm up for 5-10 minutes before starting",
      ],
    },
    "Strength Training": {
      exercises: [
        { name: "Barbell Squats", sets: "4", reps: "8-10" },
        { name: "Bench Press", sets: "4", reps: "8-10" },
        { name: "Deadlifts", sets: "3", reps: "8" },
        { name: "Overhead Press", sets: "3", reps: "10" },
        { name: "Bent-Over Rows", sets: "3", reps: "12" },
      ],
      tips: [
        "Always use proper form",
        "Gradually increase weights",
        "Rest 90 seconds between sets",
        "Have a spotter for heavy lifts",
      ],
    },
    "HIIT Cardio": {
      exercises: [
        { name: "Burpees", duration: "30 seconds" },
        { name: "Mountain Climbers", duration: "30 seconds" },
        { name: "Jump Squats", duration: "30 seconds" },
        { name: "High Knees", duration: "30 seconds" },
        { name: "Rest", duration: "30 seconds" },
      ],
      tips: [
        "Complete 4-6 rounds",
        "Maximum effort during work periods",
        "Stay hydrated",
        "Modify exercises as needed",
      ],
    },
    "Yoga for Relaxation": {
      exercises: [
        { name: "Child's Pose", duration: "5 minutes" },
        { name: "Cat-Cow Stretch", duration: "3 minutes" },
        { name: "Downward Dog", duration: "3 minutes" },
        { name: "Warrior I & II", duration: "5 minutes each side" },
        { name: "Savasana", duration: "5 minutes" },
      ],
      tips: [
        "Focus on breathing",
        "Move slowly and mindfully",
        "Don't force any positions",
        "Use props if needed",
      ],
    },
  };

  const workout = content[type];

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-medium mb-3">Exercises</h4>
        <div className="space-y-3">
          {workout.exercises.map((exercise, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 p-3 rounded"
            >
              <span className="font-medium">{exercise.name}</span>
              <span className="text-gray-600">
                {exercise.sets && exercise.reps
                  ? `${exercise.sets} sets × ${exercise.reps}`
                  : exercise.duration}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-medium mb-3">Tips</h4>
        <ul className="list-disc pl-5 space-y-2">
          {workout.tips.map((tip, index) => (
            <li key={index} className="text-gray-600">
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutContent;
