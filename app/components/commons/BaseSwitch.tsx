// React
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { Switch, type SwitchProps } from 'react-native';

// Others
import colors from '../../../colors';

type BaseSwitchProps = {
  defaultValue?: boolean;
} & Omit<SwitchProps, 'value'>;

export type BaseSwitchRef = {
  getValue: () => boolean;
  setValue: (value: boolean) => void;
};

const trackColor = {
  true: colors.secondary[300],
} as const;

function BaseSwitch(props: BaseSwitchProps, forwardedRef: React.ForwardedRef<BaseSwitchRef>) {
  const { defaultValue, onValueChange, ...rest } = props;

  // State
  const [value, setValue] = useState(defaultValue);

  // References
  const switchRef = useRef<Switch>(null);

  // Callbacks
  const handleValueChange = useCallback(
    (value: boolean) => {
      setValue(value);
      onValueChange?.(value);
    },
    [onValueChange],
  );

  // Imperatives
  useImperativeHandle(
    forwardedRef,
    () => ({
      getValue: () => value ?? false,
      setValue: (value: boolean) => setValue(value),
    }),
    [handleValueChange, value],
  );

  // Render
  return (
    <Switch
      ref={switchRef}
      value={value}
      onValueChange={handleValueChange}
      thumbColor={colors.secondary.DEFAULT}
      trackColor={trackColor}
      {...rest}
    />
  );
}

export default forwardRef(BaseSwitch);
