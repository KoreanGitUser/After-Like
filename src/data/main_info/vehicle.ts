import { SelectType } from "@models/CPType";

export const selectVehicleList: SelectType[] = [
  { optionName: "소형", value: "1" },
  { optionName: "준중형", value: "2" },
  { optionName: "중형", value: "3" },
  { optionName: "대형", value: "4" },
  { optionName: "수입", value: "5" },
  { optionName: "SUV", value: "6" },
  { optionName: "승합", value: "7" },
  { optionName: "없음", value: "9" },
  { optionName: "기타", value: "0" },
];

Object.freeze(selectVehicleList);
