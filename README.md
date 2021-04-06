# chat-vue

[Watch project](https://olyamosunova.github.io/chat-vue/)

## Task
```
Используя https://jsonplaceholder.typicode.com/ в качестве бэкенда,
написать имитацию типового интерфейса чатов: слева список контактов, справа сообщения.
По клику на контакт открывается чат с указанным человеком. В верхней части чата должны отобразиться ФИО и
аватарка выбранного человека, в нижней - форма отправки сообщения. Новые сообщения (после отправки)
должны отображаться внизу.
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Local start project
In file src/store/modules/data.js change variable isProd = false;

Run script:
```
npm run json:server
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
