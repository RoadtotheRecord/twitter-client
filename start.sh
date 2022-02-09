docker-compose build
docker-compose run --rm node sh -c "npm install -g create-react-app && create-react-app react-twitter && chmod 777 -R react-twitter"