#!/usr/bin/env bash

DIR=$(realpath ${0%/*})
cd $DIR
set -ex

cd $1
bun x mdt .
exec mise exec -- dist.coffee $DIR/$1
