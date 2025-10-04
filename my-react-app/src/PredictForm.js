import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';


function PredictForm() {
 // Setting up state variables using the useState hook
const [vehicleType, setVehicleType] = useState(''); // State for vehicle type
const [options, setOptions] = useState(''); // State for options
const [km, setKm] = useState(''); // State for kilometers
const [makeYear, setMakeYear] = useState(''); // State for vehicle manufacturing year
const [result, setResult] = useState(''); // State for prediction result message

const [showResult, setShowResult] = useState(false); // State to control displaying prediction result
const [loading, setLoading] = useState(false);
const [delayedMessage, setDelayedMessage] = useState('');

// Creating a reference for the slider
const sliderRef = useRef(null);

// Handling changes in the slider value
const handleSliderChange = (e) => {
  setKm(e.target.value); // Update kilometers based on slider value
};

// Function to calculate and update slider value position
const updateSliderValuePosition = (value) => {
  if (sliderRef.current) {
    // Calculate slider position based on value, width, min, and max values of the slider
    // Adjust the offset as needed for proper positioning
    const inputWidth = sliderRef.current.offsetWidth;
    const inputMin = parseFloat(sliderRef.current.min) || 0;
    const inputMax = parseFloat(sliderRef.current.max) || 100;
    const sliderPosition = ((value - inputMin) / (inputMax - inputMin)) * inputWidth;
    return `calc(${sliderPosition}px - 30px)`; 
  }
  return '0px'; // Default position if sliderRef is not available yet
};

// Effect to update slider position when kilometers (km) changes
useEffect(() => {
  updateSliderValuePosition(km); // Update slider position
}, [km]);

// Function to make a prediction based on the provided inputs
 const predict = () => {
  const mileage = km / 1.6;
  const vehicleAge = 2023 - makeYear;

  const inputData = {
    Type: vehicleType,
    Options: options,
    Mileage: parseFloat(mileage),
    vehicle_age: parseFloat(vehicleAge),
  };

  setLoading(true);
  setShowResult(true);
  setResult(''); // مسح النتيجة القديمة
  setDelayedMessage(''); // مسح رسالة التأخير السابقة

  // رسالة التأخير بعد 10 ثواني
  const longWaitTimer = setTimeout(() => {
    setDelayedMessage("  الرد قد يستغرق وقت أطول في المره الأولى فقط يمكنك ابقاء الصفحة والعودة لها لاحقا");
  }, 10000);

  fetch('https://omar-server1.onrender.com/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inputData)
  })
    .then(res => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then(data => {
      let prediction = data.prediction;
      if (prediction < 0) prediction = Math.abs(prediction);
      clearTimeout(longWaitTimer); // إلغاء التايمر عند وصول الرد
      setResult(`تقدر سيارتك بــ ${prediction} ريال سعودي`);
      setDelayedMessage(''); // مسح رسالة التأخير
    })
    .catch(err => {
      console.error(err);
      clearTimeout(longWaitTimer);
      setResult('حدث خطأ أثناء جلب النتيجة تأكد من إدخال جميع المعلومات المطلوبة بشكل صحيح');
      setDelayedMessage('');
    })
    .finally(() => setLoading(false));
};


  return (
    <div>
    
    <div className="w-full h-full md:w-5/6 lg:w-2/2 xl:w-1/2 mx-auto mt-20">
      <div className="md:h-3/4 lg:h-3/4 xl:h-3/4 bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4 w-full xl:w-1/1">
        <form >
          <div className="w-full mb-6">
            <label htmlFor="vehicleType" className="block text-lg font-medium text-black" >
              نوع السيارة :
            </label>
            <select
  id="vehicleType"
  className="border border-gray-300 rounded-lg w-full py-3 px-4 mt-1 text-lg focus:outline-none focus:ring-green-500 focus:border-green-600 appearance-none"  value={vehicleType}
  onChange={(e) => setVehicleType(e.target.value)}
>
  <option value="">اختر موديل سيارتك</option>
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
    المواصفات :
  </label>
  <select
    id="options"
    value={options}
    className="border border-gray-300 rounded-lg w-full py-3 px-4 mt-1 text-lg focus:outline-none focus:ring-green-600 focus:border-green-600 appearance-none"
    onChange={(e) => setOptions(e.target.value)}
  >
    <option value="">اختر نوع المواصفات</option>
    <option value="Full">فل</option>
    <option value="Semi Full">نص فل</option>
    <option value="Standard">ستاندر</option>
  </select>
</div>

          
          <div className="slider-container">
      <label htmlFor="km" className="block text-lg  font-medium text-gray-700 mb-2 mt-0">
عداد الكيلو متر       </label>
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
        style={{ right: updateSliderValuePosition(km) }}
      >
        {km}
      </div>
    </div>
 <div className="mb-4 mt-6">
  <label htmlFor="makeYear" className="block text-lg font-medium text-gray-700">
    سنة الموديل
  </label>
  <select
    id="makeYear"
    className="border border-gray-300 rounded-lg w-full py-3 px-4 mt-1 text-sm focus:outline-none focus:ring-green-600 focus:border-green-600"
    value={makeYear}
    onChange={(e) => setMakeYear(e.target.value)}
  >
    <option value="">اختر السنة</option>
    {Array.from({ length: 10 }, (_, i) => 2023 - i).map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ))}
  </select>
</div>


<button
  type="button"
  className="bg-green-600 text-white py-3 px-3 rounded-lg text-sm hover:bg-green-600 focus:outline-none focus:bg-green-600 mr-56 mt-4"
  onClick={predict}
  style={{ fontWeight: 700 }}
  disabled={loading} // لتعطيل الزر أثناء التحميل
>
  {loading ? "جاري الحساب..." : "السعر المتوقع"}
</button>
</form>
</div>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: showResult ? 1 : 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className={`bg-green-600 border border-gray-300 p-6 rounded-lg shadow-md ${showResult ? 'block' : 'hidden'}`}
  id="result"
>
  {showResult && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center space-x-2"
    >
      {loading && (
        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin ml-6"></div>
      )}
     <p className="text-white font-semibold text-lg ">
  {loading ? (delayedMessage || "جاري معالجة الطلب... يرجى الانتظار") : result}
</p>
    </motion.div>
  )}

  {!loading && (
    <p className="text-gray-100 text-base mt-2">
      تنويه : الأسعار مستنتجه من خلال الذكاء الاصطناعي لذلك قد تختلف عن اسعار السوق الحالية
    </p>
  )}
</motion.div>

      





    </div>


  </div>
  
  );
}

export default PredictForm;
