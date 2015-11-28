using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace Project.Name.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return new VirtualFileResult("~/app/index.html", "text/html");
        }
    }
}
