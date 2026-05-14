export const coolingLoad_129 = {
  id: "retro-commissioning-load-analysis",
  title: "Retro-Commissioning Load Analysis",
  flow: [
    "Heat Source",
    "Heat Gain",
    "Load Calculation",
    "Equipment Response",
    "Control Decision",
    "Comfort Result"
  ],
  table: {
    headers: ["Layer", "Meaning", "Professional Use"],
    rows: [
      ["Concept", "Retro-Commissioning Load Analysis ရဲ့အဓိကအဓိပ္ပါယ်", "HVAC cooling load analysis"],
      ["Engineering Variable", "Temperature, humidity, airflow, area, people, equipment", "Design and diagnosis"],
      ["System Impact", "Cooling capacity and energy demand", "AHU, FCU, chiller sizing"],
      ["Software Use", "Data model and calculation module", "Dashboard / knowledge base"]
    ]
  },
  sections: [
    {
      title: "Retro-Commissioning Load Analysis ဆိုတာဘာလဲ",
      body: `
Retro-Commissioning Load Analysis သည် HVAC Cooling Load engineering ထဲတွင် အရေးကြီးသော micro concept တစ်ခုဖြစ်သည်။ Cooling load ဆိုတာ building သို့ room တစ်ခုကို desired indoor condition မှာထိန်းထားဖို့ remove လုပ်ရမည့် heat amount ဖြစ်သည်။

ဒီ concept ကို simple definition အနေနဲ့မကြည့်ဘဲ building physics, air-conditioning process, equipment sizing, energy consumption, comfort control, automation logic, and engineering decision making တို့နဲ့ချိတ်ပြီးနားလည်ရမည်။
`
    },
    {
      title: "Engineering Meaning",
      body: `
Professional HVAC engineer အတွက် Retro-Commissioning Load Analysis ကိုနားလည်ခြင်းဆိုတာ load calculation table ထဲမှာ number တစ်ခုထည့်တာမဟုတ်ပါ။ ဒီ load က ဘယ် source ကလာသလဲ၊ sensible load လား latent load လား၊ peak condition မှာဘယ်လိုပြောင်းလဲသလဲ၊ AHU/FCU/chiller size ကိုဘယ်လိုသက်ရောက်သလဲဆိုတာကိုနားလည်ရပါမယ်။

Cooling load မှားတွက်ရင် system oversized သို့ undersized ဖြစ်နိုင်သည်။ Oversized system က initial cost မြင့်ပြီး short cycling ဖြစ်နိုင်သည်။ Undersized system က comfort မပေးနိုင်ဘဲ continuous operation ဖြစ်နိုင်သည်။
`
    },
    {
      title: "Practical HVAC Application",
      body: `
Retro-Commissioning Load Analysis ကို design phase, commissioning phase, operation phase, troubleshooting phase, optimization phase အားလုံးမှာအသုံးချနိုင်သည်။ Building type, occupancy schedule, outdoor weather, solar exposure, wall/glass properties, equipment load, ventilation requirement, humidity condition တို့ကိုအတူတူစဉ်းစားရသည်။

BMS / energy dashboard တွင် cooling load trend ကို real-time ကြည့်နိုင်လျှင် system performance, abnormal load pattern, poor control strategy, sensor error, energy waste တို့ကိုပိုမြန်မြန်သိနိုင်သည်။
`
    },
    {
      title: "Software / Knowledge Base Use",
      body: `
ဒီ topic ကို project system ထဲမှာ micro lecture file အနေနဲ့သိမ်းထားခြင်းအားဖြင့် နောက်ပိုင်း formula, equation, example calculation, design checklist, troubleshooting checklist, and interview notes တို့ကိုသီးခြားထပ်ထည့်နိုင်သည်။

Input data အဖြစ် temperature, relative humidity, area, occupancy, lighting power, equipment power, airflow, fresh air rate, wall U-value, glass SHGC, schedule data တို့ကိုယူနိုင်ပြီး output အဖြစ် load estimate, design note, warning, and optimization suggestion တို့ပြနိုင်သည်။
`
    }
  ]
};
