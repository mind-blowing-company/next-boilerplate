#!/bin/bash -e

docker run -p 3000:3000 -v "$(pwd)":/app:consistent -v /app/node_modules -it next-boilerplate:latest
