using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi2Angular.Models
{
    public class ProductRepository :IProductRepository
    {
        eShopEntities db = new eShopEntities();
        public IEnumerable<Product> GetAll()
        {
          return db.Products;
        }

        public Product GetProductById(int id)
        {
            return db.Products.Where(x=>x.Id==id).SingleOrDefault();
        }

        public Product AddProduct(Product item)
        {
            if (item == null)
            {
               throw new ArgumentNullException("Item");
            }
            db.Products.Add(item);
            db.SaveChanges();
            return item;
        }

        public bool Update(Product item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("Item");
            }
            var Product = db.Products.Single(x => x.Id == item.Id);
            Product.Name = item.Name;
            Product.Category = item.Category;
            Product.Price = item.Price;
            db.SaveChanges();
            return true;
        }

        public bool Delete( int id)
        {
            Product productObj = db.Products.Find(id);
            db.Products.Remove(productObj);
            db.SaveChanges();
            return true;
        }
    }
}