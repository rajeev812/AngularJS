using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi2Angular.Models;

namespace WebApi2Angular
{
    public class ProductController : ApiController
    {
        static readonly IProductRepository repository = new ProductRepository();
        // GET api/<controller>
        public IEnumerable GetAllProducts()
        {
            return repository.GetAll();
        }

        // GET api/<controller>/5
        public Product GetProductById(int id)
        {
            return repository.GetProductById(id);
        }

        // POST api/<controller>
        public Product PostProduct(Product value)
        {
           return repository.AddProduct(value);
        }

        // PUT api/<controller>/5
        public IEnumerable PutProducts(int id, Product item)
        {
            item.Id=id;
            if (repository.Update(item))
            {
                return repository.GetAll();
            }
            else
            {
                return null;
            }
        }

        // DELETE api/<controller>/5
        public bool DeleteProduct(int id)
        {
            if (repository.Delete(id))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}