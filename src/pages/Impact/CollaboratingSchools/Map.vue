<script>
import { onMounted, ref } from "vue";

export default {
  name: "Map",
  setup() {
    const mapRef = ref(null);
    onMounted(() => {
      const tt = window.tt;
      var map = tt.map({
        key: "1JNM9zmAHGoFlR8FiiV1syDoa05dafLP",
        container: mapRef.value,
        style: "tomtom://vector/1/basic-main",
        center: [-97.7431, 30.2672],
        zoom: 2.5,
      });
      map.addControl(new tt.FullscreenControl());
      map.addControl(new tt.NavigationControl());

      addMarker(map);

      function addMarker(map) {
        const locations = [
          {
            name: "Alabama Institute for the Deaf and Blind",
            coordinates: [-86.121667, 33.423889],
          },
          {
            name: "Arizona State School for the Deaf and the Blind",
            coordinates: [-110.9904206, 32.2370163],
          },
          {
            name: "California School for the Blind",
            coordinates: [-121.965, 37.561389],
          },
          {
            name: "Florida School for the Deaf and the Blind",
            coordinates: [-121.965, 37.561389],
          },
          {
            name: "Georgia Academy for the Blind",
            coordinates: [-83.6387611, 32.8388194],
          },
          {
            name: "Hadley (IL)",
            coordinates: [-87.7305, 42.1056],
          },
          {
            name: "Idaho Educational Services for the Deaf and the Blind",
            coordinates: [],
          },
          {
            name: "Illinois School for the Visually Impaired",
            coordinates: [],
          },
          {
            name: "Indiana School for the Blind and Visually Impaired",
            coordinates: [],
          },
          {
            name: "Iowa Educational Services for the Blind and Visually Impaired",
            coordinates: [],
          },
          {
            name: "Kansas State School for the Blind",
            coordinates: [-94.6395, 39.11653],
          },
          {
            name: "Kentucky School for the Blind",
            coordinates: [-85.713383, 38.255933],
          },
          {
            name: "Louisiana School for the Visually Impaired",
            coordinates: [-91.188055, 30.393055],
          },
          {
            name: "Maryland School for the Blind",
            coordinates: [-76.536111, 39.3675],
          },
          {
            name: "Missouri School for the Blind",
            coordinates: [-90.245, 38.608333],
          },
          {
            name: "Perkins School for the Blind (MA)",
            coordinates: [-71.1755, 42.362],
          },
          {
            name: "Vermont Association for the Blind and Visually Impaired",
            coordinates: [-73.212074, 44.475883],
          },
          {
            name: "Visually Impaired Preschool Services (KY + IN)",
            coordinates: [],
          },
        ];

        const tt = window.tt;
        locations.forEach((location) => {
          let marker = new tt.Marker()
            .setLngLat(location.coordinates)
            .addTo(map);
          let popup = new tt.Popup({
            offset: 25,
            closeButton: false,
          }).setText(location.name);
          marker.setPopup(popup);
        });
      }
    });

    return { mapRef };
  },
};
</script>

<template>
  <div id="map" ref="mapRef"></div>
</template>

<style>
#map {
  height: 45vh;
  width: 35vw;
  border-radius: 16px;
}
@media (max-width: 768px) {
  #map {
    height: 80vw;
    width: 80vw;
    border-radius: 12px;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}
</style>
