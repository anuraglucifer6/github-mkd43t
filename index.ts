/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import { stationData } from './stationData';

// Adds a marker to the map.
function addMarker(
  location: google.maps.LatLngLiteral,
  label: string,
  map: google.maps.Map
) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  new google.maps.Marker({
    position: location,
    label: label,
    map: map,
  });
}

function initMap(): void {
  const center = { lat: 23, lng: 80 };
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 5.3,
      center: center,
    }
  );

  // Add a marker at the center of the map.
  addMarker(center, 'ANCHOR', map);
  stationData.forEach((station) => {
    if (station.boardingFreq > 0)
      addMarker(station.location, station.code, map);
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
