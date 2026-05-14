export const fire_suppression_002 = {
  id: "fm200-system",
  title: "FM200 System",

  flow: [
    "Fire Event",
    "Detection",
    "Alarm / Signal",
    "Control Action",
    "Protection Response",
    "Life Safety"
  ],

  table: {
    headers: ["Layer", "Engineering Meaning", "Professional Use"],
    rows: [
      ["Protection", "FM200 System in fire protection system", "Building fire safety"],
      ["Control", "Detection, alarm and response logic", "Integrated fire operation"],
      ["Mechanical / Electrical", "Pump, fan, valve and panel coordination", "MEP integration"],
      ["Maintenance", "Testing, troubleshooting and inspection", "Life safety reliability"]
    ]
  },

  sections: [
    {
      title: "FM200 System ဆိုတာဘာလဲ",

      body: `
FM200 System သည် Building Fire Protection Engineering ထဲတွင် အရေးကြီးသော micro concept တစ်ခုဖြစ်သည်။ Fire protection system ဆိုတာ building အတွင်း fire detection, fire alarm, smoke control, evacuation support and fire suppression ကိုပေါင်းစပ်ထားသော life safety engineering system ဖြစ်သည်။

ဒီ concept ကို device name တစ်ခုအနေနဲ့မမှတ်ဘဲ fire event → detection → alarm → control logic → equipment response → evacuation → suppression ဆိုတဲ့ system flow နဲ့နားလည်ရမည်။
`
    },

    {
      title: "Professional Engineering Meaning",

      body: `
Professional Building Services Engineer တစ်ယောက်အတွက် FM200 System ကိုနားလည်ခြင်းဆိုတာ equipment name သိတာမဟုတ်ပါ။ Fire condition ဖြစ်လာရင် ဘယ် system က အရင် activate ဖြစ်မလဲ၊ smoke ဘယ်လို control လုပ်မလဲ၊ people evacuation ဘယ်လို support ပေးမလဲ၊ pump/fan/damper/lift/BMS/fire alarm panel တို့ဘယ်လို interlock လုပ်ထားလဲဆိုတာကို system thinking နဲ့နားလည်ရမည်။

Fire protection system မမှန်လျှင် delayed alarm, smoke spread, evacuation failure, low suppression performance, equipment failure and life safety risk များဖြစ်နိုင်သည်။
`
    },

    {
      title: "Control and Integration",

      body: `
Modern Fire Protection Systems များတွင် fire alarm panel, BMS, smoke control system, staircase pressurization, fire pump system, emergency power, lift recall and suppression systems တို့ကို integrated control logic နဲ့ချိတ်ဆက်ထားသည်။

Cause and effect matrix သည် fire engineering ထဲတွင်အလွန်အရေးကြီးသည်။ Detector activation ဖြစ်ရင် ဘယ် fan ပိတ်မလဲ၊ ဘယ် damper ပွင့်မလဲ၊ ဘယ် lift recall ဖြစ်မလဲ၊ ဘယ် alarm activate ဖြစ်မလဲဆိုတာ predefined logic နဲ့သွားသည်။
`
    },

    {
      title: "Testing, Troubleshooting and Maintenance",

      body: `
FM200 System ကို troubleshoot လုပ်ရာတွင် fire panel status, detector signal, pressure reading, pump status, fan operation, damper position, alarm history, loop fault, cable continuity and equipment response တို့ကိုစစ်ရမည်။

Fire protection system သည် normal operation အတွက်မဟုတ်ဘဲ emergency event အတွက်ဖြစ်သောကြောင့် periodic testing, inspection, preventive maintenance and commissioning verification အလွန်အရေးကြီးသည်။
`
    }
  ]
};
