FROM oven/bun:slim
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install
COPY . .

EXPOSE 5000

CMD ["bun", "run", "start"]