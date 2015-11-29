using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace Project.Name.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return new VirtualFileResult("~/app/index.html", "text/html");
        }

        public async Task<JsonResult> Values()
        {
            using (var httpClient = new HttpClient())
            {
                var request = new HttpRequestMessage()
                {
                    RequestUri = new Uri("http://dev.api.project.name.com/values/get"),
                    Method = HttpMethod.Get
                };
                request.Headers.Add("Bearer", "abc");
                var result = await httpClient.SendAsync(request);
                result.EnsureSuccessStatusCode();
                return Json(await result.Content.ReadAsStringAsync());
            }
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
