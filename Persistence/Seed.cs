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
                new Customer{ Username="JohnSmith",FirstName = "John", LastName="Smith", DateOfBirth= new DateTime(1997,1,1)},
                  new Customer{Username="MikeDaryl", FirstName = "Mike", LastName="Daryl", DateOfBirth= new DateTime(1998,12,1)},
                  new Customer{Username="AlbertRobberts", FirstName = "Albert", LastName="Robberts", DateOfBirth= new DateTime(1997,11,3)},
                  new Customer{Username="FrankiePeters", FirstName = "Frankie", LastName="Peters", DateOfBirth= new DateTime(1997,10,5)},
            };

                context.Customers.AddRange(customer);
                context.SaveChanges();

            }
        }

    }
}
