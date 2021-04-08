import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

import ProfilePicture from '../ProfilePicture/index';

const Story = ({uri, username}) => {
  return (
    <View style={styles.conatiner} testID="story">
      <ProfilePicture uri={uri} borderless={false} size="default" />
      <Text style={styles.name}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    alignSelf: 'center',
    fontSize: 12,
  },
  container: {
    height: 80,
  },
});

export default Story;
