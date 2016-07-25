using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApi2Angular.Models;
using QRCoder;
using System.Drawing;
using System.IO;
namespace WebApi2Angular.Controllers
{
    public class CodeGeneratorController : Controller
    {
        // GET: CodeGenerator
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(QRCodeGen model)
        {
            if (ModelState.IsValid)
            {
                QRCodeGenerator qrGenerator = new QRCodeGenerator();
                QRCodeData qrCodeData = qrGenerator.CreateQrCode(model.Code, QRCodeGenerator.ECCLevel.Q);
                QRCode qrCode = new QRCode(qrCodeData);

                System.Web.UI.WebControls.Image imgQRcode = new System.Web.UI.WebControls.Image();
                imgQRcode.Height = 150;
                imgQRcode.Width = 150;
                using (Bitmap qrCodeImage = qrCode.GetGraphic(20))
                {
                    using (MemoryStream ms = new MemoryStream())
                    {
                        qrCodeImage.Save(ms, System.Drawing.Imaging.ImageFormat.Png);
                        byte[] byteimage = ms.ToArray();
                        imgQRcode.ImageUrl = "data:image/png;base64," + Convert.ToBase64String(byteimage);
                    }
                    var path = Path.Combine(Server.MapPath("~/QRCODE"), model.Code);

                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                   var x= System.IO.File.Create(path + "\\Code.Png");  

                }

            }
            return View();
        }


    }
}