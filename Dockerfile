FROM node:14-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . ./
RUN npm build
CMD [ "npm", "run", "start:prod" ]
