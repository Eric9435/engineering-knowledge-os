import { international_iso } from "./codes/international/iso";
import { international_iec } from "./codes/international/iec";
import { international_ieee } from "./codes/international/ieee";
import { international_ansi } from "./codes/international/ansi";
import { international_en } from "./codes/international/en";
import { international_bs } from "./codes/international/bs";
import { international_din } from "./codes/international/din";
import { international_jis } from "./codes/international/jis";
import { international_ks } from "./codes/international/ks";
import { international_as_nzs } from "./codes/international/as-nzs";
import { international_astm } from "./codes/international/astm";
import { international_asme } from "./codes/international/asme";
import { international_isa } from "./codes/international/isa";
import { international_api } from "./codes/international/api";
import { international_nema } from "./codes/international/nema";
import { international_ul } from "./codes/international/ul";
import { international_nist } from "./codes/international/nist";
import { singapore_bca } from "./codes/singapore/bca";
import { singapore_singapore_building_control_act } from "./codes/singapore/singapore-building-control-act";
import { singapore_corenet } from "./codes/singapore/corenet";
import { singapore_corenet_x } from "./codes/singapore/corenet-x";
import { singapore_green_mark } from "./codes/singapore/green-mark";
import { singapore_ss_553 } from "./codes/singapore/ss-553";
import { singapore_tr_25 } from "./codes/singapore/tr-25";
import { singapore_singapore_fire_code } from "./codes/singapore/singapore-fire-code";
import { singapore_scdf_fire_code } from "./codes/singapore/scdf-fire-code";
import { singapore_ss_575 } from "./codes/singapore/ss-575";
import { singapore_ss_en_12845 } from "./codes/singapore/ss-en-12845";
import { singapore_pub_code_of_practice } from "./codes/singapore/pub-code-of-practice";
import { singapore_ss_636 } from "./codes/singapore/ss-636";
import { singapore_ss_554 } from "./codes/singapore/ss-554";
import { singapore_ss_638 } from "./codes/singapore/ss-638";
import { singapore_ema_regulations } from "./codes/singapore/ema-regulations";
import { singapore_ss_531 } from "./codes/singapore/ss-531";
import { singapore_tr_19 } from "./codes/singapore/tr-19";
import { singapore_tr_75 } from "./codes/singapore/tr-75";
import { singapore_ss_591 } from "./codes/singapore/ss-591";
import { singapore_singapore_green_plan_2030 } from "./codes/singapore/singapore-green-plan-2030";
import { singapore_ss_564 } from "./codes/singapore/ss-564";
import { singapore_ss_550 } from "./codes/singapore/ss-550";
import { singapore_ss_558 } from "./codes/singapore/ss-558";
import { singapore_ss_619 } from "./codes/singapore/ss-619";
import { singapore_ss_530 } from "./codes/singapore/ss-530";
import { singapore_wsh_act } from "./codes/singapore/wsh-act";
import { singapore_caas_standards } from "./codes/singapore/caas-standards";
import { singapore_lta_standards } from "./codes/singapore/lta-standards";
import { singapore_mpa_standards } from "./codes/singapore/mpa-standards";
import { china_gb } from "./codes/china/gb";
import { china_jgj } from "./codes/china/jgj";
import { china_gb_50016 } from "./codes/china/gb-50016";
import { china_gb_50019 } from "./codes/china/gb-50019";
import { china_gb_50054 } from "./codes/china/gb-50054";
import { china_gb_50736 } from "./codes/china/gb-50736";
import { china_gb_50116 } from "./codes/china/gb-50116";
import { china_gb_50974 } from "./codes/china/gb-50974";
import { hvac_ashrae_55 } from "./codes/hvac/ashrae-55";
import { hvac_ashrae_62_1 } from "./codes/hvac/ashrae-62-1";
import { hvac_ashrae_62_2 } from "./codes/hvac/ashrae-62-2";
import { hvac_ashrae_90_1 } from "./codes/hvac/ashrae-90-1";
import { hvac_ashrae_15 } from "./codes/hvac/ashrae-15";
import { hvac_ashrae_guideline_0 } from "./codes/hvac/ashrae-guideline-0";
import { hvac_ashrae_189_1 } from "./codes/hvac/ashrae-189-1";
import { hvac_smacna } from "./codes/hvac/smacna";
import { hvac_amca } from "./codes/hvac/amca";
import { hvac_ahri_550_590 } from "./codes/hvac/ahri-550-590";
import { hvac_iso_14644 } from "./codes/hvac/iso-14644";
import { hvac_eurovent } from "./codes/hvac/eurovent";
import { hvac_cti } from "./codes/hvac/cti";
import { fire_nfpa_13 } from "./codes/fire/nfpa-13";
import { fire_nfpa_20 } from "./codes/fire/nfpa-20";
import { fire_nfpa_72 } from "./codes/fire/nfpa-72";
import { fire_nfpa_92 } from "./codes/fire/nfpa-92";
import { fire_nfpa_101 } from "./codes/fire/nfpa-101";
import { fire_nfpa_80 } from "./codes/fire/nfpa-80";
import { fire_nfpa_10 } from "./codes/fire/nfpa-10";
import { fire_nfpa_14 } from "./codes/fire/nfpa-14";
import { fire_nfpa_750 } from "./codes/fire/nfpa-750";
import { fire_nfpa_2001 } from "./codes/fire/nfpa-2001";
import { fire_nfpa_70e } from "./codes/fire/nfpa-70e";
import { fire_nfpa_68 } from "./codes/fire/nfpa-68";
import { fire_nfpa_69 } from "./codes/fire/nfpa-69";
import { fire_ul_fire_standards } from "./codes/fire/ul-fire-standards";
import { fire_fm_global } from "./codes/fire/fm-global";
import { plumbing_ipc } from "./codes/plumbing/ipc";
import { plumbing_upc } from "./codes/plumbing/upc";
import { plumbing_bs_en_12056 } from "./codes/plumbing/bs-en-12056";
import { plumbing_watersense } from "./codes/plumbing/watersense";
import { plumbing_nfpa_99 } from "./codes/plumbing/nfpa-99";
import { plumbing_asse } from "./codes/plumbing/asse";
import { electrical_iec_60364 } from "./codes/electrical/iec-60364";
import { electrical_iec_62271 } from "./codes/electrical/iec-62271";
import { electrical_iec_62305 } from "./codes/electrical/iec-62305";
import { electrical_iec_60255 } from "./codes/electrical/iec-60255";
import { electrical_iec_60076 } from "./codes/electrical/iec-60076";
import { electrical_iec_60034 } from "./codes/electrical/iec-60034";
import { electrical_iec_60502 } from "./codes/electrical/iec-60502";
import { electrical_ieee_519 } from "./codes/electrical/ieee-519";
import { electrical_ieee_80 } from "./codes/electrical/ieee-80";
import { electrical_ieee_1584 } from "./codes/electrical/ieee-1584";
import { electrical_nec } from "./codes/electrical/nec";
import { electrical_bs_7671 } from "./codes/electrical/bs-7671";
import { electrical_vde } from "./codes/electrical/vde";
import { electrical_en_50160 } from "./codes/electrical/en-50160";
import { power_systems_nerc } from "./codes/power-systems/nerc";
import { power_systems_ieee_smart_grid } from "./codes/power-systems/ieee-smart-grid";
import { power_systems_iec_hvdc } from "./codes/power-systems/iec-hvdc";
import { power_systems_iec_substation_standards } from "./codes/power-systems/iec-substation-standards";
import { power_systems_iec_renewable_standards } from "./codes/power-systems/iec-renewable-standards";
import { power_systems_iec_61850 } from "./codes/power-systems/iec-61850";
import { automation_iec_61131 } from "./codes/automation/iec-61131";
import { automation_isa_88 } from "./codes/automation/isa-88";
import { automation_isa_95 } from "./codes/automation/isa-95";
import { automation_iec_62443 } from "./codes/automation/iec-62443";
import { automation_iec_61508 } from "./codes/automation/iec-61508";
import { automation_iec_61511 } from "./codes/automation/iec-61511";
import { automation_opc_ua } from "./codes/automation/opc-ua";
import { automation_profibus } from "./codes/automation/profibus";
import { automation_profinet } from "./codes/automation/profinet";
import { automation_bacnet } from "./codes/automation/bacnet";
import { automation_knx } from "./codes/automation/knx";
import { automation_mqtt } from "./codes/automation/mqtt";
import { automation_isa100 } from "./codes/automation/isa100";
import { automation_wirelesshart } from "./codes/automation/wirelesshart";
import { automation_modbus } from "./codes/automation/modbus";
import { smart_building_iso_16484 } from "./codes/smart-building/iso-16484";
import { smart_building_iso_23247 } from "./codes/smart-building/iso-23247";
import { smart_building_bacnet } from "./codes/smart-building/bacnet";
import { smart_building_knx } from "./codes/smart-building/knx";
import { smart_building_lonworks } from "./codes/smart-building/lonworks";
import { networking_ieee_802_3 } from "./codes/networking/ieee-802-3";
import { networking_ieee_802_11 } from "./codes/networking/ieee-802-11";
import { networking_tia_eia } from "./codes/networking/tia-eia";
import { networking_rfc_tcp_ip } from "./codes/networking/rfc-tcp-ip";
import { networking_foa } from "./codes/networking/foa";
import { data_center_tia_942 } from "./codes/data-center/tia-942";
import { data_center_uptime_institute } from "./codes/data-center/uptime-institute";
import { data_center_ashrae_tc9_9 } from "./codes/data-center/ashrae-tc9-9";
import { software_iso_iec_12207 } from "./codes/software/iso-iec-12207";
import { software_iso_iec_25010 } from "./codes/software/iso-iec-25010";
import { software_openapi } from "./codes/software/openapi";
import { software_owasp } from "./codes/software/owasp";
import { software_oci } from "./codes/software/oci";
import { software_cncf } from "./codes/software/cncf";
import { scientific_computing_ieee_754 } from "./codes/scientific-computing/ieee-754";
import { scientific_computing_mpi } from "./codes/scientific-computing/mpi";
import { scientific_computing_openmp } from "./codes/scientific-computing/openmp";
import { scientific_computing_cuda } from "./codes/scientific-computing/cuda";
import { scientific_computing_blas } from "./codes/scientific-computing/blas";
import { scientific_computing_lapack } from "./codes/scientific-computing/lapack";
import { scientific_computing_hdf5 } from "./codes/scientific-computing/hdf5";
import { scientific_computing_netcdf } from "./codes/scientific-computing/netcdf";
import { scientific_computing_openfoam } from "./codes/scientific-computing/openfoam";
import { ai_ml_iso_ai_standards } from "./codes/ai-ml/iso-ai-standards";
import { ai_ml_nist_ai_rmf } from "./codes/ai-ml/nist-ai-rmf";
import { ai_ml_onnx } from "./codes/ai-ml/onnx";
import { ai_ml_mlflow } from "./codes/ai-ml/mlflow";
import { structural_asce_7 } from "./codes/structural/asce-7";
import { structural_aci_318 } from "./codes/structural/aci-318";
import { structural_aisc } from "./codes/structural/aisc";
import { structural_eurocode } from "./codes/structural/eurocode";
import { mechanical_asme_bpvc } from "./codes/mechanical/asme-bpvc";
import { mechanical_asme_b31 } from "./codes/mechanical/asme-b31";
import { mechanical_api_610 } from "./codes/mechanical/api-610";
import { mechanical_aws } from "./codes/mechanical/aws";
import { oil_gas_api_pipeline_standards } from "./codes/oil-gas/api-pipeline-standards";
import { oil_gas_iecex } from "./codes/oil-gas/iecex";
import { oil_gas_dnv_offshore } from "./codes/oil-gas/dnv-offshore";
import { energy_leed } from "./codes/energy/leed";
import { energy_breeam } from "./codes/energy/breeam";
import { energy_green_mark } from "./codes/energy/green-mark";
import { semiconductor_semi } from "./codes/semiconductor/semi";
import { semiconductor_jedec } from "./codes/semiconductor/jedec";
import { railway_en_50128 } from "./codes/railway/en-50128";
import { railway_en_50129 } from "./codes/railway/en-50129";
import { aviation_icao } from "./codes/aviation/icao";
import { aviation_faa } from "./codes/aviation/faa";
import { marine_imo } from "./codes/marine/imo";
import { marine_dnv } from "./codes/marine/dnv";
import { medical_iec_60601 } from "./codes/medical/iec-60601";
import { automotive_iso_26262 } from "./codes/automotive/iso-26262";
import { automotive_autosar } from "./codes/automotive/autosar";
import { nuclear_iaea } from "./codes/nuclear/iaea";
import { bim_ifc } from "./codes/bim/ifc";
import { bim_buildingsmart } from "./codes/bim/buildingsmart";
import { gis_ogc } from "./codes/gis/ogc";
import { telecom_3gpp } from "./codes/telecom/3gpp";
import { telecom_etsi } from "./codes/telecom/etsi";
import { embedded_misra_c } from "./codes/embedded/misra-c";
import { embedded_posix } from "./codes/embedded/posix";
import { renewable_energy_iec_solar } from "./codes/renewable-energy/iec-solar";
import { renewable_energy_iec_wind } from "./codes/renewable-energy/iec-wind";
import { water_treatment_awwa } from "./codes/water-treatment/awwa";
import { elevator_en_81 } from "./codes/elevator/en-81";
import { lighting_ies } from "./codes/lighting/ies";
import { acoustics_iso_acoustic } from "./codes/acoustics/iso-acoustic";
import { vibration_iso_vibration } from "./codes/vibration/iso-vibration";
import { quantum_openqasm } from "./codes/quantum/openqasm";
import { quantum_qiskit } from "./codes/quantum/qiskit";
import { space_nasa_standards } from "./codes/space/nasa-standards";
import { space_esa_standards } from "./codes/space/esa-standards";
import { defense_mil_std } from "./codes/defense/mil-std";
import { battery_ev_ul_9540 } from "./codes/battery-ev/ul-9540";
import { battery_ev_iec_61851 } from "./codes/battery-ev/iec-61851";
import { hydrogen_iso_hydrogen } from "./codes/hydrogen/iso-hydrogen";
import { pharma_gmp } from "./codes/pharma/gmp";
import { food_haccp } from "./codes/food/haccp";
import { mining_mining_safety_standards } from "./codes/mining/mining-safety-standards";
import { airports_icao_annexes } from "./codes/airports/icao-annexes";
import { emc_cispr } from "./codes/emc/cispr";
import { audio_aes } from "./codes/audio/aes";

export const codeRegistry: Record<string, any> = {
  "international-iso": international_iso,
  "international-iec": international_iec,
  "international-ieee": international_ieee,
  "international-ansi": international_ansi,
  "international-en": international_en,
  "international-bs": international_bs,
  "international-din": international_din,
  "international-jis": international_jis,
  "international-ks": international_ks,
  "international-as-nzs": international_as_nzs,
  "international-astm": international_astm,
  "international-asme": international_asme,
  "international-isa": international_isa,
  "international-api": international_api,
  "international-nema": international_nema,
  "international-ul": international_ul,
  "international-nist": international_nist,
  "singapore-bca": singapore_bca,
  "singapore-singapore-building-control-act": singapore_singapore_building_control_act,
  "singapore-corenet": singapore_corenet,
  "singapore-corenet-x": singapore_corenet_x,
  "singapore-green-mark": singapore_green_mark,
  "singapore-ss-553": singapore_ss_553,
  "singapore-tr-25": singapore_tr_25,
  "singapore-singapore-fire-code": singapore_singapore_fire_code,
  "singapore-scdf-fire-code": singapore_scdf_fire_code,
  "singapore-ss-575": singapore_ss_575,
  "singapore-ss-en-12845": singapore_ss_en_12845,
  "singapore-pub-code-of-practice": singapore_pub_code_of_practice,
  "singapore-ss-636": singapore_ss_636,
  "singapore-ss-554": singapore_ss_554,
  "singapore-ss-638": singapore_ss_638,
  "singapore-ema-regulations": singapore_ema_regulations,
  "singapore-ss-531": singapore_ss_531,
  "singapore-tr-19": singapore_tr_19,
  "singapore-tr-75": singapore_tr_75,
  "singapore-ss-591": singapore_ss_591,
  "singapore-singapore-green-plan-2030": singapore_singapore_green_plan_2030,
  "singapore-ss-564": singapore_ss_564,
  "singapore-ss-550": singapore_ss_550,
  "singapore-ss-558": singapore_ss_558,
  "singapore-ss-619": singapore_ss_619,
  "singapore-ss-530": singapore_ss_530,
  "singapore-wsh-act": singapore_wsh_act,
  "singapore-caas-standards": singapore_caas_standards,
  "singapore-lta-standards": singapore_lta_standards,
  "singapore-mpa-standards": singapore_mpa_standards,
  "china-gb": china_gb,
  "china-jgj": china_jgj,
  "china-gb-50016": china_gb_50016,
  "china-gb-50019": china_gb_50019,
  "china-gb-50054": china_gb_50054,
  "china-gb-50736": china_gb_50736,
  "china-gb-50116": china_gb_50116,
  "china-gb-50974": china_gb_50974,
  "hvac-ashrae-55": hvac_ashrae_55,
  "hvac-ashrae-62-1": hvac_ashrae_62_1,
  "hvac-ashrae-62-2": hvac_ashrae_62_2,
  "hvac-ashrae-90-1": hvac_ashrae_90_1,
  "hvac-ashrae-15": hvac_ashrae_15,
  "hvac-ashrae-guideline-0": hvac_ashrae_guideline_0,
  "hvac-ashrae-189-1": hvac_ashrae_189_1,
  "hvac-smacna": hvac_smacna,
  "hvac-amca": hvac_amca,
  "hvac-ahri-550-590": hvac_ahri_550_590,
  "hvac-iso-14644": hvac_iso_14644,
  "hvac-eurovent": hvac_eurovent,
  "hvac-cti": hvac_cti,
  "fire-nfpa-13": fire_nfpa_13,
  "fire-nfpa-20": fire_nfpa_20,
  "fire-nfpa-72": fire_nfpa_72,
  "fire-nfpa-92": fire_nfpa_92,
  "fire-nfpa-101": fire_nfpa_101,
  "fire-nfpa-80": fire_nfpa_80,
  "fire-nfpa-10": fire_nfpa_10,
  "fire-nfpa-14": fire_nfpa_14,
  "fire-nfpa-750": fire_nfpa_750,
  "fire-nfpa-2001": fire_nfpa_2001,
  "fire-nfpa-70e": fire_nfpa_70e,
  "fire-nfpa-68": fire_nfpa_68,
  "fire-nfpa-69": fire_nfpa_69,
  "fire-ul-fire-standards": fire_ul_fire_standards,
  "fire-fm-global": fire_fm_global,
  "plumbing-ipc": plumbing_ipc,
  "plumbing-upc": plumbing_upc,
  "plumbing-bs-en-12056": plumbing_bs_en_12056,
  "plumbing-watersense": plumbing_watersense,
  "plumbing-nfpa-99": plumbing_nfpa_99,
  "plumbing-asse": plumbing_asse,
  "electrical-iec-60364": electrical_iec_60364,
  "electrical-iec-62271": electrical_iec_62271,
  "electrical-iec-62305": electrical_iec_62305,
  "electrical-iec-60255": electrical_iec_60255,
  "electrical-iec-60076": electrical_iec_60076,
  "electrical-iec-60034": electrical_iec_60034,
  "electrical-iec-60502": electrical_iec_60502,
  "electrical-ieee-519": electrical_ieee_519,
  "electrical-ieee-80": electrical_ieee_80,
  "electrical-ieee-1584": electrical_ieee_1584,
  "electrical-nec": electrical_nec,
  "electrical-bs-7671": electrical_bs_7671,
  "electrical-vde": electrical_vde,
  "electrical-en-50160": electrical_en_50160,
  "power-systems-nerc": power_systems_nerc,
  "power-systems-ieee-smart-grid": power_systems_ieee_smart_grid,
  "power-systems-iec-hvdc": power_systems_iec_hvdc,
  "power-systems-iec-substation-standards": power_systems_iec_substation_standards,
  "power-systems-iec-renewable-standards": power_systems_iec_renewable_standards,
  "power-systems-iec-61850": power_systems_iec_61850,
  "automation-iec-61131": automation_iec_61131,
  "automation-isa-88": automation_isa_88,
  "automation-isa-95": automation_isa_95,
  "automation-iec-62443": automation_iec_62443,
  "automation-iec-61508": automation_iec_61508,
  "automation-iec-61511": automation_iec_61511,
  "automation-opc-ua": automation_opc_ua,
  "automation-profibus": automation_profibus,
  "automation-profinet": automation_profinet,
  "automation-bacnet": automation_bacnet,
  "automation-knx": automation_knx,
  "automation-mqtt": automation_mqtt,
  "automation-isa100": automation_isa100,
  "automation-wirelesshart": automation_wirelesshart,
  "automation-modbus": automation_modbus,
  "smart-building-iso-16484": smart_building_iso_16484,
  "smart-building-iso-23247": smart_building_iso_23247,
  "smart-building-bacnet": smart_building_bacnet,
  "smart-building-knx": smart_building_knx,
  "smart-building-lonworks": smart_building_lonworks,
  "networking-ieee-802-3": networking_ieee_802_3,
  "networking-ieee-802-11": networking_ieee_802_11,
  "networking-tia-eia": networking_tia_eia,
  "networking-rfc-tcp-ip": networking_rfc_tcp_ip,
  "networking-foa": networking_foa,
  "data-center-tia-942": data_center_tia_942,
  "data-center-uptime-institute": data_center_uptime_institute,
  "data-center-ashrae-tc9-9": data_center_ashrae_tc9_9,
  "software-iso-iec-12207": software_iso_iec_12207,
  "software-iso-iec-25010": software_iso_iec_25010,
  "software-openapi": software_openapi,
  "software-owasp": software_owasp,
  "software-oci": software_oci,
  "software-cncf": software_cncf,
  "scientific-computing-ieee-754": scientific_computing_ieee_754,
  "scientific-computing-mpi": scientific_computing_mpi,
  "scientific-computing-openmp": scientific_computing_openmp,
  "scientific-computing-cuda": scientific_computing_cuda,
  "scientific-computing-blas": scientific_computing_blas,
  "scientific-computing-lapack": scientific_computing_lapack,
  "scientific-computing-hdf5": scientific_computing_hdf5,
  "scientific-computing-netcdf": scientific_computing_netcdf,
  "scientific-computing-openfoam": scientific_computing_openfoam,
  "ai-ml-iso-ai-standards": ai_ml_iso_ai_standards,
  "ai-ml-nist-ai-rmf": ai_ml_nist_ai_rmf,
  "ai-ml-onnx": ai_ml_onnx,
  "ai-ml-mlflow": ai_ml_mlflow,
  "structural-asce-7": structural_asce_7,
  "structural-aci-318": structural_aci_318,
  "structural-aisc": structural_aisc,
  "structural-eurocode": structural_eurocode,
  "mechanical-asme-bpvc": mechanical_asme_bpvc,
  "mechanical-asme-b31": mechanical_asme_b31,
  "mechanical-api-610": mechanical_api_610,
  "mechanical-aws": mechanical_aws,
  "oil-gas-api-pipeline-standards": oil_gas_api_pipeline_standards,
  "oil-gas-iecex": oil_gas_iecex,
  "oil-gas-dnv-offshore": oil_gas_dnv_offshore,
  "energy-leed": energy_leed,
  "energy-breeam": energy_breeam,
  "energy-green-mark": energy_green_mark,
  "semiconductor-semi": semiconductor_semi,
  "semiconductor-jedec": semiconductor_jedec,
  "railway-en-50128": railway_en_50128,
  "railway-en-50129": railway_en_50129,
  "aviation-icao": aviation_icao,
  "aviation-faa": aviation_faa,
  "marine-imo": marine_imo,
  "marine-dnv": marine_dnv,
  "medical-iec-60601": medical_iec_60601,
  "automotive-iso-26262": automotive_iso_26262,
  "automotive-autosar": automotive_autosar,
  "nuclear-iaea": nuclear_iaea,
  "bim-ifc": bim_ifc,
  "bim-buildingsmart": bim_buildingsmart,
  "gis-ogc": gis_ogc,
  "telecom-3gpp": telecom_3gpp,
  "telecom-etsi": telecom_etsi,
  "embedded-misra-c": embedded_misra_c,
  "embedded-posix": embedded_posix,
  "renewable-energy-iec-solar": renewable_energy_iec_solar,
  "renewable-energy-iec-wind": renewable_energy_iec_wind,
  "water-treatment-awwa": water_treatment_awwa,
  "elevator-en-81": elevator_en_81,
  "lighting-ies": lighting_ies,
  "acoustics-iso-acoustic": acoustics_iso_acoustic,
  "vibration-iso-vibration": vibration_iso_vibration,
  "quantum-openqasm": quantum_openqasm,
  "quantum-qiskit": quantum_qiskit,
  "space-nasa-standards": space_nasa_standards,
  "space-esa-standards": space_esa_standards,
  "defense-mil-std": defense_mil_std,
  "battery-ev-ul-9540": battery_ev_ul_9540,
  "battery-ev-iec-61851": battery_ev_iec_61851,
  "hydrogen-iso-hydrogen": hydrogen_iso_hydrogen,
  "pharma-gmp": pharma_gmp,
  "food-haccp": food_haccp,
  "mining-mining-safety-standards": mining_mining_safety_standards,
  "airports-icao-annexes": airports_icao_annexes,
  "emc-cispr": emc_cispr,
  "audio-aes": audio_aes,
};
