export const pressureEnthalpyDiagram = {
  id: "pressure-enthalpy-diagram",
  title: "Pressure-Enthalpy Diagram",
  flow: [
    "Evaporation",
    "Compression",
    "Condensation",
    "Expansion",
    "Cycle Analysis",
    "Performance Diagnosis"
  ],
  table: {
    headers: ["Region", "Meaning", "Cycle Stage"],
    rows: [
      ["Evaporator Region", "Heat absorption", "Cooling effect"],
      ["Compression Region", "Work input", "Pressure increase"],
      ["Condenser Region", "Heat rejection", "Condensation"],
      ["Expansion Region", "Pressure drop", "Cycle reset"]
    ]
  },
  sections: [
    {
      title: "P-h Diagram ဆိုတာဘာလဲ",
      body: `
Pressure-Enthalpy diagram (P-h diagram) သည် refrigeration cycle ကို thermodynamic view နဲ့ analyze လုပ်ဖို့အသုံးပြုတဲ့ engineering diagram ဖြစ်ပါတယ်။

Pressure နဲ့ enthalpy relation ကိုသုံးပြီး refrigeration cycle stages တွေကိုမြင်နိုင်ပါတယ်။
`
    },
    {
      title: "Engineering Use",
      body: `
P-h diagram မှာ evaporator heat absorption, compressor work, condenser heat rejection, expansion process တို့ကို visualize လုပ်နိုင်ပါတယ်။

Refrigerant properties analysis, performance calculation, fault diagnosis, COP estimation တို့မှာအသုံးပြုပါတယ်။
`
    },
    {
      title: "Professional Analysis",
      body: `
Superheat, subcooling, compression ratio, enthalpy difference, refrigeration effect တို့ကို P-h diagram နဲ့ analyze လုပ်နိုင်ပါတယ်။

Advanced HVAC engineers တွေ refrigeration cycle optimization လုပ်တဲ့အခါ P-h thinking သုံးကြပါတယ်။
`
    }
  ]
};
