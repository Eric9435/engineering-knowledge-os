export const expansionValveThermodynamics = {
  id: "expansion-valve-thermodynamics",
  title: "Expansion Valve Thermodynamics",
  flow: [
    "High Pressure Liquid",
    "Expansion Valve",
    "Pressure Drop",
    "Temperature Drop",
    "Low Pressure Mixture",
    "Evaporator"
  ],
  table: {
    headers: ["Concept", "Meaning", "HVAC Function"],
    rows: [
      ["Expansion Valve", "Pressure reducing device", "Controls refrigerant flow"],
      ["Pressure Drop", "Sudden reduction", "Creates low temperature condition"],
      ["Flash Gas", "Partial vapor formation", "Occurs after expansion"],
      ["Flow Control", "Maintains evaporator performance", "Controls superheat"]
    ]
  },
  sections: [
    {
      title: "Expansion Valve Role",
      body: `
Expansion valve သည် condenser မှလာတဲ့ high pressure liquid refrigerant ကို low pressure low temperature condition ဖြစ်အောင်လုပ်ပေးတဲ့ device ဖြစ်ပါတယ်။

ဒီ process ကြောင့် refrigerant သည် evaporator ထဲမှာ low temperature မှာ evaporate ဖြစ်နိုင်ပါတယ်။
`
    },
    {
      title: "Thermodynamic Logic",
      body: `
Expansion process မှာ pressure sudden drop ဖြစ်ပါတယ်။ Pressure ကျသွားတဲ့အတွက် saturation temperature လည်းကျသွားပါတယ်။

ဒီ process အပြီး refrigerant သည် low pressure liquid-vapor mixture ဖြစ်လာပါတယ်။
`
    },
    {
      title: "Superheat Control",
      body: `
TXV (Thermostatic Expansion Valve) systems မှာ expansion valve က evaporator outlet superheat ကို maintain လုပ်ဖို့ refrigerant flow ကို control လုပ်ပါတယ်။

Valve malfunction ဖြစ်ရင် low cooling, flooding, starving, unstable superheat ဖြစ်နိုင်ပါတယ်။
`
    },
    {
      title: "Smart HVAC Connection",
      body: `
Electronic expansion valve systems မှာ sensor feedback နဲ့ dynamic refrigerant flow control လုပ်နိုင်ပါတယ်။ Smart control logic နဲ့ efficiency optimization လုပ်နိုင်ပါတယ်။
`
    }
  ]
};
