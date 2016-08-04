using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Newtonsoft.Json;

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

        private void GetDataFromAccu(string location)
        {
            var json = downloadService.GetData($"http://localhost:60368/{location}");
        }

        private void GetDataFromBbc(string location)
        {
            var json = downloadService.GetData($"http://localhost:60350/Weather/{location}");
        }
    }
}
