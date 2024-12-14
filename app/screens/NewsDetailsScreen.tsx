// React
import { useCallback, useMemo } from 'react';
import { Linking, Pressable, Share, View, useWindowDimensions } from 'react-native';

// Screens
import BaseScreen from './BaseScreen';

// Components
import BaseIcon from '../components/commons/BaseIcon';
import LocaleText from '../components/commons/LocaleText';
import Header from '../components/navigation/Header';

// Config
import { API_URL, COMPANY_ID } from '../config/constants';
import { GET_ATTACHMENT } from '../config/endpoint';

// Utils
import { showAlert } from '../utils/alert';
import { parseUrl } from '../utils/api';
import { formateDate } from '../utils/formatters';
import { appLog } from '../utils/logger';

// Assets
import { FileTextIcon, ShareIcon } from 'lucide-react-native';

// Types
import type { Attachment } from '../types/entities';
import type { NewsDetailsScreenProps } from '../types/navigation';

// Others
import colors from '../../colors';
import RenderHtml from 'react-native-render-html';

function NewsDetailsScreen(props: NewsDetailsScreenProps) {
  const { news } = props.route.params;

  // Hooks
  const { width } = useWindowDimensions();

  // Memos
  const htmlStyle = useMemo(
    () => ({
      body: { color: colors.dark.DEFAULT, fontSize: 15 },
      a: { color: colors.secondary.DEFAULT },
    }),
    [],
  );

  const description = useMemo(() => {
    if (news.image) return `<img src="${news.image}" />${news.description}`;
    return news.description;
  }, [news.description, news.image]);

  // Callbacks
  const handleShare = useCallback(() => {
    const message = `${news.title}\n\n${news.image}`;
    Share.share({
      message: message,
    }).catch(error => {
      appLog.error('Share failed', error);
      showAlert('general:error', 'errors:internalApplicationError');
    });
  }, [news]);

  const handleAttachmentPress = useCallback((attachment: Attachment) => {
    const url = parseUrl(GET_ATTACHMENT, [
      { key: 'companyId', value: COMPANY_ID },
      { key: 'fileId', value: attachment.id },
    ]);
    Linking.openURL(API_URL + url);
  }, []);

  // Render
  return (
    <BaseScreen as='scroll' className='gap-5'>
      <Header />
      <View>
        <LocaleText
          text={news.title}
          className='text-3xl font-bold capitalize text-secondary-500'
          avoidTranslation
        />
        <View className='flex-row items-center justify-between'>
          <LocaleText text={formateDate(news.date)} avoidTranslation />
          <BaseIcon icon={ShareIcon} onPress={handleShare} />
        </View>
      </View>
      <RenderHtml contentWidth={width} source={{ html: description }} tagsStyles={htmlStyle} />
      {news.attachments && (
        <View className='flex gap-2'>
          <LocaleText className='font-bold' text='general:attachments' />
          {news.attachments.map((attachment, index) => (
            <Pressable key={index} onPress={() => handleAttachmentPress(attachment)}>
              <View className='flex-row items-center gap-2 rounded-md border border-dark-300 p-2'>
                <FileTextIcon color={colors.dark.DEFAULT} size={20} />
                <LocaleText
                  text={attachment.name}
                  className='flex-1'
                  numberOfLines={1}
                  avoidTranslation
                />
              </View>
            </Pressable>
          ))}
        </View>
      )}
    </BaseScreen>
  );
}

export default NewsDetailsScreen;
