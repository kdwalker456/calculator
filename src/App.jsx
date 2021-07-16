// import React, {useState, useEffect} from 'react';
// import Period from './Period.jsx';


// const App = (props) => {
//   const [weather, setWeather] = useState(null);
    
  
//   useEffect (() => {
//     fetch('https://api.weather.gov/gridpoints/OKX/34,32/forecast')
//     .then((response) => response.json())
//     .then((data) => setWeather(data));
//   }, []);
//     return (
//         <div>
//           {weather && weather.properties.periods.map(arr => {
//             console.log(arr);
//             return (<Period key = {arr.number} periodData = {arr} />);
//           })}
          
//         </div>
//       );
// }

// export default App;
