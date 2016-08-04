using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WeatherTest.Spa.Helpers;
using Xunit;

namespace WeatherTest.Spa.Tests.Helpers
{
    public class ConvertTemperaturesTests
    {
        [Fact]
        public void Given100FConvertTemperatureShouldReturn37c()
        {
            // Data from Googles converter app 
            Assert.Equal(37.7777777777778, ConvertTemperatures.ConvertFahrenheitToCelsius(100));
        }

        [Fact]
        public void Given100CConvertTemperatureShouldReturn212F()
        {
            // Data from Googles converter app 
            Assert.Equal(212, ConvertTemperatures.ConvertCelsiusToFahrenheit(100));
        }
    }
}
