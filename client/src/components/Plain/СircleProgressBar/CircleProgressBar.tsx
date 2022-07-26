import { useEffect, useState } from "react";
import { ICircleProgressBarProps } from "./CircleProgressBar.props";
import "./CircleProgressBar.scss";
import { getStrokes } from "./getStrokes";

const CircleProgressBar = ({
  icon,
  appearence,
  strokeWidth = 10,
  size = 98 + strokeWidth,
  progress,
  className,
}: ICircleProgressBarProps) => {
  const [offset, setOffset] = useState<number>(1);
  const [circleBgStroke, circleProgressStroke] = getStrokes(appearence);
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circleLen = 2 * Math.PI * radius;

  useEffect(() => {
    const currentProgress = progress / 7 > 100 ? 100 : progress / 7;
    const progressOffset = ((100 - currentProgress) / 100) * circleLen;
    setOffset(progressOffset);
  }, [progress, offset, setOffset, radius, circleLen]);

  return (
    <div className="circle-progress-bar__container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size + "px"}
        height={size + "px"}
        viewBox={`-1 -1 ${size} ${size}`}
        className="circle-progress-bar"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={circleBgStroke}
          strokeWidth={strokeWidth}
          className="circle-progress-bar__bg"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={circleProgressStroke}
          strokeWidth={strokeWidth / 1.3}
          strokeDasharray={circleLen}
          strokeDashoffset={offset}
          className="circle-progress-bar__progress"
        />
      </svg>
      <svg className="circle-progress-bar__icon" color={circleProgressStroke}>
        {icon}
      </svg>
    </div>
  );
};

export default CircleProgressBar;
