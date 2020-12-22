using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication3.Models;

namespace WebApplication3.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Recipe")]

    
    public class RecipeController : ApiController
    {
        [Route("getsRecipes")]
        [HttpGet]
        public List<Recipe> getsRecipes()
        {
            return DB.recipeList;
        }
    }
}
