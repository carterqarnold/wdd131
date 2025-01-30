const temperture = 7.222;
const windSpeed = 16;
const windChillLabel = document.querySelector(".windChill");

function ReturnWindChill(temperture, windSpeed){
    windChill = 13.12 + 0.6215 * temperture * (0.3965 * temperture - 11.37) * windSpeed ** 0.16;
    const windChillInt = parseInt(windChill) * -1;
    return windChillInt;
}
if (temperture <= 10 && windSpeed > 4.8){
    windChillLabel.append(ReturnWindChill(temperture, windSpeed),"°C");
    }
else{
    windChillLabel.append("N/A");
}
