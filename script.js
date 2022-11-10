let map, infoWindow;

const locations = [
  ['Site1', 14.60072560882072,   120.97389965704441,1 ],
  ['Site2', 14.553384099843484,  121.05068592883588,2 ],
  ['Site3', 14.55679326766659,   121.01563245767176,3 ],
  ['Site4', 14.54167402518278,   120.99753311534347,4 ],
  ['Site5', 14.636829506793653,  121.02754824232824,5 ],
  ['Site6', 14.642439578429954,  120.9943756865076, 6],
];

const posis = {lat: 14.526732,  lng: 121.023866}; //PhilSCA


var directionsService = new google.maps.DirectionsService()
var directionsDisplay = new google.maps.DirectionsRenderer();

directionsDisplay.setMap(map);




function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 14.570076374952174, lng: 121.03441571047188  },
    zoom: 11,
  });
  infoWindow = new google.maps.InfoWindow();



  const site1 = {lat: 14.60072560882072,  lng: 120.97389965704441}; //ANSI IS
  const site2 = {lat: 14.553384099843484, lng: 121.05068592883588}; //Trade Dynamics
  const site3 = {lat: 14.55679326766659,  lng: 121.01563245767176}; //Questronix
  const site4 = {lat: 14.54167402518278,  lng: 120.99753311534347}; //Nelsoft Technologies
  const site5 = {lat: 14.636829506793653, lng: 121.02754824232824}; //Odev Solutions
  const site6 = {lat: 14.642439578429954, lng: 120.9943756865076};  //Northgate Technologies, Inc.


  //const marker1 = new google.maps.Marker({position: site1, map: map, icon: image});
  //const marker2 = new google.maps.Marker({position: site2, map: map, icon: image});
  //const marker3 = new google.maps.Marker({position: site3, map: map, icon: image});
  //const marker4 = new google.maps.Marker({position: site4, map: map, icon: image});
  //const marker5 = new google.maps.Marker({position: site5, map: map, icon: image});
  //const marker6 = new google.maps.Marker({position: site6, map: map, icon: image});

 //*********************************************************************************** */
 //Site 1
 //*********************************************************************************** */
  const contentString1 = '<div style="float:right"><img src="graphics/site1.jpg" width="300" height="120"></div>'+ 
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">ANSI Information Systems, Inc.</h1>' +
    '<div id="bodyContent">' + '<h5>Address:  Tytana Plaza, Quintin Paredes Road, Binondo, Manila, Metro Manila</h5>' +'<br>'+
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a neque metus. Donec ut felis sem. Praesent nec pulvinar ipsum."
    +
    " Aenean efficitur a sapien quis mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. "+ 
    "Curabitur ultricies imperdiet lacus, sed condimentum nunc porttitor nec.</p>" +'<b><br>'+
    '<h3>Available Slot: <b>8</b></h3>'
    +'<button onclick="getDirToSite1()">Get Direction</button>' +
    "</div>" +
    "</div>";
  const infowindow1 = new google.maps.InfoWindow({
    content: contentString1,
    ariaLabel: "Site 1",
    maxWidth: 500, 
  });
  const marker1 = new google.maps.Marker({
    position: site1,
    map,
    title: "Site 1",
  });

  marker1.addListener("click", () => {
    infowindow1.open({
      anchor: marker1,
      map,
    });
  });

  //*********************************************************************************** */
 //Site 2
 //*********************************************************************************** */
  const contentString2 =
  '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Trade Dynamics Consulting International Inc.</h1>' +
    '<div id="bodyContent">' + '<h5>Address:   Trade and Financial Tower, 32nd Street, Taguig, Metro Manila</h5>' +'<br>'+
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a neque metus. Donec ut felis sem. Praesent nec pulvinar ipsum."
    + " Aenean efficitur a sapien quis mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. "+ 
    "Curabitur ultricies imperdiet lacus, sed condimentum nunc porttitor nec.</p>" +'<b><br>'+
    '<h3>Available Slot: <b>2</b></h3>'
    +'<button onclick="myFunction()">Get Direction</button>' +
    "</div>" +
  "</div>";
const infowindow2 = new google.maps.InfoWindow({
 content: contentString2,
 ariaLabel: "Site 2",
  
});
const marker2 = new google.maps.Marker({
 position: site2,
 map,
 title: "Site 2",
});

marker2.addListener("click", () => {
  infowindow2.open({
  anchor: marker2,
  map,
  });
});

 //*********************************************************************************** */
 //Site 3
 //*********************************************************************************** */
    const contentString3 =
    '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Questronix Corporation</h1>' +
      '<div id="bodyContent">' + '<h5>Address: 180, 3rd Floor Centro Building, Salcedo Street, Legaspi Village, Makati, 1229 Metro Manila</h5>' +'<br>'+
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a neque metus. Donec ut felis sem. Praesent nec pulvinar ipsum."
      + " Aenean efficitur a sapien quis mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. "+ 
      "Curabitur ultricies imperdiet lacus, sed condimentum nunc porttitor nec.</p>" +'<b><br>'+
      '<h3>Available Slot: <b>1</b></h3>'
      +'<button onclick="myFunction()">Get Direction</button>' +
      "</div>" +
    "</div>";

    const infowindow3 = new google.maps.InfoWindow({
       content: contentString3,
       ariaLabel: "Site 3",
        
      });

    const marker3 = new google.maps.Marker({
       position: site3,
       map,
       title: "Site 3",
      });

    marker3.addListener("click", () => {
      infowindow3.open({
        anchor: marker3,
        map,
        });
      });


 //*********************************************************************************** */
 //Site 4
 //*********************************************************************************** */
 const contentString4 =
 '<div id="content">' +
   '<div id="siteNotice">' +
   "</div>" +
   '<h1 id="firstHeading" class="firstHeading">Nelsoft Technology Inc.</h1>' +
   '<div id="bodyContent">' + '<h5>Address: 2835B Park avenue Pasay City, Barangay 74, Pasay, Metro Manila</h5>' +'<br>'+
   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a neque metus. Donec ut felis sem. Praesent nec pulvinar ipsum."
   + " Aenean efficitur a sapien quis mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. "+ 
   "Curabitur ultricies imperdiet lacus, sed condimentum nunc porttitor nec.</p>" +'<b><br>'+
   '<h3>Available Slot: <b>4</b></h3>'
   +'<button onclick="myFunction()">Get Direction</button>' +
   "</div>" +
 "</div>";

 const infowindow4 = new google.maps.InfoWindow({
    content: contentString4,
    ariaLabel: "Site 4",
     
   });

 const marker4 = new google.maps.Marker({
    position: site4,
    map,
    title: "Site 4",
   });

 marker4.addListener("click", () => {
   infowindow4.open({
     anchor: marker4,
     map,
     });
   });


 //*********************************************************************************** */
 //Site 5
 //*********************************************************************************** */
 const contentString5 =
 '<div id="content">' +
   '<div id="siteNotice">' +
   "</div>" +
   '<h1 id="firstHeading" class="firstHeading">Odev Solutions</h1>' +
   '<div id="bodyContent">' + '<h5>Address: Suite 409 Pasda Mansion, 77 Panay Ave, Cor Timog Ave, Quezon City, 1103</h5>' +'<br>'+
   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a neque metus. Donec ut felis sem. Praesent nec pulvinar ipsum."
   + " Aenean efficitur a sapien quis mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. "+ 
   "Curabitur ultricies imperdiet lacus, sed condimentum nunc porttitor nec.</p>" +'<b><br>'+
   '<h3>Available Slot: <b>6</b></h3>'
   +'<button onclick="myFunction()">Get Direction</button>' +
   "</div>" +
 "</div>";

 const infowindow5 = new google.maps.InfoWindow({
    content: contentString5,
    ariaLabel: "Site 5",
     
   });

 const marker5 = new google.maps.Marker({
    position: site5,
    map,
    title: "Site 5",
   });

 marker5.addListener("click", () => {
   infowindow5.open({
     anchor: marker5,
     map,
     });
   });


 //*********************************************************************************** */
 //Site 6
 //*********************************************************************************** */
 const contentString6 =
 '<div id="content">' +
   '<div id="siteNotice">' +
   "</div>" +
   '<h1 id="firstHeading" class="firstHeading">Northgate Technologies, Inc.</h1>' +
   '<div id="bodyContent">' + '<h5>Address: 59 Tinagan, La Loma, Lungsod Quezon, 1115 Kalakhang Maynila, Philippines</h5>' +'<br>'+
   "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a neque metus. Donec ut felis sem. Praesent nec pulvinar ipsum."
   + " Aenean efficitur a sapien quis mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. "+ 
   "Curabitur ultricies imperdiet lacus, sed condimentum nunc porttitor nec.</p>" +'<b><br>'+
   '<h3>Available Slot: <b>0</b></h3>'
   +'<button onclick="myFunction()">Get Direction</button>' +
   "</div>" +
 "</div>";

 const infowindow6 = new google.maps.InfoWindow({
    content: contentString6,
    ariaLabel: "Site 6",
     
   });

 const marker6 = new google.maps.Marker({
    position: site6,
    map,
    title: "Site 6",
   });

 marker6.addListener("click", () => {
   infowindow6.open({
     anchor: marker6,
     map,
     });
   }); 

 //*********************************************************************************** */


  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("You are here.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

 
  function getDirToSite1(){

    var request = {
      origin: posis,
      destination: site1,
      travelMode: google.maps.TravelMode.DRIVING,
    
      unitSystem: google.maps.UnitSystem.METRIC
    }
    
    directionsService.route(request, (result, status) =>{
    
        if(status == google.maps.DirectionsStatus.OK){
    
          directionsDisplay.setDirections(result);
    
        } else {
          directionsDisplay.setDirections({routes: []});
          map.setCenter(posis);
    
          out
        }
    })  
    

  }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}


window.initMap = initMap;


  

  
