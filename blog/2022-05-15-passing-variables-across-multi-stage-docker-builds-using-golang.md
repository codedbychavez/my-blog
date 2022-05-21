---
title: Passing variables across multi-stage docker builds using golang
description: A simple method for passing variables from one build stage to the next in a Docker file using a .env file
slug: passing-variables-across-multi-stage-docker-builds-using-golang
authors: [Chavez]
tags: [docker, golang, docker compose]
---

In this article, we’ll walk through a simple method for passing variables from one build stage to the next in a Docker file using a `.env` file.

<!-- truncate -->

![Measuring the impact of a test variation in React with Amplitude and ConfigCat](/img/posts/passing_vars_docker_builds.png)

## Pre-reqs

- Have Go installed
- Have docker installed
- A simple go app to follow along – You can instead, clone the repo for this post from: https://github.com/codedbychavez/go-demo-api

## Whats our aim?

By the end of this tutorial, you will learn how you can share env variables defined in a `.env` file from the build stage to your production (binary) image.

## Here are the steps

1. Create a `.env` file in the root of the project. Give it the following content:

```
PORT=4000
ENVIRONMENT="development
```


2. In the root of your app (Where `main.g`o is) create a `docker-compose.yml` file. Give it the following content:

```yaml
version: "3.8"

services:
  demo-go-api:
    container_name: demo-go-api
    image: demo-go-api
    build:
      context: .
      target: production
    volumes:
      - .:/app
    environment:
      - PORT
    ports:
      - ${PORT}:${PORT}
```

3. Then in the same location as step 1, create a `Dockerfile`, and give it the following content (We’ll explain this next):

```dockerfile
# ------ BUILDER BLOCK ------ #
FROM golang:1.17.6 as builder

# Define build env
ENV GOOS linux
ENV CGO_ENABLED 0

# Add a work directory
WORKDIR /go-demo-api

# Cache and install dependencies
COPY go.mod go.sum ./
RUN go mod download

COPY . .

# Build go-demo-api
RUN go build main.go

# ------ PRODUCTION BLOCK ------ #
FROM alpine:latest as production

# Add certificates
RUN apk add --no-cache ca-certificates

# Copy .env from builder
COPY --from=builder /go-demo-api/.env .

# Copy built binary from builder
COPY --from=builder /go-demo-api/main .

# Exec built binary
CMD ./main
```

## Testing point

At this point, you can test the app by running:

```
docker-compose up
```

Fix and errors (if any)...

## Breaking down the Dockerfile (Passing envs from builder stage to production stage)

### The builder block

I’ve added comments to the **Dockerfile** to point out where the two blocks are **builder** and **production**)

#### The builder block:

- Pulls the `golang:1.17.6` image from Docker hub
- Sets up the Workdir
- Copies the golang files
- Download and install golang dependencies
- Builds the go app (`main.go`)

#### The production block

Here is what the production block does:

- Pulls the latest alpine image (a very slim image) from Docker hub
- Copies the built binary image from the builder block
- Executes the Go app

## What about the variables?

Our Go app depends on environment variables defined in the `.env` file, but the built binary image produced from the builder stage does not include our environment variables.

So as part of the production stage, we’ll need to copy the env file from the builder stage into the alpine production image.

notice the line:

```dockerfile
# Copy .env from builder
COPY --from=builder /go-demo-api/.env .
```

This does just that.

If you try to remove the demo-go-api docker image in docker, then remove this line from the `Dockerfile`:

```dockerfile
COPY --from=builder /go-demo-api/.env .
```

Running the docker-compose up, should give the following result (Error, Error, could not locate `.env` file Config File…):

```bash
chavez@Chavezs-MacBook-Pro go-demo-api % docker-compose up
...
Attaching to demo-go-api
demo-go-api  | Error, could not locate .env file Config File ".env" Not Found in "[/]"
demo-go-api  | ENVIRONMENT not found
demo-go-api  | Starting server via environment 
demo-go-api  | 
demo-go-api  |  ┌───────────────────────────────────────────────────┐ 
demo-go-api  |  │                   Fiber v2.25.0                   │ 
demo-go-api  |  │               http://127.0.0.1:4000               │ 
demo-go-api  |  │       (bound on host 0.0.0.0 and port 4000)       │ 
demo-go-api  |  │                                                   │ 
demo-go-api  |  │ Handlers ............. 5  Processes ........... 1 │ 
demo-go-api  |  │ Prefork ....... Disabled  PID ................. 1 │ 
demo-go-api  |  └───────────────────────────────────────────────────┘ 
demo-go-api  | 
```

## Conclusion

In this post, we’ve discussed how to pass environment variables from one build stage to the next. In our case, it was from the builder stage to the production stage.

### Get the full Code

https://github.com/codedbychavez/go-demo-api

