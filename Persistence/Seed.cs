using Domain;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Persistence
{
    public class Seed
    {

        public static void SeedData(DataContext context)
        {
            if (!context.Customers.Any())
            {

                var customer = new List<Customer>
            {
                new Customer{ Username="JohnSmith",Firstname = "John", Lastname="Smith", PhoneNumber="123", DateOfBirth= DateTime.Now.AddMonths(-2)},
                  new Customer{Username="MikeDaryl", Firstname = "Mike", Lastname="Daryl",PhoneNumber="123", DateOfBirth= DateTime.Now.AddMonths(-2)},
                  new Customer{Username="AlbertRobberts", Firstname = "Albert", Lastname="Robberts", PhoneNumber="123",DateOfBirth= DateTime.Now.AddMonths(-2)},
                  new Customer{Username="FrankiePeters", Firstname = "Frankie", Lastname="Peters", PhoneNumber="123",DateOfBirth= DateTime.Now.AddMonths(-2)},
            };

                context.Customers.AddRange(customer);
                context.SaveChanges();

            }
        }

    }
}
