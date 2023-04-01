# Dummy Express

Dummy Express is a simple Node.js application that demonstrates how to create a basic RESTful API using the Express framework and connect to a PostgreSQL database.

## Getting Started

### Prerequisites

To run this project, you will need Node.js, npm, and PostgreSQL installed on your local machine.

### Installation

1. Clone this repository: `git clone https://github.com/billacode/dummy-express.git`
2. Navigate to the project directory: `cd dummy-express`
3. Install the necessary dependencies: `npm install`

### Configuration

To connect to your PostgreSQL database, you will need to set the following environment variables:

- `DATABASE_URL`: The URL for your PostgreSQL database, including the username and password.

You can set these environment variables by creating a `.env` file in the root of your project directory and adding the following line:

`DATABASE_URL=postgres://username:password@host:port/database`


Replace `username`, `password`, `host`, `port`, and `database` with your PostgreSQL database credentials.

### Usage

1. Start the server: `npm start`
2. Open your web browser or API client and navigate to `http://localhost:3000`.

### API Endpoints

The following endpoints are available:

#### Students

- GET `/students`: Returns a list of all students.
- GET `/students?id=<id>`: Returns a specific student by ID.
- POST `/students`: Creates a new student.
- PATCH `/students?id=<id>`: Updates an existing student by ID.
- DELETE `/students?id=<id>`: Deletes an existing student by ID.

#### Sponsors

- GET `/sponsors`: Returns a list of all sponsors.
- GET `/sponsors?id=<id>`: Returns a specific sponsor by ID.
- POST `/sponsors`: Creates a new sponsor.
- PATCH `/sponsors?id=<id>`: Updates an existing sponsor by ID.
- DELETE `/sponsors?id=<id>`: Deletes an existing sponsor by ID.

All endpoints that require an ID (i.e. `GET /?id=<id>`, `PATCH /?id=<id>`, `DELETE /?id=<id>`) should receive the ID as a query parameter in the URL.

For example:

- `GET /students?id=1`: Returns the student with ID 1.
- `PATCH /sponsors?id=2`: Updates the sponsor with ID 2.
- `DELETE /students?id=3`: Deletes the student with ID 3.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork this repository
2. Create a new branch for your changes: `git checkout -b my-new-feature`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push your changes to your forked repository: `git push origin my-new-feature`
5. Create a pull request on this repository

## Credits

Dummy Express was developed by [Billacode](https://github.com/billacode).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
