export const power_distribution_011 = {
  id: "diversity-factor",
  title: "Diversity Factor",

  flow: [
    "Electrical Source",
    "Distribution / Control",
    "Protection Logic",
    "Monitoring",
    "Load Operation",
    "Safety and Reliability"
  ],

  table: {
    headers: ["Layer", "Engineering Meaning", "Professional Use"],
    rows: [
      ["Power", "Diversity Factor in electrical engineering system", "Electrical operation"],
      ["Protection", "Electrical safety and fault prevention", "System reliability"],
      ["Control", "Monitoring and operational logic", "Engineering automation"],
      ["Maintenance", "Testing and troubleshooting workflow", "Long-term operation"]
    ]
  },

  sections: [
    {
      title: "Diversity Factor ဆိုတာဘာလဲ",

      body: `
Diversity Factor သည် Electrical Engineering ထဲတွင် အရေးကြီးသော professional engineering micro topic တစ်ခုဖြစ်သည်။ Modern electrical systems များတွင် power generation, transformation, distribution, protection, monitoring and control systems များကို integrated engineering architecture အဖြစ်အသုံးပြုသည်။

ဒီ concept ကို equipment name တစ်ခုအနေနဲ့မကြည့်ဘဲ power source → distribution → protection → monitoring → load operation → maintenance ဆိုတဲ့ electrical system flow နဲ့နားလည်ရမည်။
`
    },

    {
      title: "Professional Engineering Meaning",

      body: `
Professional Electrical Engineer တစ်ယောက်အတွက် Diversity Factor ကိုနားလည်ခြင်းဆိုတာ theory တင်မဟုတ်ပါ။ Real engineering systems ထဲတွင် voltage stability, current flow, fault condition, protection coordination, operational reliability and energy efficiency တို့ကိုနားလည်ရမည်။

Electrical system မမှန်လျှင် overload, short circuit, voltage instability, equipment failure, fire hazard and operational shutdown များဖြစ်နိုင်သည်။
`
    },

    {
      title: "Protection, Control and Monitoring",

      body: `
Modern electrical engineering systems များတွင် relays, breakers, protection logic, SCADA, BMS integration, power analyzers and monitoring dashboards များကိုအသုံးပြုသည်။

Transformers, generators, UPS systems, MCC panels, lighting systems and power distribution systems များကို centralized monitoring and automation architecture နဲ့ချိတ်ဆက်ထားနိုင်သည်။
`
    },

    {
      title: "Testing, Troubleshooting and Maintenance",

      body: `
Diversity Factor ကို troubleshoot လုပ်ရာတွင် voltage, current, frequency, insulation resistance, breaker status, relay trip, harmonic level, thermal condition and load behavior တို့ကိုစစ်ရမည်။

Professional maintenance အတွက် testing procedure, preventive maintenance, thermal scanning, electrical measurements and commissioning verification တို့ကို systematic workflow နဲ့လုပ်ရမည်။
`
    }
  ]
};
