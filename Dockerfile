FROM node:latest

WORKDIR /app

COPY . /app

RUN npm install -g @angular/cli
RUN npm install

EXPOSE 4200

CMD ng serve --host 0.0.0.0
#CMD ["npm", "start"]

# FROM node:latest as builder

# RUN mkdir -p /app

# WORKDIR /app

# COPY . .

# RUN npm install
# RUN npm run build --prod

# CMD ["npm", "start"]
