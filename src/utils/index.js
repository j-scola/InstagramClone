import Faker from 'faker';
import {v4} from 'react-native-uuid';
import axios from 'axios';
import api from '../private';

// need to make this function private

export default {
  getImage: () => {
    return axios.get(api.apiKeys.testRequest);
  },
  generatePosts: count => {
    const data = [];
    for (var i = 0; i < count; i++) {
      // let image = await getImage();
      let newObj = {
        id: v4(),
        username: Faker.internet.userName(),
        image: 'https://picsum.photos/350',
        likes: Faker.datatype.number(),
        comments: [],
        caption: Faker.lorem.words(),
      };

      for (var j = 0; j < Math.random() * 4; j++) {
        newObj.comments.push({
          username: Faker.internet.userName(),
          comment: Faker.lorem.sentence(),
          id: v4(),
        });
      }
      data.push(newObj);
    }
    return data;
  },
  generateStories: count => {
    const data = [];
    for (var i = 0; i < count; i++) {
      let newObj = {};
      newObj.username = Faker.internet.userName();
      newObj.image = Faker.image.imageUrl();
      newObj.likes = Faker.datatype.number();
      newObj.comments = [];
      for (var j = 0; j < Math.random() * 4; j++) {
        newObj.comments.push({
          username: Faker.internet.userName(),
          comment: Faker.lorem.sentence(),
        });
      }
      data.push(newObj);
    }
    return data;
  },
};
