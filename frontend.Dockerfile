FROM node:21.1.0-alpine

COPY client ./

RUN npm install --silent

CMD ["npm", "start"]