export const thermalEquilibrium = {
  id: "thermal-equilibrium",
  title: "Thermal Equilibrium",
  flow: [
    "Hot Body",
    "Heat Transfer",
    "Cold Body",
    "Temperature Difference Reduces",
    "Same Temperature",
    "Thermal Equilibrium"
  ],
  table: {
    headers: ["Concept", "Meaning", "HVAC Example"],
    rows: [
      ["Temperature Difference", "Driving force for heat transfer", "Room air warmer than cooling coil"],
      ["Heat Flow", "Energy moves from hot to cold", "Air gives heat to chilled water coil"],
      ["Equilibrium", "No net heat transfer", "Room reaches setpoint condition"],
      ["Control Action", "Maintains desired equilibrium", "BMS controls valve/fan to hold comfort"]
    ]
  },
  sections: [
    {
      title: "Thermal Equilibrium ဆိုတာဘာလဲ",
      body: `
Thermal equilibrium ဆိုတာ objects နှစ်ခု သို့ systems နှစ်ခုကြား temperature difference မရှိတော့တဲ့အခြေအနေကိုဆိုလိုပါတယ်။ Temperature difference ရှိနေသရွေ့ heat transfer ဖြစ်နေမယ်။ Temperature တူသွားတဲ့အခါ net heat transfer မရှိတော့ပါ။

HVAC မှာ thermal equilibrium ကို comfort control နဲ့ချိတ်ပြီးနားလည်ရပါတယ်။ Room temperature က setpoint ထက်မြင့်နေရင် cooling system က heat remove လုပ်ပါတယ်။ Room temperature setpoint နီးလာတဲ့အခါ control output လျော့လာပြီး equilibrium condition ကိုထိန်းရန်ကြိုးစားပါတယ်။
`
    },
    {
      title: "HVAC Control Meaning",
      body: `
Thermal equilibrium ကို natural state အနေနဲ့မထားဘဲ desired state အနေနဲ့ control လုပ်ရတာက HVAC system ရဲ့တာဝန်ဖြစ်ပါတယ်။ Outdoor condition, people load, solar heat gain, equipment heat gain တို့ကြောင့် room condition ကအမြဲပြောင်းနေပါတယ်။

ဒါကြောင့် HVAC controller က sensor feedback ကိုဖတ်ပြီး valve, damper, fan speed, pump speed တို့ကိုပြောင်းလဲကာ room condition ကို desired equilibrium နီးပါးမှာထိန်းထားပါတယ်။
`
    },
    {
      title: "Engineering Example",
      body: `
ဥပမာ room setpoint က 24°C ဖြစ်ပြီး actual room temperature က 29°C ဖြစ်နေရင် room air နဲ့ cooling coil ကြား temperature difference ကြီးပါတယ်။ Heat transfer rate မြင့်နိုင်ပါတယ်။ Room temperature 24°C နီးလာတဲ့အခါ cooling demand လျော့လာပါတယ်။

ဒီအခြေအနေကို controller tuning မှာသုံးနိုင်ပါတယ်။ Aggressive control လုပ်ရင် overshoot ဖြစ်နိုင်ပြီး room temperature setpoint အောက်ကျသွားနိုင်ပါတယ်။ Too slow control လုပ်ရင် comfort response နှေးနိုင်ပါတယ်။
`
    },
    {
      title: "Software Project Connection",
      body: `
Thermal equilibrium concept ကို room temperature simulation project ထဲမှာသုံးနိုင်ပါတယ်။ Input အဖြစ် outdoor temperature, internal heat gain, HVAC cooling capacity, room thermal mass, setpoint တို့ကိုသုံးပြီး room temperature response ကို time-series simulation လုပ်နိုင်ပါတယ်။

ဒီ project က Building Thermal Model, HVAC Control Simulator, Digital Twin Room Model အတွက် foundation ဖြစ်ပါတယ်။
`
    }
  ]
};
