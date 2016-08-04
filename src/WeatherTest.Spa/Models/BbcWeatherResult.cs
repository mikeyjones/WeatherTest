using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WeatherTest.Spa.Models
{
    public class BbcWeatherResult
    {
        public string Location { get; set; }
        public double TemperatureCelsius { get; set; }
        public double WindSpeedKph { get; set; }
    }
}
