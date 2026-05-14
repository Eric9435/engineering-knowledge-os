export const firstLawEnergyBalance = {
  id: "first-law-energy-balance",
  title: "First Law Energy Balance",
  flow: [
    "Building Load",
    "Evaporator Heat Absorption",
    "Compressor Work Input",
    "Condenser Heat Rejection",
    "Cooling Tower",
    "Atmosphere"
  ],
  table: {
    headers: ["Energy Term", "Meaning", "HVAC Relation"],
    rows: [
      ["Qe", "Evaporator heat absorption", "Building cooling load"],
      ["W", "Compressor work input", "Electrical power"],
      ["Qc", "Condenser heat rejection", "Qe + W"],
      ["Energy Balance", "Energy conservation", "Qc = Qe + W"]
    ]
  },
  sections: [
    {
      title: "First Law ဆိုတာဘာလဲ",
      body: `
First Law of Thermodynamics က energy conservation law ဖြစ်ပါတယ်။ Energy ကိုဖန်တီးလို့မရ၊ ဖျက်လို့မရ၊ form တစ်ခုကနေ form တစ်ခုသို့သာပြောင်းနိုင်ပါတယ်။

HVAC system မှာ cooling လုပ်တယ်ဆိုတာ heat ကိုဖျက်တာမဟုတ်ဘဲ indoor space မှ outdoor environment သို့ energy transfer လုပ်တာဖြစ်ပါတယ်။
`
    },
    {
      title: "Chiller Plant Energy Balance",
      body: `
Chiller plant မှာ evaporator က building load ထဲက heat ကိုယူပါတယ်။ Compressor က electrical work input ပေးပါတယ်။ Condenser က evaporator heat plus compressor work ကို condenser water သို့ reject လုပ်ပါတယ်။

ဒါကြောင့် condenser heat rejection သည် evaporator cooling load ထက်ပိုများပါတယ်။ ဒီ point ကိုနားလည်ရင် cooling tower sizing, condenser water loop, chiller efficiency ကိုပိုနားလည်လာမယ်။
`
    },
    {
      title: "Engineering Formula Thinking",
      body: `
Energy balance ကို simple form နဲ့ Qc = Qe + W လို့မြင်နိုင်ပါတယ်။ Qe က evaporator cooling effect ဖြစ်ပြီး W က compressor work input ဖြစ်ပါတယ်။ Qc က condenser မှ reject လုပ်ရမယ့် total heat ဖြစ်ပါတယ်။

Professional HVAC analysis မှာ ဒီ relation ကို chiller performance, condenser water temperature, cooling tower capacity, COP calculation တို့နဲ့ချိတ်ကြည့်ရပါတယ်။
`
    }
  ]
};
