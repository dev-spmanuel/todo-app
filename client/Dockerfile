FROM oven/bun:slim as build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install
COPY . .

RUN bun run build

### STAGE 2 ###
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]