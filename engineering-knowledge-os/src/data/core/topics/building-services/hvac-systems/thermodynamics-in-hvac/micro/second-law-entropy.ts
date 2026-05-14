export const secondLawEntropy = {
  id: "second-law-entropy",
  title: "Second Law and Entropy",
  flow: [
    "Heat Direction",
    "Natural Heat Flow",
    "Work Input",
    "Refrigeration",
    "Irreversibility",
    "Efficiency Loss"
  ],
  table: {
    headers: ["Concept", "Meaning", "HVAC Relation"],
    rows: [
      ["Second Law", "Heat naturally flows hot to cold", "Cooling needs work input"],
      ["Entropy", "Measure of disorder / irreversibility", "Real systems have losses"],
      ["Irreversibility", "Useful energy loss", "Compressor and heat exchanger losses"],
      ["Efficiency Limit", "No system is perfect", "COP has practical limits"]
    ]
  },
  sections: [
    {
      title: "Second Law ဆိုတာဘာလဲ",
      body: `
Second Law of Thermodynamics က heat transfer ရဲ့ direction နဲ့ energy quality ကိုရှင်းပြတဲ့ law ဖြစ်ပါတယ်။ Heat သည် naturally hot body မှ cold body သို့စီးဆင်းပါတယ်။ Cold space မှ hot environment သို့ heat ကိုရွှေ့ချင်ရင် external work input လိုပါတယ်။ HVAC cooling system မှာ compressor work input လိုတာက ဒီအကြောင်းကြောင့်ဖြစ်ပါတယ်။
`
    },
    {
      title: "HVAC Meaning",
      body: `
Room ထဲက heat ကို outdoor atmosphere ထဲသို့ရွှေ့တာဟာ natural direction အရအချို့အခြေအနေမှာမလွယ်ပါ။ Refrigeration cycle က compressor work input သုံးပြီး low temperature side မှ high temperature side သို့ heat ကိုတွန်းပို့ပေးပါတယ်။

ဒီ process တွေမှာ friction, pressure drop, heat exchanger loss, compressor inefficiency, motor loss, fouling, imperfect control တို့ကြောင့် irreversibility ဖြစ်ပါတယ်။ ဒါကြောင့် real chiller COP သည် ideal value မရနိုင်ပါ။
`
    },
    {
      title: "Optimization Thinking",
      body: `
Second law thinking နဲ့ HVAC ကိုကြည့်ရင် goal က irreversibility လျှော့ချခြင်းဖြစ်ပါတယ်။ Condenser water temperature လျှော့နိုင်ရင် compressor lift လျော့ပြီး COP တိုးနိုင်ပါတယ်။ Heat exchanger fouling လျှော့ရင် heat transfer improvement ဖြစ်နိုင်ပါတယ်။ Pump and fan losses လျှော့ရင် plant efficiency တိုးနိုင်ပါတယ်။
`
    }
  ]
};
