###################
# BUILD FOR PRODUCTION
###################

FROM node:18-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json yarn.lock ./


COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN yarn build

# Set NODE_ENV environment variable
ENV NODE_ENV production

RUN yarn install --frozen-lockfile

USER node

###################
# PRODUCTION
###################

FROM node:18-alpine As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]