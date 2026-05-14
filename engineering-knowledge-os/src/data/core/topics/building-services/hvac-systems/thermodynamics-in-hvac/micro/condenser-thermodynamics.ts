export const condenserThermodynamics = {
  id: "condenser-thermodynamics",
  title: "Condenser Thermodynamics",
  flow: [
    "Hot Refrigerant Vapor",
    "Condenser",
    "Heat Rejection",
    "Condenser Water",
    "Cooling Tower",
    "Atmosphere"
  ],
  table: {
    headers: ["Concept", "Meaning", "HVAC Use"],
    rows: [
      ["Condenser", "Heat rejection heat exchanger", "Rejects building heat"],
      ["Condensation", "Vapor becomes liquid", "Releases latent heat"],
      ["High Pressure", "High saturation temperature", "Allows heat rejection"],
      ["Condenser Water", "Heat transport medium", "Carries heat to cooling tower"]
    ]
  },
  sections: [
    {
      title: "Condenser ဆိုတာဘာလဲ",
      body: `
Condenser သည် refrigeration cycle ရဲ့ heat rejection side ဖြစ်ပါတယ်။ Compressor မှလာတဲ့ high temperature refrigerant vapor က condenser water သို့ heat reject လုပ်ပြီး liquid refrigerant ပြန်ဖြစ်လာပါတယ်။
`
    },
    {
      title: "Thermodynamic Logic",
      body: `
Refrigerant သည် condenser side မှာ high pressure ဖြစ်နေသောကြောင့် saturation temperature မြင့်ပါတယ်။ ဒါကြောင့် condenser water ထက်ပူနေပြီး heat transfer ဖြစ်နိုင်ပါတယ်။

Heat rejection process မှာ refrigerant latent heat release လုပ်ပါတယ်။
`
    },
    {
      title: "Performance Issues",
      body: `
Dirty condenser tube, scaling, low condenser water flow, poor cooling tower performance, high outdoor wet bulb တို့ကြောင့် condenser pressure တက်နိုင်ပါတယ်။

Condenser pressure တက်ရင် compressor work တိုးပြီး COP ကျနိုင်ပါတယ်။
`
    },
    {
      title: "Analytics and Optimization",
      body: `
Condenser thermodynamics ကို analyze လုပ်ဖို့ condenser water supply/return temperature, refrigerant condensing pressure, cooling tower approach, outdoor wet bulb data တို့ကိုသုံးနိုင်ပါတယ်။
`
    }
  ]
};
