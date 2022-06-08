/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import { stationData } from './stationData';
import A from './icons/A.png';
import B from './icons/B.png';
import C from './icons/C.png';
import D from './icons/D.png';
import E from './icons/E.png';
import F from './icons/F.png';
import G from './icons/G.png';
import H from './icons/H.png';
import I from './icons/I.png';

const mapIcons = [
  'https://drive.google.com/uc?id=1HfgV55iACYM579BlyRQGejjN9o8j4LfM',
  'https://drive.google.com/uc?id=16LzuKiMquubTXGp6f78RWsKWFtDhj-8o',
  'https://drive.google.com/uc?id=1ISYrwjfI8bmZJYeELvPiOu228O4MYDlp',
  'https://drive.google.com/uc?id=1anTl83bvm0yEEuom2naSnRSoBbxlSAE5',
  'https://drive.google.com/uc?id=150_uCVYDFXZABPTrapQ98Lc1CQhBDWcq',
  'https://drive.google.com/uc?id=1uon-0aEbChI97qa4aEoFJMEFpBXiwusi',
  'https://drive.google.com/uc?id=1P2BH11udOZwAVtANTLAzCkvOCiC3VQQN',
  'https://drive.google.com/uc?id=1Oe5Q237T6k7E-6CQhUczVjCV6U8jlPnR',
  'https://drive.google.com/uc?id=12Dmwz0VFF31dg7HV-dsNalcKiQPlZAPe',
];

function getIconIndex(freq: number) {
  if (freq > 10000) return 8;
  else if (freq > 5000) return 7;
  else if (freq > 2000) return 6;
  else if (freq > 1000) return 5;
  else if (freq > 500) return 4;
  else if (freq > 200) return 3;
  else if (freq > 100) return 2;
  else if (freq > 50) return 1;
  else return 0;
}

// Adds a marker to the map.
function addMarker(
  location: google.maps.LatLngLiteral,
  icon: string,
  label: string,
  zIndex: number,
  map: google.maps.Map
) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  new google.maps.Marker({
    position: location,
    icon: icon,
    label: label,
    zIndex: zIndex,
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
  // addMarker(center, 'ANCHOR', map);
  stationData.forEach((station) => {
    if (station.boardingFreq > 0) {
      addMarker(
        station.location,
        mapIcons[getIconIndex(station.boardingFreq)],
        '',
        getIconIndex(station.boardingFreq),
        map
      );
    }
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
