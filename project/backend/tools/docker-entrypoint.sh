#!/bin/bash

#service ssh start;

ln -sf /usr/share/zoneinfo/Europe/Moscow /etc/localtime;

#exec /usr/sbin/proftpd -4 -n -c /etc/proftpd/proftpd.conf;
#exec bash

cd /backend/ && exec npm run start

