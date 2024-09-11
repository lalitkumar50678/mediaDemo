import React, {useState, useRef} from 'react';
import {View, Text, FlatList, ViewToken} from 'react-native';
import list from '../../data/media.json';
import {MediaType} from '../types';
import styles from './styles';
import MediaItem from './components/MediaItem/MediaItems';
import ItemSeperator from './components/ItemSaperator/ItemSaperator';

const HomeScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const videoRefs = useRef(null);

  const renderSaperator = () => <ItemSeperator />;

  const renderItem = ({item}: {item: MediaType}) => (
    <MediaItem
      ref={ref => {
        if (videoRefs.current) {
          videoRefs.current[item.id] = ref;
        }
      }}
      item={item}
    />
  );

  const _onViewableItemsChanged = props => {
    const changed = props.changed;
    const viewableItems = props.viewableItems;

    changed.forEach(item => {
      if (!item.isViewable && videoRefs.current) {
        console.log('changed calling -> ', changed);
        videoRefs.current[item.id].pause();
      }
    });

    viewableItems.forEach(item => {
      if (item.isViewable && videoRefs.current) {
        videoRefs.current[item.id].play();
      }
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={list as Array<MediaType>}
        contentContainerStyle={styles.listcontainer}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSaperator}
        onViewableItemsChanged={_onViewableItemsChanged}
      />
    </View>
  );
};
export default HomeScreen;
