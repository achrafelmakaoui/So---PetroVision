import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

function QRscanner() {
    const [qrscan, setQrscan] = useState('No result');
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        setPhoto(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, including photo data
        console.log('Submitted photo:', photo);
    };

    return (
        <div style={{ height: 240, width: 320 }}>
            <span>QR Scanner</span>
            <center>
                <div style={{ marginTop: 30,width: '320px', height: '320px', border: '2px solid #ccc', borderRadius: '8px', overflow: 'hidden',marginBottom: 30 }}>
                    <Scanner
                        onResult={(text, result) => {
                            console.log(text, result);
                            setQrscan(text); // Update qrscan state with the scanned QR code value
                        }}
                        onError={(error) => console.log(error?.message)}
                        styles={{ height: '100%', width: '100%'  }}
                        
                    />
                </div>
            </center>
            <textarea
                style={{ fontSize: 18, width: 320, height: 100, marginTop: 100 }}
                rowsMax={4}
                defaultValue={qrscan}
                value={qrscan} // Use qrscan state variable as the value for the textarea
                readOnly // Ensure the textarea is read-only to prevent manual editing
            />
            <form onSubmit={handleSubmit}>
                <label htmlFor="photo">Take a photo:</label><br />
                <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    capture="camera"
                    onChange={handlePhotoChange}
                /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default QRscanner;
