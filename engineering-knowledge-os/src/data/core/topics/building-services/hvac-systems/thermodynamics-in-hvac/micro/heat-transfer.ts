export const heatTransfer = {
  id: "heat-transfer",
  title: "Heat Transfer in HVAC",
  flow: [
    "Heat Source",
    "Conduction",
    "Convection",
    "Cooling Coil",
    "Chilled Water",
    "Refrigerant",
    "Heat Rejection"
  ],
  table: {
    headers: ["Mode", "Meaning", "HVAC Example"],
    rows: [
      ["Conduction", "Heat transfer through solid material", "Wall, pipe, coil tube"],
      ["Convection", "Heat transfer between surface and fluid", "Air passing over cooling coil"],
      ["Radiation", "Heat transfer by electromagnetic waves", "Solar heat through glass"],
      ["Overall Heat Transfer", "Combined heat movement", "Cooling coil performance"]
    ]
  },
  sections: [
    {
      title: "Heat Transfer ဆိုတာဘာလဲ",
      body: `
Heat transfer ဆိုတာ heat energy တစ်နေရာမှတစ်နေရာသို့ရွှေ့သွားတဲ့ process ဖြစ်ပါတယ်။ HVAC system တစ်ခုလုံးဟာ heat transfer chain တစ်ခုဖြစ်ပါတယ်။ Room air ထဲက heat က cooling coil သို့ရွှေ့တယ်။ Cooling coil မှ chilled water သို့ရွှေ့တယ်။ Chilled water မှ refrigerant သို့ရွှေ့တယ်။ Refrigerant မှ condenser water သို့ရွှေ့တယ်။ နောက်ဆုံး cooling tower က atmosphere ထဲသို့ heat reject လုပ်ပါတယ်။

HVAC engineer တစ်ယောက်အတွက် heat transfer ကိုနားလည်ခြင်းက coil sizing, chiller performance, duct insulation, pipe insulation, cooling tower efficiency, building envelope load, fouling problem တို့ကိုနားလည်ဖို့အရေးကြီးပါတယ်။
`
    },
    {
      title: "Conduction, Convection, Radiation",
      body: `
Conduction ဆိုတာ solid material ထဲက heat transfer ဖြစ်ပါတယ်။ ဥပမာ wall, pipe, insulation, coil tube တွေထဲမှာဖြစ်ပါတယ်။

Convection ဆိုတာ fluid နဲ့ surface ကြား heat transfer ဖြစ်ပါတယ်။ HVAC မှာ air က cooling coil ကိုဖြတ်သန်းတဲ့အခါ convection ဖြစ်ပါတယ်။ Water က heat exchanger tube ကိုဖြတ်သန်းတဲ့အခါလည်း convection ဖြစ်ပါတယ်။

Radiation ဆိုတာ electromagnetic wave နဲ့ heat transfer ဖြစ်ပါတယ်။ Solar radiation က window ကနေ room ထဲဝင်လာပြီး cooling load တိုးစေနိုင်ပါတယ်။
`
    },
    {
      title: "Professional HVAC Use",
      body: `
Cooling coil performance မကောင်းရင် air side heat transfer မကောင်းနိုင်သလို water side fouling ကြောင့်လည်း heat transfer ကျနိုင်ပါတယ်။ Coil dirty ဖြစ်ရင် airflow နည်းပြီး heat transfer လျော့မယ်။ Water flow နည်းရင် chilled water side heat transfer လျော့မယ်။ Fouling ဖြစ်ရင် thermal resistance တိုးပြီး COP ကျနိုင်ပါတယ်။

Software project အနေနဲ့ heat transfer performance ကို sensor data နဲ့ analyze လုပ်နိုင်ပါတယ်။ Supply air temperature, return air temperature, chilled water supply/return, airflow, water flow တို့ကိုယူပြီး coil performance estimation လုပ်နိုင်ပါတယ်။
`
    }
  ]
};
