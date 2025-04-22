	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
    console.log(accessToken);
      mapboxgl.accessToken = accessToken;
      const map = new mapboxgl.Map({
          container: 'map', // container ID
          center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
          zoom: 12 // starting zoom
      });



        // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker({ color: 'red'})
        .setLngLat(coordinates)
        .setPopup(new mapboxgl.Popup({offset: 25,className: 'my-class'})
        .setHTML("<p>Exact Location will be proviede after booking</p>"))
        .addTo(map);

        //////FOR STYLE
        document
            .getElementById('lightPreset')
            .addEventListener('change', function () {
                map.setConfigProperty('basemap', 'lightPreset', this.value);
            });
    
        document
            .querySelectorAll('.map-overlay-inner input[type="checkbox"]')
            .forEach((checkbox) => {
                checkbox.addEventListener('change', function () {
                    map.setConfigProperty('basemap', this.id, this.checked);
                });
            });