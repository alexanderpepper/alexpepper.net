COMPOSE_DOCKER_CLI_BUILD=1
DOCKER_BUILDKIT=1

# local commands

clean:
	rm -rf node_modules
	rm -rf client/node_modules

install:
	npm install
	(cd client && npm install)
	docker compose build --no-cache

dev:
	docker compose up

# deployment commands

deploy:
	docker compose -f docker-compose.prod.yaml build --no-cache
	docker compose -f docker-compose.prod.yaml up -d

stop:
	docker compose down

destroy:
	docker compose down --remove-orphans --volumes
	docker volume rm alexpepperus_certbot-etc
	docker volume rm alexpepperus_certbot-var
	docker volume rm alexpepperus_dhparam
	docker volume rm alexpepperus_web-root
