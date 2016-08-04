using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace WeatherTest.Spa.Controllers
{
    [Route("api/[controller]")]
    public class WeatherController : Controller
    {
        [HttpGet("{location}")]
        public WeatherData Index(string location)
        {
            return new WeatherData {
                TemperatureC = 45.4,
                TemperatureF = 56.3,
                Location = location,
                WindSpeedKph = 23.2,
                WindSpeedMph = 24.9
            };
        }
    }

    public class WeatherData {
        public double TemperatureC { get; set; }

        public double TemperatureF { get; set; }

        public string Location { get; set; }

        public double WindSpeedKph { get; set; }

        public double WindSpeedMph { get; set; }
    }

}
