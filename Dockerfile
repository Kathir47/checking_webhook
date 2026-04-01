FROM node:21
WORKDIR /app
COPY . .
CMD ["node", "app_webhook.js"]