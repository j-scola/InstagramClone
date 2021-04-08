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
        {/* <Stories styles={styles.stories} /> */}
        <Posts
          posts={posts}
          listHeaderComponent={() => <Stories styles={styles.stories} />}
        />
        {/* <Post post={posts[0]} /> */}
      </View>
    );
  }
};

const styles = StyleSheet.create({});

export default HomeScreen;
