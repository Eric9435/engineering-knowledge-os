export const approachTemperature = {
  id: "approach-temperature",
  title: "Approach Temperature",
  flow: [
    "Heat Exchanger",
    "Fluid Temperatures",
    "Approach Difference",
    "Heat Transfer Quality",
    "Efficiency Analysis",
    "Performance Diagnosis"
  ],
  table: {
    headers: ["Approach Type", "Meaning", "HVAC Example"],
    rows: [
      ["Evaporator Approach", "CHWS vs refrigerant evaporation temp", "Evaporator efficiency"],
      ["Condenser Approach", "Condenser water vs condensing temp", "Condenser performance"],
      ["Cooling Tower Approach", "CWS vs wet bulb", "Tower effectiveness"],
      ["High Approach", "Poor heat transfer", "Dirty heat exchanger"]
    ]
  },
  sections: [
    {
      title: "Approach Temperature ဆိုတာဘာလဲ",
      body: `
Approach temperature ဆိုတာ heat exchanger နှစ်ဖက်ကြား temperature difference ဖြစ်ပါတယ်။ Heat transfer quality ကိုဖော်ပြတဲ့ indicator တစ်ခုဖြစ်ပါတယ်။

Approach နည်းလေလေ heat transfer ကောင်းလေလေဖြစ်နိုင်ပါတယ်။ Approach ကြီးလာရင် fouling, scaling, low flow, air issue, dirty surface စတဲ့ပြဿနာတွေရှိနိုင်ပါတယ်။
`
    },
    {
      title: "Cooling Tower Approach",
      body: `
Cooling tower approach = leaving condenser water temperature - outdoor wet bulb temperature ဖြစ်ပါတယ်။

ဥပမာ wet bulb = 27°C  
Cooling tower leaving water = 31°C  
ဆိုရင် approach = 4°C ဖြစ်ပါတယ်။

Approach ကြီးလာရင် tower performance မကောင်းနိုင်ပါ။
`
    },
    {
      title: "Chiller Heat Exchanger View",
      body: `
Evaporator approach ကြီးလာရင် chilled water နဲ့ refrigerant ကြား heat transfer မကောင်းနိုင်ပါ။ Condenser approach ကြီးလာရင် condenser fouling, scaling, low water flow, poor cooling tower performance ဖြစ်နိုင်ပါတယ်။

Approach analysis က predictive maintenance အတွက်အလွန်အသုံးဝင်ပါတယ်။
`
    },
    {
      title: "Digital HVAC Analytics",
      body: `
Advanced HVAC analytics software မှာ approach temperature trending ကိုသုံးပြီး fouling detection, cleaning recommendation, predictive maintenance alert တို့လုပ်နိုင်ပါတယ်။

ဒီ concept က smart building, industrial automation, digital twin HVAC system တွေအတွက်အရေးကြီးပါတယ်။
`
    }
  ]
};
