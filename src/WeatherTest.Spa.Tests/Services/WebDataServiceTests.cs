using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using Moq;
using WeatherTest.Spa.Services;

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

            downloadService.Verify(d => d.GetData($"http://localhost:60368/{location}"));
        }


        [Fact]
        public void GivenALocationTheWebDataServiceShouldCallBbcService()
        {
            var downloadService = new Mock<IDownloadStringService>();
            WebDataService service = new WebDataService(downloadService.Object);

            var location = "england";
            service.GetData(location);

            downloadService.Verify(d => d.GetData($"http://localhost:60350/Weather/{location}"));
        }
    }
}
