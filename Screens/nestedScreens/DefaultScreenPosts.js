import { View, StyleSheet, FlatList, Image, Button, Text } from 'react-native';

const DefaultScreenPosts = ({ posts, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.PostsScreenUserOuter}>
        <Image
          style={styles.PostsScreenUserPhoto}
          source={require('../../assets/user.png')}
        />
        <View>
          <Text style={styles.PostsScreenUserName}>Natali Romanova</Text>
          <Text style={styles.PostsScreenUserEmail}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ width: 350, height: 200 }}
            />
            <Button
              title="go to map"
              onPress={() => navigation.navigate('Map')}
            />
            <Button
              title="go to Comments"
              onPress={() => navigation.navigate('Comments')}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: '#fff',
    height: '100%',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  PostsScreenUserOuter: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  PostsScreenUserPhoto: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  PostsScreenUserName: {
    fontFamily: 'RobotoRegular',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 15,
    marginLeft: 8,
    color: '#212121',
  },
  PostsScreenUserEmail: {
    fontFamily: 'RobotoRegular',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 13,
    marginLeft: 8,
    color: '#212121CC',
  },
});

export default DefaultScreenPosts;
