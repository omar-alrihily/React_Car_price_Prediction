import { useState, useRef, useEffect } from 'react';


function PredictForm() {
  const [vehicleType, setVehicleType] = useState('');
  const [options, setOptions] = useState('');
  const [km, setKm] = useState('');
  const [makeYear, setMakeYear] = useState('');
  const [result, setResult] = useState('');
  const [predictionResult, setPredictionResult] = useState('');
  const [showResult, setShowResult] = useState(false);

  const sliderRef = useRef(null);

  const handleSliderChange = (e) => {
    setKm(e.target.value);
  };

  const updateSliderValuePosition = (value) => {
    if (sliderRef.current) {
      const inputWidth = sliderRef.current.offsetWidth;
      const inputMin = parseFloat(sliderRef.current.min) || 0;
      const inputMax = parseFloat(sliderRef.current.max) || 100;
      const sliderPosition = ((value - inputMin) / (inputMax - inputMin)) * inputWidth;
      return `calc(${sliderPosition}px - 20px)`; // Adjust the offset as needed
    }
    return '0px'; // Default position if sliderRef is not available yet
  };

  useEffect(() => {
    // Force update the position when component is mounted or 'km' changes
    updateSliderValuePosition(km);
  }, [km]);


  const predict = () => {
    const mileage = km / 1.6;
    const vehicleAge = 2023 - makeYear;

    const inputData = {
      Type: vehicleType,
      Options: options,
      Mileage: parseFloat(mileage),
      vehicle_age: parseFloat(vehicleAge),
    };

    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        let prediction = data.prediction;
        if (prediction < 0) {
          prediction = Math.abs(prediction); // Convert negative to positive
        }
        setResult(`Prediction: ${prediction} SR`);
        setPredictionResult(prediction);
        setShowResult(true);
        console.log(result)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });

    
  };

  return (
    <div>
    
    <div className="w-full md:w-5/6 lg:w-2/2 xl:w-1/2 mx-auto mt-20">
      <div className="md:h-3/4 lg:h-3/4 xl:h-3/4 bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4 w-full xl:w-1/1">
        <form>
          <div className="w-full mb-6">
            <label htmlFor="vehicleType" className="block text-lg font-medium text-black">
              Vehicle Type:
            </label>
            <select
  id="vehicleType"
  className="border border-gray-300 rounded-lg w-full py-3 px-4 mt-1 text-lg focus:outline-none focus:ring-green-500 focus:border-green-600 appearance-none"  value={vehicleType}
  onChange={(e) => setVehicleType(e.target.value)}
>
  <option value="">Select vehicle type</option>
  <option value="Accent">Accent</option>
  <option value="Camry">Camry</option>
  <option value="Hilux">Hilux</option>
  <option value="Sonata">Sonata</option>
  <option value="Taurus">Taurus</option>
  <option value="Elantra">Elantra</option>
  <option value="Tahoe">Tahoe</option>
  <option value="Yukon">Yukon</option>
  <option value="Corolla">Corolla</option>
  <option value="Land Cruiser">Land Cruiser</option>
  <option value="Expedition">Expedition</option>
  <option value="Furniture">Furniture</option>
  <option value="Sunny">Sunny</option>
  <option value="Accord">Accord</option>
  <option value="Yaris">Yaris</option>
  <option value="ES">ES</option>
  <option value="Prado">Prado</option>
  <option value="Pajero">Pajero</option>
  <option value="Sierra">Sierra</option>
  <option value="Suburban">Suburban</option>
  <option value="6">6</option>
  <option value="Caprice">Caprice</option>
  <option value="Innova">Innova</option>
  <option value="Charger">Charger</option>
  <option value="Patrol">Patrol</option>
  <option value="Cerato">Cerato</option>
  <option value="Impala">Impala</option>
  <option value="FJ">FJ</option>
  <option value="Santa Fe">Santa Fe</option>
  <option value="Explorer">Explorer</option>
  <option value="Datsun">Datsun</option>
  <option value="S">S</option>
  <option value="Rio">Rio</option>
  <option value="Optima">Optima</option>
  <option value="C">C</option>
  <option value="Tucson">Tucson</option>
  <option value="Azera">Azera</option>
  <option value="Land Cruiser Pickup">Land Cruiser Pickup</option>
  <option value="CX9">CX9</option>
  <option value="H1">H1</option>
  <option value="Avalon">Avalon</option>
  <option value="Victoria">Victoria</option>
  <option value="Marquis">Marquis</option>
  <option value="E">E</option>
  <option value="Range Rover">Range Rover</option>
  <option value="The 7">The 7</option>
  <option value="LX">LX</option>
</select>
</div>

<div className="w-full mb-6">
  <label htmlFor="options" className="block text-lg font-medium text-black">
    Options:
  </label>
  <select
    id="options"
    value={options}
    className="border border-gray-300 rounded-lg w-full py-3 px-4 mt-1 text-lg focus:outline-none focus:ring-green-600 focus:border-green-600 appearance-none"
    onChange={(e) => setOptions(e.target.value)}
  >
    <option value="">Select Option</option>
    <option value="Full">Full</option>
    <option value="Semi Full">Semi Full</option>
    <option value="Standard">Standard</option>
  </select>
</div>

          
          <div className="slider-container">
      <label htmlFor="km" className="block text-lg  font-medium text-gray-700 mb-2 mt-0">
        KM :
      </label>
      <input 
        type="range"
        id="km"
        ref={sliderRef}
        min="0"
        max="700000"
        step="1000"
        className="slider-input "
        value={km}
        onChange={handleSliderChange}
      />
      <div
        className="slider-value "
        style={{ left: updateSliderValuePosition(km) }}
      >
        {km}
      </div>
    </div>
          <div className="mb-4 mt-6">
            <label htmlFor="makeYear" className="block text-lg font-medium text-gray-700">
              Model Year :
            </label>
            <input
              type="number"
              id="makeYear"
              placeholder="Enter vehicle age"
              className="border border-gray-300 rounded-lg w-full py-3 px-4 mt-1 text-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={makeYear}
              onChange={(e) => setMakeYear(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-600 focus:outline-none focus:bg-green-600"
            onClick={predict}
          >
            Predict Price
          </button>
        </form>
      </div>
      <div id="result" className={`bg-green-600 p-8 rounded-md ${showResult ? 'block' : 'hidden'}`}>
  {showResult && <p className="text-white font-bold">{result}</p>}
</div>

    </div>
  </div>
  
  );
}

export default PredictForm;
