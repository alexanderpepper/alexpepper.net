# AlexPepper.net

## Developing locally

### With Docker:
* Run `make build` to build the image
* Run `make dev` to run the server and front end in dev mode
  * For some reason hot reloading isn't working, browser refresh required.

### Without Docker:
* Run `make install` to install all dependencies
* Run `make api` to run the API on port 3000
* Run `make ui` to run the UI on port 8080

## Production deployment using Docker:
Docker config based on the article
[How To Secure a Containerized Node.js Application with Nginx, Let's Encrypt, and Docker Compose](https://www.digitalocean.com/community/tutorials/how-to-secure-a-containerized-node-js-application-with-nginx-let-s-encrypt-and-docker-compose)

1. Configure DNS to point to the server's IP
2. On the server, replace the contents of `nginx.conf` with the following:
```nginx configuration
  server {
          listen 80;
          listen [::]:80;

          root /var/www/html;
          index index.html index.htm index.nginx-debian.html;

          server_name alexpepper.net www.alexpepper.net;

          location / {
                  proxy_pass http://api:8080;
          }

          location ~ /.well-known/acme-challenge {
                  allow all;
                  root /var/www/html;
          }
  }
```
3. Run `sudo make deploy` to run the application and request certificates.
0. Verify that the certificates were generated correctly.
0. Run `sudo make stop` to take the application down.
0. Undo changes to `nginx.conf` to run on HTTPS.
0. Run `sudo make deploy` again to deploy the application with SSL.

