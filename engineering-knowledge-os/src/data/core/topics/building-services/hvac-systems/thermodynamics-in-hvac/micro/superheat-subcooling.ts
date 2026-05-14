export const superheatSubcooling = {
  id: "superheat-subcooling",
  title: "Superheat and Subcooling",
  flow: [
    "Evaporator Outlet",
    "Superheat",
    "Compressor Protection",
    "Condenser Outlet",
    "Subcooling",
    "Expansion Valve Stability"
  ],
  table: {
    headers: ["Term", "Meaning", "Why It Matters"],
    rows: [
      ["Superheat", "Vapor temperature above saturation", "Protects compressor from liquid"],
      ["Subcooling", "Liquid temperature below saturation", "Ensures solid liquid to expansion valve"],
      ["Low Superheat", "Risk of liquid floodback", "Compressor damage risk"],
      ["Low Subcooling", "Flash gas risk", "Poor cooling and unstable expansion"]
    ]
  },
  sections: [
    {
      title: "Superheat ဆိုတာဘာလဲ",
      body: `
Superheat ဆိုတာ refrigerant vapor ရဲ့ actual temperature က saturation temperature ထက်မြင့်နေတဲ့ amount ဖြစ်ပါတယ်။ Evaporator outlet မှာ refrigerant သည် liquid မကျန်ဘဲ vapor အပြည့်ဖြစ်နေကြောင်းသေချာစေဖို့ superheat ကိုစောင့်ကြည့်ပါတယ်။

Superheat အရမ်းနည်းရင် liquid refrigerant compressor ထဲဝင်နိုင်ပြီး compressor damage ဖြစ်နိုင်ပါတယ်။ Superheat အရမ်းမြင့်ရင် evaporator ကိုအပြည့်အသုံးမချနိုင်ဘဲ cooling capacity ကျနိုင်ပါတယ်။
`
    },
    {
      title: "Subcooling ဆိုတာဘာလဲ",
      body: `
Subcooling ဆိုတာ condenser outlet liquid refrigerant ရဲ့ actual temperature က saturation temperature ထက်နိမ့်နေတဲ့ amount ဖြစ်ပါတယ်။ Expansion valve ထဲသို့ liquid refrigerant အပြည့်ဝင်ဖို့အတွက် subcooling လိုပါတယ်။

Subcooling မလုံလောက်ရင် flash gas ဖြစ်နိုင်ပြီး expansion valve performance မတည်ငြိမ်နိုင်ပါ။ Cooling capacity လျော့ပြီး system hunting ဖြစ်နိုင်ပါတယ်။
`
    },
    {
      title: "Professional Use",
      body: `
Superheat and subcooling သည် technician level troubleshooting မှာအလွန်အသုံးဝင်ပါတယ်။ Refrigerant charge problem, expansion valve issue, evaporator airflow/waterflow issue, condenser performance issue တို့ကို superheat/subcooling data နဲ့ခွဲနိုင်ပါတယ်။
`
    }
  ]
};
