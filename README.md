# ChitChat

## Description

ChitChat is a chat application with rooms.

🛠 Created with JavaScript, TypeScript, React, Next.js, Redux, Socket.io and Node.js. UI is made by custom design. For styling I used Styled Components.

![ChitChat Rooms](https://raw.githubusercontent.com/lilla-nemeth/chitchat/main/frontend/src/app/assets/screenshots/app_screenshot_00.png)

## Install, run locally

Clone the repo

```
git clone https://github.com/lilla-nemeth/chitchat.git
```

### Backend

Go to the project root directory

```
cd chitchat
```

Install the dependencies

```
yarn install
```

Run the server

```
yarn run dev
```

Server is running on port 8080
</br></br>

### Frontend

Go to the client folder

```
cd frontend
```

Install the dependencies

```
yarn install
```

Start the frontend

```
yarn run dev
```

## Add environment variables

## Frontend

The app uses NextAuth with Auth0 provider for authentication.
To use Auth0, create your own account with an application on their website.
After that, create a .env.local file (for local development) inside of the frontend folder, and add these variables with your credentials:

```
AUTH_AUTH0_ID
```

and

```
AUTH_AUTH0_SECRET
```

## License

MIT
