using GenCode.Models;
using GenCode.Repository;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace GenCode.Controllers
{
    public class GenCodeController : Controller
    {
        private readonly TagRepository _tagRepository = null;
        private readonly BoundingBoxRepository _boxRepository = null;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public GenCodeController(
           TagRepository tagRepository,
           BoundingBoxRepository boxRepository,
            IWebHostEnvironment webHostEnvironment
        )
        {
            _webHostEnvironment = webHostEnvironment;
            _tagRepository = tagRepository;
            _boxRepository = boxRepository;
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Design()
        {
            return View();
        }

        public IActionResult AddRegions(bool isSuccess = false)
        {
            ViewBag.IsSuccess = isSuccess;
            return View();
        }

        [HttpPost]
        public IActionResult AddRegions(List<BoundingBoxModel> regions)
        {
            if (regions.Count != 0)
            {
                CreateNewCodeFile(regions);

            }
            return RedirectToAction(nameof(AddRegions), new { isSuccess = true });
        }
      
        public FileResult DownloadFile(string fileName)
        {
            string path = Path.Combine(_webHostEnvironment.WebRootPath, "code\\result\\") + fileName;
            byte[] bytes = System.IO.File.ReadAllBytes(path);
            RedirectToAction(nameof(AddRegions), new { isSuccess = false });
            return File(bytes, "application/octet-stream", fileName);
        }

        private string CreateNewCodeFile(List<BoundingBoxModel> regions)
        {
            string writeFilePath = "wwwroot\\code\\result\\index.html";
            try
            {
                string path = Path.Combine(_webHostEnvironment.WebRootPath, writeFilePath);
                if(regions.Count != 0)
                {
                    StreamWriter sw = new StreamWriter(writeFilePath);
                    sw.WriteLine("<!DOCTYPE html>");
                    sw.WriteLine("<html>" + "<head><title>HTMLResult</title>");
                    sw.WriteLine("<link rel = 'stylesheet' href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'>");
                    sw.WriteLine("<script src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'></script>");
                    sw.WriteLine("</head>");
                    sw.WriteLine("<body>");
                    sw.WriteLine("<div class='container body-content'>");
                    foreach (var region in regions)
                    {
                        string readFilePath = "wwwroot\\code\\elements\\" + region.TagType + ".html";
                        StreamReader sr = new StreamReader(readFilePath);

                        string line = sr.ReadLine();
                        while (line != null)
                        {
                            if (Equals(line.Trim(), ""))
                            {
                                string content = "top: " + region.Top + "px;" +
                                     "left: " + region.Left + "px;" +
                                      "height: " + region.Height + "px;" +
                                       "width: " + region.Width + "px;";
                                sw.WriteLine(content);
                            }
                            else
                            {
                                sw.WriteLine(line);
                            }
                            line = sr.ReadLine();
                        }
                        sr.Close();
                    }
                    sw.WriteLine("</div></body></html>");
                    sw.Close();
                    return writeFilePath;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception: " + e.Message);
            }
            finally
            {
                Console.WriteLine("Executing finally block.");
            }
            return null;
        }
    }
}
