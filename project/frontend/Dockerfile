FROM debian:buster

RUN		apt update && apt install mc -y && apt-get install curl -y;

RUN		curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs

COPY	./tools/docker-entrypoint.sh /usr/bin

COPY	./ /frontend

RUN		cd /frontend/ && npm install

RUN		chmod a+x /usr/bin/docker-entrypoint.sh

EXPOSE	8086

ENTRYPOINT	["/usr/bin/docker-entrypoint.sh"]