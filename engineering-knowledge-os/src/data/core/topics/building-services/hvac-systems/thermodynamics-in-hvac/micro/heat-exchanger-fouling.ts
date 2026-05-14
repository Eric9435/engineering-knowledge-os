export const heatExchangerFouling = {
  id: "heat-exchanger-fouling",
  title: "Heat Exchanger Fouling",
  flow: [
    "Dirty Surface",
    "Thermal Resistance Increase",
    "Poor Heat Transfer",
    "Higher Pressure",
    "Lower Efficiency",
    "Energy Waste"
  ],
  table: {
    headers: ["Issue", "Meaning", "HVAC Effect"],
    rows: [
      ["Scaling", "Mineral deposit buildup", "Reduced heat transfer"],
      ["Fouling", "Surface contamination", "Higher approach temperature"],
      ["Pressure Drop", "Flow resistance increase", "Pump/compressor penalty"],
      ["Efficiency Loss", "Reduced performance", "Higher energy use"]
    ]
  },
  sections: [
    {
      title: "Fouling Meaning",
      body: `
Heat exchanger surface ပေါ်မှာ dirt, scale, corrosion, biological growth တို့တက်လာတဲ့အခြေအနေကို fouling လို့ခေါ်ပါတယ်။

Fouling ကြောင့် thermal resistance တိုးပြီး heat transfer performance ကျနိုင်ပါတယ်။
`
    },
    {
      title: "HVAC Impact",
      body: `
Dirty condenser tube, fouled evaporator coil, blocked cooling tower fill တို့ကြောင့် COP ကျနိုင်ပါတယ်။

Approach temperature တက်လာပြီး compressor work တိုးနိုင်ပါတယ်။
`
    },
    {
      title: "Predictive Maintenance",
      body: `
Approach temperature trend, pressure drop trend, energy consumption trend တို့ကို analyze လုပ်ပြီး fouling detection system တည်ဆောက်နိုင်ပါတယ်။
`
    }
  ]
};
