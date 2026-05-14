import { profinet_ethernet_ip_001 } from "./micro/industrial-ethernet-overview";
import { profinet_ethernet_ip_002 } from "./micro/profinet-overview";
import { profinet_ethernet_ip_003 } from "./micro/ethernet-ip-overview";
import { profinet_ethernet_ip_004 } from "./micro/plc-network";
import { profinet_ethernet_ip_005 } from "./micro/device-name";
import { profinet_ethernet_ip_006 } from "./micro/ip-addressing";
import { profinet_ethernet_ip_007 } from "./micro/real-time-ethernet";
import { profinet_ethernet_ip_008 } from "./micro/io-device";
import { profinet_ethernet_ip_009 } from "./micro/io-controller";
import { profinet_ethernet_ip_010 } from "./micro/gsd-file";
import { profinet_ethernet_ip_011 } from "./micro/eds-file";
import { profinet_ethernet_ip_012 } from "./micro/network-topology";
import { profinet_ethernet_ip_013 } from "./micro/switch";
import { profinet_ethernet_ip_014 } from "./micro/vlan";
import { profinet_ethernet_ip_015 } from "./micro/network-diagnostics";
import { profinet_ethernet_ip_016 } from "./micro/communication-fault";
import { profinet_ethernet_ip_017 } from "./micro/industrial-network-security";

export const profinet_ethernet_ip = {
  id: "profinet-ethernet-ip",
  title: "PROFINET and EtherNet/IP",
  summary:
    "Very heavy and complex Automation knowledge architecture for PROFINET and EtherNet/IP, covering PLC, SCADA, HMI, industrial networks, sensors, actuators, control logic, troubleshooting and optimization.",

  microTopics: [
    profinet_ethernet_ip_001, profinet_ethernet_ip_002, profinet_ethernet_ip_003, profinet_ethernet_ip_004, profinet_ethernet_ip_005, profinet_ethernet_ip_006, profinet_ethernet_ip_007, profinet_ethernet_ip_008, profinet_ethernet_ip_009, profinet_ethernet_ip_010, profinet_ethernet_ip_011, profinet_ethernet_ip_012, profinet_ethernet_ip_013, profinet_ethernet_ip_014, profinet_ethernet_ip_015, profinet_ethernet_ip_016, profinet_ethernet_ip_017
  ]
};
