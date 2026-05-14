export const troubleshootingCases = [
  { title: "Chiller low COP", cause: "Poor heat transfer, fouling, wrong sequencing, high condenser water temperature.", action: "Check delta-T, flow rate, condenser approach, compressor loading, and trend logs." },
  { title: "Unstable PID loop", cause: "High gain, sensor noise, actuator delay, wrong sampling time.", action: "Reduce Kp, tune Ki carefully, filter input, verify actuator response." },
  { title: "Motor overheating", cause: "Overload, phase imbalance, poor ventilation, bearing issue.", action: "Measure current, voltage imbalance, insulation resistance, and mechanical load." },
  { title: "Modbus communication failure", cause: "Wrong slave ID, baud rate, parity, wiring, register map.", action: "Check RS485 polarity, termination, settings, and poll registers manually." },
  { title: "Power quality issue", cause: "Harmonics, voltage sag, poor grounding, nonlinear loads.", action: "Use power analyzer, inspect THD, grounding, load profile, and mitigation options." }
];
