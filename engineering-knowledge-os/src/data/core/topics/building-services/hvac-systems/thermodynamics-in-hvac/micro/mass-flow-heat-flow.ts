export const massFlowHeatFlow = {
  id: "mass-flow-heat-flow",
  title: "Mass Flow Rate and Heat Flow",
  flow: [
    "Fluid Flow",
    "Mass Flow Rate",
    "Specific Heat",
    "Temperature Difference",
    "Heat Transfer",
    "Cooling Capacity"
  ],
  table: {
    headers: ["Variable", "Meaning", "HVAC Example"],
    rows: [
      ["Mass Flow Rate", "Amount of fluid moving per second", "Chilled water flow"],
      ["Delta-T", "Temperature difference", "CHWR - CHWS"],
      ["Heat Flow", "Transferred thermal energy", "Cooling load in kW"],
      ["Cooling Capacity", "Heat removal ability", "AHU/chiller performance"]
    ]
  },
  sections: [
    {
      title: "Mass Flow Rate ဆိုတာဘာလဲ",
      body: `
Mass flow rate ဆိုတာ fluid ဘယ်လောက် amount ကို time တစ်ခုအတွင်းရွှေ့နေသလဲဆိုတာကိုဖော်ပြပါတယ်။ HVAC မှာ chilled water flow, condenser water flow, airflow တို့အားလုံးသည် mass flow concept နဲ့ဆိုင်ပါတယ်။

Heat transfer rate သည် mass flow rate အပေါ်တိုက်ရိုက်မူတည်ပါတယ်။ Flow နည်းရင် heat carrying capacity လည်းနည်းနိုင်ပါတယ်။
`
    },
    {
      title: "Heat Flow Formula",
      body: `
HVAC engineering မှာ Q = m × Cp × ΔT relation အရ heat transfer တွက်ပါတယ်။

Q = Heat transfer rate  
m = Mass flow rate  
Cp = Specific heat  
ΔT = Temperature difference

ဒီ formula ကို chilled water system, condenser water system, AHU coil analysis, heat exchanger analysis တို့မှာအသုံးပြုပါတယ်။
`
    },
    {
      title: "Professional HVAC Meaning",
      body: `
Chilled water delta-T နည်းနေတဲ့ plant တွေမှာ flow over-pumping ဖြစ်နိုင်ပါတယ်။ Flow များပြီး delta-T နည်းရင် plant efficiency ကျနိုင်ပါတယ်။ Low flow condition မှာတော့ insufficient cooling ဖြစ်နိုင်ပါတယ်။

Engineer တစ်ယောက်အနေနဲ့ flow rate, delta-T, pump speed, valve position, load condition တို့ကိုအတူတူ analyze လုပ်ရပါတယ်။
`
    },
    {
      title: "Software Analytics Use",
      body: `
Real-time HVAC analytics software မှာ flow meter data, temperature sensor data, pump status data တို့ကိုသုံးပြီး real-time cooling load calculation လုပ်နိုင်ပါတယ်။

Output အနေနဲ့ plant load trend, abnormal delta-T warning, flow imbalance, inefficient pumping detection တို့ကိုပြနိုင်ပါတယ်။
`
    }
  ]
};
