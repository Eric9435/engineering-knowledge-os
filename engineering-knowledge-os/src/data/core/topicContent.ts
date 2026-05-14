export const topicContent: Record<string, any> = {
  "thermodynamics-in-hvac": {
    title: "Thermodynamics in HVAC",
    summary:
      "HVAC thermodynamics ကို topic တစ်ခုတည်းမဟုတ်ဘဲ micro-category ခွဲပြီး heat, energy, refrigeration cycle, heat transfer, psychrometrics, COP, troubleshooting, software project အထိလေ့လာရန်။",

    flow: [
      "Room Heat Load",
      "Air Side Heat Transfer",
      "Cooling Coil",
      "Chilled Water Loop",
      "Evaporator",
      "Compressor",
      "Condenser",
      "Cooling Tower",
      "Atmosphere Heat Rejection"
    ],

    table: {
      headers: ["Micro Category", "Core Meaning", "HVAC Use"],
      rows: [
        ["Thermodynamic Basics", "Heat, temperature, energy ကိုခွဲနားလည်ခြင်း", "Cooling process ကို physics view နဲ့မြင်ရန်"],
        ["Laws of Thermodynamics", "Energy conservation and entropy", "Chiller plant energy balance နားလည်ရန်"],
        ["Refrigeration Cycle", "Evaporator, compressor, condenser, expansion valve", "Chiller operation and fault diagnosis"],
        ["Heat Transfer", "Conduction, convection, radiation", "Coil, duct, pipe, building envelope analysis"],
        ["Psychrometrics", "Moist air energy and humidity", "Comfort, dehumidification, ventilation"],
        ["Performance Metrics", "COP, kW/RT, delta-T, approach", "Energy optimization and plant efficiency"],
        ["Troubleshooting", "Abnormal thermodynamic behavior", "Low COP, high pressure, poor cooling diagnosis"],
        ["Software Modeling", "Formula + sensor data + Python analytics", "Dashboard, simulation, digital twin project"]
      ]
    },

    microCategories: [
      {
        title: "1. Thermodynamic Basics",
        description:
          "Heat, temperature, energy, work, system boundary, state variable တို့ကို HVAC context ထဲမှာအခြေခံနားလည်ရန်။",
        items: [
          "Heat vs Temperature",
          "Energy and Work",
          "System Boundary",
          "State Variables",
          "Pressure-Temperature Relation",
          "Specific Heat",
          "Thermal Equilibrium",
          "Sensible Heat and Latent Heat"
        ]
      },
      {
        title: "2. Laws of Thermodynamics",
        description:
          "HVAC cooling process က energy ကိုဖျက်တာမဟုတ်ဘဲ transfer လုပ်တာဖြစ်ကြောင်း physics law နဲ့နားလည်ရန်။",
        items: [
          "Zeroth Law",
          "First Law Energy Balance",
          "Second Law and Entropy",
          "Irreversibility",
          "Heat Engine vs Refrigerator",
          "Coefficient of Performance",
          "Energy Conservation in Chiller Plant"
        ]
      },
      {
        title: "3. Refrigeration Cycle",
        description:
          "Chiller system ရဲ့ core cycle ကို evaporator → compressor → condenser → expansion valve အဆင့်လိုက်နားလည်ရန်။",
        items: [
          "Evaporator Heat Absorption",
          "Compressor Work Input",
          "Condenser Heat Rejection",
          "Expansion Valve Pressure Drop",
          "Refrigerant Phase Change",
          "Superheat",
          "Subcooling",
          "Pressure-Enthalpy Thinking"
        ]
      },
      {
        title: "4. Heat Transfer in HVAC",
        description:
          "Air, water, refrigerant, coil, duct, pipe, wall တို့ကြား heat ဘယ်လိုရွှေ့သလဲကို engineering view နဲ့နားလည်ရန်။",
        items: [
          "Conduction",
          "Convection",
          "Radiation",
          "Cooling Coil Heat Transfer",
          "Heat Exchanger Effectiveness",
          "Thermal Resistance",
          "Overall Heat Transfer Coefficient",
          "Fouling and Heat Transfer Loss"
        ]
      },
      {
        title: "5. Psychrometric Thermodynamics",
        description:
          "Moist air ထဲမှာ sensible heat နဲ့ latent heat နှစ်မျိုးစလုံးရှိတာကို HVAC comfort analysis နဲ့ချိတ်ရန်။",
        items: [
          "Dry Bulb Temperature",
          "Wet Bulb Temperature",
          "Dew Point",
          "Relative Humidity",
          "Humidity Ratio",
          "Enthalpy of Moist Air",
          "Dehumidification",
          "Cooling Coil Process"
        ]
      },
      {
        title: "6. HVAC Performance Metrics",
        description:
          "Thermodynamics ကို plant efficiency နဲ့ချိတ်ပြီး COP, kW/RT, delta-T, approach temperature တို့နဲ့တိုင်းတာရန်။",
        items: [
          "COP Calculation",
          "kW per Ton",
          "Chilled Water Delta-T",
          "Condenser Approach",
          "Evaporator Approach",
          "Part Load Efficiency",
          "Plant Efficiency",
          "Energy Baseline"
        ]
      },
      {
        title: "7. Failure and Troubleshooting",
        description:
          "Thermodynamic abnormal behavior တွေကို fault diagnosis အဖြစ်သုံးရန်။",
        items: [
          "Low COP",
          "High Condenser Pressure",
          "Low Suction Pressure",
          "Low Delta-T Syndrome",
          "Fouled Heat Exchanger",
          "Poor Cooling Tower Performance",
          "Sensor Drift",
          "Wrong Setpoint"
        ]
      },
      {
        title: "8. Software / Scientific Computing",
        description:
          "Thermodynamics data ကို Python, dashboard, simulation, optimization project အဖြစ်တည်ဆောက်ရန်။",
        items: [
          "COP Calculator",
          "Cooling Load Model",
          "Chiller Trend Analyzer",
          "Fault Detection Rules",
          "Energy Dashboard",
          "Thermal Simulation",
          "Digital Twin Model",
          "Optimization Recommendation"
        ]
      }
    ],

    sections: [
      {
        title: "Thermodynamics in HVAC — Professional Overview",
        body: `
Thermodynamics in HVAC ဆိုတာ HVAC system ထဲမှာ heat, energy, work, temperature, pressure, phase change, moisture, efficiency တို့ ဘယ်လိုဆက်နွယ်သလဲကိုလေ့လာတဲ့ foundation ဖြစ်ပါတယ်။ HVAC engineer တစ်ယောက်အတွက် thermodynamics ကိုနားလည်ခြင်းဆိုတာ chiller ဘယ်လိုအေးစေသလဲဆိုတာသိရုံမဟုတ်ပါ။ Building ထဲက heat load ကနေ atmosphere ထဲ heat reject ဖြစ်သွားတဲ့ energy path တစ်ခုလုံးကိုနားလည်ခြင်းဖြစ်ပါတယ်။

HVAC cooling process မှာ “အေးစေတယ်” ဆိုတာ everyday language ဖြစ်ပါတယ်။ Engineering language နဲ့ဆိုရင် indoor space ထဲက unwanted heat ကို air side မှ water side သို့၊ water side မှ refrigerant side သို့၊ refrigerant side မှ condenser water side သို့၊ condenser water side မှ atmosphere သို့ရွှေ့ပေးတာဖြစ်ပါတယ်။ Heat ကိုဖျက်ပစ်တာမဟုတ်ဘဲ location ပြောင်းပေးတာဖြစ်ပါတယ်။

ဒီ topic ကို project system ထဲမှာ category ခွဲထားရခြင်းအကြောင်းရင်းက thermodynamics တစ်ခုတည်းအောက်မှာ micro-concepts အများကြီးပါဝင်လို့ပါ။ Heat vs temperature, first law, refrigeration cycle, heat transfer, psychrometrics, COP, troubleshooting, simulation, optimization တို့ကို သီးခြားအပိုင်းလိုက်လေ့လာမှ professional level ဖြစ်ပါတယ်။
`
      },
      {
        title: "Heat vs Temperature",
        body: `
Temperature ဆိုတာ material သို့ air တစ်ခုရဲ့ thermal state ကိုတိုင်းတာတဲ့ value ဖြစ်ပါတယ်။ Heat ဆိုတာ temperature difference ကြောင့် system တစ်ခုကနေ system တစ်ခုသို့စီးဆင်းတဲ့ energy ဖြစ်ပါတယ်။ HVAC မှာဒီနှစ်ခုကိုခွဲမသိရင် cooling load, coil performance, chiller capacity, COP calculation တို့ကိုမှန်မှန်မနားလည်နိုင်ပါ။

ဥပမာ room temperature 28°C ဆိုတာ temperature reading ဖြစ်ပါတယ်။ ဒါပေမယ့် room ထဲမှာ remove လုပ်ရမယ့် heat load ဘယ်လောက်ရှိသလဲဆိုတာက energy quantity ဖြစ်ပါတယ်။ People, lighting, equipment, solar radiation, outdoor air infiltration တို့က heat gain တွေဖြစ်ပါတယ်။ HVAC system က temperature number ကိုဖျက်တာမဟုတ်ဘဲ heat energy ကို remove လုပ်တာဖြစ်ပါတယ်။

ဒါကြောင့် engineering calculation မှာ temperature difference, mass flow rate, specific heat, enthalpy, humidity, airflow, water flow တို့ကိုထည့်တွက်ရပါတယ်။
`
      },
      {
        title: "First Law in Chiller Plant",
        body: `
First Law of Thermodynamics က energy conservation law ဖြစ်ပါတယ်။ Energy ကိုဖန်တီးလို့မရ၊ ဖျက်လို့မရ၊ form တစ်ခုကနေ form တစ်ခုသို့သာပြောင်းနိုင်ပါတယ်။ HVAC chiller plant မှာဒီ law ကအလွန်အရေးကြီးပါတယ်။

Evaporator က building chilled water loop ထဲက heat ကိုယူပါတယ်။ Compressor က electrical work input ပေးပါတယ်။ Condenser က evaporator မှယူလာတဲ့ heat plus compressor work ကို condenser water သို့ reject လုပ်ပါတယ်။ ထို့ကြောင့် condenser side မှ reject လုပ်ရမယ့် heat သည် evaporator cooling load ထက်ပိုများပါတယ်။

ဒီ point ကိုနားလည်ရင် cooling tower size ဘာကြောင့်လိုသလဲ၊ condenser water temperature မြင့်ရင် COP ဘာကြောင့်ကျသလဲ၊ compressor loading တိုးရင် heat rejection ဘာကြောင့်တိုးသလဲဆိုတာကိုမြင်နိုင်ပါတယ်။
`
      },
      {
        title: "Refrigeration Cycle",
        body: `
Vapor compression refrigeration cycle သည် HVAC chiller system ရဲ့အဓိက cycle ဖြစ်ပါတယ်။ အဓိက components လေးခုရှိပါတယ် — evaporator, compressor, condenser, expansion valve။

Evaporator မှာ refrigerant က chilled water ထဲက heat ကိုယူပြီး vapor ဖြစ်လာပါတယ်။ Compressor က low pressure vapor ကို high pressure high temperature vapor ဖြစ်အောင် compress လုပ်ပါတယ်။ Condenser မှာ refrigerant က condenser water ထဲသို့ heat reject လုပ်ပြီး liquid ဖြစ်လာပါတယ်။ Expansion valve မှာ pressure drop ဖြစ်ပြီး refrigerant သည် evaporator ထဲပြန်ဝင်နိုင်တဲ့ low pressure mixture ဖြစ်လာပါတယ်။

ဒီ cycle ကိုနားလည်မှ chiller fault diagnosis လုပ်နိုင်ပါတယ်။ Low suction pressure, high discharge pressure, insufficient cooling, short cycling, refrigerant undercharge, fouled condenser, poor evaporator flow စတာတွေကို cycle logic နဲ့ခွဲခြမ်းနိုင်ပါတယ်။
`
      },
      {
        title: "COP and Energy Optimization",
        body: `
COP ဆိုတာ Coefficient of Performance ဖြစ်ပြီး chiller efficiency ကိုတိုင်းတာတဲ့ metric ဖြစ်ပါတယ်။ COP = Cooling Output / Electrical Input ဖြစ်ပါတယ်။ COP မြင့်လေလေ chiller က electrical energy တစ်ယူနစ်နဲ့ cooling output ပိုများများထုတ်နိုင်လေလေဖြစ်ပါတယ်။

ဒါပေမယ့် COP ကို number တစ်ခုတည်းအနေနဲ့မကြည့်သင့်ပါ။ Load condition, chilled water supply temperature, condenser water supply temperature, outdoor wet bulb, compressor loading, evaporator fouling, condenser fouling, pump energy, cooling tower performance တို့နဲ့တွဲကြည့်ရပါတယ်။

Professional optimization မှာ chiller COP တင်မက plant COP ကိုပါကြည့်ရပါတယ်။ Plant COP ထဲမှာ chiller, chilled water pump, condenser water pump, cooling tower fan power တို့ပါဝင်နိုင်ပါတယ်။ ဒီ data တွေကို BMS trend log နဲ့ Python analytics သုံးပြီး dashboard တည်ဆောက်နိုင်ပါတယ်။
`
      },
      {
        title: "Software Project Connection",
        body: `
Thermodynamics in HVAC ကို software project အဖြစ်တည်ဆောက်မယ်ဆိုရင် Chiller Thermodynamic Analyzer လုပ်နိုင်ပါတယ်။ Input data အဖြစ် CHWS, CHWR, chilled water flow, chiller power, condenser water supply/return, outdoor wet bulb, equipment status, valve position, pump speed တို့ကိုယူနိုင်ပါတယ်။

Processing layer မှာ cooling load, delta-T, COP, kW/RT, condenser approach, abnormal pattern, energy baseline, fault rules တို့တွက်နိုင်ပါတယ်။ Output layer မှာ dashboard, graph, warning, recommendation, PDF report, optimization suggestion တို့ပြနိုင်ပါတယ်။

ဒီ project က Building Services + Automation + Programming + Scientific Computing ကိုတစ်ခုတည်းပေါင်းပေးတဲ့ professional portfolio project ဖြစ်ပါတယ်။
`
      }
    ]
  }
};

export function getTopicContent(topicId: string) {
  return topicContent[topicId] || {
    title: "Content Coming Soon",
    summary: "ဒီ topic အတွက် full Myanmar lecture ကိုထပ်ထည့်ရန်လိုပါတယ်။",
    flow: ["Concept", "Meaning", "Formula", "Engineering Use", "Troubleshooting", "Project"],
    sections: [
      {
        title: "Lecture Coming Soon",
        body: `
ဒီ topic အတွက် detailed Myanmar long lecture မထည့်ရသေးပါ။ Structure ကတော့မှန်နေပြီဖြစ်ပြီး နောက်ထပ် content pack နဲ့ topic တစ်ခုချင်းစီကို professional level long passage ထည့်နိုင်ပါတယ်။
`
      }
    ],
    table: {
      headers: ["Layer", "Meaning"],
      rows: [["Status", "Content not added yet"]]
    }
  };
}
