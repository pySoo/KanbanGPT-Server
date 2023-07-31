# KanbanGPT-backend

Chat GPT API 사용을 위해 구성된 API 서버입니다.
사용자의 프롬프트에 기반하여 GPT 모델로부터의 응답을 생성합니다.

## Tech Stack

<div align=center>

|    Area     |                                                                                                                                                                                                                                                                         Tech Stack                                                                                                                                                                                                                                                                          |
| :---------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Backend** | <img src="https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-000000.svg?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/github_actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"> <img src="https://img.shields.io/badge/heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"> |

</div>

## Features

- 사용자의 프롬프트에 기반하여 OpenAI의 GPT 모델로부터 응답을 생성
- 반환된 상태 코드에 따라 적절한 오류 메시지를 제공
- GitHub Actions를 활용해 배포 자동화
- Heroku sleep 방지를 위한 Kaffeine 설정

## Project Structure

```
📦
├── 📂 .github
│   └── 📂 workflows
├── 📂 config
├── 📂 node_modules
└── 📂 src
    ├── 📂 constants
    └── main.js
```

## Getting Started

```bash
npm install
```

```bash
npm start
```
