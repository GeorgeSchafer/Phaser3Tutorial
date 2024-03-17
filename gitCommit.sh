#!/bin/bash

read message -r -s "Enter commit message: "
git add .
git commit -m "$message"
git push
