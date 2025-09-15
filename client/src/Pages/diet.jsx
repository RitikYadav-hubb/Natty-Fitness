import React, { useState } from "react";
import { motion } from "framer-motion";

const Diet = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [plan, setPlan] = useState(null);

  const handleCheck = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const a = parseInt(age);

    if (isNaN(a) || isNaN(h) || isNaN(w) || h <= 0) {
      setPlan(null);
      return alert(" Please fill all fields correctly.");
    }

    const bmi = (w / (h * h)).toFixed(1);

    let mealPlan = {
      type: "",
      details: {},
    };

    if (bmi < 18.5) {
      mealPlan.type = `BMI: ${bmi} → Underweight `;
      mealPlan.details = {
        Morning: "Oats with milk, nuts & banana",
        Lunch: "Rice, dal, chicken/fish, green veggies",
        Snacks: "Peanut butter sandwich + fruit smoothie",
        Dinner: "Chapati, paneer/chicken curry, salad",
        BeforeBed: "Glass of milk with almonds",
      };
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      mealPlan.type = `BMI: ${bmi} → Healthy `;
      mealPlan.details = {
        Morning: "Boiled eggs or poha + green tea",
        Lunch: "Brown rice, dal, grilled chicken, salad",
        Snacks: "Fruit bowl / sprouts",
        Dinner: "2 chapati, sabzi, dal, curd",
        BeforeBed: "Warm turmeric milk",
      };
    } else if (bmi >= 25 && bmi <= 29.9) {
      mealPlan.type = `BMI: ${bmi} → Overweight `;
      mealPlan.details = {
        Morning: "Green smoothie (spinach, apple, ginger)",
        Lunch: "Quinoa/brown rice, dal, grilled veggies",
        Snacks: "Roasted chana / fruit salad",
        Dinner: "Soup + 1 chapati + stir fry veggies",
        BeforeBed: "Green tea",
      };
    } else {
      mealPlan.type = `BMI: ${bmi} → Obese ⚠️`;
      mealPlan.details = {
        Morning: "Oats porridge with chia seeds",
        Lunch: "Grilled chicken/fish + salad (no rice)",
        Snacks: "Boiled sprouts / cucumber slices",
        Dinner: "Soup + salad (avoid carbs at night)",
        BeforeBed: "Herbal tea (no sugar)",
      };
    }

    setPlan(mealPlan);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col items-center justify-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-purple-400 mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
         Personalized Diet Recommendation
      </motion.h2>

      {/* Input Form */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-96">
        <input
          type="number"
          placeholder="Enter your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded-lg text-white"
        />
        <input
          type="number"
          placeholder="Enter your Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded-lg text-white"
        />
        <input
          type="number"
          placeholder="Enter your Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded-lg text-white"
        />
        <button
          onClick={handleCheck}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Get My Meal Plan
        </button>
      </div>

      {/* Result */}
      {plan && (
        <motion.div
          className="mt-8 bg-gray-800 p-6 rounded-xl shadow-lg w-[28rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-xl font-bold text-purple-300 mb-4">
            {plan.type}
          </h3>
          <ul className="space-y-2 text-gray-300">
            {Object.entries(plan.details).map(([time, meal], idx) => (
              <li key={idx}>
                <span className="text-purple-400 font-semibold">{time}:</span>{" "}
                {meal}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </section>
  );
};

export default Diet;
