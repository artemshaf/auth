import cn from "classnames";
import { useEffect, useState } from "react";
import { IProgressBarProps } from "./ProgressBar.props";
import "./ProgressBar.scss";

const ProgressBar = ({
  appearence = "green",
  done = 0,
  className,
  ...props
}: IProgressBarProps) => {
  const [style, setStyle] = useState<Object>({});

  useEffect(() => {
    setStyle({
      opacity: 1,
      width: `${done}%`,
    });
  }, [done]);

  return (
    <div className={cn("progress-bar__block")} {...props}>
      <div
        className={cn("progress-bar", {
          "progress-bar_green": appearence === "green",
          "progress-bar_blue": appearence === "blue",
          "progress-bar_red": appearence === "red",
        })}
      >
        <div
          className={cn("progress-bar__done", {
            "progress-bar__done_green": appearence === "green",
            "progress-bar__done_blue": appearence === "blue",
            "progress-bar__done_red": appearence === "red",
          })}
          style={style}
        ></div>
      </div>
      <p className={"progress-bar__text"}>{done}%</p>
    </div>
  );
};

export default ProgressBar;
