FROM node
ENV NODE_ENV=production
WORKDIR /home/node
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent 
COPY . .
EXPOSE 8080
RUN chown -R node /home/node
USER node
CMD ["npm", "start"]