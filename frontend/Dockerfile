# ================================
# FRONTEND BUILD STAGE
# ================================
FROM node:18 AS frontend-build

# Set the working directory for the frontend build
WORKDIR /app

# Copy the package.json and package-lock.json for installing dependencies
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the entire frontend source code
COPY . .

# Build the React app for production
RUN npm run build

# ================================
# PRODUCTION STAGE (for frontend)
# ================================
FROM nginx:alpine

# Copy the built React app from the build stage
COPY --from=frontend-build /app/build /usr/share/nginx/html

# Expose port 80 (default for Nginx)
EXPOSE 80

# Start the Nginx server to serve the React app
CMD ["nginx", "-g", "daemon off;"]