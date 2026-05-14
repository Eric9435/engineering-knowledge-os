import { mdb_smdb_db_001 } from "./micro/mdb-smdb-db-overview";
import { mdb_smdb_db_002 } from "./micro/mdb";
import { mdb_smdb_db_003 } from "./micro/smdb";
import { mdb_smdb_db_004 } from "./micro/distribution-board";
import { mdb_smdb_db_005 } from "./micro/feeder";
import { mdb_smdb_db_006 } from "./micro/outgoing-circuit";
import { mdb_smdb_db_007 } from "./micro/panel-schedule";
import { mdb_smdb_db_008 } from "./micro/busbar";
import { mdb_smdb_db_009 } from "./micro/breaker-selection";
import { mdb_smdb_db_010 } from "./micro/panel-troubleshooting";

export const mdb_smdb_db = {
  id: "mdb-smdb-db",
  title: "Mdb Smdb Db",
  summary: "Building Services Electrical topic for Mdb Smdb Db, covering MEP distribution, protection, operation, testing and maintenance.",
  microTopics: [mdb_smdb_db_001, mdb_smdb_db_002, mdb_smdb_db_003, mdb_smdb_db_004, mdb_smdb_db_005, mdb_smdb_db_006, mdb_smdb_db_007, mdb_smdb_db_008, mdb_smdb_db_009, mdb_smdb_db_010]
};
