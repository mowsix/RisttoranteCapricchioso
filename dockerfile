FROM node:20
WORKDIR /home/node/ms1
COPY ms1 /home/node/ms1
RUN npm install
WORKDIR /home/node/ms2
COPY ms2 /home/node/ms2
RUN npm install
CMD npm run ms2, ms1
EXPOSE 9999