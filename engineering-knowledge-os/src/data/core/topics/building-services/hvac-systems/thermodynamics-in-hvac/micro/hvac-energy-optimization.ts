export const hvacEnergyOptimization = {
  id: "hvac-energy-optimization",
  title: "HVAC Energy Optimization",
  flow: [
    "Sensor Data",
    "Performance Analysis",
    "Energy Waste Detection",
    "Optimization Logic",
    "Control Adjustment",
    "Energy Saving"
  ],
  table: {
    headers: ["Optimization Area", "Meaning", "Benefit"],
    rows: [
      ["Delta-T Improvement", "Increase heat transfer effectiveness", "Lower pumping energy"],
      ["Condenser Water Reset", "Reduce compressor lift", "Higher COP"],
      ["Variable Speed Control", "Match load demand", "Reduced energy use"],
      ["Fault Correction", "Remove inefficiencies", "Stable operation"]
    ]
  },
  sections: [
    {
      title: "Energy Optimization Meaning",
      body: `
HVAC plant optimization ဆိုတာ comfort maintain လုပ်ထားပြီး energy consumption ကိုအနည်းဆုံးဖြစ်အောင်လုပ်ခြင်းဖြစ်ပါတယ်။

Thermodynamic analysis သည် optimization ရဲ့အဓိက foundation ဖြစ်ပါတယ်။
`
    },
    {
      title: "Professional Strategy",
      body: `
Chiller sequencing, condenser water reset, chilled water reset, variable speed control, cooling tower optimization, demand-based ventilation တို့ကိုအသုံးပြုပြီး plant efficiency တိုးနိုင်ပါတယ်။
`
    },
    {
      title: "Software Project Use",
      body: `
HVAC optimization dashboard မှာ COP trend, kW/RT, load profile, pump efficiency, cooling tower approach တို့ကို live analyze လုပ်ပြီး recommendation engine တည်ဆောက်နိုင်ပါတယ်။
`
    }
  ]
};
