#!/bin/sh

if [ -z "$1" ]; then
  echo "Profile is required"
  exit 1
fi

if [ -f .env ]; then
  while IFS= read -r line || [ -n "$line" ]; do
    if [ -n "$line" ] && [[ "$line" != \#* ]]; then
      export "$line"
    fi
  done < .env
else
  echo ".env file not found"
  exit 1
fi

eas update --channel $1 --auto --clear-cache --non-interactive
