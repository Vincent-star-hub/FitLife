import React, { useState } from "react";

const Nutrition = () => {
  const [showMealPlans, setShowMealPlans] = useState(false);

  const featuredRecipe = {
    title: "Avocado Toast with Egg",
    description:
      "A high-protein breakfast to kickstart your day. Quick and easy to prepare, this recipe is perfect for busy mornings.",
    image: "images/avocado-toast-egg.jpg",
    calories: 250,
    protein: "12g",
    carbs: "20g",
    fat: "15g",
  };

  const nutritionCategories = [
    {
      title: "Healthy Recipes",
      description: "Quick and easy-to-make meals for your fitness goals.",
      image: "images/healthy-recipes.jpg",
    },
    {
      title: "Meal Plans",
      description:
        "Weekly plans tailored to weight loss, muscle gain, and more.",
      image: "images/meal-plans.jpg",
    },
    {
      title: "Nutrition Tips",
      description: "Learn portion control, meal prep, and nutrient timing.",
      image: "images/nutrition-tips.jpg",
    },
  ];

  const freeMealPlans = [
    {
      title: "Weight Loss Starter Plan",
      calories: "1500-1800",
      duration: "7 days",
      meals: [
        "Breakfast: Oatmeal with fruits and nuts",
        "Lunch: Grilled chicken salad",
        "Dinner: Baked fish with vegetables",
        "Snacks: Apple slices with peanut butter",
      ],
      fullPlan: `Weight Loss Starter Plan - 7 Day Meal Plan
Calorie Range: 1500-1800 calories per day

Day 1:
Breakfast: Oatmeal with fruits and nuts (300 cal)
Lunch: Grilled chicken salad (400 cal)
Dinner: Baked fish with vegetables (500 cal)
Snacks: Apple slices with peanut butter (200 cal)

Day 2:
Breakfast: Greek yogurt parfait (300 cal)
Lunch: Turkey and avocado wrap (450 cal)
Dinner: Vegetable stir-fry with tofu (400 cal)
Snacks: Carrot sticks with hummus (150 cal)

Day 3:
Breakfast: Scrambled eggs with spinach (350 cal)
Lunch: Tuna salad with whole grain crackers (400 cal)
Dinner: Lean beef stir-fry (500 cal)
Snacks: Mixed berries (150 cal)

Day 4:
Breakfast: Smoothie bowl (300 cal)
Lunch: Quinoa bowl with chickpeas (450 cal)
Dinner: Grilled chicken with sweet potato (450 cal)
Snacks: Handful of almonds (160 cal)

Day 5:
Breakfast: Whole grain toast with eggs (350 cal)
Lunch: Mediterranean salad (400 cal)
Dinner: Baked salmon with quinoa (500 cal)
Snacks: Greek yogurt (150 cal)

Day 6:
Breakfast: Protein pancakes (300 cal)
Lunch: Lentil soup with vegetables (400 cal)
Dinner: Turkey meatballs with zucchini noodles (450 cal)
Snacks: Apple with cheese (200 cal)

Day 7:
Breakfast: Chia seed pudding (300 cal)
Lunch: Chicken and vegetable soup (400 cal)
Dinner: White fish with roasted vegetables (450 cal)
Snacks: Rice cakes with nut butter (200 cal)

Tips:
- Drink at least 8 glasses of water daily
- Eat slowly and mindfully
- Include protein with each meal
- Plan your meals in advance
- Get at least 7-8 hours of sleep`,
    },
    {
      title: "Muscle Gain Basics",
      calories: "2500-2800",
      duration: "7 days",
      meals: [
        "Breakfast: Protein smoothie with banana",
        "Lunch: Turkey and rice bowl",
        "Dinner: Lean beef with sweet potato",
        "Snacks: Greek yogurt with berries",
      ],
      fullPlan: `Muscle Gain Basics - 7 Day Meal Plan
Calorie Range: 2500-2800 calories per day

Day 1:
Breakfast: Protein smoothie with banana (500 cal)
Lunch: Turkey and rice bowl (600 cal)
Dinner: Lean beef with sweet potato (700 cal)
Snacks: Greek yogurt with berries (300 cal)

Day 2:
Breakfast: Egg white omelette with oatmeal (550 cal)
Lunch: Chicken and pasta (650 cal)
Dinner: Salmon with quinoa (700 cal)
Snacks: Protein bar and almonds (300 cal)

Day 3:
Breakfast: Protein pancakes with fruit (500 cal)
Lunch: Tuna wrap with avocado (600 cal)
Dinner: Lean steak with brown rice (750 cal)
Snacks: Cottage cheese with pineapple (250 cal)

Day 4:
Breakfast: Mass gainer smoothie (600 cal)
Lunch: Ground turkey with sweet potato (650 cal)
Dinner: Chicken breast with pasta (700 cal)
Snacks: Trail mix (250 cal)

Day 5:
Breakfast: Scrambled eggs with toast (550 cal)
Lunch: Beef and rice bowl (700 cal)
Dinner: Fish with quinoa (600 cal)
Snacks: Protein shake with banana (350 cal)

Day 6:
Breakfast: Overnight oats with protein powder (500 cal)
Lunch: Chicken sandwich with avocado (650 cal)
Dinner: Turkey meatballs with pasta (700 cal)
Snacks: Rice cakes with peanut butter (350 cal)

Day 7:
Breakfast: Protein smoothie bowl (550 cal)
Lunch: Salmon with rice (650 cal)
Dinner: Lean beef stir-fry (700 cal)
Snacks: Greek yogurt parfait (300 cal)

Tips:
- Eat every 2-3 hours
- Consume 1.6-2.2g of protein per kg of body weight
- Include complex carbs with each meal
- Stay hydrated with 3-4 liters of water daily
- Get adequate rest between workouts`,
    },
    {
      title: "w Essentials",
      calories: "2000-2200",
      duration: "7 days",
      meals: [
        "Breakfast: Tofu scramble",
        "Lunch: Quinoa buddha bowl",
        "Dinner: Lentil curry with rice",
        "Snacks: Mixed nuts and dried fruits",
      ],
      fullPlan: `Vegetarian Essentials - 7 Day Meal Plan
Calorie Range: 2000-2200 calories per day

Day 1:
Breakfast: Tofu scramble (400 cal)
Lunch: Quinoa buddha bowl (500 cal)
Dinner: Lentil curry with rice (600 cal)
Snacks: Mixed nuts and dried fruits (300 cal)

Day 2:
Breakfast: Overnight oats with chia seeds (400 cal)
Lunch: Chickpea salad sandwich (500 cal)
Dinner: Black bean burrito bowl (600 cal)
Snacks: Apple with almond butter (300 cal)

Day 3:
Breakfast: Smoothie bowl with granola (450 cal)
Lunch: Mediterranean quinoa bowl (550 cal)
Dinner: Vegetable stir-fry with tofu (500 cal)
Snacks: Hummus with carrots (300 cal)

Day 4:
Breakfast: Protein pancakes (vegan) (400 cal)
Lunch: Lentil soup with bread (500 cal)
Dinner: Tempeh and vegetable curry (600 cal)
Snacks: Trail mix (300 cal)

Day 5:
Breakfast: Avocado toast with seeds (450 cal)
Lunch: Spinach and chickpea salad (500 cal)
Dinner: Mushroom and pea risotto (600 cal)
Snacks: Energy balls (250 cal)

Day 6:
Breakfast: Chia pudding with fruits (400 cal)
Lunch: Veggie wrap with hummus (500 cal)
Dinner: Bean and sweet potato tacos (600 cal)
Snacks: Roasted chickpeas (300 cal)

Day 7:
Breakfast: Protein smoothie (400 cal)
Lunch: Buddha bowl with tahini (550 cal)
Dinner: Eggplant parmesan (no egg) (600 cal)
Snacks: Rice cakes with nut butter (250 cal)

Tips:
- Combine different protein sources
- Include B12 supplements
- Eat a variety of colors
- Plan your iron sources
- Consider calcium-fortified foods`,
    },
    {
      title: "Vegetarian Essentials",
      calories: "2000-2200",
      duration: "7 days",
      meals: [
        "Breakfast: Tofu scramble",
        "Lunch: Quinoa buddha bowl",
        "Dinner: Lentil curry with rice",
        "Snacks: Mixed nuts and dried fruits",
      ],
      fullPlan: `Vegetarian Essentials - 7 Day Meal Plan
  Calorie Range: 2000-2200 calories per day
  
  Day 1:
  Breakfast: Tofu scramble (400 cal)
  Lunch: Quinoa buddha bowl (500 cal)
  Dinner: Lentil curry with rice (600 cal)
  Snacks: Mixed nuts and dried fruits (300 cal)
  
  Day 2:
  Breakfast: Overnight oats with chia seeds (400 cal)
  Lunch: Chickpea salad sandwich (500 cal)
  Dinner: Black bean burrito bowl (600 cal)
  Snacks: Apple with almond butter (300 cal)
  
  Day 3:
  Breakfast: Smoothie bowl with granola (450 cal)
  Lunch: Mediterranean quinoa bowl (550 cal)
  Dinner: Vegetable stir-fry with tofu (500 cal)
  Snacks: Hummus with carrots (300 cal)
  
  Day 4:
  Breakfast: Protein pancakes (vegan) (400 cal)
  Lunch: Lentil soup with bread (500 cal)
  Dinner: Tempeh and vegetable curry (600 cal)
  Snacks: Trail mix (300 cal)
  
  Day 5:
  Breakfast: Avocado toast with seeds (450 cal)
  Lunch: Spinach and chickpea salad (500 cal)
  Dinner: Mushroom and pea risotto (600 cal)
  Snacks: Energy balls (250 cal)
  
  Day 6:
  Breakfast: Chia pudding with fruits (400 cal)
  Lunch: Veggie wrap with hummus (500 cal)
  Dinner: Bean and sweet potato tacos (600 cal)
  Snacks: Roasted chickpeas (300 cal)
  
  Day 7:
  Breakfast: Protein smoothie (400 cal)
  Lunch: Buddha bowl with tahini (550 cal)
  Dinner: Eggplant parmesan (no egg) (600 cal)
  Snacks: Rice cakes with nut butter (250 cal)
  
  Tips:
  - Combine different protein sources
  - Include B12 supplements
  - Eat a variety of colors
  - Plan your iron sources
  - Consider calcium-fortified foods`,
    },
    {
      title: "Keto Diet Plan",
      calories: "1500-1800",
      duration: "7 days",
      meals: [
        "Breakfast: Scrambled eggs with avocado",
        "Lunch: Chicken Caesar salad",
        "Dinner: Grilled salmon with spinach",
        "Snacks: Cheese and olives",
      ],
      fullPlan: `Keto Diet Plan - 7 Day Meal Plan
  Calorie Range: 1500-1800 calories per day
  
  Day 1:
  Breakfast: Scrambled eggs with avocado (400 cal)
  Lunch: Chicken Caesar salad (500 cal)
  Dinner: Grilled salmon with spinach (600 cal)
  Snacks: Cheese and olives (200 cal)
  
  Day 2:
  Breakfast: Keto pancakes with almond butter (400 cal)
  Lunch: Cobb salad with grilled chicken (550 cal)
  Dinner: Beef stir-fry with broccoli (600 cal)
  Snacks: Cucumber with ranch dressing (150 cal)
  
  Day 3:
  Breakfast: Keto chia pudding (350 cal)
  Lunch: Tuna salad with lettuce wraps (500 cal)
  Dinner: Chicken with cauliflower rice (600 cal)
  Snacks: Nuts and seeds (250 cal)
  
  Day 4:
  Breakfast: Omelette with spinach and cheese (400 cal)
  Lunch: Avocado and chicken bowl (550 cal)
  Dinner: Pork chops with asparagus (600 cal)
  Snacks: Olives and cheese (150 cal)
  
  Day 5:
  Breakfast: Keto smoothie (350 cal)
  Lunch: Shrimp and zucchini noodles (550 cal)
  Dinner: Lamb chops with roasted Brussels sprouts (600 cal)
  Snacks: Celery with peanut butter (150 cal)
  
  Day 6:
  Breakfast: Bacon and eggs (400 cal)
  Lunch: Grilled chicken with avocado (550 cal)
  Dinner: Beef and zucchini stir-fry (600 cal)
  Snacks: Pickles and cheese (150 cal)
  
  Day 7:
  Breakfast: Keto egg muffins (350 cal)
  Lunch: Salmon salad (500 cal)
  Dinner: Baked chicken thighs with cauliflower mash (600 cal)
  Snacks: Walnuts and cheese (150 cal)
  
  Tips:
  - Stay within your carb limit (20-50g/day)
  - Focus on high-quality fats
  - Drink plenty of water
  - Avoid sugar and processed carbs
  - Eat plenty of leafy greens`,
    },
    {
      title: "Vegan Protein Plan",
      calories: "2000-2200",
      duration: "7 days",
      meals: [
        "Breakfast: Tofu and spinach scramble",
        "Lunch: Quinoa and black bean salad",
        "Dinner: Lentil stew with brown rice",
        "Snacks: Protein bar with nuts",
      ],
      fullPlan: `Vegan Protein Plan - 7 Day Meal Plan
  Calorie Range: 2000-2200 calories per day
  
  Day 1:
  Breakfast: Tofu and spinach scramble (400 cal)
  Lunch: Quinoa and black bean salad (500 cal)
  Dinner: Lentil stew with brown rice (600 cal)
  Snacks: Protein bar with nuts (300 cal)
  
  Day 2:
  Breakfast: Smoothie with pea protein (400 cal)
  Lunch: Chickpea salad with avocado (550 cal)
  Dinner: Sweet potato and black bean chili (600 cal)
  Snacks: Roasted almonds (250 cal)
  
  Day 3:
  Breakfast: Vegan protein pancakes (400 cal)
  Lunch: Tofu stir-fry with vegetables (500 cal)
  Dinner: Tempeh and quinoa bowl (600 cal)
  Snacks: Protein shake (300 cal)
  
  Day 4:
  Breakfast: Overnight oats with chia seeds (400 cal)
  Lunch: Lentil and vegetable stew (500 cal)
  Dinner: Spaghetti with lentil bolognese (600 cal)
  Snacks: Hummus with carrots (250 cal)
  
  Day 5:
  Breakfast: Vegan protein smoothie (400 cal)
  Lunch: Buddha bowl with quinoa and chickpeas (550 cal)
  Dinner: Vegan burger with sweet potato fries (600 cal)
  Snacks: Energy balls (250 cal)
  
  Day 6:
  Breakfast: Chia pudding with almond milk (400 cal)
  Lunch: Black bean and corn salad (500 cal)
  Dinner: Vegan shepherd's pie (600 cal)
  Snacks: Apple with peanut butter (250 cal)
  
  Day 7:
  Breakfast: Avocado toast with tofu (400 cal)
  Lunch: Vegan sushi with avocado (500 cal)
  Dinner: Stir-fried tofu with broccoli (600 cal)
  Snacks: Roasted chickpeas (250 cal)
  
  Tips:
  - Combine different plant-based protein sources
  - Plan your iron sources (e.g., spinach, lentils)
  - Stay hydrated
  - Incorporate omega-3 fatty acids (e.g., flax seeds)
  - Include vitamin B12 supplements`,
    },
  ];

  const handleDownload = (plan) => {
    // Create text content for the file
    const content = plan.fullPlan;

    // Create a Blob containing the text content
    const blob = new Blob([content], { type: "text/plain" });

    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a temporary anchor element
    const a = document.createElement("a");
    a.href = url;
    a.download = `${plan.title.toLowerCase().replace(/ /g, "-")}.txt`;

    // Trigger the download
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Nutrition</h1>

      {/* Featured Recipe Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Featured Recipe of the Week
        </h2>
        <div className="md:flex items-center">
          <img
            src={featuredRecipe.image}
            alt={featuredRecipe.title}
            className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              {featuredRecipe.title}
            </h3>
            <p className="text-gray-600 mb-4">{featuredRecipe.description}</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Calories: {featuredRecipe.calories}</li>
              <li>Protein: {featuredRecipe.protein}</li>
              <li>Carbs: {featuredRecipe.carbs}</li>
              <li>Fat: {featuredRecipe.fat}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nutrition Categories Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {nutritionCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Get a Free Personalized Diet Plan
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Download our free meal plans designed to help you reach your goals!
        </p>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors"
          onClick={() => setShowMealPlans(!showMealPlans)}
        >
          {showMealPlans ? "Hide Meal Plans" : "Explore Meal Plans"}
        </button>
      </div>

      {/* Free Meal Plans Section */}
      {showMealPlans && (
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {freeMealPlans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <div className="mb-4">
                <p className="text-gray-600">Calories: {plan.calories}</p>
                <p className="text-gray-600">Duration: {plan.duration}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">
                  Sample Day Menu:
                </h4>
                {plan.meals.map((meal, mealIndex) => (
                  <p key={mealIndex} className="text-gray-600 text-sm">
                    {meal}
                  </p>
                ))}

                <p className="text-gray-500 text-sm italic">
                  ...and more in the full plan
                </p>
              </div>
              <button
                className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                onClick={() => handleDownload(plan)}
              >
                Download FullPlan
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nutrition;
