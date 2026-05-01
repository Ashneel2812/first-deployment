# ================================
# BACKEND BUILD STAGE
# ================================
FROM node:18 AS backend-build

# Set the working directory for the backend
WORKDIR /app

# Copy the package.json and package-lock.json for installing dependencies
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the backend source code
COPY . .

# ================================
# PRODUCTION STAGE (for backend)
# ================================
FROM node:18-slim

# Set the working directory in the final image
WORKDIR /app

# Copy the backend code from the build stage
COPY --from=backend-build /app /app

# Install only production dependencies
RUN npm install --only=production

# Expose the backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]