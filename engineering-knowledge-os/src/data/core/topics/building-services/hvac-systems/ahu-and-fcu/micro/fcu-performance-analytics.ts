export const ahuFcu_050 = {
  id: "fcu-performance-analytics",
  title: "FCU Performance Analytics",
  flow: [
    "Air Condition",
    "AHU / FCU Component",
    "Sensor Feedback",
    "Control Action",
    "Comfort Result",
    "Energy Impact"
  ],
  table: {
    headers: ["Layer", "Engineering Meaning", "Professional Use"],
    rows: [
      ["Air Side", "FCU Performance Analytics relation to airflow and comfort", "AHU / FCU analysis"],
      ["Control", "Sensor, setpoint, actuator and feedback", "BMS automation"],
      ["Maintenance", "Fault and degradation behavior", "Troubleshooting"],
      ["Optimization", "Energy and comfort balance", "Smart building operation"]
    ]
  },
  sections: [
    {
      title: "FCU Performance Analytics ဆိုတာဘာလဲ",
      body: `
FCU Performance Analytics သည် HVAC air-side system ထဲတွင်အရေးကြီးသော micro concept တစ်ခုဖြစ်သည်။ AHU နှင့် FCU systems များသည် building zone များထဲသို့ conditioned air ပို့ပေးပြီး thermal comfort, humidity control, ventilation and indoor air quality ကိုထိန်းပေးသည်။

ဒီ concept ကို equipment တစ်ခုတည်းအနေနဲ့မကြည့်ဘဲ airflow, heat transfer, chilled water coil, fan operation, filter condition, control valve, damper position, room sensor, BMS command and energy consumption တို့နဲ့ချိတ်ပြီးနားလည်ရမည်။
`
    },
    {
      title: "Professional Engineering Meaning",
      body: `
Professional Building Services Engineer တစ်ယောက်အတွက် FCU Performance Analytics ကိုနားလည်ခြင်းဆိုတာ AHU/FCU drawing ထဲမှာ component name သိတာမဟုတ်ပါ။ Air ဘယ်ကလာသလဲ၊ ဘယ်လို filter လုပ်သလဲ၊ cooling coil မှာ heat ဘယ်လို remove လုပ်သလဲ၊ fan က airflow ကိုဘယ်လိုပို့သလဲ၊ room temperature control ဘယ်လိုလုပ်သလဲ၊ fault ဖြစ်ရင် ဘယ် symptom ပေါ်သလဲဆိုတာကို system thinking နဲ့သိရပါမယ်။

AHU/FCU performance မကောင်းရင် room comfort issue, humidity problem, high energy consumption, noise, vibration, low airflow, water leakage, sensor error, control instability တို့ဖြစ်နိုင်ပါတယ်။
`
    },
    {
      title: "BMS / Automation View",
      body: `
Modern AHU and FCU systems များသည် BMS နဲ့ချိတ်ဆက်ပြီး temperature trend, fan status, valve position, filter alarm, airflow status, damper command, occupancy signal, fault alarm တို့ကို monitor and control လုပ်နိုင်သည်။

Control logic မှာ setpoint, process variable, error, valve command, fan command, deadband, schedule, manual override, interlock and alarm limit တို့ပါဝင်နိုင်သည်။
`
    },
    {
      title: "Troubleshooting and Optimization",
      body: `
FCU Performance Analytics ကို troubleshoot လုပ်တဲ့အခါ symptom → sensor reading → command signal → actuator response → physical condition → trend data ဆိုတဲ့ order နဲ့စစ်ရပါမယ်။

Optimization အတွက် fan speed control, chilled water valve tuning, filter maintenance, schedule optimization, occupancy-based operation, ventilation control and BMS analytics တို့ကိုအသုံးပြုနိုင်သည်။
`
    }
  ]
};
