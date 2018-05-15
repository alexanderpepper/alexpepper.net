#!/usr/bin/env bash
git pull origin master; sudo ./kill.sh; sudo ./deploy.sh production; sudo ./monitor.sh;
