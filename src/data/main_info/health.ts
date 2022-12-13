import { SelectType } from "@models/CPType";

export const selectHealthList: SelectType[] = [
  { optionName: "숨쉬기 운동", value: "a" },
  { optionName: "월1-2회", value: "b" },
  { optionName: "주1-2회", value: "c" },
  { optionName: "주3회이상", value: "d" },
];

Object.freeze(selectHealthList);
