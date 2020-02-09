using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.CustomerOperations
{
    public class Edit
    {

        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Username { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string PhoneNumber { get; set; }
            public DateTime? DateOfBirth { get; set; }


        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {

                var customer = _context.Customers.Find(request.Id);

                customer.Firstname = request.FirstName ?? customer.Firstname;
                customer.Username = request.Username ?? customer.Username;
                customer.Lastname = request.LastName ?? customer.Lastname;
                customer.PhoneNumber = request.PhoneNumber ?? customer.PhoneNumber;
                customer.DateOfBirth = request.DateOfBirth ?? customer.DateOfBirth;

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }


    }
}
