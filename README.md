# Customer Management System


## To run project:
1. Make sure you .Net Core SDK 3.1 installed
2. run the following command 'dotnet tool install --global dotnet-ef'
3. Run the API project ( `cd API` => `dotnet watch run`)
4. Run the React SPA project (`cd client-app` => `npm start`)

## Project Details
- API is built in dotnet core
- Front end is built using React (using typscript & Mobx)
### Patterns Used
- Clean Architecture
- Mediator Pattern 

## React Packages
| Package                 | Link                                                          |
| -------------           | -------------                                                 |
| semantic ui react       | https://react.semantic-ui.com/                                |
| uuid                    | https://www.npmjs.com/package/uuidl                           |
| mobx                    | https://mobx.js.org/README.html                               |
| mobx-react-lite         | https://www.npmjs.com/package/mobx-react-lite                 |
| axios                   | https://github.com/axios/axios                                |
| moment                  | https://www.npmjs.com/package/moment , https://momentjs.com/  |

## Dotnet Core Packages
| Package                                               | Link                                                                       |
| -------------                                         | -------------                                                              |
| Microsoft.EntityFrameworkCore.Design                  | https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.Design/3.1.2  |    | MediatR.Extensions.Microsoft.DependencyInjection      | https://github.com/jbogard/MediatR  |                         

## Notes
A sqlite DB is generated automatically prefilled with data (customer.db).
