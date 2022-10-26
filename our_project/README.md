## Для запуска проекта

1. Перейти в директорию our_project и запустить:
```
docker-compose up --build -d
```

2. После запуска контейнера перейти в директорию our_project/backend и запустить:
```
npm install
npm run start:dev
```
3. Для проверки backend набрать в браузере (то что успел сделать по убучению в example.zip заменить всё в src):
```
http://localhost:4000
или
http://localhost:4000/api
```

## По frontend ничего менять не стал
Для запуска:

1. Перейти в директорию our_project/frontend

2. Запустить:
```
npm install
npm run serve
```

3. В браузере набрать:
```
http://localhost:8086/
```