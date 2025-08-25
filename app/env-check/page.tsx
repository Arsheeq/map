'use client';

import { useEffect, useState } from 'react';

export default function EnvCheck() {
  const [val, setVal] = useState<string | undefined>();

  useEffect(() => {
    // This runs in the browser. NEXT_PUBLIC_* should be defined here after a rebuild.
    setVal(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
  }, []);

  return (
    <main style={{padding: 24, fontFamily: 'sans-serif'}}>
      <h1>Env Check</h1>
      <p>
        <strong>NEXT_PUBLIC_GOOGLE_MAPS_API_KEY present?</strong>{' '}
        {val ? '✅ Yes' : '❌ No'}
      </p>
      <p style={{marginTop: 8, color: '#666'}}>
        (For security, don’t print keys in production UIs—this is only for testing.)
      </p>
    </main>
  );
}

