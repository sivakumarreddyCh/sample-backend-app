# Stage 1: Build Stage
FROM node:16-alpine AS build
WORKDIR /app

# Copy only package files to leverage Docker's caching mechanism
COPY package*.json ./
RUN npm install --production

# Copy the remaining application source code
COPY . .

# If your backend requires a build step (e.g., for TypeScript), include it here
# Uncomment the following line if applicable:
# RUN npm run build

# Stage 2: Production Stage
FROM gcr.io/distroless/nodejs:16
WORKDIR /app

# Copy the application and dependencies from the build stage
COPY --from=build /app /app

# Expose the backend service port (adjust if different)
EXPOSE 3001

# Define the command to run the backend server
CMD ["server.js"]  # Replace with your actual entry point if different
