#!/bin/sh

if [ -z "$1" ]; then
  echo "Profile is required"
  exit 1
fi

if [ -z "$2" ]; then
  echo "Platform is required"
  exit 1
fi

if [ -f .env ]; then
  while IFS= read -r line || [ -n "$line" ]; do
    if [ -n "$line" ] && [[ "$line" != \#* ]]; then
      export "$line"
    fi
  done < .env
else
  echo "Il file .env non esiste."
  exit 1
fi

eas build --profile $1 --platform $2 --local --clear-cache
