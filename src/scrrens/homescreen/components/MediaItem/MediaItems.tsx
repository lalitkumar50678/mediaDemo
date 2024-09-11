import React, {useState, forwardRef, useImperativeHandle, useRef} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import {MediaType} from '../../../types';
import styles from './styles';

const MediaItem = forwardRef(({item, index}: {item: MediaType}, ref) => {
  const [isImageLoading, setImageLoading] = useState(false);
  const videoRef = useRef<VideoRef | null>(null);

  const onImageLoadStart = () => {
    setImageLoading(true);
  };

  useImperativeHandle(ref, () => ({
    play: () => {
      console.log('play video index at ->  ', index);
      videoRef.current?.resume();
    },
    pause: () => {
      videoRef.current?.pause();
    },
  }));

  const onImageLoadingStop = () => {
    setImageLoading(false);
  };

  return (
    <View style={styles.itemAlign}>
      {item.type === 'image' ? (
        <View style={styles.imageSty}>
          {isImageLoading && <ActivityIndicator size={'small'} />}
          <Image
            onLoadStart={onImageLoadStart}
            onLoadEnd={onImageLoadingStop}
            style={styles.imageSty}
            source={{uri: item.url}}
            resizeMode="stretch"
          />
        </View>
      ) : (
        <Video
          source={{
            uri: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
          }}
          ref={videoRef}
          style={styles.videoSty}
        />
      )}
    </View>
  );
});

export default MediaItem;
