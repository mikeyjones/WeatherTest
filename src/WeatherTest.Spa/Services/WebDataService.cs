using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Newtonsoft.Json;
using WeatherTest.Spa.Models;
using WeatherTest.Spa.Helpers;

namespace WeatherTest.Spa.Services
{
    public class WebDataService
    {
       
        readonly IDownloadStringService downloadService;

        public WebDataService(IDownloadStringService downloadService)
        {
            this.downloadService = downloadService;
        }

        public WeatherData GetData(string location)
        {
            var weatherData = new List<WeatherData>();
            weatherData.Add(ConvertAccToStandardResult(GetDataFromAccu(location)));
            weatherData.Add(ConvertBbcToStandardResult(GetDataFromBbc(location)));
            return AvgerageWeatherData(weatherData, location);
        }

        private AccWeatherResult GetDataFromAccu(string location)
        {
            return downloadService.GetData<AccWeatherResult>($"http://localhost:60368/{location}");
        }

        private BbcWeatherResult GetDataFromBbc(string location)
        {
            return downloadService.GetData<BbcWeatherResult>($"http://localhost:60350/Weather/{location}");
        }

        public WeatherData ConvertAccToStandardResult(AccWeatherResult accuResult)
        {
            if(accuResult == null)
            {
                return new WeatherData();
            }

            return new WeatherData
            {
                TemperatureC = ConvertTemperatures.ConvertFahrenheitToCelsius(accuResult.TemperatureFahrenheit),
                TemperatureF = accuResult.TemperatureFahrenheit,
                Location = accuResult.Where,
                WindSpeedKph = ConvertDistances.ConvertMilesToKilometers(accuResult.WindSpeedMph),
                WindSpeedMph = accuResult.WindSpeedMph
            };
        }

        public WeatherData ConvertBbcToStandardResult(BbcWeatherResult bbcResult)
        {
            if (bbcResult == null)
            {
                return new WeatherData();
            }

            return new WeatherData
            {
                TemperatureC = bbcResult.TemperatureCelsius,
                TemperatureF = ConvertTemperatures.ConvertCelsiusToFahrenheit(bbcResult.TemperatureCelsius),
                Location = bbcResult.Location,
                WindSpeedKph = bbcResult.WindSpeedKph,
                WindSpeedMph = ConvertDistances.ConvertKilometersToMiles(bbcResult.WindSpeedKph)
            };
        }

        public WeatherData AvgerageWeatherData(List<WeatherData> data, string location)
        {
            var avgTempF = data.Select(x => x.TemperatureF).Average();
            var avgTempC = data.Select(x => x.TemperatureC).Average();
            var avgWindMph = data.Select(x => x.WindSpeedMph).Average();
            var avgWindKph = data.Select(x => x.WindSpeedKph).Average();

            return new WeatherData
            {
                TemperatureF = avgTempF,
                TemperatureC = avgTempC,
                WindSpeedKph = avgWindKph,
                WindSpeedMph = avgWindMph,
                Location = location
            };
        }

       
    }
}
