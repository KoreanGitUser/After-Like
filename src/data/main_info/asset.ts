import { SelectType } from "@models/CPType";

export const selectAssetList: SelectType[] = [
  { optionName: "3천만원 미만", value: "b" },
  { optionName: "3천만원~7천만원 미만", value: "c" },
  { optionName: "7천만원~1억 미만", value: "d" },
  { optionName: "1억~3억 미만", value: "e" },
  { optionName: "3억~5억 미만", value: "f" },
  { optionName: "5억~10억 미만", value: "g" },
  { optionName: "10억~20억 미만", value: "h" },
  { optionName: "20억~30억 미만", value: "m" },
  { optionName: "30억~50억 미만", value: "i" },
  { optionName: "50억~100억 미만", value: "j" },
  { optionName: "100억~300억 미만", value: "k" },
  { optionName: "300억~500억 미만", value: "l" },
  { optionName: "500억 이상", value: "n" },
];

Object.freeze(selectAssetList);
