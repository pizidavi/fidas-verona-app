# FIDAS Verona App

FIDAS Verona – Federazione Italiana Associazioni Donatori di Sangue

## Setup

### Project setup

Clone the project

```bash
git clone https://link-to-project
```

Go to the project directory

```bash
cd my-project
```

Install dependencies

```bash
yarn install
```

### Environment setup

The `.env` and `.env.dev` file is needed to run this application.
An example `.env.sample` file can be found inside the repository

| Parameter      | Required | Type     |
| :------------- | :------- | :------- |
| `API_URL`      | `true`   | `string` |
| `COMPANY_ID`   | `true`   | `number` |
| `DEV_USER`     | `false`  | `number` |
| `DEV_PASSWORD` | `false`  | `number` |

### Start application

```bash
yarn start
```
