import React, { useEffect, useRef, useState } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Point from '@arcgis/core/geometry/Point';
import esriConfig from "@arcgis/core/config.js";
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';


esriConfig.apiKey = "input your api key here"
esriConfig.assetsPath = "./assets";




function App() {
  const mapDiv = useRef(null);
  const [modalContent, setModalContent] = useState(false)
  const [apiData, setApiData] = useState([])

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3109/api/data');
        const data = await response.json();
        
        setApiData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(apiData, 'apiData')

//   var myHeaders = new Headers();
// myHeaders.append(“Authorization”, “Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtSUQiOiJTa2VDOU9rc3VjS29BV0dwbkVwOCIsInRlYW1BcGlLZXlJRCI6Ind5ZXhqakFRZjlMUDRTVDhRU3h4IiwiaWF0IjoxNjg2MDk3ODc5LCJleHAiOjE3MTc2MzM4Nzl9.HSwZqZI-liT29CHOZkohOYgbSIBDT865hymTKefhZXc”);
// var requestOptions = {
//   method: ‘GET’,
//   headers: myHeaders,
//   redirect: ‘follow’
// };
// fetch(“https://qr-dev.rubbish.love/public/api/v1/reports/SkeC9OksucKoAWGpnEp8/get”, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log(‘error’, error));
  

  useEffect(() => {
    const graphicsLayer = new GraphicsLayer();
    const map = new Map({
      basemap: 'topo-vector',
      layers: [graphicsLayer]
    });
  
    const view = new MapView({
      container: mapDiv.current,
      map: map,
      center: [-122.44, 37.77], // These coordinates point to San Francisco, you want to put the coordinates of your city here
      zoom: 12 // This zoom level should give a good view of the city
    });
  
    // Use the simulated API data
    if (apiData) {
      apiData.forEach(item => {
        const point = new Point({
          latitude: parseFloat(item.lat).toFixed(4), 
          longitude: parseFloat(item.long).toFixed(4) 
        });

        console.log(parseFloat(item.lat).toFixed(2))
  
        const symbol = new SimpleMarkerSymbol({
          color: [226, 119, 40],  // Orange color for the symbol
          outline: { // autocasts as new SimpleLineSymbol()
            color: [255, 255, 255], // White color for the outline
            width: 2  // Width of the outline
          }
        });
    
        const pointGraphic = new Graphic({
          geometry: point,
          symbol: symbol,
          attributes: {
            // Add any data you want to display in the modal here
            id: item.id,
            afterPhotoURL: item.afterPhotoURL,
            photoURL: item.photoURL,
            itemType: item.rubbishType,
            street: item.street, 
            teamDisplayName: item.teamDisplayName,
            userName: item.userName,          
          }
        });
    
        graphicsLayer.add(pointGraphic);
      });
    }

    
  
    // When the view is clicked, check if a point was clicked and show the modal if so
   // Replace 'pointer-move' with 'click' in the event listener
   view.on('click', function(event) {
    view.hitTest(event).then(function(response) {
      if (response.results.length) {
        const graphicsFromLayer = response.results.filter(function(result) {
          // Check if the graphic exists and belongs to the layer of interest
          return result.graphic && result.graphic.layer === graphicsLayer;
        });
  
        if (graphicsFromLayer.length) {
          const graphic = graphicsFromLayer[0].graphic;
          // Only set the modal content if the clicked graphic is from our GraphicsLayer
          setModalContent(graphic.attributes);
        } else {
          // If the click was not on a graphic from our GraphicsLayer, hide the modal
          setModalContent(null);
        }
      } else {
        // If the click was not on any graphic, hide the modal
        setModalContent(null);
      }
    });
  });
  

    
  
    return () => {
      if (view) {
        // destroy the map view
        view.destroy();
      }
    };
  }, [apiData]);

  return (
    <div className="App">
      <div ref={mapDiv} style={{height: "100vh", width: "100vw"}}></div>

      {modalContent && (
        <div className="modal">
          <h2>{modalContent.rubbishType}</h2>
          <p>id: {modalContent.id}</p>
          <p>Submitted by: {modalContent.userName}</p>
          <p>Street: {modalContent.street}</p>
          <p>Team Name: {modalContent.teamDisplayName}</p>
          <img src={modalContent.photoURL} alt="" />
          <img src={modalContent.afterPhotoURL} alt="" />
          <button onClick={() => setModalContent(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
