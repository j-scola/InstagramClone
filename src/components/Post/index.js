import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import PostHeader from '../PostHeader';
import PostFooter from '../PostFooter';

const Post = ({post}) => {
  return (
    <View testID="post">
      <PostHeader username={post.username} />
      <Image source={{uri: post.image}} style={styles.image} />
      <PostFooter />
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
