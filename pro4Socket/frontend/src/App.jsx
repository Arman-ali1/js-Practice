// App.jsx
import React, { useState, useEffect } from 'react';

// Custom hook: useBarcodeScanner
function useBarcodeScanner(onScan, options = {}) {
  const { endDelay = 300, minLength = 3 } = options;
  const [barcode, setBarcode] = useState("");
  const [lastTime, setLastTime] = useState(null);

  useEffect(() => {
    function handleKeyDown(e) {
      const now = Date.now();
      // If delay between keys is too long, start a new barcode.
      if (lastTime && now - lastTime > endDelay) {
        setBarcode(e.key);
      } else {
        setBarcode(prev => prev + e.key);
      }
      setLastTime(now);
    }
    window.addEventListener("keydown", handleKeyDown);

    const interval = setInterval(() => {
      if (lastTime && Date.now() - lastTime > endDelay && barcode.length >= minLength) {
        onScan(barcode);
        setBarcode("");
        setLastTime(null);
      }
    }, endDelay);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [barcode, lastTime, onScan, endDelay, minLength]);
}

const App = () => {
  const [scannedCode, setScannedCode] = useState("No scan yet");
  const [scanning, setScanning] = useState(false);

  const handleScan = (code) => {
    setScannedCode(code);
    // Optionally stop scanning after a successful scan:
    setScanning(false);
  };

  // Activate the hook only when scanning is true.
  useEffect(() => {
    if (scanning) {
      // Start listening for barcode input
      // (The hook itself is activated because scanning is true.)
      // We call the custom hook here; it will add the event listeners.
      useBarcodeScanner(handleScan, { endDelay: 300, minLength: 3 });
      // Note: In React, hooks cannot be conditionally called.
      // Instead, we simply conditionally run our effect or ignore the result.
      // In this example, we rely on our state variable "scanning" in our hook's dependencies.
    }
  }, [scanning]); // re-run when scanning changes

  // Alternatively, you can simply call the hook unconditionally and only process results when scanning is true.
  // For simplicity, we'll activate scanning via state and have our effect listen accordingly.

  const startScanning = () => {
    setScannedCode("Scanning...");
    setScanning(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Barcode Scanner (Keyboard Detection)</h1>
      {!scanning && (
        <button onClick={startScanning} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Start Scan
        </button>
      )}
      <p>Scanned Code: {scannedCode}</p>
      {scanning && <p>Scanning... Please scan a barcode using your scanner device.</p>}
    </div>
  );
};

export default App;
