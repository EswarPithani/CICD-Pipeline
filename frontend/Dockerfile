# Use Node.js image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Copy the rest of the code
COPY . .

# Expose the frontend port
EXPOSE 3000

# Start the frontend app
CMD ["npm", "start"]
