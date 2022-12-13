import { SelectType } from "@models/CPType";

export const selectReligionList: SelectType[] = [
  { optionName: "기독교", value: "1" },
  { optionName: "불교", value: "2" },
  { optionName: "천주교", value: "3" },
  { optionName: "원불교", value: "4" },
  { optionName: "무교", value: "5" },
  { optionName: "유교", value: "6" },
  { optionName: "도교", value: "7" },
  { optionName: "이슬람교", value: "8" },
  { optionName: "힌두교", value: "9" },
  { optionName: "기타", value: "0" },
];

Object.freeze(selectReligionList);
