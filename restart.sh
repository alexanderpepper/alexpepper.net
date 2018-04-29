#!/usr/bin/env bash
git pull origin develop; sudo ./kill.sh; sudo ./deploy.sh production; sudo ./monitor.sh;