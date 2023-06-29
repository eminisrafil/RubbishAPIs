import React from 'react'
import {Map} from 'react-arcgis'

const MapComponent = () => {
    return (
        <Map style={{ width: '100%', height: '100%' }} 
             mapProperties={{ basemap: 'topo-vector' }} 
             viewProperties={{ center: [15, 65], zoom: 4 }} />
    );
}

export default MapComponent