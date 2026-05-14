export const compressorWork = {
  id: "compressor-work",
  title: "Compressor Work",
  flow: [
    "Low Pressure Vapor",
    "Compression",
    "Pressure Increase",
    "Temperature Increase",
    "Electrical Work",
    "High Pressure Vapor"
  ],
  table: {
    headers: ["Concept", "Meaning", "HVAC Impact"],
    rows: [
      ["Compression", "Pressure increase process", "Enables heat rejection"],
      ["Electrical Work", "Energy input to compressor", "Main power consumption"],
      ["Pressure Lift", "Difference between suction and discharge", "Affects efficiency"],
      ["Compressor Efficiency", "Conversion effectiveness", "Affects COP"]
    ]
  },
  sections: [
    {
      title: "Compressor Role",
      body: `
Compressor သည် refrigeration cycle ရဲ့ driving component ဖြစ်ပါတယ်။ Low pressure refrigerant vapor ကို high pressure high temperature vapor ဖြစ်အောင် compress လုပ်ပါတယ်။

ဒီ compression process ကြောင့် refrigerant temperature မြင့်လာပြီး condenser side မှာ heat reject လုပ်နိုင်ပါတယ်။
`
    },
    {
      title: "Thermodynamic Meaning",
      body: `
Compressor က external work input သုံးပြီး heat ကို low temperature side မှ high temperature side သို့ရွှေ့နိုင်အောင်လုပ်ပေးပါတယ်။

HVAC system ရဲ့ electrical energy consumption အများဆုံးက compressor ဖြစ်တတ်ပါတယ်။
`
    },
    {
      title: "Efficiency Relation",
      body: `
High condenser pressure, low evaporator pressure, poor cooling tower performance, fouling, excessive lift တို့ကြောင့် compressor work တိုးနိုင်ပါတယ်။

Compressor work တိုးရင် COP ကျနိုင်ပါတယ်။
`
    },
    {
      title: "Advanced Analytics",
      body: `
Variable speed compressor systems မှာ load condition နဲ့ compressor speed relation ကို analyze လုပ်နိုင်ပါတယ်။ Power trend, lift condition, part-load efficiency တို့ကို software dashboard မှာပြနိုင်ပါတယ်။
`
    }
  ]
};
