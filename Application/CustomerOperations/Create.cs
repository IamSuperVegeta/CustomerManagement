using Domain;
using MediatR;
using Persistence;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.CustomerOperations
{
    public class Create
    {

        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Username { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string PhoneNumber { get; set; }
            public DateTime DateOfBirth { get; set; }

        }

        public class Handlder : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handlder(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var customer = new Customer
                {
                    Id = request.Id,
                    Username = request.Username,
                    Firstname = request.FirstName,
                    Lastname = request.LastName,
                    DateOfBirth = request.DateOfBirth,
                    PhoneNumber = request.PhoneNumber
                };

                _context.Customers.Add(customer);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;


                throw new Exception("Problem saving changes");
            }
        }

    }
}
