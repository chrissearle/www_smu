# syntax=docker/dockerfile:1.20

FROM --platform=$BUILDPLATFORM node:24-alpine AS build

ARG IMAGE_TAG
ENV NUXT_PUBLIC_IMAGE_TAG=$IMAGE_TAG

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM node:24-alpine AS deploy

WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/.output/ /app

CMD ["node", "/app/server/index.mjs"]
