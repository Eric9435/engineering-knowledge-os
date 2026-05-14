import { bacnet_001 } from "./micro/bacnet-overview";
import { bacnet_002 } from "./micro/bacnet-ip";
import { bacnet_003 } from "./micro/bacnet-mstp";
import { bacnet_004 } from "./micro/bacnet-objects";
import { bacnet_005 } from "./micro/bacnet-points";
import { bacnet_006 } from "./micro/analog-input";
import { bacnet_007 } from "./micro/analog-output";
import { bacnet_008 } from "./micro/binary-input";
import { bacnet_009 } from "./micro/binary-output";
import { bacnet_010 } from "./micro/bacnet-device-id";
import { bacnet_011 } from "./micro/bacnet-addressing";
import { bacnet_012 } from "./micro/bacnet-network";
import { bacnet_013 } from "./micro/bacnet-integration";
import { bacnet_014 } from "./micro/bacnet-alarm";
import { bacnet_015 } from "./micro/bacnet-trend";
import { bacnet_016 } from "./micro/bacnet-troubleshooting";

export const bacnet = {
  id: "bacnet",
  title: "BACnet",
  summary:
    "Professional Smart Building and BMS Engineering knowledge architecture for BACnet, covering automation systems, protocols, analytics, monitoring, optimization and intelligent building operation.",

  microTopics: [
    bacnet_001, bacnet_002, bacnet_003, bacnet_004, bacnet_005, bacnet_006, bacnet_007, bacnet_008, bacnet_009, bacnet_010, bacnet_011, bacnet_012, bacnet_013, bacnet_014, bacnet_015, bacnet_016
  ]
};
