using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Newtonsoft.Json;


namespace WeatherTest.Spa.Services
{
    public class DownloadStringService : IDownloadStringService
    {
        WebClient webClient;

        public DownloadStringService()
        {
            webClient = new WebClient();
        }

        public T GetData<T>(string url)
        {
            return JsonConvert.DeserializeObject<T>(webClient.DownloadString(url));
        }
    }

    public interface IDownloadStringService
    {
        T GetData<T>(string url);
    }
}
