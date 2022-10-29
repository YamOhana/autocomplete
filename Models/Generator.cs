
namespace autocomplete.Models
{
    public class EmployeeBuilder
    {
        public List<Employee> employeesList { get; set; }

        private void createListOfEmplyees()
        {
            employeesList = new List<Employee>
            {
                new Employee
                {
                    Name = "James Ben-Shushan",
                    ImageUrl = "https://thispersondoesnotexist.com/image",
                    WorkTitle = "Developer",
                },
                new Employee
                {
                    Name = "Mathew Abuhatzera",
                    ImageUrl = "https://image.shutterstock.com/image-photo/young-beautiful-latina-coffee-shop-600w-1882428604.jpg",
                    WorkTitle = "QA",
                },
                new Employee
                {
                    Name = "James Smith",
                    ImageUrl = "https://image.shutterstock.com/image-photo/young-african-woman-looking-camera-600w-1764048074.jp",
                    WorkTitle = "QA",
                },
                new Employee
                {
                    Name = "Frank Sinatra",
                    ImageUrl = "https://thiscatdoesnotexist.com/",
                    WorkTitle = "Product Manager",
                },
                new Employee
                {
                    Name = "Testy ElTest",
                    ImageUrl = "https://image.shutterstock.com/image-photo/young-handsome-coffee-shop-owner-600w-1882428595.jpg",
                    WorkTitle = "Product Manager",
                },
                new Employee
                {
                    Name = "Ah Yakar",
                    ImageUrl = "https://image.shutterstock.com/image-photo/young-handsome-coffee-shop-owner-600w-1882428595.jpg",
                    WorkTitle = "Developer",
                },
                new Employee
                {
                    Name = "Bachur Tov",
                    ImageUrl = "https://image.shutterstock.com/image-photo/young-handsome-coffee-shop-owner-600w-1882428595.jpg",
                    WorkTitle = "QA",
                },
                new Employee
                {
                    Name = "Ben Shel Melech",
                    ImageUrl = "https://image.shutterstock.com/image-photo/young-handsome-coffee-shop-owner-600w-1882428595.jpg",
                    WorkTitle = "Product Manager",
                }

            };
        }

        public EmployeeBuilder()
        {
            createListOfEmplyees();
        }
    }
}





