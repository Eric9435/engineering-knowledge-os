export const cable_sizing_002 = {
  id: "load-current",
  title: "Load Current",
  flow: ["Power Source","Panel / Circuit","Protection","Load","Monitoring","Maintenance"],
  table: {
    headers: ["Layer","Meaning","Building Services Use"],
    rows: [
      ["Distribution","Load Current in building electrical services","MEP power delivery"],
      ["Protection","Breaker, fuse, relay, earthing","Safety and reliability"],
      ["Operation","Normal / emergency operation","Building operation"],
      ["Maintenance","Testing and troubleshooting","Facility management"]
    ]
  },
  sections: [
    {
      title: "Load Current ဆိုတာဘာလဲ",
      body: `
Load Current သည် Building Services အောက်ရှိ Electrical Building Services ထဲတွင် အရေးကြီးသော micro concept တစ်ခုဖြစ်သည်။ ဒီအပိုင်းသည် general Electrical Engineering theory မဟုတ်ဘဲ building ထဲမှာ power ကို safe, reliable, maintainable ဖြစ်အောင် distribute/control/protect လုပ်တဲ့ MEP electrical system ဖြစ်သည်။
`
    },
    {
      title: "Professional Building Services Meaning",
      body: `
ဒီ concept ကို design drawing, load schedule, panel schedule, cable route, breaker coordination, emergency power strategy, maintenance access, testing and commissioning workflow တို့နဲ့ချိတ်ပြီးနားလည်ရမည်။
`
    },
    {
      title: "Troubleshooting and Maintenance",
      body: `
Fault ဖြစ်လျှင် voltage, current, breaker status, cable condition, load balance, alarm, earthing condition, control signal and panel indication တို့ကို systematic စစ်ရမည်။
`
    }
  ]
};
