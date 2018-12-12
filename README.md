
# Bus To Show

[Deployed link](TBD)

### Wireframes
[Wireframes](see wireframes-frontend)

### Style Guide

[Color Scheme](see below)
```
/* RGB */
$color1: rgba(255, 66, 15, 1); // main
$color2: rgba(255, 255, 255, 1); // accent
$color3: rgba(0, 0, 0, 1); // accent2
```

Fonts: Open Sans & Source Code Pro (example below)
```
<link href="https://fonts.googleapis.com/css?family=Open+Sans|Source+Code+Pro" rel="stylesheet">
```

CSS -
font-family: 'Source Code Pro', monospace;
font-family: 'Open Sans', sans-serif;


### Planning

[Planning Board](https://trello.com/b/2HqoYeAs/g106-q2-final-bts)


### Schema/ERD for Database (only needed for Q2/Q3/Q4 projects)
[ERD](https://www.lucidchart.com/invitations/accept/e5f087b9-e706-470a-8c3d-5e2692162698)

### Server Routes Plan (example below, only needed for Q2/Q3/Q4 Projects)

Users
- POST /api/signup Create a new user
- POST /api/login User login
- GET /api/users/:id Retrieve user information
- DELETE /api/users/:id Delete a user account
Events
- POST /api/events user Create a new Event
- POST/api/events songkick Create a new Event
- GET /api/events Retrieve all Events
- GET /api/events/:id Retrieve a single  Event
- PATCH /api/events/:id Update a single Event
- DELETE /api/events/:id Delete an Event
- Pickup_locations
- GET /api/users/:id//:type Retrieve location
- POST /api/users/:id/houses/:type Post location
- PATCH /api/users/:id/houses/:type Update location
- PATCH /api/users/ users checked in?
- POST/api/buses add bus capacity to event
Buses
- POST/api/buses/:id. api/create new bus
- PATCH/api/buses/:id (out of service T/F)
- DELETE/api/buses/:id (out of service T/F)
