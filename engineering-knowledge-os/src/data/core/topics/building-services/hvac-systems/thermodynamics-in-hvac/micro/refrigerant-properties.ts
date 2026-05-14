export const refrigerantProperties = {
  id: "refrigerant-properties",
  title: "Refrigerant Properties",
  flow: [
    "Refrigerant Selection",
    "Pressure Relation",
    "Boiling Point",
    "Heat Transfer",
    "Environmental Impact",
    "System Performance"
  ],
  table: {
    headers: ["Property", "Meaning", "HVAC Impact"],
    rows: [
      ["Boiling Point", "Evaporation temperature behavior", "Cooling capability"],
      ["Pressure Relation", "Operating condition", "Compressor requirement"],
      ["Latent Heat", "Cooling effect potential", "System efficiency"],
      ["GWP", "Global warming potential", "Environmental regulation"]
    ]
  },
  sections: [
    {
      title: "Refrigerant Selection",
      body: `
Refrigerant properties က refrigeration cycle performance ကိုတိုက်ရိုက်သက်ရောက်ပါတယ်။

Boiling point, pressure range, latent heat, thermal stability, safety, environmental impact တို့ကိုစဉ်းစားရပါတယ်။
`
    },
    {
      title: "Modern HVAC Direction",
      body: `
Low-GWP refrigerants, natural refrigerants, high-efficiency refrigerants တို့ကို modern HVAC systems တွေမှာပိုသုံးလာပါတယ်။
`
    }
  ]
};
