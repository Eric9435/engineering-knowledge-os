export const stateVariables = {
  id: "state-variables",
  title: "State Variables",
  flow: [
    "System State",
    "Pressure",
    "Temperature",
    "Volume",
    "Enthalpy",
    "Thermodynamic Analysis"
  ],
  table: {
    headers: ["Variable", "Meaning", "HVAC Example"],
    rows: [
      ["Pressure", "Force per area", "Refrigerant pressure"],
      ["Temperature", "Thermal condition", "Chilled water temperature"],
      ["Volume", "Occupied space", "Refrigerant vapor volume"],
      ["Enthalpy", "Total heat content", "Cooling effect analysis"]
    ]
  },
  sections: [
    {
      title: "State Variables ဆိုတာဘာလဲ",
      body: `
Thermodynamic system တစ်ခုရဲ့ condition ကိုဖော်ပြတဲ့ properties တွေကို state variables လို့ခေါ်ပါတယ်။ HVAC မှာ pressure, temperature, enthalpy, density, humidity, flow rate တို့ကိုအသုံးများပါတယ်။

System condition ပြောင်းလဲသွားရင် state variables တွေလည်းပြောင်းပါတယ်။
`
    },
    {
      title: "HVAC Engineering Meaning",
      body: `
Refrigeration cycle analysis မှာ evaporator pressure, condenser pressure, suction temperature, discharge temperature, enthalpy difference တို့ကိုအတူတူ analyze လုပ်ရပါတယ်။

State variables များကို sensor data အဖြစ်ယူပြီး chiller health analysis, energy optimization, fault detection တို့လုပ်နိုင်ပါတယ်။
`
    }
  ]
};
