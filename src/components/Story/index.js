import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

import ProfilePicture from '../ProfilePicture/index';

const Story = ({uri, username}) => {
  return (
    <View style={styles.conatiner} testID="story">
      <ProfilePicture uri={uri} />
      <Text style={styles.name}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    alignSelf: 'center',
  },
  container: {
    height: 80,
  },
});

export default Story;
