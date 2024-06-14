FROM oven/bun:1.1.13-alpine

RUN apk add --no-cache nodejs npm git

WORKDIR /app

COPY . .

RUN bun install

RUN bun run build

CMD ["bun", "start"]
