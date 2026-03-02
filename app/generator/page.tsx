import React, { useState } from 'react';

const PhotoGeneratorPage = () => {
    const [step, setStep] = useState(1);
    const [type, setType] = useState('');
    const [file, setFile] = useState(null);

    const handleTypeSelection = (selectedType) => {
        setType(selectedType);
        setStep(2);
    };

    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
        setStep(3);
    };

    const handleProcessImage = () => {
        // Simulate processing
        setStep(4);
    };

    return (
        <div>
            {step === 1 && (
                <div>
                    <h2>Select Photo Type</h2>
                    <button onClick={() => handleTypeSelection('passport')}>Passport</button>
                    <button onClick={() => handleTypeSelection('visa')}>Visa</button>
                    <button onClick={() => handleTypeSelection('other')}>Other</button>
                </div>
            )}

            {step === 2 && (
                <div>
                    <h2>Upload Photo</h2>
                    <input type='file' onChange={handleFileUpload} />
                    <button onClick={() => setStep(1)}>Back</button>
                </div>
            )}

            {step === 3 && (
                <div>
                    <h2>Processing Photo...</h2>
                    <button onClick={handleProcessImage}>Generate Preview</button>
                    <button onClick={() => setStep(2)}>Back</button>
                </div>
            )}

            {step === 4 && (
                <div>
                    <h2>Preview Photo</h2>
                    <p>Type: {type}</p>
                    <img src={URL.createObjectURL(file)} alt='Preview' />
                    <button onClick={() => setStep(1)}>Start Over</button>
                </div>
            )}
        </div>
    );
};

export default PhotoGeneratorPage;