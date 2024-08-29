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

git add package.json app.json
git commit -m "build: bump version to v$new_version"
git tag "v$new_version"
git push origin $(git rev-parse --abbrev-ref HEAD)
git push --tags
