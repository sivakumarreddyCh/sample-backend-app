
# Jokes Backend

A simple Express.js backend that serves random jokes via an API.

## Features

- Exposes an endpoint `/joke` to return a random joke.
- Built with Express.js.
- Dockerized for easy deployment.

## Prerequisites

- [Node.js](https://nodejs.org) installed.
- [Docker](https://www.docker.com/) installed.

## Setup Instructions
### Local Development

1. Clone the repository:
   git clone <repository-url>
   cd jokes-backend

2. Install dependencies:
   npm install

3. Start the server:
   npm start

4. The server will run on http://localhost:3001

5. Access the API at http://localhost:3001/joke


### Using Docker:

1. Build the Docker image:
   docker build -t jokes-backend .

2. Run the container:
   docker run -p 3001:3001 jokes-backend

3. Access the API at http://localhost:3001/joke

