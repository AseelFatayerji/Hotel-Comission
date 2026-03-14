import { GoogleMap, LoadScript } from "@react-google-maps/api";

function Map() {
  const location = { lat: 9.976987281724702, lng: -84.16001289140435 };
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_KEY}>
      <GoogleMap
        mapContainerClassName="rounded-lg w-full h-[30rem]"
        center={location}
        zoom={15}
      />
    </LoadScript>
  );
}

export default Map;
