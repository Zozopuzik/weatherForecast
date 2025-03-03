import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';
import useCityStore from '../../stores/cityStore';
import cities from '../../constants/cities';
const MapScreen = () => {
  const navigation = useNavigation();

  const {setSelectedCity} = useCityStore();

  const mapHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MapLibre Example</title>
      <link rel="stylesheet" href="https://unpkg.com/maplibre-gl/dist/maplibre-gl.css" />
      <style>
        body { margin: 0; padding: 0; }
        #map { position: absolute; top: 0; bottom: 0; width: 100%; }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script src="https://unpkg.com/maplibre-gl/dist/maplibre-gl.js"></script>
      <script>
        var map = new maplibregl.Map({
          container: 'map',
          style: 'https://demotiles.maplibre.org/style.json',
          center: [30.523333, 50.450001],
          zoom: 3
        });

        const cities = ${JSON.stringify(cities)}

        cities.forEach(function(city) {
          var marker = new maplibregl.Marker()
            .setLngLat(city.coords)
            .setPopup(new maplibregl.Popup().setText(city.name))
            .addTo(map);

          marker.getElement().addEventListener('click', function() {
            window.ReactNativeWebView.postMessage(city.name);
          });
        });

        map.on('click', function(e) {
          var coordinates = e.lngLat;
          window.ReactNativeWebView.postMessage(city.name);
        });
      </script>
    </body>
    </html>
  `;

  const handleWebViewMessage = event => {
    setSelectedCity({
      toponymName: event.nativeEvent.data,
    });
    navigation.navigate('City');
  };

  return (
    <View style={{flex: 1}}>
      <WebView
        originWhitelist={['*']}
        source={{html: mapHtml}}
        style={{flex: 1}}
        onMessage={handleWebViewMessage}
      />
    </View>
  );
};

export default MapScreen;
