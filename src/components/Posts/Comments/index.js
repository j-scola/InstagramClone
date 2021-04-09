import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const Comments = ({comments}) => {
  const renderItem = ({item}) => {
    return <Comment username={item.username} comment={item.comment} />;
  };

  return <FlatList testID="comments" data={comments} renderItem={renderItem} />;
};

const Comment = ({username, comment}) => {
  return (
    <View style={styles.commentContainer}>
      <Text style={styles.commentUsername}>{username}</Text>
      <Text>{comment}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
  },
  commentUsername: {
    fontWeight: 'bold',
  },
});

export default Comments;
