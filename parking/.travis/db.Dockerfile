FROM postgres:10-alpine
COPY docker-entrypoint.sh /docker-entrypoint-initdb.d/