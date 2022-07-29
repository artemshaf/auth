import * as Lodash from "lodash";
import { useEffect, useMemo } from "react";
import { useLatest } from "./use-latest";

export function makeDebouncedHook(debounceFn) {
  return function useDebounce(cb, ms) {
    const latestCb = useLatest(cb);

    const debouncedFn = useMemo(
      () =>
        debounceFn((...args) => {
          latestCb.current(...args);
        }, ms),
      [ms, latestCb]
    );

    useEffect(() => () => debouncedFn.cancel(), [debouncedFn]);

    return debouncedFn;
  };
}

export const useDebounce = makeDebouncedHook(Lodash.debounce);
export const useThrottle = makeDebouncedHook(Lodash.throttle);
