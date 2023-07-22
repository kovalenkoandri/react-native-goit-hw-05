import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ item }) => (
  <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: item?.coord.latitude,
        longitude: item?.coord.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.006,
      }}
    >
      <Marker
        coordinate={{
          latitude: item?.coord.latitude,
          longitude: item?.coord.longitude,
        }}
        title="travel photo"
      />
    </MapView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;
