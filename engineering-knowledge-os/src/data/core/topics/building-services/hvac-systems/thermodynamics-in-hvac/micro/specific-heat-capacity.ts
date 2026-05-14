export const specificHeatCapacity = {
  id: "specific-heat-capacity",
  title: "Specific Heat Capacity",
  flow: [
    "Material",
    "Heat Addition",
    "Temperature Response",
    "Specific Heat",
    "Thermal Storage",
    "HVAC Energy Analysis"
  ],
  table: {
    headers: ["Material", "Specific Heat Meaning", "HVAC Use"],
    rows: [
      ["Water", "Stores large heat energy", "Chilled water system"],
      ["Air", "Lower heat storage than water", "Airside cooling calculation"],
      ["Concrete", "Thermal mass effect", "Building thermal behavior"],
      ["Refrigerant", "Energy transfer medium", "Refrigeration cycle"]
    ]
  },
  sections: [
    {
      title: "Specific Heat Capacity ဆိုတာဘာလဲ",
      body: `
Specific heat capacity ဆိုတာ material တစ်ခုရဲ့ temperature ကို 1°C တိုးစေဖို့လိုတဲ့ heat energy amount ဖြစ်ပါတယ်။ Material တစ်ခုစီမှာ specific heat မတူပါ။ Water က specific heat မြင့်တဲ့အတွက် heat energy များများသိုလှောင်နိုင်ပါတယ်။

HVAC system မှာ chilled water ကို energy transport medium အနေနဲ့သုံးတာက specific heat မြင့်တဲ့အတွက်ဖြစ်ပါတယ်။ Air နဲ့နှိုင်းယှဉ်ရင် water သည် energy transfer efficiency ပိုကောင်းပါတယ်။
`
    },
    {
      title: "HVAC Engineering Meaning",
      body: `
Cooling load calculation မှာ Q = m × Cp × ΔT relation ကိုသုံးပါတယ်။ ဒီမှာ Cp က specific heat capacity ဖြစ်ပါတယ်။ Water side cooling calculation မှာ chilled water flow rate, delta-T, Cp တို့ကိုသုံးပြီး cooling capacity တွက်နိုင်ပါတယ်။

Airside calculation မှာလည်း airflow, air density, specific heat, temperature difference တို့ကိုသုံးပြီး sensible cooling load တွက်နိုင်ပါတယ်။
`
    },
    {
      title: "Thermal Mass Thinking",
      body: `
Concrete building, wall, floor slab, furniture, equipment တွေမှာ thermal mass effect ရှိပါတယ်။ Specific heat မြင့်တဲ့ material တွေက daytime heat ကို absorb လုပ်ပြီး nighttime မှာ release လုပ်နိုင်ပါတယ်။

ဒါကြောင့် building thermal response က instant မဟုတ်ဘဲ delayed behavior ဖြစ်နိုင်ပါတယ်။ ဒီ concept ကို building energy simulation, thermal storage analysis, passive cooling design တို့မှာအသုံးပြုပါတယ်။
`
    },
    {
      title: "Software Project Use",
      body: `
Building thermal simulation software တည်ဆောက်တဲ့အခါ specific heat property ကို material database ထဲမှာသိမ်းထားနိုင်ပါတယ်။ Wall, concrete, air, water, insulation material တို့ရဲ့ thermal response ကို dynamic simulation လုပ်နိုင်ပါတယ်။

ဒီ concept က Digital Twin HVAC, Building Energy Model, Thermal Storage Optimization project တွေရဲ့ foundation ဖြစ်ပါတယ်။
`
    }
  ]
};
