using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WeatherTest.Spa.Helpers
{
    public static class ConvertDistances
    {
        public static double ConvertMilesToKilometers(double miles)
        {
            return miles * 1.609344;
        }

        public static double ConvertKilometersToMiles(double kilometers)
        {
            return kilometers * 0.621371192;
        }

    }
}
