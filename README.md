# chat-vue

[Watch project](https://olyamosunova.github.io/chat-vue/)

## Task
```
Using https://jsonplaceholder.typicode.com/ as backend,
write an imitation of a typical chat interface: on the left is a list of contacts, on the right is messages.
Clicking on a contact opens a chat with the specified person. At the top of the chat should be displayed full name and
avatar of the selected person, at the bottom - a form for sending a message. New messages (after sending)
should appear below.
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
