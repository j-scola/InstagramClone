import React from 'react';
import {View, Text, FlatList} from 'react-native';

import Post from '../Post';

const Posts = ({posts}) => {
  const renderItem = post => {
    return <Post post={post.item} />;
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={({id}) => id}
      renderItem={renderItem}
    />
  );
};

export default Posts;
