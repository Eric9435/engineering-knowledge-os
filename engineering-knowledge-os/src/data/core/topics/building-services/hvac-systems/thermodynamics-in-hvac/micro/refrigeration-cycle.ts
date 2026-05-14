export const refrigerationCycle = {
  id: "refrigeration-cycle",
  title: "Refrigeration Cycle",
  flow: [
    "Evaporator",
    "Compressor",
    "Condenser",
    "Expansion Valve",
    "Evaporator"
  ],
  table: {
    headers: ["Component", "Process", "Engineering Meaning"],
    rows: [
      ["Evaporator", "Heat absorption", "Chilled water gets colder"],
      ["Compressor", "Pressure increase", "Electrical energy input"],
      ["Condenser", "Heat rejection", "Condenser water gets hotter"],
      ["Expansion Valve", "Pressure reduction", "Cycle resets"]
    ]
  },
  sections: [
    {
      title: "Cycle Overview",
      body: `
Vapor compression refrigeration cycle သည် HVAC chiller system ရဲ့အဓိက cycle ဖြစ်ပါတယ်။ အဓိက components လေးခုရှိပါတယ် — evaporator, compressor, condenser, expansion valve။

ဒီ cycle ရဲ့ objective က low-temperature space မှ heat ကိုယူပြီး high-temperature environment သို့ reject လုပ်ခြင်းဖြစ်ပါတယ်။
`
    },
    {
      title: "Component Logic",
      body: `
Evaporator မှာ refrigerant က chilled water ထဲက heat ကို absorb လုပ်ပြီး evaporate ဖြစ်ပါတယ်။ Compressor မှာ refrigerant vapor ကို high pressure high temperature ဖြစ်အောင် compress လုပ်ပါတယ်။ Condenser မှာ heat ကို condenser water သို့ reject လုပ်ပြီး refrigerant liquid ဖြစ်လာပါတယ်။ Expansion valve မှာ pressure ကိုလျှော့ပြီး refrigerant ကို evaporator ထဲပြန်ဝင်စေပါတယ်။
`
    },
    {
      title: "Troubleshooting Relation",
      body: `
Refrigeration cycle ကိုနားလည်ရင် chiller fault တွေကို logical နဲ့စစ်နိုင်ပါတယ်။ Low suction pressure, high discharge pressure, insufficient cooling, refrigerant undercharge, fouled condenser, low evaporator flow စတာတွေကို cycle stage တစ်ခုချင်းစီနဲ့ဆက်စပ်ပြီး diagnose လုပ်နိုင်ပါတယ်။
`
    }
  ]
};
