#!/bin/bash

## You need to run this on Git bash terminal

docker-compose up -d

is_healthy() {
    echo "Waiting for $1 container finishing up..."
    service="$1"
    container_id="$(docker-compose ps -q "$1")"
    health_status="$(docker inspect -f "{{.State.Health.Status}}" "$container_id")"

    if [ "$health_status" = "healthy" ]; then
        return 0
    else
        return 1
    fi
}

while ! is_healthy mongodb; do sleep 1; done
while ! is_healthy postgres; do sleep 1; done

if [ "$OSTYPE" == "msys" ] || [ "$OSTYPE" == "win32" ]; then
  
  echo "Getting MongoDB container IP Address for docker on Windows platform..."
  MONGODB_HOST=$(docker inspect -f 'MONGODB_HOST={{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mongodb)

  echo "MongodDB host is ${MONGODB_HOST}" 
  sed -i "s/MONGODB_HOST=mongodb/${MONGODB_HOST}/g" .env

  echo "Getting Postgres container IP Address for docker on Windows platform..."
  POSTGRES_HOST=$(docker inspect -f 'POSTGRES_HOST={{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' postgres)

  echo "Postgres host is ${POSTGRES_HOST}" 
  sed -i "s/POSTGRES_HOST=postgres/${POSTGRES_HOST}/g" .env

  echo ".env file is updated now! :D"

  docker-compose stop
  docker-compose up

fi

