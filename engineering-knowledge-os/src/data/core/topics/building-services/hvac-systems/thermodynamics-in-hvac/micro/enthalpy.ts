export const enthalpy = {
  id: "enthalpy",
  title: "Enthalpy in HVAC",
  flow: [
    "Air Temperature",
    "Moisture Content",
    "Total Heat Content",
    "Enthalpy",
    "Cooling Coil",
    "Energy Removal"
  ],
  table: {
    headers: ["Term", "Meaning", "HVAC Use"],
    rows: [
      ["Enthalpy", "Total heat content", "Cooling load and psychrometric analysis"],
      ["Dry Air Heat", "Sensible part", "Temperature-related load"],
      ["Water Vapor Heat", "Latent part", "Humidity-related load"],
      ["Enthalpy Difference", "Energy removed per kg of air", "Coil load calculation"]
    ]
  },
  sections: [
    {
      title: "Enthalpy ဆိုတာဘာလဲ",
      body: `
Enthalpy ဆိုတာ system တစ်ခုရဲ့ total heat content ကိုဖော်ပြတဲ့ thermodynamic property ဖြစ်ပါတယ်။ HVAC psychrometrics မှာ moist air enthalpy သည် dry air sensible heat နဲ့ water vapor latent heat နှစ်ခုစလုံးကိုပါထည့်စဉ်းစားတဲ့ value ဖြစ်ပါတယ်။

Air conditioning မှာ temperature တစ်ခုတည်းကြည့်တာမလုံလောက်ပါ။ Air ထဲမှာ moisture ပါဝင်သောကြောင့် total energy content ကိုသိရန် enthalpy ကိုအသုံးပြုပါတယ်။
`
    },
    {
      title: "Why Enthalpy Matters",
      body: `
Outdoor air 30°C နဲ့ indoor air 24°C ကို temperature အနေနဲ့ပဲကြည့်ရင် difference 6°C လို့ပဲမြင်ရနိုင်ပါတယ်။ ဒါပေမယ့် outdoor air humidity မြင့်နေရင် enthalpy difference ကကြီးနိုင်ပါတယ်။ အဲ့ဒီအခါ ventilation load ပိုကြီးလာပြီး cooling coil ကပိုများတဲ့ energy remove လုပ်ရပါတယ်။

ဒါကြောင့် fresh air handling, dehumidification, cooling coil capacity, energy recovery, economizer control တို့မှာ enthalpy concept အရေးကြီးပါတယ်။
`
    },
    {
      title: "Psychrometric Chart Connection",
      body: `
Psychrometric chart မှာ enthalpy line တွေကိုသုံးပြီး air process တွေကိုနားလည်နိုင်ပါတယ်။ Cooling and dehumidification process မှာ air enthalpy လျော့သွားပါတယ်။ Heating process မှာ enthalpy တိုးပါတယ်။ Humidification process မှာ latent energy ပါဝင်လာပါတယ်။

Engineer တစ်ယောက်အတွက် enthalpy ကိုနားလည်ခြင်းက moist air energy balance ကိုနားလည်ခြင်းဖြစ်ပါတယ်။
`
    },
    {
      title: "Software Project Use",
      body: `
Python project တစ်ခုမှာ dry bulb temperature, relative humidity တို့ကို input အဖြစ်ယူပြီး approximate enthalpy calculation လုပ်နိုင်ပါတယ်။ ထို့နောက် supply air enthalpy နဲ့ return air enthalpy difference ကိုသုံးပြီး cooling coil load ကို estimate လုပ်နိုင်ပါတယ်။

ဒီ feature ကို HVAC Energy Dashboard, AHU Performance Analyzer, Ventilation Load Calculator ထဲထည့်နိုင်ပါတယ်။
`
    }
  ]
};
