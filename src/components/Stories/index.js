import React from 'react';
import {View, FlatList} from 'react-native';
import {v4} from 'react-native-uuid';

import Story from '../Story';

const uri = 'https://picsum.photos/100';

const data = [
  {
    id: v4(),
    username: 'david',
    profilePic: uri,
  },
  {
    id: v4(),
    username: 'JC',
    profilePic: uri,
  },
  {
    id: v4(),
    username: 'teresa',
    profilePic: uri,
  },
  {
    id: v4(),
    username: 'aj_ackass',
    profilePic: uri,
  },
  {
    id: v4(),
    username: 'david',
    profilePic: uri,
  },
  {
    id: v4(),
    username: 'JC',
    profilePic: uri,
  },
  {
    id: v4(),
    username: 'teresa',
    profilePic: uri,
  },
  {
    id: v4(),
    username: 'aj_ackass',
    profilePic: uri,
  },
];

const Stories = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({id}) => id}
      horizontal={true}
      renderItem={({item}) => (
        <Story uri={item.profilePic} username={item.username} />
      )}
    />
  );
};

export default Stories;
