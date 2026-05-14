export const evaporatorThermodynamics = {
  id: "evaporator-thermodynamics",
  title: "Evaporator Thermodynamics",
  flow: [
    "Warm Chilled Water",
    "Evaporator",
    "Refrigerant Evaporation",
    "Heat Absorption",
    "Chilled Water Cooling",
    "Cooling Effect"
  ],
  table: {
    headers: ["Concept", "Meaning", "HVAC Relation"],
    rows: [
      ["Evaporator", "Heat absorption heat exchanger", "Cooling production"],
      ["Evaporation", "Liquid refrigerant becomes vapor", "Absorbs heat"],
      ["Low Pressure", "Low boiling temperature", "Allows cooling effect"],
      ["Heat Transfer", "Water to refrigerant", "Cooling cycle foundation"]
    ]
  },
  sections: [
    {
      title: "Evaporator ဆိုတာဘာလဲ",
      body: `
Evaporator သည် refrigeration cycle ရဲ့ heat absorption side ဖြစ်ပါတယ်။ Chilled water ထဲက heat ကို refrigerant သို့ပြောင်းပေးတဲ့ heat exchanger ဖြစ်ပါတယ်။

Refrigerant ကို low pressure condition မှာထားထားသောကြောင့် refrigerant သည် low temperature မှာ evaporate ဖြစ်နိုင်ပါတယ်။ Evaporation process အတွင်း latent heat absorb လုပ်ပြီး chilled water ကိုအေးစေပါတယ်။
`
    },
    {
      title: "Thermodynamic Meaning",
      body: `
Evaporator မှာ heat transfer direction သည် chilled water → refrigerant ဖြစ်ပါတယ်။ Refrigerant က phase change ဖြစ်တဲ့အတွက် temperature ကြီးမပြောင်းဘဲ latent heat အများကြီး absorb လုပ်နိုင်ပါတယ်။

ဒီ concept က refrigeration system ကို air cooling ထက်ပို efficient ဖြစ်စေပါတယ်။
`
    },
    {
      title: "Failure Modes",
      body: `
Low evaporator flow, fouled tube, low refrigerant charge, poor heat transfer, sensor error တို့ကြောင့် evaporator performance ကျနိုင်ပါတယ်။

Symptoms အနေနဲ့ —
low cooling capacity,
high superheat,
low suction pressure,
poor delta-T,
chiller short cycling
တို့ဖြစ်နိုင်ပါတယ်။
`
    },
    {
      title: "Software Monitoring",
      body: `
Evaporator monitoring system တည်ဆောက်တဲ့အခါ chilled water supply/return temperature, refrigerant pressure, flow rate, compressor status တို့ကိုယူပြီး evaporator efficiency analysis လုပ်နိုင်ပါတယ်။
`
    }
  ]
};
