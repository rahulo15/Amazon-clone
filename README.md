# Amazon Clone Application

## Introduction

Welcome to the Amazon Clone Application! This application is a simplified replica of the Amazon e-commerce platform, built to showcase various features and functionalities found on the original site. It provides users with an interactive shopping experience.

## Features

- **User Authentication**: Users can log in/log out and maintain a personalized shopping experience.
- **Shopping Cart**: Add products to the cart and proceed to checkout.
- **Payment Processing**: Simulate the checkout process.

## Technologies Used

- **Frontend**:
  - ReactJS
  - Redux for state management
  - Material-UI for styling components
 
- **Authentication**:
  - Firebase Authentication

- **Backend**:
  - Node.js
  - Express.js
 
### Firebase Setup

1. **Create a Firebase Project:**
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click on "Add Project" and follow the instructions to set up your project.

2. **Enable Firebase Authentication:**
   - In the Firebase Console, go to "Authentication" and enable the authentication method you prefer (e.g., Email/Password, Google Sign-in).

3. **Get Firebase Config:**
   - In the Firebase Console, click on the gear icon (Project settings) and go to the "General" tab.
   - Scroll down to the "Your apps" section and select your web app.
   - Copy the configuration object.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine.
   ```shell
   git clone https://github.com/your-username/Amazon-clone.git
   ```
2. Navigate to the project directory.
    ```shell
    cd Amazon-clone
    ```
3. Install the required dependencies.
    ```shell
    npm install
    ```
4. Start the application.
    ```shell
    npm start
    ```
5. Open your web browser and go to http://localhost:3000.

Don't forget to set your firebase config file using the appropriate keys.
