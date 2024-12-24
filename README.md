# Ozon PlayWright Tests

This repository contains automated tests for Ozon.ru using the [Playwright](https://playwright.dev/) framework. These tests are designed to verify functionalities of the Ozon platform, such as user authentication and authorization.

---

## Features

- **Automated Login Tests**: Verifies the user authentication process with valid and invalid credentials.

- **Newman Integration**:
  - Execute Postman collections directly from the repository.
  - Generate detailed HTML reports using `newman-reporter-htmlextra`.

---

## Installation

### Prerequisites

- Node.js >= 16.x
- Playwright >= 1.33.0
- Visual Studio Code (optional)
- Newman CLI and HTML reporter (installed with the repository).

### Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/MelNik03/PlayWright.git

2. Navigate into the project directory:

    cd PlayWright

3. Install dependencies:

    npm install

### Running Playwright Tests (POM)
   
  The Playwright tests are designed using the Page Object Model (POM) to structure the test code in a more maintainable way.

  To run the Playwright tests, use the following command:

    npx playwright test  
    
  This will execute all tests configured in the project. Make sure that your environment is set up correctly and that the necessary page objects and test files are present.

### Running Newman Tests (Postman)
    
    Newman is a command-line tool that allows you to run Postman collections directly from the terminal.

    Steps to run Newman tests:
    
  1) Install Newman globally (if you haven't already):

    npm install -g newman
    
  2) Download your Postman collection and environment files. These should be in .json format.

  3) To run your Postman collection with Newman, use the following command:

    newman run path/to/your/collection.json -e path/to/your/environment.json
    
    - path/to/your/collection.json: The path to your Postman collection file.
    - path/to/your/environment.json: The path to your Postman environment file (optional).
    
    Generate HTML reports (optional, but recommended for better visualization of test results):

  4) newman run path/to/your/collection.json -e path/to/your/environment.json --reporters html --reporter-html-export report.html

    This will generate a detailed HTML report of the test results.
