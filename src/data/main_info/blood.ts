import { SelectType } from "@models/CPType";

export const selectBloodList: SelectType[] = [
  { optionName: "A형", value: "1" },
  { optionName: "B형", value: "2" },
  { optionName: "O형", value: "3" },
  { optionName: "AB형", value: "4" },
];

Object.freeze(selectBloodList);
