import React from "react";
import { ChevronLeft, Clock, User } from "lucide-react";
import WorkoutContent from "./WorkoutContent";

const WorkoutDetails = ({ workout, onBack }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <button
      onClick={onBack}
      className="flex items-center text-blue-600 mb-4 hover:text-blue-700"
    >
      <ChevronLeft className="w-4 h-4 mr-1" />
      Back to Workouts
    </button>

    <div className="relative mb-6 h-64 rounded-md overflow-hidden">
      <img
        src={workout.image}
        alt={workout.title}
        className="w-full h-full object-cover"
      />
    </div>

    <h2 className="text-3xl font-bold text-gray-800 mb-4">{workout.title}</h2>

    <div className="flex space-x-4 mb-6">
      <div className="flex items-center text-gray-600">
        <Clock className="w-5 h-5 mr-2" />
        <span>{workout.duration}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <User className="w-5 h-5 mr-2" />
        <span>{workout.level}</span>
      </div>
    </div>

    <div className="prose max-w-none">
      <h3 className="text-xl font-semibold mb-3">Description</h3>
      <p className="text-gray-600 mb-6">{workout.description}</p>

      <h3 className="text-xl font-semibold mb-3">Workout Structure</h3>
      <WorkoutContent type={workout.title} />
    </div>
  </div>
);

export default WorkoutDetails;
