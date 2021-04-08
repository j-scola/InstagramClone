import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcon.loadFont();

const PostHead = ({username}) => {
  return (
    <View style={styles.bar}>
      <Text>{username}</Text>
      <MaterialCommunityIcon size={20} name="dots-horizontal" color="#000000" />
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  username: {},
});

export default PostHead;
