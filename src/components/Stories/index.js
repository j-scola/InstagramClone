import React from 'react';
import {View, FlatList, StyleSheet, Image} from 'react-native';
import {v4} from 'react-native-uuid';
// import ProfilePicture from '../ProfilePicture';
import AddYourStory from '../AddYourStory';
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
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/iglogo.png')}
        style={styles.logo}
      />
      <FlatList
        data={data}
        keyExtractor={({id}) => id}
        horizontal={true}
        renderItem={({item}) => (
          <Story uri={item.profilePic} username={item.username} />
        )}
        ListHeaderComponent={() => (
          <AddYourStory uri={uri} username="Your Story" />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  logo: {
    height: 30,
    width: 100,
    marginLeft: 5,
  },
  stories: {
    flexDirection: 'row',
  },
});

export default Stories;
