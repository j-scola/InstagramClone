import React from 'react';
import {View, Text, FlatList} from 'react-native';

import Post from '../Post';

const Posts = ({posts, listHeaderComponent}) => {
  const renderItem = post => {
    return <Post post={post.item} />;
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={({id}) => id}
      renderItem={renderItem}
      ListHeaderComponent={listHeaderComponent}
    />
  );
};

export default Posts;
