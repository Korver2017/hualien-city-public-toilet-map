

/**
 *
 * Import locations list const data.
 *
 */
import data from './data.js';


/**
 *
 * Setup & display Google maps.
 *
 */
$(document).ready (function () {

  $('.search').on ('click', function initMap () {

    $('#map').css ('box-shadow', '1px 3px 20px -3px rgba(0,0,0,0.75)');

    const myLatLng = {
      lat: 23.98439014,
      lng: 121.6115606
    };

    const map = new google.maps.Map (document.getElementById ('map'), {
      center: myLatLng,
      zoom: 14
    });
    
    const dataLen = data.length;

    for (let i = 0; i < dataLen; i ++) {

      let str = {};
      let place = {};

      place.lat = parseFloat (data[i]['Latitude']);
      place.lng = parseFloat (data[i]['Longitude']);

      str.map = map;
      str.title = data[i]['Name'];
      str.position = place;

      new google.maps.Marker (str);
    }
  });
});
