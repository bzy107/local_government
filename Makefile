.PHONY: up stop restart down logs

up:
	docker compose up -d

stop:
	docker compose stop

restart:
	docker compose restart

down:
	docker compose down

logs:
	docker compose logs -f
