import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Map() {
  const location = { lat: 9.976795, lng: -84.160072 };

  const handleCopy = async () => {
    console.log("copied");
    navigator.clipboard.writeText("https://maps.app.goo.gl/ng41PCsG1myF1pFF9");
  };
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_KEY}>
      <GoogleMap
        mapContainerClassName="rounded-2xl w-full h-[30rem]"
        center={location}
        zoom={20}
      >
        <Marker position={location} onClick={handleCopy} text="LOP Inn"/>
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
