#!/bin/bash

docker run -p 3000:3000 -v "$(pwd)"/src:/app/src -it next-boilerplate:latest
