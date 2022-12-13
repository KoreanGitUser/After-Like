import { SelectType } from "@models/CPType";

export const selectEducationList: SelectType[] = [
  { optionName: "초/중학교", value: "1" },
  { optionName: "고등학교", value: "2" },
  { optionName: "대학교(4년)", value: "3" },
  { optionName: "대학원", value: "4" },
  { optionName: "박사과정", value: "5" },
  { optionName: "대학교(2년)", value: "6" },
  { optionName: "대학재학", value: "7" },
  { optionName: "대학중퇴", value: "8" },
  { optionName: "대학원재학", value: "9" },
  { optionName: "대학원중퇴", value: "10" },
  { optionName: "박사학위", value: "11" },
  { optionName: "대학(3년)", value: "12" },
  { optionName: "기타", value: "0" },
];

Object.freeze(selectEducationList);
