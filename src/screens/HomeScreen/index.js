import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, ScrollView} from 'react-native';

import Stories from '../../components/Stories';
import Posts from '../../components/Posts';
import utils from '../../utils';

const HomeScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let result = utils.generatePosts(3);
    setPosts(result);
    setLoading(false);
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  } else {
    return (
      <View>
        <Stories style={styles.stories} />
        <Posts
          posts={posts}
          style={styles.posts}
          // listHeaderComponent={() => }
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  stories: {
    // position: 'sticky',
    // top: 0,
  },
  posts: {},
});

export default HomeScreen;
