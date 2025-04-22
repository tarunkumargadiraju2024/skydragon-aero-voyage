# Use official Node.js image
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching layer)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your project files
COPY . .

# Expose the development server port (change if using a different port)
EXPOSE 8080

# Start the dev server (with hot reload)
CMD ["npm", "run", "dev"]
