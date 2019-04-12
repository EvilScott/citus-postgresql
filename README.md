# Horizontal PostgreSQL v11 Scaling using Citus

This is a proof-of-concept for a PostgreSQL logical+phsyical sharding strategy. This utilizes the [Citus](https://www.citusdata.com/) Community software.

Usage: TODO
Requirements:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

Usage:
1. Start up the Docker stack:
```bash
$ docker-compose up -d
```

2. Wait until you see the `Listening on port 5555...` message in the `server` container logs

3. Kick off fake data population:
```bash
$ curl http://localhost:5555/populate
```

4. Wait until you see the `Done populating DB!` message in the `server` container logs (this will take a while)

5. Browse the DB via:
```
$ docker-compose exec master psql -U postgres
```
