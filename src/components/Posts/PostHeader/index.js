import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import ProfilePicture from '../../ProfilePicture';

MaterialCommunityIcon.loadFont();

const PostHeader = ({username, location}) => {
  return (
    <View style={styles.bar}>
      <View style={styles.head}>
        <ProfilePicture
          uri="https://picsum.photos/40"
          borderless={true}
          size="small"
        />
        <View>
          <Text>{username}</Text>
          {location ? <Text>{location}</Text> : null}
        </View>
      </View>
      <MaterialCommunityIcon size={20} name="dots-horizontal" color="#000000" />
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderTopColor: 'rgba(171, 171, 171, 0.5)',
    borderTopWidth: 0.5,
  },
  username: {},
  head: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PostHeader;
