using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WeatherTest.Spa.Models
{
    public class WeatherData
    {
        public double TemperatureC { get; set; }

        public double TemperatureF { get; set; }

        public string Location { get; set; }

        public double WindSpeedKph { get; set; }

        public double WindSpeedMph { get; set; }
    }
}
