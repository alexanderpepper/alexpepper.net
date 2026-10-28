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

### Initialize server
1. `adduser alex`
2. `usermod -aG sudo alex`
3. `ufw allow OpenSSH`
4. `ufw enable`
5. `ufw allow 80/tcp`
6. `ufc allow 443/tcp`
7. `rsync --archive --chown=alex:alex ~/.ssh /home/alex`
7. `ssh alex@alexpepper.net`
8. `sudo vi /etc/ssh/sshd_config` and set
1. `PasswordAuthentication no`
2. `PermitRootLogin no` (optional)
9. `sudo systemctl reload ssh`

### Install Docker
1. `sudo apt update`
2. `sudo apt install ca-certificates curl gnupg`
3. `sudo install -m 0755 -d /etc/apt/keyrings`
4. `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg`
5. `sudo chmod a+r /etc/apt/keyrings/docker.gpg`
6. `echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
7. `sudo apt update`
8. `apt-cache policy docker-ce`
9. `sudo apt install docker-ce`
10. `sudo systemctl status docker`
11. `sudo usermod -aG docker ${USER}`
12. `su - ${USER}` or log out and log back in

### Install Docker Compose
1. `sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc`
2. `sudo chmod a+r /etc/apt/keyrings/docker.asc`
3. `echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`
4. `sudo apt update`
5. `sudo apt install docker-compose-plugin`
6. `docker compose verison`

### Request certificates with CertBot
1. Configure DNS to point to the server's IP
2. In the application's folder on the server, `mkdir dhparam`
3. `sudo openssl dhparam -out /home/alex/alexpepper.net/dhparam/dhparam-2048.pem 2048`
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
  0. `docker-compose exec webserver ls -la /etc/letsencrypt/live`
0. Run `sudo make stop` to take the application down.
0. Undo changes to `nginx.conf` to run on HTTPS.
0. Run `sudo make deploy` again to deploy the application with SSL.
0. Sometimes, in order to pick up front-end changes, the web-root volume need to be deleted:
```bash
docker volume rm alexpeppernet_web-root
```

## Automate certificate renewal
1. `sudo crontab -e`
2. Add the following line to the end:
> `0 12 * * * /home/alex/alexpepper.net/ssl-renew.sh >> /var/log/cron.log 2>&1`
3. To test, replace `0 12` with `*/5 *`, and add `--dry-run` to ssl-renew.sh. After five minutes, check cron.log to confirm whether the renewal request has succeeded:
> `tail -f /var/log/cron.log`


