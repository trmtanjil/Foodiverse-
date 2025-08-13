import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

export default function AdminAddFood() {
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
      proteins: [
        { name: "Salmon", price: 0 },
        { name: "Smoked salmon", price:0 },
        { name: "Flambéed Salmon", price: 0},
        { name: "Fresh tuna", price: 0},
        { name: "Tuna in oil", price: 0 },
        { name: "Cooked shrimp", price: 0 },
      ],
      condiments: [
        { name: "Avocado", price: 0 },
        { name: "Goma Wakame", price: 0 },
        { name: "Philadelphia", price: 0 },
      ],
      sauces: [
        { name: "Guacamole Sauce", price: 0 },
        { name: "Teriyaki Mayonnaise", price: 0 },
      ],
      extraProteins: [
        { name: "Salmon", price: 3 },
        { name: "Smoked salmon", price: 0},
      ],
      extraCrispy: [
        { name: "Goji berries", price: 0 },
        { name: "Walnut (grain)", price: 0 },
         { name: "Goji berries", price: 0 },
        { name: "Walnut (grain)", price: 0 },
         { name: "Goji berries", price: 0 },
        { name: "Walnut (grain)", price: 0 },
         { name: "Goji berries", price: 0 },
        { name: "Walnut (grain)", price: 0 },
         { name: "Goji berries", price: 0 },
        { name: "Walnut (grain)", price: 0 },
         { name: "Goji berries", price: 0 },
        { name: "Walnut (grain)", price: 0 },
      ],
    },
  });

  const { fields: baseFields } = useFieldArray({ control, name: "base" });
  const { fields: proteinFields } = useFieldArray({ control, name: "proteins" });
  const { fields: condimentFields } = useFieldArray({ control, name: "condiments" });
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
          <h2 className="font-semibold mb-2">Proteins</h2>
          {renderFieldArray(proteinFields, "proteins")}
        </div>

        {/* Condiments */}
        <div>
          <h2 className="font-semibold mb-2">Condiments</h2>
          {renderFieldArray(condimentFields, "condiments")}
        </div>

        {/* Sauces */}
        <div>
          <h2 className="font-semibold mb-2">Sauces</h2>
          {renderFieldArray(sauceFields, "sauces")}
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
