#!/usr/bin/env coffee

> @3-/protopkg
  @3-/uridir
  path > join dirname

ROOT = uridir(import.meta)

dir = join(
  dirname(ROOT)
  'srv/mod'
)
console.log dir
await protopkg(
  dir
  ROOT
)
