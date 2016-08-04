using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WeatherTest.Spa.Models
{
    public class AccWeatherResult
    {
        public double TemperatureFahrenheit { get; internal set; }
        public string Where { get; internal set; }
        public double WindSpeedMph { get; internal set; }
    }
}
