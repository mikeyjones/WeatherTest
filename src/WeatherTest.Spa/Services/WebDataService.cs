using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Newtonsoft.Json;
using WeatherTest.Spa.Models;

namespace WeatherTest.Spa.Services
{
    public class WebDataService
    {
        readonly IDownloadStringService downloadService;

        public WebDataService(IDownloadStringService downloadService)
        {
            this.downloadService = downloadService;
        }

        public void GetData(string location)
        {
            GetDataFromAccu(location);
            GetDataFromBbc(location);
        }

        private AccWeatherResult GetDataFromAccu(string location)
        {
            return downloadService.GetData<AccWeatherResult>($"http://localhost:60368/{location}");
        }

        private AccWeatherResult GetDataFromBbc(string location)
        {
            return downloadService.GetData<BbcWeatherResult>($"http://localhost:60350/Weather/{location}");
        }
    }
}
