using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace WebApi2Angular
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            config.Routes.MapHttpRoute(
               name: "AllProducts",
               routeTemplate: "api/Product/GetAllProducts",
               defaults: new { controller = "Product", action = "GetAllProducts" }
           );
            config.Routes.MapHttpRoute(
               name: "AllProductsById",
               routeTemplate: "api/Product/GetProductById/{id}",
               defaults: new { controller = "Product", action = "GetProductById" }
           );
            config.Routes.MapHttpRoute(
               name: "PostProducts",
               routeTemplate: "api/Product/PostProduct/0/0",
               defaults: new { controller = "Product", action = "PostProduct" }
           );
            config.Routes.MapHttpRoute(
               name: "PutProducts",
               routeTemplate: "api/Product/PutProducts/0/0/0",
               defaults: new { controller = "Product", action = "PutProducts" }
           );
            config.Routes.MapHttpRoute(
              name: "DeleteProductsById",
              routeTemplate: "api/Product/DeleteProduct/{id}",
              defaults: new { controller = "Product", action = "DeleteProduct" }
          );

            config.Formatters.Remove(config.Formatters.XmlFormatter);
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new System.Net.Http.Headers.MediaTypeHeaderValue("application/json"));
        }
    }
}
