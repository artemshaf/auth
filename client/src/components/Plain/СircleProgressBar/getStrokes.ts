import { CircleProgressBarStyles } from "./CircleProgressBar.props";

const CircleProgressBarColors = {
  green: {
    circleBgStroke: "rgb(230 251 217 / 1)",
    circleProgressStroke: "rgb(68 193 60 / 1)",
  },
  blue: {
    circleBgStroke: "rgb(216 216 254 / 1)",
    circleProgressStroke: "rgb(64 64 242 / 1)",
  },
  red: {
    circleBgStroke: "rgb(255 232 215 / 1)",
    circleProgressStroke: "rgb(255 81 58 / 1)",
  },
};

export const getStrokes = (key: CircleProgressBarStyles) => {
  const circleBgStroke = CircleProgressBarColors[key].circleBgStroke;
  const circleProgressStroke =
    CircleProgressBarColors[key].circleProgressStroke;

  return [circleBgStroke, circleProgressStroke];
};
