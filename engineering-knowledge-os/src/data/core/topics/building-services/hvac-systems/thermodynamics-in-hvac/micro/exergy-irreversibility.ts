export const exergyIrreversibility = {
  id: "exergy-irreversibility",
  title: "Exergy and Irreversibility",
  flow: [
    "Useful Energy",
    "Real Process",
    "Losses",
    "Irreversibility",
    "Efficiency Reduction",
    "Optimization"
  ],
  table: {
    headers: ["Concept", "Meaning", "HVAC Relation"],
    rows: [
      ["Exergy", "Useful energy potential", "Maximum possible work"],
      ["Irreversibility", "Energy quality degradation", "Real system losses"],
      ["Entropy Generation", "Disorder increase", "Efficiency penalty"],
      ["Optimization", "Reduce losses", "Improve performance"]
    ]
  },
  sections: [
    {
      title: "Exergy Meaning",
      body: `
Energy quantity တင်မက energy quality ကိုပါစဉ်းစားတဲ့ concept ကို exergy analysis လို့ခေါ်ပါတယ်။

Real HVAC systems တွေမှာ friction, pressure drop, heat loss, mixing loss, throttling loss တို့ကြောင့် useful energy potential လျော့သွားပါတယ်။
`
    },
    {
      title: "Engineering Importance",
      body: `
Exergy thinking နဲ့ system ကိုကြည့်ရင် irreversibility ဘယ်နေရာမှာအများဆုံးဖြစ်နေလဲဆိုတာကိုမြင်နိုင်ပါတယ်။

Advanced HVAC optimization နဲ့ sustainability analysis မှာအသုံးဝင်ပါတယ်။
`
    }
  ]
};
