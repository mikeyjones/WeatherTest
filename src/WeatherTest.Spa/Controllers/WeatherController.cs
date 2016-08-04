using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WeatherTest.Spa.Models;
using WeatherTest.Spa.Services;

namespace WeatherTest.Spa.Controllers
{
    [Route("api/[controller]")]
    public class WeatherController : Controller
    {
        [HttpGet("{location}")]
        public WeatherData Index(string location)
        {
            WebDataService temp = new WebDataService(new DownloadStringService());
            return temp.GetData(location);

           
        }
    }


}
