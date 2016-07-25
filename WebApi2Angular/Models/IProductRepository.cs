using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApi2Angular.Models
{
    interface IProductRepository
    {
        IEnumerable<Product> GetAll();
        Product GetProductById(int id);
        Product AddProduct(Product item);
        bool Update(Product item);
        bool Delete(int id);
    }
}
