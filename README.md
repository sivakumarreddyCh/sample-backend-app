
## Overview
This is a Node.js Backend Service that exposes an API to serve random jokes. The service is lightweight, with a list of hardcoded jokes, and sends a random joke in response to each API call. It is built with Express.js for efficient handling of HTTP requests.

### Features

Provides a /joke endpoint that returns a random joke.

Built using Node.js and Express for a simple and robust API layer.

CORS enabled to support frontend requests.

Packaged with Docker for deployment flexibility.

Configured for CI/CD pipelines using Azure DevOps and Deployed on Kubernetes.

## Instructions

Clone the repositories for the backend project.

Follow CI/CD setup instructions in azure-pipelines folder

Deploy services using Kubernetes manifests under k8.

Access the Backend at http://localhost:3001/joke
