import{WeatherAPI} from "./weather-api.js"
function testBuildURL(){
    const weatherAPIObj = new WeatherAPI();
    weatherAPIObj.buildURL("Japan");
}
 async function testInvokeURL(){
const weatherAPIOBj = new WeatherAPI();
weatherAPIOBj.buildURL("Japan");
weatherAPIObj.invokeURL();
const responseJSON  = await weatherAPIObj.invokeURL();
console.log(responseJSON);
}
testInvokeURL();