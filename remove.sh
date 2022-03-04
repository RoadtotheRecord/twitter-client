#!/bin/bash

if [ $# -ne 1 ]; then
    exit 1
fi

docker-compose run --rm react sh -c "yarn remove $1"

exit 0