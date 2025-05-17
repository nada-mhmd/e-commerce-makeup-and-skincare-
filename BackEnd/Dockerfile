# Use official Node.js LTS version
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the source code
COPY . .

# Expose the port (must match your server.js port, e.g., 4000)
EXPOSE 4000

# Start the server
CMD ["npm", "start"]

