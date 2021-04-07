import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

// import index from '../../../private';

const ProfilePicture = ({uri}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 76,
    width: 76,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#ae22e0',
    margin: 5,
    padding: 1,
  },
  image: {
    height: 68,
    width: 68,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#ae22e0',
  },
});

export default ProfilePicture;
