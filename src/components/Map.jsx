import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useRef } from "react";
import Loadings from "./Loadings";

const libraries = ["marker"];

function Map() {
  const location = { lat: 9.976795, lng: -84.160072 };
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_MAP_KEY,
    libraries,
    version: "weekly"
  });

  if (!isLoaded) return <Loadings />;

  return (
    <GoogleMap
      mapContainerClassName="rounded-2xl w-full h-[30rem]"
      center={location}
      zoom={20}
      onLoad={(map) => {
        mapRef.current = map;
      }}
      options={{
        mapId: import.meta.env.VITE_MAP_ID 
      }}
    />
  );
}

export default Map;