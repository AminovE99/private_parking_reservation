FROM maven:3.6.1-jdk-8-alpine
RUN mkdir /app
WORKDIR /app
COPY . /app
EXPOSE 8080
CMD ["mvn", "clean", "install", "spring-boot:repackage", "spring-boot:run"]