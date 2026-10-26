#!/bin/bash

COMPOSE="/usr/local/bin/docker-compose --ansi never"
DOCKER="/usr/bin/docker"

cd /home/alex/alexpepper.net/
$COMPOSE run certbot renew --dry-run && $COMPOSE kill -s SIGHUP webserver
$DOCKER system prune -af
