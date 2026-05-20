import { kinematics } from "./micro/kinematics";
import { dynamics } from "./micro/dynamics";
import { newtonian_mechanics } from "./micro/newtonian-mechanics";
import { friction_and_contact_forces } from "./micro/friction-and-contact-forces";
import { work_energy_power } from "./micro/work-energy-power";
import { lagrangian_and_hamiltonian_mechanics } from "./micro/lagrangian-and-hamiltonian-mechanics";

export const microTopics = [
  kinematics,
  dynamics,
  newtonian_mechanics,
  friction_and_contact_forces,
  work_energy_power,
  lagrangian_and_hamiltonian_mechanics
];
