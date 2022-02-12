#!/bin/bash

if [ $# -ne 1 ]; then
    exit 1
fi

docker-compose run --rm node sh -c "cd react-twitter && yarn remove $1"

exit 0