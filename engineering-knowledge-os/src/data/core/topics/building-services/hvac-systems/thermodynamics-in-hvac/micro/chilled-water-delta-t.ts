export const chilledWaterDeltaT = {
  id: "chilled-water-delta-t",
  title: "Chilled Water Delta-T",
  flow: [
    "CHWS",
    "Cooling Coil",
    "Heat Absorption",
    "CHWR",
    "Delta-T",
    "Plant Efficiency"
  ],
  table: {
    headers: ["Term", "Meaning", "Engineering Use"],
    rows: [
      ["CHWS", "Chilled water supply", "Cold water from chiller"],
      ["CHWR", "Chilled water return", "Warmer water returning"],
      ["Delta-T", "CHWR - CHWS", "Cooling effectiveness"],
      ["Low Delta-T", "Insufficient heat absorption", "Plant inefficiency"]
    ]
  },
  sections: [
    {
      title: "Delta-T ဆိုတာဘာလဲ",
      body: `
Chilled water delta-T ဆိုတာ chilled water return temperature နဲ့ chilled water supply temperature ကြား difference ဖြစ်ပါတယ်။

ဥပမာ CHWS = 6°C  
CHWR = 12°C  
ဆိုရင် delta-T = 6°C ဖြစ်ပါတယ်။

ဒီ delta-T value က chilled water loop က heat ဘယ်လောက် absorb လုပ်နေသလဲဆိုတာကိုပြပါတယ်။
`
    },
    {
      title: "Low Delta-T Syndrome",
      body: `
HVAC central plant တွေမှာ low delta-T syndrome ဆိုတဲ့ပြဿနာအရမ်းတွေ့ရပါတယ်။ Delta-T နည်းနေတဲ့အခါ required cooling load ရဖို့ flow ကိုပိုတိုးရပါတယ်။ Pump energy တိုးလာပြီး plant efficiency ကျနိုင်ပါတယ်။

Low delta-T ဖြစ်စေနိုင်တဲ့အကြောင်းတွေမှာ —
dirty coil,
low airside heat transfer,
valve bypass,
poor control logic,
over-pumping,
coil fouling,
improper balancing
တို့ပါဝင်နိုင်ပါတယ်။
`
    },
    {
      title: "Plant Optimization",
      body: `
Professional plant optimization မှာ delta-T improvement ကအရေးကြီးပါတယ်။ Higher delta-T ရရင် same cooling load ကို lower flow နဲ့ပို့နိုင်ပါတယ်။ Pump energy လျော့နိုင်ပြီး chiller plant efficiency တိုးနိုင်ပါတယ်။

Airport, hospital, district cooling plant, university campus systems တွေမှာ delta-T monitoring သည်အရေးကြီးသော KPI ဖြစ်ပါတယ်။
`
    },
    {
      title: "Software Dashboard Use",
      body: `
HVAC monitoring software မှာ CHWS, CHWR, flow rate data တို့ကိုသုံးပြီး live delta-T dashboard တည်ဆောက်နိုင်ပါတယ်။ Delta-T low warning, abnormal coil performance, bypass detection, load imbalance analysis တို့ကို automation လုပ်နိုင်ပါတယ်။
`
    }
  ]
};
