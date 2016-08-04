using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace WeatherTest.Spa.Services
{
    public class DownloadStringService : IDownloadStringService
    {
        WebClient webClient;

        public DownloadStringService()
        {
            webClient = new WebClient();
        }

        public string GetData(string url)
        {
            return webClient.DownloadString(url);
        }
    }

    public interface IDownloadStringService
    {
        string GetData(string url);
    }
}
