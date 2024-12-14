// React
import { type ReactNode, useMemo } from 'react';
import { ScrollView, View, type ViewProps, type ScrollViewProps } from 'react-native';

// Utils
import { clx } from '../utils/utils';

// Others
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type BaseScreenProps = {
  children: ReactNode;
} & (
  | ({
      as: 'view';
    } & ViewProps)
  | ({
      as: 'scroll';
    } & ScrollViewProps)
);

/**
 * Base screen
 * @param props
 */
function BaseScreen(props: BaseScreenProps) {
  const { children, as = 'view', className, ...rest } = props;

  // Hooks
  const inset = useSafeAreaInsets();

  // Memos
  const mainStyle = useMemo(
    () => ({
      paddingTop: inset.top,
      paddingBottom: inset.bottom,
      paddingLeft: inset.left,
      paddingRight: inset.right,
    }),
    [inset],
  );

  // Render
  return (
    <View className='flex-1 bg-secondary-100' style={mainStyle}>
      {as === 'scroll' ? (
        <ScrollView
          bounces={false}
          automaticallyAdjustKeyboardInsets={true}
          contentContainerClassName={clx('grow p-5', className)}
          {...rest}
        >
          {children}
        </ScrollView>
      ) : (
        <View className={clx('flex-1 p-5', className)} {...rest}>
          {children}
        </View>
      )}
    </View>
  );
}

export default BaseScreen;
