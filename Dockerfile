# Stage: Dev
FROM node:20-alpine

WORKDIR /app

# Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# Quellcode wird gemountet, daher nicht COPY
# COPY . .

# Dev-Port
EXPOSE 5173

# Dev-Server starten
CMD ["npm", "run", "dev", "--", "--host"]