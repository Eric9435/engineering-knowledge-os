export const valves_and_fittings_008 = {
  id: "float-valve",
  title: "Float Valve",
  flow: [
    "Water Source",
    "Pipe Network",
    "Pressure / Flow",
    "Fixture / Equipment",
    "Operation",
    "Maintenance"
  ],
  table: {
    headers: ["Layer", "Engineering Meaning", "Professional Use"],
    rows: [
      ["System", "Float Valve in plumbing system", "Building services design"],
      ["Hydraulic", "Flow, pressure, head loss and demand", "Sizing and diagnosis"],
      ["Installation", "Pipe, valve, slope, access and maintenance", "Site coordination"],
      ["Troubleshooting", "Leakage, blockage, pressure fault and water quality", "Operation and maintenance"]
    ]
  },
  sections: [
    {
      title: "Float Valve ဆိုတာဘာလဲ",
      body: `
Float Valve သည် Building Services Plumbing System ထဲတွင် အရေးကြီးသော micro concept တစ်ခုဖြစ်သည်။ Plumbing system ဆိုတာ building ထဲသို့ clean water supply ပေးခြင်း၊ hot water distribution လုပ်ခြင်း၊ used water and sewage ကို safely discharge လုပ်ခြင်း၊ storm water ကို control လုပ်ခြင်းတို့ကိုပေါင်းစပ်ထားသော engineering system ဖြစ်သည်။

ဒီ concept ကို component name တစ်ခုအနေနဲ့မမှတ်ဘဲ water source, pressure, flow, pipe sizing, valve control, fixture demand, drainage path, maintenance access, safety and hygiene requirement တို့နဲ့ချိတ်ပြီးနားလည်ရမည်။
`
    },
    {
      title: "Professional Engineering Meaning",
      body: `
Professional Building Services Engineer တစ်ယောက်အတွက် Float Valve ကိုနားလည်ခြင်းဆိုတာ drawing ထဲမှာ pipe route တွေ့တာမဟုတ်ပါ။ Water ဘယ်ကလာသလဲ၊ pressure ဘယ်လိုထိန်းသလဲ၊ pipe size ဘယ်လိုရွေးသလဲ၊ pump head ဘယ်လိုတွက်သလဲ၊ valve function ဘာလဲ၊ failure ဖြစ်ရင် ဘာ symptom ပေါ်သလဲဆိုတာကို system thinking နဲ့သိရပါမယ်။

Plumbing system မမှန်လျှင် low water pressure, leakage, pipe burst, backflow contamination, drainage blockage, odor problem, pump failure, tank overflow, water quality issue and maintenance difficulty များဖြစ်နိုင်သည်။
`
    },
    {
      title: "Design and Site Application",
      body: `
Float Valve ကို design phase မှာ demand calculation, pipe sizing, pressure zoning, pump selection, tank sizing, valve location, access planning and coordination drawing တို့နဲ့ချိတ်ရမည်။ Site installation phase မှာ pipe material, slope, support, insulation, valve orientation, testing, flushing and commissioning ကိုစစ်ရမည်။

Building type အလိုက် plumbing requirement ပြောင်းနိုင်သည်။ Hotel, hospital, airport, office, residential tower, industrial building တို့တွင် water demand, redundancy, hygiene requirement and maintenance strategy မတူနိုင်ပါ။
`
    },
    {
      title: "Troubleshooting and Maintenance",
      body: `
Float Valve ကို troubleshoot လုပ်ရာတွင် symptom ကိုအရင်ကြည့်ရမည်။ Low pressure လား၊ no water လား၊ leakage လား၊ blockage လား၊ odor လား၊ overflow လား၊ pump trip လား၊ backflow risk လားဆိုတာခွဲရမည်။

ပြီးနောက် water source, tank level, pump status, valve position, pressure gauge, pipe route, fixture condition, strainer blockage, air lock, slope, vent condition, sensor signal and control panel alarm တို့ကိုစစ်ရမည်။ Guess မလုပ်ဘဲ measurement and inspection နဲ့ verify လုပ်ရမည်။
`
    }
  ]
};
