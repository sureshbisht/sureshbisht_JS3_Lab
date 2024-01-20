import {WeatherAPI} from "./weather-api.js";
class WeatherApp{
    addListeners(){
        const searchBoxElement = document.querySelector(".search-box");
        searchBoxElement.weatherAppObj= this;
        searchBoxElement.addEventListener("keypress",this
        .handleWeatherAPIInvocation);

    }
    handleWeatherAPIInvocation(event){
         


        if(event.key == "Enter"){
            const eventTarget = event.target;
            const userSuppliedLocation = eventTarget.value;

            const weatherAPIObj = new WeatherAPI();
            weatherAPIObj.buildURL(userSuppliedLocation);
            const responseJSON =  await weatherAPIObj.invokeURL();
            const weatherAppObj= eventTarget.weatherAppObj;
            weatherAppObj.updateUI(responseJSON);
            
        }




    }
    updateUI(responseJSON){

       const locationValue = '${responseJSON.name}, ${responseJSON.sys.country }'; 
      const locationElement = document.querySelector(".location.city");
      locationElement.innerText= locationValue;
      const dateElement= document.querySelector("location.date");
      dateElement.innerText = this.getCurrentDate();
      const temperatureElement= document.querySelector(".current.temp");
      temperatureElement.innerText= '${responseJSON.main.temp}°C';
      const temperatureTypeElement= document.querySelector("current.weather");
      
      temperatureTypeElement.innerText = '${responseJSON.weather[0].main}';
      const lowHighTemperatureElement= document.querySelector("current.hi-low");
      lowHighTemperatureElement.innerText = '${responseJSON.main.temp_min}°C/${responseJSON.main.temp_max}°C'
      
      
      


    }
    getCurrentDate(){
        const today = new Date();
        const dateAsString = today.toLocaleDateString("en-us", {
            year:'numeric',
            month: 'long',
            weekday: 'long',
            day:'numeric'
        })
        return dateAsString;

    }
}
export{WeatherApp}