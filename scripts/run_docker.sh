#!/bin/bash -e

docker run -p 3000:3000 -v "$(pwd)"/src:/app/src:consistent -it next-boilerplate:latest
