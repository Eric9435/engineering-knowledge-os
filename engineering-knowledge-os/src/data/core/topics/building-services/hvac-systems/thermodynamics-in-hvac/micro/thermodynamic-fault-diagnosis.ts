export const thermodynamicFaultDiagnosis = {
  id: "thermodynamic-fault-diagnosis",
  title: "Thermodynamic Fault Diagnosis",
  flow: [
    "Sensor Data",
    "Abnormal Pattern",
    "Thermodynamic Analysis",
    "Root Cause",
    "Fault Detection",
    "Recommendation"
  ],
  table: {
    headers: ["Symptom", "Possible Cause", "Thermodynamic Meaning"],
    rows: [
      ["High Condenser Pressure", "Dirty condenser / poor tower", "High compressor lift"],
      ["Low Suction Pressure", "Low refrigerant / low flow", "Poor evaporator performance"],
      ["Low Delta-T", "Poor heat transfer", "Low cooling effectiveness"],
      ["High Superheat", "Starved evaporator", "Insufficient refrigerant feed"]
    ]
  },
  sections: [
    {
      title: "Fault Diagnosis Thinking",
      body: `
Professional HVAC troubleshooting မှာ symptom တစ်ခုကိုပဲမကြည့်ရပါ။ Thermodynamic relation တွေကိုဆက်စပ်ပြီးကြည့်ရပါတယ်။

ဥပမာ condenser pressure မြင့်နေရင် condenser fouling, cooling tower issue, low water flow, high outdoor wet bulb တို့ကိုစဉ်းစားနိုင်ပါတယ်။
`
    },
    {
      title: "Data-Driven HVAC",
      body: `
Modern BMS systems မှာ sensor data trend analysis နဲ့ thermodynamic abnormal pattern တွေ detect လုပ်နိုင်ပါတယ်။

AI-based fault detection systems က COP degradation, abnormal pressure ratio, unstable superheat, inefficient delta-T တို့ကို early warning ပေးနိုင်ပါတယ်။
`
    }
  ]
};
