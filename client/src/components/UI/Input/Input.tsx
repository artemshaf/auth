import cn from "classnames";
import { ForwardedRef, forwardRef, useState } from "react";
import { IInputProps } from "./Input.props";
import "./Input.scss";

export const Input = forwardRef(
  (
    {
      error,
      type = "text",
      appearence = "white",
      children,
      className,
      ...props
    }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [currenctType, setCurrenctType] = useState<string>(type);

    const handleType = () => {
      if (currenctType === "text") {
        setCurrenctType("password");
      } else {
        setCurrenctType("text");
      }
    };

    return (
      <label className={cn(className, "input-label")}>
        {children && <p className="input-title">{children}</p>}
        <input
          type={currenctType}
          ref={ref}
          className={cn("input", {
            input_white: appearence === "white",
            input_dark: appearence === "dark",
            input_error: error?.message,
          })}
          {...props}
        />
        {type === "password" && (
          <p onClick={handleType} className="input__hidden-text">
            {currenctType === "password" ? (
              <>Display password</>
            ) : (
              <>Hide password</>
            )}
          </p>
        )}
        {error?.message && (
          <span className="input__error">{error.message}</span>
        )}
      </label>
    );
  }
);
