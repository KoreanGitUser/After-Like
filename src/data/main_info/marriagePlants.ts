import { SelectType } from "@models/CPType";

export const selectMarriagePlanList: SelectType[] = [
  { optionName: "3달 이내", value: "3m" },
  { optionName: "6달 이내", value: "6m" },
  { optionName: "1년 이내", value: "1y" },
  { optionName: "언제든지", value: "a" },
];

Object.freeze(selectMarriagePlanList);
