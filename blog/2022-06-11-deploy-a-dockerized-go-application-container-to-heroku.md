---
title: Deploy a dockerized go application container to Heroku
description: how to deploy a dockerized container of your go application to Heroku for free
slug: deploy-a-dockerized-go-application-container-to-heroku
authors: [Chavez]
tags: [docker, golang, docker compose]
---

Learn how to deploy a Dockerized container of your go application to Heroku for free.

![Cover Photo](/img/posts/passing_vars_docker_builds.png)

<!-- truncate -->

## Prerequisites

- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- A Golang Application to follow along - You can download our demo GO app API template to follow along from: https://github.com/codedbychavez/go-demo-api
- Docker Desktop - for local development and testing
- A Heroku account

## Getting started

I will be cloning and using this [boilerplate go application](https://github.com/codedbychavez/go-app-api-boilerplate)

The setup instructions are included in the above repo to help you get the boilerplate app up and running on your machine before proceeding to dockerizing the app.

## Here are the steps

1. The first thing we need to do is to create a **Dockerfile** in the root folder of your project with the following contents:

```dockerfile
FROM golang:1.17.6

# Add a work directory
WORKDIR /app

# Cache and install dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy app files
COPY . .

# Expose port
EXPOSE 4000

# Start app
CMD go run main.go
```

The above Dockerfile downloads the go image, sets up a directory, installs our go app dependencies, copies the files, exposes a port (**4000**) for our go app to use then executes the go run command to start the app.

2. Create a **docker-compose.yml** file in the root of the project as well, with the following content:

```yaml
version: "3.8"

services:
  app:
    container_name: my-app
    image: my-app
    build:
      context: .
      dockerfile: ./Dockerfile
    volumes:
      - .:/app
    ports:
      - 4000:${PORT}
    env_file:
      - .env
```

In our docker-compose file above, we defined a single service called app, defined our build, volumes, ports, and an env variable for PORT.

> 💡Heroku assigns a random dynamic port to our go app. To ensure that go uses that port when running our application, we’ll need to reference the default Heroku port environment variable in our dockerfile, you’ll see this later.

Since we’ve defined an `env_file` attribute in our docker-compose file above, we can go ahead and create an **.env** file.

3. Create a **.env** file in the project root where the docker files are and add the following content:

```env
ENVIRONMENT="development"
PORT=4000
```

> 💡Its best practice not to push your .env to source control like git. Heroku allows us to create environment variables on their platform, in this case, we can define sensitive credentials/ variables using Heroku’s environment variables and just reference them from our .env file.

4. Let's test that we can compose our Docker container for our app by running:

```bash
docker-compose up
```

When the container starts, try sending a GET request to http://localhost:4000/api/v1/demo

You should see the following response:

![Snapshot of the API Response](/img/posts/deploy_dockerized_golang/app_snap_1.webp)

5. Head over to [Heroku](http://heroku.com/) and create a new app.

6. Log in to Heroku from your terminal:

> 💡The below command will not work if you don’t have Heroku CLI installed.

```bash
heroku login
```

7. Next, we need to log in to Heroku’s container registry, since we are interested in deploying our go app container to Heroku.

```bash
heroku container:login
```

> 💡 If you run into any authentication error while trying to log in, try logging into Heroku’s container registry manually by running the following command:

```bash
docker login - -username=YOUR-HEROKU-USERNAME - -password=$(heroku auth:token) registry.heroku.com
```

8. We need to change the Heroku stack for our application to **container** to have our app on Heroku equipped to run our docker container.

> 💡You can see a list of stacks available by running the following command:

```bash
heroku stack -a NAME-OF-YOUR-HEROKU-APP
```

Set the stack to **container** by running:

```bash
heroku stack:set container -a NAME-OF-YOUR-HEROKU-APP
```

9. Before pushing our app container to Heroku let’s modify our **.env** file to read from the Heroku default $PORT env variable.

You can read more about his here: https://help.heroku.com/PPBPA231/how-do-i-use-the-port-environment-variable-in-container-based-apps

10. Push the container to Heroku by running:

```bash
heroku container:push web -a NAME-OF-YOUR-HEROKU-APP
```

> 💡The word **web** in the above command, This is telling Heroku that this container is to be handled by Heroku’s web process type.

11. Let’s release the dockerized go container to our Heroku app so that we can access it:

```bash
heroku container:release web -a NAME-OF-YOUR-HEROKU-APP
```

12. Try to access the app, If you used the go boilerplate app as I did, you should see the following:

![Snapshot of the App deployed to Heroku](/img/posts/deploy_dockerized_golang/app_snap_2.webp)

## Conclusion

In this post, you learned how to deploy a dockerized container of your go application to Heroku for free.

### Get the full Code

https://github.com/codedbychavez/dockerized-go-to-heroku

## Follow me

Feel free to reach out to me via social media **@codedbychavez** for more awesome content.