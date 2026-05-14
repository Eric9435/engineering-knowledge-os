export const pythonExamples = [
  {
    title: "PID Controller",
    language: "python",
    code: `kp = 2.0
ki = 0.5
kd = 0.1

setpoint = 24
temp = 30

error = setpoint - temp

print("Error:", error)`
  },
  {
    title: "HVAC COP Calculation",
    language: "python",
    code: `cooling_kw = 350
power_kw = 120

cop = cooling_kw / power_kw

print("COP =", cop)`
  },
  {
    title: "Ohm's Law",
    language: "python",
    code: `voltage = 230
resistance = 10

current = voltage / resistance

print(current)`
  }
];
