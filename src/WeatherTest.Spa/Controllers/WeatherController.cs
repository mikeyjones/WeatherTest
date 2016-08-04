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
            //WebDataService temp = new WebDataService();
            //temp.GetData(location);

            return new WeatherData {
                TemperatureC = 45.4,
                TemperatureF = 56.3,
                Location = location,
                WindSpeedKph = 23.2,
                WindSpeedMph = 24.9
            };
        }
    }


}
