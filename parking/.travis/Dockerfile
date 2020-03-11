FROM openjdk:8-jre-alpine

# Expected JAR file path as argument
ARG JAR_FILE
RUN set -ex; \
	mkdir -p /srv/app; \
	chmod 755 /srv/app; \
	mkdir -p /srv/app/data; \
	mkdir -p /srv/app/logs; \
	mkdir -p /srv/app/keys; \
	mkdir -p /srv/app/config; \
	# install dependencies
	apk add --update \
		openssh-keygen \
		openssl \
	; \
	rm -rf /var/cache/apk/*

VOLUME /srv/app/config /srv/app/keys /srv/app/logs /srv/app/data

WORKDIR /srv/app/
EXPOSE 8080 8443

COPY docker-entrypoint.sh /entrypoint.sh
COPY ${JAR_FILE} /srv/app/app.jar



RUN set -ex; \
	chmod 755 /entrypoint.sh /srv/app/app.jar

ENTRYPOINT ["sh", "/entrypoint.sh"]
CMD ["java", "-jar", "app.jar"]