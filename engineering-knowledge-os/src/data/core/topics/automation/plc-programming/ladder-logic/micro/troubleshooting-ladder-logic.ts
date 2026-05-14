export const ladder_logic_020 = {
  id: "troubleshooting-ladder-logic",
  title: "Troubleshooting Ladder Logic",

  flow: [
    "Field Signal",
    "Controller Logic",
    "Communication",
    "HMI / SCADA",
    "Control Action",
    "Operation Result"
  ],

  table: {
    headers: ["Layer", "Automation Meaning", "Professional Use"],
    rows: [
      ["Field Layer", "Troubleshooting Ladder Logic field-level meaning", "Sensors, actuators and wiring"],
      ["Control Layer", "PLC/DDC logic and sequencing", "Automation control"],
      ["Supervisory Layer", "HMI, SCADA, trends and alarms", "Monitoring and operation"],
      ["Optimization Layer", "Analytics and intelligent control", "Energy and reliability"]
    ]
  },

  sections: [
    {
      title: "Troubleshooting Ladder Logic ဆိုတာဘာလဲ",

      body: `
Troubleshooting Ladder Logic သည် Automation Engineering ထဲတွင် အရေးကြီးသော micro concept တစ်ခုဖြစ်သည်။ Automation ဆိုတာ sensor data ကိုဖတ်ပြီး controller logic ဖြင့် decision ချကာ actuator/equipment များကို command ပေးပြီး system ကို safe, stable, efficient and reliable ဖြစ်အောင်လုပ်သော engineering discipline ဖြစ်သည်။

ဒီ concept ကို device name တစ်ခုအနေနဲ့မကြည့်ဘဲ field signal → controller input → logic processing → output command → equipment response → HMI/SCADA monitoring → alarm/trend/optimization ဆိုတဲ့ complete automation flow နဲ့နားလည်ရမည်။
`
    },

    {
      title: "Professional Automation Meaning",

      body: `
Professional Automation Engineer တစ်ယောက်အတွက် Troubleshooting Ladder Logic ကိုနားလည်ခြင်းဆိုတာ PLC code line တစ်ကြောင်းသိတာမဟုတ်ပါ။ Sensor signal ဘယ်လိုဝင်သလဲ၊ scaling ဘယ်လိုလုပ်သလဲ၊ logic ဘယ်လိုရေးသလဲ၊ interlock ဘယ်လိုကာကွယ်သလဲ၊ alarm ဘယ်လိုထုတ်သလဲ၊ HMI မှာ operator ကိုဘယ်လိုပြသသလဲဆိုတာကို system thinking နဲ့နားလည်ရမည်။

Automation system မမှန်လျှင် equipment trip, unstable control, false alarm, communication failure, unsafe operation, energy waste and poor maintenance visibility များဖြစ်နိုင်သည်။
`
    },

    {
      title: "PLC / SCADA / BMS Integration",

      body: `
Troubleshooting Ladder Logic ကို real project ထဲမှာအသုံးချရာတွင် PLC, DDC, SCADA, HMI, BMS, Modbus, BACnet, PROFINET, Ethernet/IP, sensors, actuators, VFDs and control panels တို့နဲ့ချိတ်ဆက်နားလည်ရမည်။

Control philosophy, I/O list, point schedule, cause-and-effect matrix, sequence of operation, alarm list, trend list and commissioning checklist တို့သည် automation project documentation အတွက်အရေးကြီးသည်။
`
    },

    {
      title: "Troubleshooting and Optimization",

      body: `
Troubleshooting Ladder Logic ကို troubleshoot လုပ်ရာတွင် physical device, wiring, power supply, signal value, controller input, logic condition, output command, communication status, HMI display, alarm history and trend data တို့ကို step-by-step စစ်ရမည်။

Optimization အတွက် setpoint tuning, PID tuning, schedule optimization, energy analytics, predictive maintenance, alarm rationalization and digital twin automation တို့ကိုအသုံးပြုနိုင်သည်။
`
    }
  ]
};
