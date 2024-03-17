#!/bin/bash

read -r -sp  "Enter commit message:" message
git add .
git commit -m "$message"
git push
