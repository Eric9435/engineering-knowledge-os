export const sensibleLatentHeat = {
  id: "sensible-latent-heat",
  title: "Sensible Heat and Latent Heat",
  flow: [
    "Indoor Load",
    "Sensible Heat",
    "Temperature Change",
    "Latent Heat",
    "Moisture Removal",
    "Comfort Control"
  ],
  table: {
    headers: ["Heat Type", "Meaning", "HVAC Example"],
    rows: [
      ["Sensible Heat", "Heat that changes temperature", "Room temperature rises from equipment"],
      ["Latent Heat", "Heat related to moisture / phase change", "Humidity removal at cooling coil"],
      ["Sensible Cooling", "Temperature reduction", "Air gets colder across coil"],
      ["Latent Cooling", "Moisture removal", "Condensation on cooling coil"]
    ]
  },
  sections: [
    {
      title: "Sensible Heat ဆိုတာဘာလဲ",
      body: `
Sensible heat ဆိုတာ temperature ကိုပြောင်းစေတဲ့ heat ဖြစ်ပါတယ်။ Thermometer နဲ့တိုင်းတဲ့ temperature reading ပြောင်းရင် sensible heat effect ဖြစ်ပါတယ်။ HVAC မှာ people, lighting, computers, motors, solar radiation, walls, glass surfaces တို့က sensible heat source ဖြစ်နိုင်ပါတယ်။

Room temperature မြင့်လာတာ၊ supply air temperature လျှော့ချတာ၊ chilled water coil က air temperature ကိုလျှော့တာတွေက sensible heat transfer နဲ့ဆိုင်ပါတယ်။
`
    },
    {
      title: "Latent Heat ဆိုတာဘာလဲ",
      body: `
Latent heat ဆိုတာ moisture / phase change နဲ့ဆိုင်တဲ့ heat ဖြစ်ပါတယ်။ Water vapor ကို liquid water အဖြစ် condensation ဖြစ်စေဖို့ heat remove လုပ်ရပါတယ်။ ဒီ heat ကို latent heat လို့ခေါ်ပါတယ်။

HVAC cooling coil မှာ air temperature ကို dew point အောက်သို့လျှော့နိုင်ရင် air ထဲက moisture က coil surface ပေါ်မှာ condensation ဖြစ်ပါတယ်။ ဒီ process က dehumidification ဖြစ်ပါတယ်။
`
    },
    {
      title: "Why It Matters in Comfort",
      body: `
Room temperature 24°C ဖြစ်နေပေမယ့် relative humidity မြင့်နေရင် လူတွေ uncomfortable ဖြစ်နိုင်ပါတယ်။ အခန်းအေးပေမယ့်စိုစွတ်နေတဲ့ခံစားချက်ရနိုင်ပါတယ်။ ဒါကြောင့် HVAC system က sensible cooling တင်မက latent cooling ကိုပါ handle လုပ်နိုင်ရပါမယ်။

Hospital, airport, hotel, office, data center, clean room စတဲ့ buildings တွေမှာ humidity control က IAQ, comfort, equipment safety, mold prevention အတွက်အရေးကြီးပါတယ်။
`
    },
    {
      title: "Engineering Calculation View",
      body: `
Cooling load calculation မှာ total cooling load = sensible load + latent load ဖြစ်ပါတယ်။ Sensible load ကို temperature difference နဲ့တွက်နိုင်ပြီး latent load ကို moisture removal rate နဲ့တွက်နိုင်ပါတယ်။

Professional HVAC design မှာ sensible heat ratio (SHR) ကိုသုံးပြီး system က sensible load နဲ့ latent load ကိုဘယ်လိုခွဲ handle လုပ်မလဲဆိုတာစဉ်းစားပါတယ်။
`
    }
  ]
};
