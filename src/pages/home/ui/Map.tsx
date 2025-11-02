import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import logo from "../../../assets/pin.svg";
import { useMirror } from "../store";
// import scope from "../../../assets/scope.svg"

(L.Icon.Default as any)._getIconUrl = undefined;

const storeIcon = L.icon({
  iconUrl: logo,
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

const MapComponent: React.FC = () => {
  const branches = useMirror("branches");
  console.log(branches)
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
      className="relative"
      style={{
        width: "95%",
        height: "90vh",
        margin: "50px auto",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <div className="w-[400px] rounded-2xl absolute z-999 right-10 overflow-hidden">
        {/* <div className="bg-main px-4 py-8">
            <div className="flex bg-white rounded-full py-1 px-2.5 items-center gap-5 ">
              <img src={scope} alt="" />
              <hr className="bg-[#AFAFAF] h-8 w-[2px]"/>
              <h1 className="font-semibold text-lg  text-[#222222]">الرياض</h1>
            </div>
            <div className="w-[105px] mx-auto">
              <h1 className="text-white ">

              gggggg
              </h1>
            </div>
        </div> */}
      </div>
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
