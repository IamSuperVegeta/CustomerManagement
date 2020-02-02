using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.CustomerOperations
{
    public class Details
    {

        public class Query : IRequest<Customer>
        {
            public Guid Id { get; set; }

        }

        public class Handler : IRequestHandler<Query, Customer>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Customer> Handle(Query request, CancellationToken cancellationToken)
            {
                var customer = await _context.Customers.FindAsync(request.Id);

                return customer;

            }
        }


    }
}
