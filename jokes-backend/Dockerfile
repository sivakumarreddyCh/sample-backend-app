# Stage 1: Build Stage
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# If your frontend requires a build step, uncomment the following line:
# RUN npm run build

# Stage 2: Production Stage
FROM gcr.io/distroless/nodejs:18
WORKDIR /app

# Copy the application and dependencies from the build stage
COPY --from=build /app /app

# Expose the frontend port
EXPOSE 3000

# Run the application using npm start
CMD ["npm", "start"]
