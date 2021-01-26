FROM node:alpine
WORKDIR /app

ENV LANG=ko_KR.UTF-8 \
    LANGUAGE=ko_KR.UTF-8 \
    TZ=Asia/Seoul

COPY ./package.json ./
COPY ./yarn.lock ./

RUN \
  yarn install && \
  apk update && \
  apk add --no-cache \
    tzdata && \
  cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
  echo $TZ > /etc/timezone
COPY . .

CMD ["yarn", "start"]