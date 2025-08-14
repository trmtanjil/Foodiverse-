import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

export default function AdminCreatePoke() {
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      base: [
        { name: "Basmati rice", price: 0 },
        { name: "Sushi Rice", price: 0 },
        { name: "Cous Cous", price: 0 },
        { name: "Black Venere Rice", price: 0 },
        { name: "Red Venere rice", price: 0 },
        { name: "Salad Trio", price: 0 },
      ],
proteins1: [
  { name: "Salmon", price: 0 },
  { name: "Smoked salmon", price: 0 },
  { name: "Flambéed salmon", price: 0 },
  { name: "Fresh tuna", price: 0 },
  { name: "Tuna in oil", price: 0 },
  { name: "Cooked shrimp", price: 0 },
  { name: "Shrimp tempura", price: 0 },
  { name: "Caramelized octopus", price: 0 },
  { name: "Crispy chicken", price: 0 },
  { name: "Shrimp cocktail", price: 0 },
  { name: "Tofu", price: 0 },
  { name: "Hard-boiled egg", price: 0 },
  { name: "Soy strips", price: 0 },
  { name: "Nothing", price: 0 },
  { name: "Hard-boiled eggs", price: 0 }
],

proteins2: [
  { name: "Salmon", price: 0 },
  { name: "Smoked salmon", price: 0 },
  { name: "Flambéed salmon", price: 0 },
  { name: "Fresh tuna", price: 0 },
  { name: "Tuna in oil", price: 0 },
  { name: "Cooked shrimp", price: 0 },
  { name: "Shrimp tempura", price: 0 },
  { name: "Caramelized octopus", price: 0 },
  { name: "Crispy chicken", price: 0 },
  { name: "Shrimp cocktail", price: 0 },
  { name: "Tofu", price: 0 },
  { name: "Hard-boiled egg", price: 0 },
  { name: "Soy strips", price: 0 },
  { name: "Hard-boiled eggs", price: 0 }
],
     condiments: [
  { name: "Nori seaweed", price: 0 },
  { name: "Avocado", price: 0 },
  { name: "Carrots", price: 0 },
  { name: "Red cabbage", price: 0 },
  { name: "Chickpeas", price: 0 },
  { name: "Pickled cucumbers", price: 0 },
  { name: "Cucumbers", price: 0 },
  { name: "Tropea onions", price: 0 },
  { name: "Edamame", price: 0 },
  { name: "Goma Wakame", price: 0 },
  { name: "Chickpea and avocado hummus", price: 0 },
  { name: "Russian salad", price: 0 },
  { name: "Corn", price: 0 },
  { name: "Mango", price: 0 },
  { name: "Green apple", price: 0 },
  { name: "Pomegranate", price: 0 },
  { name: "Black olives", price: 0 },
  { name: "Philadelphia", price: 0 },
  { name: "Cherry tomatoes", price: 0 },
  { name: "Radishes", price: 0 },
  { name: "Red Tobiko", price: 0 },
  { name: "Salad Trio", price: 0 },
  { name: "Hard-boiled eggs", price: 0 },
  { name: "Red ginger", price: 0 },
  { name: "Zucchini alla scapece", price: 0 },
  { name: "Courgettes, lemon and mint", price: 0 }
],
crispy: [
  { name: "Peanuts (grain)", price: 0 },
  { name: "Goji berries", price: 0 },
  { name: "Crispy onion", price: 0 },
  { name: "Fuikake", price: 0 },
  { name: "Almonds (grain)", price: 0 },
  { name: "Walnut (grain)", price: 0 },
  { name: "Fried red potatoes", price: 0 },
  { name: "Pistachio (grain)", price: 0 },
  { name: "Sesame mix", price: 0 }
],
extraCondiments: [
  { name: "Nori seaweed", price: 1.00 },
  { name: "Avocado", price: 1.50 },
  { name: "Carrots", price: 1.00 },
  { name: "Red cabbage", price: 1.00 },
  { name: "Chickpeas", price: 1.00 },
  { name: "Cucumbers", price: 1.00 },
  { name: "Pickled Cucumbers", price: 1.00 },
  { name: "Tropea onions", price: 1.00 },
  { name: "Edamame", price: 1.00 },
  { name: "Milk cream", price: 1.00 },
  { name: "Goma Wakame", price: 1.50 },
  { name: "Chickpea and avocado hummus", price: 1.50 },
  { name: "Russian salad", price: 1.00 },
  { name: "Corn", price: 1.00 },
  { name: "Mango", price: 1.00 },
  { name: "Green apple", price: 1.00 },
  { name: "Pomegranate", price: 1.00 },
  { name: "Black olives", price: 1.00 },
  { name: "Philadelphia", price: 1.00 },
  { name: "Cherry tomatoes", price: 1.00 },
  { name: "Radishes", price: 1.00 },
  { name: "Red Tobiko", price: 1.00 },
  { name: "Salad Trio", price: 1.00 },
  { name: "Hard boiled eggs", price: 1.00 },
  { name: "Red ginger", price: 1.00 },
  { name: "Zucchini alla scapece", price: 1.00 },
  { name: "Courgettes, lemon and mint", price: 1.00 }
],
     sauces: [
  { name: "Mayonnaise", price: 0 },
  { name: "Soy Sauce", price: 0 },
  { name: "Teriyaki sauce", price: 0 },
  { name: "Spicy Mayonnaise", price: 0 },
  { name: "Yogurt Sauce", price: 0 },
  { name: "Lime Sauce", price: 0 },
  { name: "Special sauce", price: 0 },
  { name: "Sweet and sour sauce", price: 0 },
  { name: "Samurai sauce", price: 0 },
  { name: "Guacamole Sauce", price: 0.30 },
  { name: "Sriracha sauce", price: 0 },
  { name: "Ginger sauce", price: 0 },
  { name: "BBQ sauce", price: 0 },
  { name: "Wasabi Sauce", price: 0 },
  { name: "Pink sauce", price: 0 },
  { name: "Cocktail Sauce", price: 0 },
  { name: "Teriyaki Mayonnaise", price: 0.30 },
  { name: "Extra Virgin Olive Oil", price: 0 },
  { name: "Pickled Cucumbers", price: 0 }
],
     extraProteins: [
  { name: "Salmon", price: 3.00 },
  { name: "Smoked salmon", price: 3.00 },
  { name: "Flambéed Salmon", price: 3.00 },
  { name: "Fresh tuna", price: 3.00 },
  { name: "Tuna in oil", price: 3.00 },
  { name: "Cooked shrimp", price: 3.00 },
  { name: "Shrimp tempura", price: 3.00 },
  { name: "Crispy Chicken", price: 3.00 },
  { name: "Soy strips", price: 3.00 },
  { name: "Hard boiled eggs", price: 3.00 }
],
     extraCrispy: [
  { name: "Goji berries", price: 0.50 },
  { name: "Walnut (grain)", price: 0.70 },
  { name: "Almonds (grain)", price: 0.70 },
  { name: "Peanuts (grain)", price: 0.50 },
  { name: "Pistachio (grain)", price: 0.70 },
  { name: "Sesame mix", price: 0.50 },
  { name: "Crispy onion", price: 0.50 },
  { name: "Fried red potatoes", price: 0.50 },
  { name: "Fuikake", price: 0 }
],
    },
  });

  const { fields: baseFields } = useFieldArray({ control, name: "base" });
  const { fields: protein1Fields } = useFieldArray({ control, name: "proteins1" });
   const { fields: protein2Fields } = useFieldArray({ control, name: "proteins2" });
      const { fields: crispyFields } = useFieldArray({ control, name: "crispy" });
  const { fields: condimentFields } = useFieldArray({ control, name: "condiments" });
    const { fields: extraSaucesFields } = useFieldArray({ control, name: "extraSauces" });

    const { fields: extraCondimentsFields } = useFieldArray({ control, name: "extraCondiments" });

  const { fields: sauceFields } = useFieldArray({ control, name: "sauces" });
  const { fields: extraProteinFields } = useFieldArray({ control, name: "extraProteins" });
  const { fields: extraCrispyFields } = useFieldArray({ control, name: "extraCrispy" });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // ekhane axios diye server e POST kora jabe
  };

  const renderFieldArray = (fields, fieldName) =>
    fields.map((item, index) => (
      <div key={item.id} className="flex gap-2 mb-2">
        <input
          {...register(`${fieldName}.${index}.name`)}
          className="border p-1 rounded flex-1"
        />
        <input
          type="number"
          step="0.01"
          {...register(`${fieldName}.${index}.price`)}
          className="border p-1 rounded w-24"
        />
      </div>
    ));

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg text-black">
      <h1 className="text-2xl font-bold mb-4">Admin Add Food Options</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Base */}
        <div>
          <h2 className="font-semibold mb-2">Base</h2>
          {renderFieldArray(baseFields, "base")}
        </div>

        {/* Proteins */}
        <div>
          <h2 className="font-semibold mb-2">Proteins1</h2>
          {renderFieldArray(protein1Fields, "proteins1")}
        </div>
         {/* Proteins2 */}
        <div>
          <h2 className="font-semibold mb-2">Proteins2</h2>
          {renderFieldArray(protein2Fields, "proteins2")}
        </div>
            {/* crispy */}
        <div>
          <h2 className="font-semibold mb-2">crispy</h2>
          {renderFieldArray(crispyFields, "crispy")}
        </div>

        {/* Condiments */}
        <div>
          <h2 className="font-semibold mb-2">Condiments</h2>
          {renderFieldArray(condimentFields, "condiments")}
        </div>
        {/* Condiments */}
        <div>
          <h2 className="font-semibold mb-2">Condiments</h2>
          {renderFieldArray(extraCondimentsFields, "extraCondiments")}
        </div>

        {/* Sauces */}
        <div>
          <h2 className="font-semibold mb-2">Sauces</h2>
          {renderFieldArray(sauceFields, "sauces")}
        </div>
         {/* extraSauces */}
        <div>
          <h2 className="font-semibold mb-2">Sauces</h2>
          {renderFieldArray(extraSaucesFields, "extraSauces")}
        </div>

        {/* Extra Proteins */}
        <div>
          <h2 className="font-semibold mb-2">Extra Proteins</h2>
          {renderFieldArray(extraProteinFields, "extraProteins")}
        </div>

        {/* Extra Crispy */}
        <div>
          <h2 className="font-semibold mb-2">Extra Crispy</h2>
          {renderFieldArray(extraCrispyFields, "extraCrispy")}
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Save to Server
        </button>
      </form>
    </div>
  );
}
