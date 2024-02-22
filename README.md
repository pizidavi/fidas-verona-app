# FIDAS Verona App

[![Downloads](https://img.shields.io/github/downloads/pizidavi/fidas-verona-app/total)](https://github.com/pizidavi/fidas-verona-app/releases)

[FIDAS Verona](https://www.fidasverona.it) – Federazione Italiana Associazioni Donatori di Sangue 🩸

## Download

Get the app from the [releases page](https://github.com/pizidavi/fidas-verona-app/releases).

## Screenshots

|               Home                |                  Donations                  |               User                |
| :-------------------------------: | :-----------------------------------------: | :-------------------------------: |
| ![Home](.github/images/home.webp) | ![Donations](.github/images/donations.webp) | ![User](.github/images/user.webp) |

## Development

### Project setup

Clone the project

```bash
git clone https://github.com/pizidavi/fidas-verona-app.git
```

Go to the project directory and install the dependencies

```bash
yarn install
```

### Environment setup

A `.env` and `.env.dev` file is needed to run this application.
An example `.env.sample` file can be found inside the repository

| Parameter             | Required | Type     |
| :-------------------- | :------- | :------- |
| `API_URL`             | `true`   | `string` |
| `COMPANY_ID`          | `true`   | `number` |
| `FORGOT_PASSWORD_URL` | `true`   | `string` |
| `REPOSITORY_URL`      | `true`   | `string` |
| `DEV_USER`            | `false`  | `string` |
| `DEV_PASSWORD`        | `false`  | `string` |

### Start application

```bash
yarn start
```

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This project is not affiliated with FIDAS Verona. The data displayed in this app is sourced from FIDAS Verona. Any issues or concerns regarding the functionality of the app should be directed to this repository and not to FIDAS Verona.
