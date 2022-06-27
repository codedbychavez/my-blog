---
title: Live Reload with Docker and React
description: A step by step guide to get live reload working with Docker and React
slug: live-reload-with-docker-and-react
authors: [Chavez]
tags: [docker, react, docker compose]
---

Learn how to get live reload working with Docker and React in just a few simple steps.

![Cover Photo](/img/posts/live_reload_docker_and_react/cover.webp)

<!-- truncate -->

## Prerequisites

- NPM (Node Package Manager) version 5.2.0 or higher
- Basic knowledge of Docker and React

## Getting started

We'll start by creating a new react app using the **npx** command. If you already have a react app, please feel free to skip over this section.

Create a new folder on your computer to store the app files.

## Here are the steps

1. Create a new React App with the following command:

```bash
npx create-react-app react-docker

```

### Setting up the Docker files

Let's do the following steps to setup Docker

1. Navigate to the app folder in your terminal:

```bash

cd react-docker
```

2. Create a **Dockerfile** with the following content:

```Dockerfile
# Dockerfile

# Pull the base image
FROM node:13.12.0-alpine

# Set the working directory
WORKDIR /react-docker

# Copy app dependencies to container
COPY ./package*.json ./

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
RUN npm install

# Deploy app for local development
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true

```

3. Create a **docker-compose-file.yml** with the following content:

```yaml
# docker-compose.yml
version: "3.8"

services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - ./:/react-docker:delegated
      - /node_modules
    ports:
      - 3000:3000
    environment:
      - CHOKIDAR_USEPOLLING=true

```

Notice the environment variable **CHOKIDAR_USEPOLLING=true** in the docker-compose file above?

This is a file watching mechanism that is used by create-react-app to watch for file changes. So, if we change something in our React app we would be able to see the live changes through Docker.

## Building and running the React app with Docker

Now that we have the files docker will need to build and run let’s continue?

Ensure that your terminal is pointed inside the root folder of your react application and run the following command:

```bash
docker compose up --build

```

Give it a few moments to complete this can be quick or slow depending on your system and internet connection.

When the process completes you should be able to see the app by going to [http://localhost:3000](http://localhost:3000) in your browser:

![Cover Photo](/img/posts/live_reload_docker_and_react/app_snap_1.webp)

## Let's see if it works

Open the **App.js** file (src/App.js) and change the text "Learn React" to "Hello World". Then verify that the changes are instantly updated in the browser.

## Conclusion

Thank you for following along. If this did not work for you the first time, do remember to follow along closely without skipping any steps.

## Get the code

Here is the link to the entire Repository on GitHub:

[https://github.com/codedbychavez/react-docker-live-reload](https://github.com/codedbychavez/react-docker-live-reload)