
FROM node:8
WORKDIR /usr/src
COPY ./package.json /usr/src/afopaniers/
COPY ./package-lock.json /usr/src/afopaniers/
COPY . /usr/src/afopaniers/
COPY ./config /usr/src/config/
RUN cd /usr/src/afopaniers; npm install
RUN cd /usr/src/afopaniers/library; npm install
RUN cd .. && cd ..
CMD ["node", "./afopaniers/server.js"]
EXPOSE 8080

