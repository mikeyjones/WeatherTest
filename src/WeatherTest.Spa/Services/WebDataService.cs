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
            return AvgerageWeatherData(
                ConvertAccToStandardResult(GetDataFromAccu(location)),
                ConvertBbcToStandardResult(GetDataFromBbc(location))
                );
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
            return new WeatherData
            {
                TemperatureC = ConvertTemperatures.ConvertCelsiusToFahrenheit(accuResult.TemperatureFahrenheit),
                TemperatureF = accuResult.TemperatureFahrenheit,
                Location = accuResult.Where,
                WindSpeedKph = ConvertDistances.ConvertMilesToKilometers(accuResult.WindSpeedMph),
                WindSpeedMph = accuResult.WindSpeedMph
            };
        }

        public WeatherData ConvertBbcToStandardResult(BbcWeatherResult bbcResult)
        {
            return new WeatherData
            {
                TemperatureC = bbcResult.TemperatureCelsius,
                TemperatureF = ConvertTemperatures.ConvertFahrenheitToCelsius(bbcResult.TemperatureCelsius),
                Location = bbcResult.Location,
                WindSpeedKph = bbcResult.WindSpeedKph,
                WindSpeedMph = ConvertDistances.ConvertKilometersToMiles(bbcResult.WindSpeedKph)
            };
        }

        public WeatherData AvgerageWeatherData(WeatherData dataA, WeatherData dataB)
        {
            return new WeatherData
            {
                TemperatureC = AverageNumbers(dataA.TemperatureC, dataB.TemperatureC),
                TemperatureF = AverageNumbers(dataA.TemperatureF, dataB.TemperatureF),
                Location = dataA.Location,
                WindSpeedKph = AverageNumbers(dataA.WindSpeedKph, dataB.WindSpeedKph),
                WindSpeedMph = AverageNumbers(dataA.WindSpeedMph, dataB.WindSpeedMph)
            };
        }

        private double AverageNumbers(double a, double b)
        {
            return a + b / 2;
        }
    }
}
