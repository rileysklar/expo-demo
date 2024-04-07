import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
      setInterval(async () => {
        let location = await Location.getCurrentPositionAsync({});
        const coords = {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        };
        setInterval(async () => {
          try {
            let location = await Location.getCurrentPositionAsync({});
            const coords = {
              lat: location.coords.latitude,
              lng: location.coords.longitude,
            };
            console.log("Location obtained:", coords);
            setLocation(coords);
          } catch (error) {
            console.error("Error getting location:", error);
          }
        }, 1000);
        console.log(coords);
        setLocation(coords);
      }, 1000); // Set interval time as needed
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location ? location.latitude : 0,
          longitude: location ? location.longitude : 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {location && <Marker coordinate={locatisetInterval(async () => {
  try {
    let permissions = await Location.getPermissionsAsync();
    if (permissions.status !== 'granted') {
      console.log('Location permission not granted');
      return;
    }

    let servicesEnabled = await Location.hasServicesEnabledAsync();
    if (!servicesEnabled) {
      console.log('Location services are not enabled');
      return;
    }

    let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Low });
    const coords = {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    };
    console.log("Location obtained:", coords);
    setLocation(coords);
  } catch (error) {
    console.error(error);
  }
}, 1000);on} />}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
