FROM node:21.1.0-alpine

COPY fe ./

RUN npm install --silent

CMD ["npm", "start"]