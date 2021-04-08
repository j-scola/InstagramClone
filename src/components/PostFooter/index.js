import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// comment-o
// heart-o
// heart
import FeatherIcon from 'react-native-vector-icons/Feather';

FontAwesomeIcon.loadFont();
FeatherIcon.loadFont();

const PostFooter = ({comments, liked, caption}) => {
  return (
    <View>
      <View style={styles.interact}>
        <View style={styles.icons}>
          <FontAwesomeIcon name="heart-o" size={25} color="#000000" />
        </View>
        <View style={styles.icons}>
          <FontAwesomeIcon name="comment-o" size={25} color="#000000" />
        </View>
        <View style={styles.icons}>
          <FeatherIcon name="send" size={25} color="#000000" />
        </View>
      </View>
      <Text>{caption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  interact: {
    flexDirection: 'row',
    margin: 10,
  },
  icons: {
    margin: 8,
  },
});

export default PostFooter;
