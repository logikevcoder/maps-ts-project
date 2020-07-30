import { User } from './User';
import { Company } from './company';

const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});

console.log('map', map);
