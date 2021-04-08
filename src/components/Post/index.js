import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import PostHead from '../PostHead';

const Post = ({post}) => {
  return (
    <View testID="post">
      <PostHead username={post.username} />
      <Image source={{uri: post.image}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: '100%',
  },
});

export default Post;
