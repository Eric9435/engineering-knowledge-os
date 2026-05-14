export const coolingTowerThermodynamics = {
  id: "cooling-tower-thermodynamics",
  title: "Cooling Tower Thermodynamics",
  flow: [
    "Hot Condenser Water",
    "Cooling Tower Fill",
    "Air-Water Contact",
    "Evaporation",
    "Heat Rejection",
    "Cooled Water"
  ],
  table: {
    headers: ["Concept", "Meaning", "Cooling Tower Use"],
    rows: [
      ["Wet Bulb Temperature", "Evaporative cooling limit", "Best possible cooling reference"],
      ["Approach", "CWS - Wet bulb", "Tower performance indicator"],
      ["Range", "CWR - CWS", "Heat rejected by tower"],
      ["Evaporation", "Water phase change", "Major heat rejection mechanism"]
    ]
  },
  sections: [
    {
      title: "Cooling Tower Thermodynamics",
      body: `
Cooling tower က condenser water ထဲက heat ကို atmosphere ထဲ reject လုပ်တဲ့ equipment ဖြစ်ပါတယ်။ Cooling tower ရဲ့အဓိက physics က evaporative cooling ဖြစ်ပါတယ်။ Water အနည်းငယ် evaporate ဖြစ်တဲ့အခါ latent heat ကိုယူသွားပြီး remaining water ကိုအေးစေပါတယ်။
`
    },
    {
      title: "Wet Bulb Temperature",
      body: `
Cooling tower performance ကို dry bulb temperature ထက် wet bulb temperature နဲ့ပိုဆက်စပ်ကြည့်ရပါတယ်။ Wet bulb temperature က evaporative cooling ရဲ့ theoretical lower limit ဖြစ်ပါတယ်။ Outdoor wet bulb မြင့်နေတဲ့နေ့တွေမှာ cooling tower performance ကျနိုင်ပြီး condenser water temperature မြင့်နိုင်ပါတယ်။
`
    },
    {
      title: "Chiller COP Relation",
      body: `
Condenser water temperature မြင့်ရင် chiller compressor lift တိုးပြီး power consumption တိုးနိုင်ပါတယ်။ ဒါကြောင့် cooling tower scaling, dirty fill, fan issue, poor airflow, water distribution problem တို့က chiller COP ကိုတိုက်ရိုက်ကျစေနိုင်ပါတယ်။
`
    }
  ]
};
