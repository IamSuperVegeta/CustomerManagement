using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.CustomerOperations
{
    public class List
    {

        public class Query : IRequest<List<Customer>>
        {
        }

        public class Handler : IRequestHandler<Query, List<Customer>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Customer>> Handle(Query request, CancellationToken cancellationToken)
            {
                var customers = await _context.Customers.ToListAsync();

                if(customers == null)
                {
                    throw new Exception("Failed to retrieve all customers");
                }

                return customers;

            }
        }

    }
}
