import { SelectType } from "@models/CPType";

export const selectSalaryList: SelectType[] = [
  { optionName: "적음", value: "1" },
  { optionName: "2천 미만 ", value: "12" },
  { optionName: "2천대", value: "2" },
  { optionName: "3천대", value: "3" },
  { optionName: "4천대", value: "4" },
  { optionName: "5천대", value: "5" },
  { optionName: "6천대", value: "6" },
  { optionName: "7천대", value: "7" },
  { optionName: "8천대", value: "8" },
  { optionName: "9천대", value: "9" },
  { optionName: "1-3억", value: "10" },
  { optionName: "3-5억", value: "13" },
  { optionName: "5-10억", value: "14" },
  { optionName: "10-20 억", value: "15" },
  { optionName: "20-30 억", value: "18" },
  { optionName: "30억 이 상", value: "16" },
];

Object.freeze(selectSalaryList);
