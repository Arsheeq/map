'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

const DEFAULT_CENTER = { lat: 12.9716, lng: 77.5946 };

export default function Maps() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapDivRef = useRef<HTMLDivElement>(null);
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    if (!apiLoaded || !mapDivRef.current) return;
    // @ts-expect-error google is injected by the Maps JS script
    const map = new google.maps.Map(mapDivRef.current, {
      center: DEFAULT_CENTER,
      zoom: 12,
      mapTypeControl: false,
      streetViewControl: false,
    });
    // @ts-expect-error google is injected by the Maps JS script
    new google.maps.Marker({ position: DEFAULT_CENTER, map, title: 'Hello' });
  }, [apiLoaded]);

  return (
    <main style={{ padding: 24 }}>
      <h1>Google Maps Loader</h1>
      {!key && <p style={{ color: 'crimson' }}>No API key set!</p>}
      <div ref={mapDivRef} id="map" style={{ width: '100%', height: 400, marginTop: 12, background: '#eee' }} />
      {key && (
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`}
          strategy="afterInteractive"
          onLoad={() => setApiLoaded(true)}
        />
      )}
    </main>
  );
}

