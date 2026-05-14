export const pressureTemperature = {
  id: "pressure-temperature",
  title: "Pressure-Temperature Relation",
  flow: [
    "Pressure",
    "Saturation Temperature",
    "Evaporation",
    "Compression",
    "Condensation",
    "Cycle Control"
  ],
  table: {
    headers: ["Variable", "Meaning", "HVAC Example"],
    rows: [
      ["Low Pressure", "Lower boiling temperature", "Evaporator side"],
      ["High Pressure", "Higher condensing temperature", "Condenser side"],
      ["Saturation Temperature", "Phase change temperature", "Refrigerant boiling/condensing"],
      ["Pressure Lift", "Compressor pressure difference", "Affects power and COP"]
    ]
  },
  sections: [
    {
      title: "Pressure-Temperature Relation ဆိုတာဘာလဲ",
      body: `
Refrigerant တစ်ခုရဲ့ boiling temperature ဟာ pressure အပေါ်မူတည်ပါတယ်။ Pressure နိမ့်ရင် refrigerant သည် low temperature မှာ evaporate ဖြစ်နိုင်ပါတယ်။ Pressure မြင့်ရင် refrigerant သည် high temperature မှာ condense ဖြစ်နိုင်ပါတယ်။ HVAC refrigeration cycle ရဲ့အဓိက logic က ဒီ pressure-temperature relation ပဲဖြစ်ပါတယ်။
`
    },
    {
      title: "Evaporator and Condenser",
      body: `
Evaporator side မှာ pressure ကိုနိမ့်ထားတာကြောင့် refrigerant က chilled water ထက်နိမ့်တဲ့ temperature မှာ evaporate ဖြစ်ပြီး heat absorb လုပ်နိုင်ပါတယ်။ Condenser side မှာ compressor ကြောင့် pressure မြင့်လာပြီး refrigerant က condenser water ထက်မြင့်တဲ့ temperature မှာ condense ဖြစ်ပြီး heat reject လုပ်နိုင်ပါတယ်။
`
    },
    {
      title: "Failure Diagnosis",
      body: `
Low suction pressure, high discharge pressure, abnormal superheat, abnormal subcooling တို့ဟာ pressure-temperature relation နဲ့ဆက်စပ်ပါတယ်။ Condenser fouling, poor cooling tower performance, low refrigerant charge, expansion valve issue, evaporator low flow တို့ကို pressure-temperature data နဲ့ diagnose လုပ်နိုင်ပါတယ်။
`
    }
  ]
};
