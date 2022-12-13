import { SelectType } from "@models/CPType";

export const selectSmokeList: SelectType[] = [
  { optionName: "비흡연", value: "a" },
  { optionName: "금연", value: "b" },
  { optionName: "흡연", value: "c" },
];

Object.freeze(selectSmokeList);
