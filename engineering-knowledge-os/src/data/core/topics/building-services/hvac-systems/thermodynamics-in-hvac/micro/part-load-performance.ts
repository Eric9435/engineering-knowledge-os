export const partLoadPerformance = {
  id: "part-load-performance",
  title: "Part Load Performance",
  flow: [
    "Building Load Change",
    "Compressor Modulation",
    "Reduced Capacity",
    "Efficiency Response",
    "Part Load Operation",
    "Energy Performance"
  ],
  table: {
    headers: ["Condition", "Meaning", "HVAC Impact"],
    rows: [
      ["Full Load", "Maximum capacity operation", "Peak demand"],
      ["Part Load", "Reduced load condition", "Most operating hours"],
      ["Variable Speed", "Capacity modulation", "Energy savings"],
      ["Cycling Loss", "Frequent start-stop", "Efficiency reduction"]
    ]
  },
  sections: [
    {
      title: "Part Load ဆိုတာဘာလဲ",
      body: `
Building cooling load ကအမြဲ full load မဟုတ်ပါ။ Outdoor weather, occupancy, internal load ပြောင်းလဲမှုကြောင့် HVAC system သည်အချိန်အများစုမှာ part-load condition နဲ့အလုပ်လုပ်ပါတယ်။
`
    },
    {
      title: "Efficiency Relation",
      body: `
Modern chiller systems တွေမှာ variable speed compressor, variable flow pump, smart control logic သုံးပြီး part-load efficiency တိုးအောင်လုပ်ကြပါတယ်။

Part-load optimization က annual energy saving အတွက်အရေးကြီးပါတယ်။
`
    },
    {
      title: "Engineering Analysis",
      body: `
Low load condition မှာ compressor cycling, unstable superheat, low delta-T, inefficient pump operation တို့ဖြစ်နိုင်ပါတယ်။

Plant optimization မှာ load profile analysis အရေးကြီးပါတယ်။
`
    }
  ]
};
