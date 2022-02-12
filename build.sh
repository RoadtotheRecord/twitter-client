#!/bin/bash

if [ $# -ne 0 ]; then
    exit 1
fi

docker-compose run --rm node sh -c "cd react-twitter && yarn install"

exit 0