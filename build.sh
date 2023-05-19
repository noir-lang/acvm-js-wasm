#!/usr/bin/env bash

main_dir=$(pwd)
CACHE_DIR=".cache"
SIMULATOR_REPO_CACHE="$main_dir/$CACHE_DIR/acvm-simulator"
GIT_VENDOR_URL="https://github.com"
SIMULATOR_REPO_PATH="noir-lang/acvm-simulator"
SIMULATOR_CLONE_URL="$GIT_VENDOR_URL/$SIMULATOR_REPO_PATH"
SIMULATOR_BUILD="$main_dir/.build/acvm-simulator"

rm -rf "$SIMULATOR_BUILD"

mkdir -p "$SIMULATOR_BUILD"

if [[ -d "$SIMULATOR_REPO_CACHE" ]]; then
    echo "$SIMULATOR_REPO_CACHE exists on your filesystem, using it for build..."
else
    echo "$SIMULATOR_REPO_CACHE does not exists on your filesystem, cloning from $SIMULATOR_CLONE_URL"
    git clone $SIMULATOR_CLONE_URL $SIMULATOR_REPO_CACHE
fi

cp -a "$SIMULATOR_REPO_CACHE/." "$SIMULATOR_BUILD/"

cd $SIMULATOR_BUILD

./build-wasm
cd $main_dir

rm -rf ./nodejs
rm -rf ./web
rm package.json

cp -a "$SIMULATOR_BUILD/pkg/nodejs/." ./nodejs
cp -a "$SIMULATOR_BUILD/pkg/web/." ./web
cp "$SIMULATOR_BUILD/pkg/package.json" ./

cd $SIMULATOR_BUILD
SIMULATOR_REV=$(git rev-parse HEAD)
SIMULATOR_REV_SHORT=$(git rev-parse --short HEAD)

cd $main_dir
sed -i -E "s/\[noir-lang\/acvm-simulator@.+\]\(.+\)/\[noir-lang\/acvm-simulator@$SIMULATOR_REV_SHORT\](https:\/\/github.com\/noir-lang\/acvm-simulator\/tree\/$SIMULATOR_REV)/g" ./README.md

cat ./package.json | jq '.repository = { "type" : "git", "url" : "https://github.com/noir-lang/acvm-simulator-wasm.git" }' | jq ".acvm = { \"versionHash\" : \"$SIMULATOR_REV\" }" | tee ./package.json