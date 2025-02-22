// App.jsx
import React, { useState } from 'react';
import { BarcodeScannerComponent } from 'react-qr-barcode-scanner';

const App = () => {
  const [result, setResult] = useState('No result');

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Barcode Scanner</h2>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, res) => {
            if (res) {
              setResult(res.text);
            } else if (err) {
              console.error(err);
            }
          }}
        />
      </div>
      <p>Scanned Result: {result}</p>
    </div>
  );
};

export default App;
