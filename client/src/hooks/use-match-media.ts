import { boolean } from "joi";
import { useState, useLayoutEffect, useCallback } from "react";

export interface MatchResult {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  "2xl": boolean;
}

const queries = [
  "(max-width: 480px)",
  "(min-width: 481px) and (max-width: 767px)",
  "(min-width: 768px) and (max-width: 1023px)",
  "(min-width: 1024px) and (max-width: 1580px)",
  "(min-width: 1581px)",
];

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map((query) => matchMedia(query));

  const getValues = useCallback(
    () => mediaQueryLists.map((list) => list.matches),
    [mediaQueryLists]
  );

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach((list) => list.addEventListener("change", handler));

    return () =>
      mediaQueryLists.forEach((list) =>
        list.removeEventListener("change", handler)
      );
  }, [mediaQueryLists, getValues]);

  return ["sm", "md", "lg", "xl", "2xl"].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {} as MatchResult
  );
};
