install:
	cd server/ && bun install && cd ../client/ && bun install

docker-up:
	docker-compose up --build