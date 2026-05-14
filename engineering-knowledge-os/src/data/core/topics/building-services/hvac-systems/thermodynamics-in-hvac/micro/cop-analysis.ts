export const copAnalysis = {
  id: "cop-analysis",
  title: "COP Analysis",
  flow: [
    "Cooling Output",
    "Power Input",
    "COP Calculation",
    "Efficiency Diagnosis",
    "Optimization Recommendation"
  ],
  table: {
    headers: ["Metric", "Formula", "Meaning"],
    rows: [
      ["COP", "Cooling Output / Power Input", "Higher is better"],
      ["kW/RT", "Power / Refrigeration Ton", "Lower is better"],
      ["Delta-T", "CHWR - CHWS", "Heat transfer indicator"],
      ["Plant Efficiency", "Total cooling / total plant power", "Includes pumps and towers"]
    ]
  },
  sections: [
    {
      title: "COP Meaning",
      body: `
COP ဆိုတာ Coefficient of Performance ဖြစ်ပြီး chiller efficiency ကိုဖော်ပြပါတယ်။ COP = Cooling Output / Electrical Input ဖြစ်ပါတယ်။ COP မြင့်လေလေ chiller ကောင်းလေလေဖြစ်ပါတယ်။

ဥပမာ cooling output 350 kW နဲ့ input power 100 kW ဆိုရင် COP = 3.5 ဖြစ်ပါတယ်။
`
    },
    {
      title: "Professional Interpretation",
      body: `
COP တစ်ခုတည်းကို isolated number အနေနဲ့မကြည့်ရပါ။ Load condition, condenser water temperature, chilled water setpoint, compressor loading, fouling, pump energy, cooling tower condition တို့နဲ့တွဲကြည့်ရပါတယ်။

Real plant optimization မှာ chiller COP, plant COP, kW/RT, delta-T, approach temperature တို့ကိုအတူတူ analyze လုပ်ရပါတယ်။
`
    },
    {
      title: "Software Project Connection",
      body: `
COP analysis ကို software project အဖြစ်တည်ဆောက်ရင် CHWS, CHWR, flow rate, power input, condenser water temperature, equipment status တို့ကို input အနေနဲ့ယူနိုင်ပါတယ်။ Output အနေနဲ့ COP trend, low efficiency warning, abnormal behavior, optimization suggestion တို့ကိုပြနိုင်ပါတယ်။
`
    }
  ]
};
