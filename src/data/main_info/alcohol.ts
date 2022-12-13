import { SelectType } from "@models/CPType";

export const selectAlcoholList: SelectType[] = [
  { optionName: "음주안함", value: "a" },
  { optionName: "월1~2회", value: "b" },
  { optionName: "주1~2회", value: "c" },
  { optionName: "주3회 이상", value: "d" },
];

Object.freeze(selectAlcoholList);
