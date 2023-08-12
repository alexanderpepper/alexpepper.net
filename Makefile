COMPOSE_DOCKER_CLI_BUILD=1
DOCKER_BUILDKIT=1

install:
	npm install
	(cd client && npm install)
	docker compose build --no-cache

dev:
	docker compose up

deploy:
	docker compose -f docker-compose.prod.yaml build --no-cache
	docker compose -f docker-compose.prod.yaml up

clean:
	rm -rf node_modules
	rm -rf client/node_modules
