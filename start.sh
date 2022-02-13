#!/bin/bash

if [ $# -ne 0 ]; then
    exit 1
fi

docker-compose build
docker-compose run --rm react sh -c "create-react-app react-twitter && chmod 777 -R react-twitter"

exit 0