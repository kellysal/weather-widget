import React from "react";

const Weather = props => (
    <div className="weather__info">
        <p className="weather__key">Location: {props.city && props.city && <span className="weather__value">{props.city}, {props.country}</span>}</p>
        <p className="weather__key">Temperature: {props.temperature && <span className="weather__value">{props.temperature}℉</span>}</p>
        <p className="weather__key">Humidity: {props.humidity && <span className="weather__value">{props.humidity}</span>}</p>
        <p className="weather__key">Conditions: {props.description && <span className="weather__value">{props.description}</span>}</p>
        {props.error && <p className="weather__error">{props.error}</p>}
    </div>

);

export default Weather;