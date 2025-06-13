import * as L from 'leaflet';

declare module 'leaflet' {
  namespace Routing {
    class Control extends L.Control {
      constructor(options?: any);
      getPlan(): any;
      setWaypoints(waypoints: L.LatLng[]): void;
    }

    class ItineraryFormatter {
      constructor(options?: any);
      formatDistance(d: number): string;
      formatTime(t: number): string;
    }

    class OSRMv1 {
      constructor(options?: { serviceUrl?: string });
    }

    class Itinerary {}
    class Line {}
    class Plan {}
    class Formatter {}

    class Waypoint {
      latLng: L.LatLng;
      name: string;
    }

    function control(options: any): Control;
  }
}
