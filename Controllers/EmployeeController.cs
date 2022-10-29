using autocomplete.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;


namespace autocomplete.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        // api/employee (GET)
        public ActionResult GetClients()
        {
            try
            {
                EmployeeBuilder employeeBuilder = new EmployeeBuilder();
                var json = JsonConvert.SerializeObject(employeeBuilder.employeesList);
                return new ContentResult
                {
                    Content = json,
                    ContentType = "application/json"
                };
            }
            catch
            {
                return BadRequest("Employee creation error");
            }

        }

        [HttpGet("{Name}")]
        public Employee Get(string Name)
        {
            EmployeeBuilder employeeBuilder = new EmployeeBuilder();
            foreach (Employee employee in employeeBuilder.employeesList)
            {
                if (employee.Name == Name)
                {
                    return employee;
                }
            }

            return null;
        }
    }
}