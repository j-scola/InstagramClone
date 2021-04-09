import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// comment-o
// heart-o
// heart
import FeatherIcon from 'react-native-vector-icons/Feather';

import Comments from '../Comments';

FontAwesomeIcon.loadFont();
FeatherIcon.loadFont();

const PostFooter = ({comments, username, postCaption}) => {
  const [showComments, setShowComments] = useState(false);
  const [liked, toggleLike] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.interact}>
        <View style={styles.icons}>
          {liked ? (
            <FontAwesomeIcon
              name="heart"
              size={25}
              color="red"
              onPress={() => toggleLike(!liked)}
            />
          ) : (
            <FontAwesomeIcon
              name="heart-o"
              size={25}
              color="#000000"
              onPress={() => toggleLike(!liked)}
            />
          )}
        </View>
        <View style={styles.icons}>
          <FontAwesomeIcon name="comment-o" size={25} color="#000000" />
        </View>
        <View style={styles.icons}>
          <FeatherIcon name="send" size={25} color="#000000" />
        </View>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.caption}>{postCaption}</Text>
      </View>
      <View style={styles.comments}>
        {showComments ? (
          <Comments comments={comments} />
        ) : (
          <TouchableHighlight
            onPress={() => setShowComments(!showComments)}
            activeOpacity={0.6}
            underlayColor="#ababab">
            <Text>show comments</Text>
          </TouchableHighlight>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 15,
  },
  interact: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  icons: {
    marginRight: 16,
  },
  textContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caption: {
    marginLeft: 5,
    marginRight: 5,
  },
  username: {
    marginLeft: 5,
    marginRight: 5,
    fontWeight: 'bold',
  },
  comments: {
    margin: 5,
  },
});

export default PostFooter;
