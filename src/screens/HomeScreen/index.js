import React, {useState, useEffect} from 'react';
import {Text, ActivityIndicator, StyleSheet} from 'react-native';

import Stories from '../../components/Stories';
import Posts from '../../components/Posts';
import utils from '../../utils';

const HomeScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    utils
      .generatePosts(3)
      .then(result => {
        console.log(result);
        setPosts(result);
        setLoading(false);
      })
      .catch(console.log);
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  } else {
    return (
      <>
        <Stories styles={styles.stories} />
        <Posts posts={posts} />
        {/* <Post post={posts[0]} /> */}
      </>
    );
  }
};

const styles = StyleSheet.create({
  stories: {
    flex: 2,
  },
});

export default HomeScreen;
