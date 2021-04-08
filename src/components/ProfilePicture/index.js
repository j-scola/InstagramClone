import {image} from 'faker';
import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

// import index from '../../../private';

const ProfilePicture = ({uri, borderless, size}) => {
  return (
    <View
      style={[
        styles.containerDefault,
        borderless ? {} : styles.border,
        size === 'small' ? styles.containerSmall : {},
      ]}>
      <Image
        source={{uri}}
        style={[
          styles.image,
          borderless ? {} : styles.border,
          size === 'small' ? styles.imageSmall : {},
        ]}
      />
    </View>
  );

  // if (borderless) {
  //   return (
  //     <View style={styles.containerDefault}>
  //       <Image source={{uri}} style={[styles.image, styles.border]} />
  //     </View>
  //   );
  // } else {
  //   return (
  //     <View style={styles.containerDefault}>
  //       <Image source={{uri}} style={styles.image} />
  //     </View>
  //   );
  // }
};

let imageSizeDefault = 76;
let imageSizeSmall = 38;

const styles = StyleSheet.create({
  containerDefault: {
    height: imageSizeDefault,
    width: imageSizeDefault,
    borderRadius: imageSizeDefault / 2,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0)',
    margin: 5,
    padding: 1,
  },
  containerSmall: {
    height: imageSizeSmall,
    width: imageSizeSmall,
  },
  image: {
    height: imageSizeDefault - 8,
    width: imageSizeDefault - 8,
    borderRadius: (imageSizeDefault - 8) / 2,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0)',
  },
  imageSmall: {
    height: imageSizeSmall - 8,
    width: imageSizeSmall - 8,
  },
  border: {
    borderColor: '#ae22e0',
  },
});

export default ProfilePicture;
