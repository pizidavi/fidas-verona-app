// React
import { TouchableOpacity, View } from 'react-native';

// Components
import LocaleText from '../commons/LocaleText';

// Navigation
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

// Others
import colors from '../../../colors';

/**
 * TabBar component
 * @param props
 */
function TabBar(props: BottomTabBarProps) {
  const { descriptors, navigation, state, insets } = props;

  // Render
  return (
    <View
      className='flex-row items-center justify-center bg-white'
      style={{ paddingBottom: insets.bottom / 2 }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          typeof options.tabBarLabel === 'string'
            ? options.tabBarLabel
            : typeof options.title === 'string'
              ? options.title
              : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            className='flex-1 items-center justify-center py-3'
            activeOpacity={0.9}
            onPress={onPress}
          >
            {options.tabBarIcon && (
              <options.tabBarIcon
                focused={isFocused}
                color={isFocused ? colors.primary[500] : colors.dark[300]}
                size={20}
              />
            )}
            <LocaleText
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              text={label as any}
              className='text-sm capitalize'
              style={{ color: isFocused ? colors.primary[500] : colors.dark[300] }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;
