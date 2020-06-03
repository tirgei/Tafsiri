# Tafsiri

Tafsiri, swahili word for translate, is a translation service that allows user to translate a word or sentence to multiple languages. Currently the out of the box supported languages are:

- Afrikaans
- Hausa
- Hindi
- Hungarian
- Igbo
- Japanese
- Marathi
- Spanish
- Swahili
- Xhosa
- Zulu

The service is hosted on [Heroku](https://heroku.com) and is available on `https://tafsiri.herokuapp.com`.

## Prerequisites

- [VS Code](https://code.visualstudio.com) / [WebStorm](https://www.jetbrains.com/webstorm/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com) / [yarn](https://yarnpkg.com/en/)
- [Insomnia](https://insomnia.rest) / [Postman](https://www.getpostman.com)

## Project setup

This project setup assumes you're using a Linux based development environment ([Linux Mint](https://linuxmint.com)). Steps for other platforms e.g. Windows and MacOS may be different. Check up relevant guides for those platforms.

- Clone the repo

```console
foo@bar:~$ git clone https://github.com/tirgei/tafsiri.git
```

- CD into the project folder

```console
foo@bar:~$ cd tafsiri/
```

- Install the project dependencies

```console
foo@bar:~$ npm install
```

- Set your environment variables i.e. rename the `.env.example` file to `.env` then edit to your specific configuration

```console
foo@bar:~$ mv .env.example .env
```

- Compile & run the app

```console
foo@bar:~$ npm run watch-ts
foo@bar:~$ npm run watch-node
```

## API Endpoints

The available endpoints are: 

| **HTTP METHOD** | **URI** | **ACTION** |
| --- | --- | --- |
| **GET** | `/` | Welcome message |
| **GET** | `/translate` | Translate |

A sample response for the translate endpoint is:

GET `https://tafsiri.herokuapp.com/translate?text=hello%20world`

```json
    {
        "status": 200,
        "data": [
            {
            "language": "Afrikaans",
            "text": "Hello Wêreld"
            },
            {
            "language": "Hausa",
            "text": "Sannu Duniya"
            },
            {
            "language": "Hindi",
            "text": "नमस्ते दुनिया"
            },
            {
            "language": "Hungarian",
            "text": "Helló Világ"
            },
            {
            "language": "Igbo",
            "text": "Ndewo Ụwa"
            },
            {
            "language": "Japanese",
            "text": "こんにちは世界"
            },
            {
            "language": "Marathi",
            "text": "हॅलो जग"
            },
            {
            "language": "Spanish",
            "text": "Hola Mundo"
            },
            {
            "language": "Swahili",
            "text": "Salamu, Dunia"
            },
            {
            "language": "Xhosa",
            "text": "Molo Lizwe"
            },
            {
            "language": "Zulu",
            "text": "Sawubona Mhlaba"
            }
        ]
    }
```

### License

```licence
Copyright 2020 Vincent Tirgei

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
