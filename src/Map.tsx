import React from 'react';

/* global kakao */
declare let kakao: any;

class Map extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=426d9d8c251cf5850eca094173cc5f1b&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7,
        };

        kakao.maps.load(() => {
          const map = new kakao.maps.Map(container, options);
        });
      });
    };
  }

  render() {
    return (
      <>
        <div id="map" style={ { width: '500px', height: '500px' } } />
      </>
    );
  }
}

export default Map;
