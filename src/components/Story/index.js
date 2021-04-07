import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

import ProfilePicture from '../ProfilePicture/index';

const Story = ({uri, username}) => {
  return (
    <View>
      <ProfilePicture uri={uri} />
      <Text style={styles.name}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    alignSelf: 'center',
  },
});

export default Story;
