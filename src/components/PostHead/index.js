import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import utils from '../../utils';

const PostHead = ({username}) => {
  return (
    <>
      <Text>{username}</Text>
      <Icon size={12} name="dots-horizontal" color="#f8f8f8" />
    </>
  );
};

export default PostHead;
