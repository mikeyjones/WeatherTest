using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WeatherTest.Spa.Helpers;
using Xunit;

namespace WeatherTest.Spa.Tests.Helpers
{
    public class ConvertDistancesTests
    {
        [Fact]
        public void Given100MPhConvertDistancesShouldReturn160Kph()
        {
            // Data from Googles converter app 
            Assert.Equal(160.9344,ConvertDistances.ConvertMilesToKilometers(100));
        }

        [Fact]
        public void Given100KPhConvertDistancesShouldReturn62Mph()
        {
            // Data from Googles converter app 
            Assert.Equal(62.1371192, ConvertDistances.ConvertKilometersToMiles(100));
        }
    }
}
