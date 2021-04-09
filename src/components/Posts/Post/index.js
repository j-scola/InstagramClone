import React from 'react';
import {View, Dimensions, Image, StyleSheet} from 'react-native';

import PostHeader from '../PostHeader';
import PostFooter from '../PostFooter';

const Post = ({post}) => {
  return (
    <View testID="post">
      <PostHeader username={post.username} />
      <Image source={{uri: post.image}} style={styles.image} />
      <PostFooter
        username={post.username}
        postCaption={post.caption}
        comments={post.comments}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
  },
});

export default Post;
