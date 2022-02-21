

/**
 *
 * Import locations list const data.
 *
 */
import locations from './data.js';


/**
 *
 * Setup & display Google maps.
 *
 */
$(document).ready (function () {

  $('.search').on ('click', function initMap () {

    $('#map').css ('box-shadow', '1px 3px 20px -3px rgba(0,0,0,0.75)');

    const center = {
      lat: 23.98439014,
      lng: 121.6115606
    };

    const map = new google.maps.Map ($('#map')[0], {
      center,
      zoom: 14
    });

    locations.forEach (location => {

      let position = {}
        , mark = {}
        ;

      position.lat = parseFloat (location['Latitude']);
      position.lng = parseFloat (location['Longitude']);

      mark.map = map;
      mark.title = location['Name'];
      mark.position = position;

      new google.maps.Marker (mark);
    });
  });
});
