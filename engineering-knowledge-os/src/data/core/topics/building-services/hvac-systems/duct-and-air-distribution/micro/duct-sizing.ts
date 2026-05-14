export const ductAir_010 = {
  id: "duct-sizing",
  title: "Duct Sizing",
  flow: [
    "Air Source",
    "Duct Path",
    "Pressure Loss",
    "Air Terminal",
    "Room Distribution",
    "Comfort Result"
  ],
  table: {
    headers: ["Layer", "Engineering Meaning", "Professional Use"],
    rows: [
      ["Airflow", "Duct Sizing affects air movement", "Comfort and ventilation design"],
      ["Pressure", "Static / dynamic / total pressure relation", "Fan and duct sizing"],
      ["Installation", "Duct material, leakage and insulation", "Site quality control"],
      ["Troubleshooting", "Noise, imbalance, leakage and low airflow", "Maintenance and commissioning"]
    ]
  },
  sections: [
    {
      title: "Duct Sizing ဆိုတာဘာလဲ",
      body: `
Duct Sizing သည် HVAC duct and air distribution system ထဲတွင်အရေးကြီးသော micro concept တစ်ခုဖြစ်သည်။ Duct system ဆိုတာ conditioned air, return air, fresh air, exhaust air တို့ကို building အတွင်း သတ်မှတ်ထားသော zone များသို့ပို့ဆောင်ပေးသော air pathway ဖြစ်သည်။

Duct system ကို pipe လိုပဲ air transport network အနေနဲ့မြင်နိုင်သည်။ Fan က pressure difference ပေးပြီး air ကို duct network ထဲရွှေ့ပေးသည်။ Duct design မမှန်လျှင် airflow imbalance, high noise, high fan energy, poor comfort, condensation, leakage and poor ventilation problem များဖြစ်နိုင်သည်။
`
    },
    {
      title: "Professional Engineering Meaning",
      body: `
Professional Building Services Engineer တစ်ယောက်အတွက် Duct Sizing ကိုနားလည်ခြင်းဆိုတာ duct layout ကြည့်တတ်ရုံမဟုတ်ပါ။ Airflow rate, velocity, static pressure, friction loss, fitting loss, diffuser throw, damper position, balancing requirement, installation quality and commissioning result တို့ကို system thinking နဲ့နားလည်ရမည်။

Duct system သည် comfort delivery system ဖြစ်သည်။ Chiller, AHU, FCU တွေက cooling ထုတ်နိုင်ပေမယ့် air distribution မကောင်းလျှင် room comfort မရနိုင်ပါ။
`
    },
    {
      title: "Control and BMS View",
      body: `
Modern air distribution systems များတွင် VAV boxes, motorized dampers, airflow sensors, duct static pressure sensors, differential pressure sensors and BMS controls တို့ပါဝင်နိုင်သည်။

Static pressure control, VAV damper control, demand-control ventilation, smoke control, staircase pressurization and exhaust control logic များတွင် duct pressure and airflow behavior ကိုနားလည်ရမည်။
`
    },
    {
      title: "Troubleshooting and Optimization",
      body: `
Duct Sizing ကို troubleshoot လုပ်ရာတွင် airflow measurement, duct pressure reading, damper position, filter condition, fan speed, duct leakage, diffuser condition, noise source, vibration source and balancing report တို့ကိုစစ်ရမည်။

Optimization အတွက် duct leakage reduction, correct balancing, lower pressure drop design, VFD fan control, clean filters, optimized static pressure reset and proper diffuser selection တို့ကိုအသုံးပြုနိုင်သည်။
`
    }
  ]
};
