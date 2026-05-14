export const heatVsTemperature = {
  id: "heat-vs-temperature",
  title: "Heat vs Temperature",
  flow: [
    "Room Condition",
    "Temperature Reading",
    "Heat Load",
    "Cooling Coil",
    "Heat Removal",
    "Comfort Result"
  ],
  table: {
    headers: ["Concept", "Meaning", "HVAC Example"],
    rows: [
      ["Temperature", "Thermal state measurement", "Room temperature = 28°C"],
      ["Heat", "Energy transfer due to temperature difference", "Heat removed by cooling coil"],
      ["Heat Load", "Total heat to remove", "Cooling load in kW or RT"],
      ["Heat Transfer", "Movement of heat energy", "Air → Coil → Chilled Water"]
    ]
  },
  sections: [
    {
      title: "Heat နဲ့ Temperature က မတူဘူး",
      body: `
Heat နဲ့ Temperature ကို HVAC မှာမခွဲခြားတတ်ရင် thermodynamics ကိုအပြည့်နားလည်ဖို့ခက်ပါတယ်။ Temperature ဆိုတာ substance တစ်ခုရဲ့ thermal state ကိုဖော်ပြတဲ့ measurement ဖြစ်ပြီး heat ဆိုတာ temperature difference ကြောင့် object တစ်ခုမှ object တစ်ခုသို့စီးဆင်းတဲ့ energy ဖြစ်ပါတယ်။

Room temperature 28°C ဆိုတာ temperature reading ဖြစ်ပါတယ်။ ဒါပေမယ့် room ထဲက heat load ဘယ်လောက်ရှိလဲဆိုတာက energy quantity ဖြစ်ပါတယ်။ HVAC system က temperature number ကိုဖျက်တာမဟုတ်ဘဲ heat energy ကို remove လုပ်တာဖြစ်ပါတယ်။
`
    },
    {
      title: "HVAC Engineering Meaning",
      body: `
Cooling system က cold ကိုထုတ်တာမဟုတ်ပါ။ Heat energy ကို room ထဲကနေယူပြီး chilled water / refrigerant / condenser water / cooling tower chain မှတစ်ဆင့် atmosphere ထဲသို့ရွှေ့ပေးတာဖြစ်ပါတယ်။

ဒါကြောင့် HVAC design မှာ temperature reading တစ်ခုတည်းမလုံလောက်ပါ။ Heat transfer rate, air flow, water flow, specific heat, humidity, load variation တို့ကိုပါစဉ်းစားရပါတယ်။
`
    },
    {
      title: "Software Thinking",
      body: `
Software project အနေနဲ့ heat vs temperature ကို model လုပ်ချင်ရင် input data အဖြစ် room temperature, outdoor temperature, occupancy, equipment load, airflow, chilled water temperature တို့ကိုယူနိုင်ပါတယ်။ Output အနေနဲ့ estimated heat load, cooling demand, comfort status, energy warning တို့ကိုပြနိုင်ပါတယ်။
`
    }
  ]
};
