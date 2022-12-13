import { RadioType } from "@models/CPType";

export const radioGenderList: RadioType[] = [
  { labelName: "남자", htmlFor: "male", value: "m" },
  { labelName: "여자", htmlFor: "female", value: "f" },
];

Object.freeze(radioGenderList);
