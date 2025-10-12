// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import logo from "../../../assets/pin.svg";
// import { useMirror } from "../store";

// (L.Icon.Default as any)._getIconUrl = undefined;

// interface MapPoint {
//   id: number;
//   lat: number;
//   lng: number;
//   title: string;
// }

// const points: MapPoint[] = [
//   { id: 1, lat: 24.6267, lng: 46.7056, title: "Sulaymaniyah District" },
//   { id: 2, lat: 24.7511, lng: 46.7078, title: "Al-Muruj" },
//   { id: 3, lat: 24.7778, lng: 46.7411, title: "Yarmouk" },
//   { id: 4, lat: 24.7578, lng: 46.7033, title: "Al-Hazm" },
//   { id: 5, lat: 24.7889, lng: 46.6722, title: "Rawabi" },
//   { id: 6, lat: 24.7644, lng: 46.6756, title: "Al-Badiah" },
//   { id: 7, lat: 24.7111, lng: 46.6122, title: "Dhahrat Laban" },
// ];

// const storeIcon = L.icon({
//   iconUrl: logo,
//   iconSize: [50, 50],
//   iconAnchor: [25, 50],
//   popupAnchor: [0, -50],
// });

// const MapComponent: React.FC = () => {
//   const branches = useMirror("branches");
//   console.log(branches);
//   return (
//     <div
//       style={{
//         width: "80%",
//         height: "70vh",
//         margin: "50px auto",
//         borderRadius: "20px",
//         overflow: "hidden",
//         boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
//       }}
//     >
//       <MapContainer
//         center={[24.7111, 46.6122]}
//         zoom={10}
//         scrollWheelZoom={false}
//         dragging={true}
//         style={{ width: "100%", height: "100%" }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//           url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
//         />
//         {points.map((point) => (
//           <Marker
//             key={point.id}
//             position={[point.lat, point.lng]}
//             icon={storeIcon}
//           >
//             <Popup>{point.title}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapComponent;

import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import logo from "../../../assets/pin.svg";
import { useMirror } from "../store";

// تعطيل الإعداد الافتراضي لأيقونات Leaflet
(L.Icon.Default as any)._getIconUrl = undefined;

// أيقونة مخصصة
const storeIcon = L.icon({
  iconUrl: logo,
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

const MapComponent: React.FC = () => {
  const branches = useMirror("branches");

  const validBranches = useMemo(
    () => branches?.filter((b: any) => b.latitude && b.longitude) || [],
    [branches]
  );

  const defaultCenter: [number, number] = validBranches.length
    ? [
        Number(validBranches[0].latitude) || 24.7136,
        Number(validBranches[0].longitude) || 46.6753,
      ]
    : [24.7136, 46.6753];

  return (
    <div
      style={{
        width: "80%",
        height: "70vh",
        margin: "50px auto",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <MapContainer
        center={defaultCenter}
        zoom={10}
        scrollWheelZoom={false}
        dragging={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {validBranches.map((branch: any) => (
          <Marker
            key={branch.id}
            position={[branch.latitude, branch.longitude]}
            icon={storeIcon}
          >
            <Popup>
              <b>{branch.name}</b>
              <br />
              {branch.address || "بدون عنوان"}
              <br />
              <small>رسوم التوصيل: {branch.delivery_charge} ريال</small>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
