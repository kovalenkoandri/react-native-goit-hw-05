import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import DefaultScreenPosts from '../nestedScreens/DefaultScreenPosts';
import CommentsScreen from '../nestedScreens/CommentsScreen';
import MapScreen from '../nestedScreens/MapScreen';

const NestedScreen = createNativeStackNavigator();

const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
      console.log('route.params PostsScreen', route.params);
      console.log('posts PostsScreen', posts);
    }
  }, [route.params]);
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen name="DefaultScreen">
        {() => <DefaultScreenPosts {...{ posts, navigation }} />}
      </NestedScreen.Screen>
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
