import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

import ProfilePicture from '../ProfilePicture/index';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// plus-circle
MaterialCommunityIcon.loadFont();

const iconContainer = 34;

const AddYourStory = ({uri}) => {
  return (
    <View style={styles.conatiner} testID="story">
      <ProfilePicture uri={uri} borderless={true} size="default" />
      <View style={styles.plus}>
        <MaterialCommunityIcon name="plus-circle" color="#ae22e0" size={32} />
      </View>
      <Text style={styles.name}>Your Story</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    alignSelf: 'center',
    color: '#ababab',
    fontSize: 12,
  },
  container: {
    height: 80,
  },
  plus: {
    height: iconContainer,
    width: iconContainer,
    backgroundColor: '#ffffff',
    borderRadius: iconContainer / 2,
    position: 'absolute',
    bottom: 21,
    right: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddYourStory;
