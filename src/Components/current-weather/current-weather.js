import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Belgrade</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img className="weather-icons" src="icons/01d.png" alt="weather" />
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top"> Details </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label "> Fells like </span>
            <span className="parameter-value "> 22°C </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label "> Wind </span>
            <span className="parameter-value "> 2m/s </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label ">humidity </span>
            <span className="parameter-value "> 15% </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label ">Pressure </span>
            <span className="parameter-value "> 15hPa </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
