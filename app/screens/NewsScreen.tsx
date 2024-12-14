// React
import { useCallback } from 'react';
import { ActivityIndicator, Image, Pressable, View } from 'react-native';

// Api
import { getNews } from '../api/SyncManager';
import { useQuery } from '@tanstack/react-query';

// Screens
import BaseScreen from './BaseScreen';

// Components
import BaseButton from '../components/commons/BaseButton';
import Card from '../components/commons/Card';
import LocaleText from '../components/commons/LocaleText';
import Header from '../components/navigation/Header';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Utils
import { formateDate } from '../utils/formatters';

// Types
import type { News } from '../types/entities';
import type { BottomTapNavigationProp, HomeNavigationProp } from '../types/navigation';
import { NEWS_TYPE } from '../types/enums';

// Others
import colors from '../../colors';
import { RefreshControl } from 'react-native-gesture-handler';

function NewsScreen() {
  // Hooks
  const navigation = useNavigation<BottomTapNavigationProp>();

  // Api
  const newsQuery = useQuery({ queryFn: getNews, queryKey: ['news'] });

  // Callbacks
  const renderItem = useCallback(
    ({ item }: { item: News }) => (
      <Pressable
        key={item.id}
        onPress={() =>
          navigation.getParent<HomeNavigationProp>().navigate('NewsDetails', { news: item })
        }
      >
        <Card className='p-0'>
          <Image source={{ uri: item.image }} className='h-32 w-full rounded-lg rounded-b-none' />
          <View className='p-5 pt-0'>
            <View className='flex-row items-center justify-between gap-2'>
              <LocaleText text={formateDate(item.date)} className='text-sm' avoidTranslation />
              {item.type === NEWS_TYPE.EVENT && (
                <LocaleText text='general:event' className='text-sm' />
              )}
            </View>
            <LocaleText
              text={item.title}
              className='text-lg font-bold capitalize text-secondary-500'
              avoidTranslation
            />
          </View>
        </Card>
      </Pressable>
    ),
    [],
  );

  // Render
  return (
    <BaseScreen
      as='scroll'
      className='gap-5'
      refreshControl={
        <RefreshControl
          refreshing={newsQuery.isFetching && !newsQuery.isPending}
          onRefresh={() => newsQuery.refetch()}
          colors={[colors.secondary[500]]}
        />
      }
    >
      <Header back={false} />
      <View>
        <LocaleText
          className='text-3xl font-bold capitalize text-secondary-500'
          text='news:title'
        />
      </View>
      {newsQuery.isPending ? (
        <View className='flex-1 justify-center'>
          <ActivityIndicator size='large' color={colors.primary[500]} />
        </View>
      ) : newsQuery.isError ? (
        <View className='flex-1 items-center justify-center gap-2'>
          <LocaleText text='errors:networkRequestError' />
          <BaseButton onPress={() => newsQuery.refetch()} text='general:retry' />
        </View>
      ) : (
        newsQuery.data.map(_ => renderItem({ item: _ }))
      )}
    </BaseScreen>
  );
}

export default NewsScreen;
