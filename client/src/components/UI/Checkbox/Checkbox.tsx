import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";
import { ICheckboxProps } from "./Checkbox.props";
import "./Checkbox.scss";

export const Checkbox = forwardRef(
  (
    { error, checked, className, children, ...props }: ICheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <label className={cn("checkbox__container", className)}>
        <input
          className={cn("checkbox")}
          type="checkbox"
          defaultChecked={false}
          {...props}
          ref={ref}
        />
        <span
          className={cn(
            {
              "checkbox-fake_error": error,
            },
            "checkbox-fake"
          )}
        ></span>
        {/* {error && <span className="checkbox__children">{error.message}</span>} */}
        {children && <span className="checkbox__children">{children}</span>}
      </label>
    );
  }
);
