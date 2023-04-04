FROM node:16.13.1-alpine
RUN npm i -g @nestjs/cli  @nestjs/graphql
WORKDIR /api
CMD ["yarn", "run", "start:dev"]
