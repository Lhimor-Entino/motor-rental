import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
    useMapEvents
} from 'react-leaflet';
import { useEffect, useState } from 'react';
import L, { type LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import '../lib/mapUtil';

const Routing = ({
    from,
    to
}: {
    from: LatLngExpression;
    to: LatLngExpression;
}) => {
    const map = useMap();

    useEffect(() => {
        const control = L.Routing.control({
            waypoints: [L.latLng(from), L.latLng(to)],
            show: false,
            addWaypoints: false,
            draggableWaypoints: false,
            createMarker: () => null,
            itinerary: {
                container: document.getElementById('routing-instructions')!
            },

        }).addTo(map);

        return () => {
            map.removeControl(control); // ✅ Safe and type-correct
        };
    }, [from, to, map]);

    return null;
};


const ClickHandler = ({
    onClick
}: {
    onClick: (latlng: LatLngExpression) => void;
}) => {
    useMapEvents({
        click(e) {
            onClick(e.latlng);
        }
    });
    return null;
};
const vehicleIcon = new L.Icon({
    iconUrl: 'https://static.vecteezy.com/system/resources/previews/018/974/668/original/cartoon-car-icon-png.png',
    iconSize: [30, 30],
    iconAnchor: [20, -1],
});
const Map = () => {
    const [currentLocation, setCurrentLocation] = useState<LatLngExpression | null>(null);
    const [destination, setDestination] = useState<LatLngExpression | null>(null);
    const [mapCenter, setMapCenter] = useState<LatLngExpression>([14.5995, 120.9842]); // fallback center
    const [coords,setCoord] = useState<any>("")
    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const coords: LatLngExpression = { lat: latitude, lng: longitude };
                setCurrentLocation(coords);
                setMapCenter(coords); // Optional: to follow the user
                setCoord(coords)
            },
            (err) => {
                console.error('Geolocation error:', err);
                alert('Failed to get your location');
            },
            {
                enableHighAccuracy: true,
                maximumAge: 1000,
                timeout: 10000
            }
        );

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);


    return (
        <div className='relative w-[500px]'>
            {JSON.stringify(coords)}
            <MapContainer
                center={mapCenter}
                zoom={16}
                style={{ height: '100vh', width: '100%', }}
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                {
                    !destination ?
                    currentLocation && (
                        <Marker
                            position={currentLocation}
             
                        >
                            <Popup>You are here</Popup>
                        </Marker>
                    )
                    :
                     currentLocation && (
                        <Marker
                            position={currentLocation}
                            icon={vehicleIcon}
                        >
                            <Popup>You are here</Popup>
                        </Marker>
                    )

                }


                <ClickHandler onClick={setDestination} />

                {destination && (
                    <Marker position={destination}>
                        <Popup>Destination</Popup>
                    </Marker>
                )}

                {currentLocation && destination && (
                    <Routing from={currentLocation} to={destination} key={`${(currentLocation as any).lat}-${(currentLocation as any).lng}`} // 🔁 force re-render on location change 
                    />
                )}
            </MapContainer>

            <div style={{ display: 'flex' }}>
                <div id="map" style={{ height: '100vh', width: '70%' }}></div>
                <div
                    id="routing-instructions"
                    style={{
                        width: '30%',
                        height: '100vh',
                        overflowY: 'auto',
                        padding: '1rem',
                        fontSize: '14px'
                    }}
                >
                    <h4>Directions</h4>
                </div>
            </div>

        </div>

    );
};

export default Map;
