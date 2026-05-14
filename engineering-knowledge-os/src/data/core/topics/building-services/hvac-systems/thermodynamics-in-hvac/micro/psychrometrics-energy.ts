export const psychrometricsEnergy = {
  id: "psychrometrics-energy",
  title: "Psychrometrics Energy",
  flow: [
    "Moist Air",
    "Cooling Coil",
    "Sensible Cooling",
    "Latent Cooling",
    "Dehumidification",
    "Comfort Air"
  ],
  table: {
    headers: ["Term", "Meaning", "HVAC Use"],
    rows: [
      ["Dry Bulb", "Normal air temperature", "Comfort control"],
      ["Wet Bulb", "Evaporative cooling indicator", "Cooling tower performance"],
      ["Dew Point", "Condensation temperature", "Moisture control"],
      ["Enthalpy", "Total heat content", "Cooling load calculation"]
    ]
  },
  sections: [
    {
      title: "Moist Air Energy",
      body: `
HVAC မှာ air သည် dry air တစ်ခုတည်းမဟုတ်ပါ။ Water vapor ပါဝင်တဲ့ moist air ဖြစ်ပါတယ်။ ဒါကြောင့် air conditioning မှာ temperature လျှော့ရုံမဟုတ်ဘဲ moisture removal ကိုပါစဉ်းစားရပါတယ်။
`
    },
    {
      title: "Sensible and Latent Energy",
      body: `
Sensible energy က temperature ပြောင်းစေတဲ့ energy ဖြစ်ပြီး latent energy က moisture / phase change နဲ့ဆိုင်တဲ့ energy ဖြစ်ပါတယ်။ Cooling coil သည် sensible cooling နဲ့ latent cooling နှစ်ခုစလုံးလုပ်နိုင်ပါတယ်။
`
    },
    {
      title: "HVAC Comfort Relation",
      body: `
Room temperature အေးနေပေမယ့် humidity မြင့်နေရင် လူတွေ uncomfortable ဖြစ်နိုင်ပါတယ်။ ဒါကြောင့် psychrometric thermodynamics ကို comfort, IAQ, dehumidification, ventilation load, coil sizing တို့နဲ့ချိတ်ပြီးနားလည်ရပါတယ်။
`
    }
  ]
};
