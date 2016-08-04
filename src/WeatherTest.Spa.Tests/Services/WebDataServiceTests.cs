using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using Moq;
using WeatherTest.Spa.Services;
using WeatherTest.Spa.Models;

namespace WeatherTest.Spa.Tests.Services
{
    public class WebDataServiceTests
    {
        [Fact]
        public void GivenALocationTheWebDataServiceShouldCallAccuService()
        {
            var downloadService = new Mock<IDownloadStringService>();
            WebDataService service = new WebDataService(downloadService.Object);

            var location = "england";
            service.GetData(location);

            downloadService.Verify(d => d.GetData<AccWeatherResult>($"http://localhost:60368/{location}"));
        }


        [Fact]
        public void GivenALocationTheWebDataServiceShouldCallBbcService()
        {
            var downloadService = new Mock<IDownloadStringService>();
            WebDataService service = new WebDataService(downloadService.Object);

            var location = "england";
            service.GetData(location);

            downloadService.Verify(d => d.GetData<BbcWeatherResult>($"http://localhost:60350/Weather/{location}"));
        }

        [Fact]
        public void GivenAccWeatherDataWebDataServiceShouldConvertToWeatherDataCorrectly()
        {
            var downloadService = new Mock<IDownloadStringService>();
            WebDataService service = new WebDataService(downloadService.Object);

            var result = service.ConvertAccToStandardResult(new AccWeatherResult
            {
                TemperatureFahrenheit = 78,
                Where = "Svsfv",
                WindSpeedMph = 45
            });

            Assert.InRange<double>(result.TemperatureC, 25.5555,25.5557);
            Assert.InRange<double>(result.WindSpeedKph,72.42,72.43);
        }

        [Fact]
        public void GivenBbcWeatherDataWebDataServiceShouldConvertToWeatherDataCorrectly()
        {
            var downloadService = new Mock<IDownloadStringService>();
            WebDataService service = new WebDataService(downloadService.Object);

            var result = service.ConvertBbcToStandardResult(new BbcWeatherResult
            {
                TemperatureCelsius = 45,
                Location = "sfbsfbx",
                WindSpeedKph = 50
            });

            Assert.Equal(113,result.TemperatureF );
            Assert.InRange<double>(result.WindSpeedMph, 31.06, 31.07);
        }
    }
}
