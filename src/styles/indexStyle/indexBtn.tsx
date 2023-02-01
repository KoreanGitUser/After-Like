import { CommonButtonProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const ButtonInterface: FC<CommonButtonProps> = (props) => {
  const { children, className, onClick, ...restProps } = props;

  return (
    <button
      {...restProps}
      onClick={(evt) => {
        evt.preventDefault(); // form 태그 안에서 submit 버튼으로 인식하지 않도록
        onClick && onClick(evt);
      }}
      className={`px-4 py-2 rounded duration-150 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonInterface;

export const SignUpBtn: FC<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <ButtonInterface
      {...restProps}
      className={`flex flex-wrap flex-raw justify-center items-center w-[22rem] gap-4 shadow-md rounded-[15px] h-[40px] ${className}`}
    >
      {children}
    </ButtonInterface>
  );
};

export const UserInfoSubmitBtn: FC<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <ButtonInterface
      {...restProps}
      type="submit"
      className={`bg-blue-600 active:bg-blue-400 text-white w-32 py-0.5 text-lg rounded-md shadow-md ${className}`}
    >
      {children}
    </ButtonInterface>
  );
};
