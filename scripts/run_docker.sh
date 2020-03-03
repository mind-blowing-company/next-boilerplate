#!/bin/bash -e

docker run -p 3000:3000 -v "$(pwd)":/app:consistent -it next-boilerplate:latest
