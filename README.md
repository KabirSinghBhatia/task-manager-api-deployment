# Task-Manager-API

It is a RESTful Task Management API that allows authenticated users to perform CRUD (Create,
Read, Update & Delete) operations on their tasks along with documentation/testing interface for
developers.

## Demo Video
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/bC6pSfOrHEY/3.jpg)](https://www.youtube.com/watch?v=bC6pSfOrHEY)

## Characteristics & Features

1. Made using Node.js, Express.js, MongoDB.
2. JWT (JSON Web Token) based authentication.
3. Made Documentation/Testing interface SwaggerUI
4. Docker support.
5. Separate volume in the local/host system for the database.
6. Can be used as a separate service in a larger application with some tweaks.

## Installation

Install the node modules using npm in the application root.

```bash
npm install
```

MongoDB should be running in the background and its coresponding environment variable should be configured as per `example.env` in `config` directory.

### Docker support & config

Create a `.env` file in `build` directory in application root from `docker-example.env` and add required config.

```bash
cp ./build/docker-example.env ./build/.env
```

To run using docker-compose

```bash
cd build
docker-compose up -d
```

### Development Environment

Create a `.env` file in `config` directory in root from `example.env` and add required config. keys for **local / development** environment

```bash
cp ./config/example.env ./config/.env
```

### Production Environment

No need to create `.env` file. Store the required config. keys on the **host / production** environment as per the `config/example.env` config. variables.

## Usage

Run the application using the following command for **Production** environment.

```bash
npm run start
```

Run the application **locally** (nodemon) using the following command for **Development** environment.

```bash
npm run dev
```

## Documentation

Navigate to the index route in the browser (ex: `http://localhost:$PORT`, where `$PORT` is the configured `$PORT` or `$HOST_PORT` depending on your environment) to access the API documentation home page (SwaggerUI).

If using `docker-compose`, `mongo-express` can be accessed on PORT `http://localhost:$MONGO_EXPRESS_HOST_PORT`.

You can perform the actions such as:

- User authentication and deletion operations
- CRUD operations on your tasks
- Adding and removing user (owner's) profile picture (avatars) and viewing other user's avatar

### Checkout `Task-Manager-API-Summary.pdf` for further summary of the working

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
