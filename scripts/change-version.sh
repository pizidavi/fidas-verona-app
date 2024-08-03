#!/bin/bash

new_version=$1

if [ -z "$new_version" ]; then
  echo "Usage: $0 <new_version>"
  exit 1
fi

if ! [[ $new_version =~ ^([0-9]+)\.([0-9]+)\.([0-9]+)$ ]]; then
  echo "$new_version is not a valid semver version."
  exit 1
fi

sed -i -e "s/\"version\": \".*\"/\"version\": \"$new_version\"/" package.json
sed -i -e "s/\"version\": \".*\"/\"version\": \"$new_version\"/" app.json
