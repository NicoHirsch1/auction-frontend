FROM node:14.15.4 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/auction-frontend /usr/share/nginx/html
COPY --from=node /app/docker-entrypoint.sh /

CMD ["sh", "docker-entrypoint.sh"]
