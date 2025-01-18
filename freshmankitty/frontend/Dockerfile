FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install @emotion/react @emotion/styled

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]