
const WEATHER_API_BASE_URL=https://api.openweathermap.org/data/2.5/weather
const API_KEY = "cc7c0d32d68c60fd7292dec51a7f3a32"

class WeatherApi{



    buildURL(locationName){:
         

        this.weatherAPIURL = new URL(BASE_URL);

        this.weatherAPIURL.searchParams.append("q",location);
        this.weatherAPIURL.searchParams.append("units","metric");
        this.weatherAPIURL.searchParams.append("appid",API_KEY);
        console.log(this.weatherAPIURL.toString());




    }
      async invokeURL(){
        const responseObj= await fetch(this.weatherAPI.toString());
        const responseJSON = await responseObj.json();
        return responseJSON;
    }
}
export {WeatherAPI}