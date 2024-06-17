#!/usr/bin/env coffee

> fs > readFileSync
  ./pay/proto.js > BillIndex

bin = readFileSync './pay.BillIndex'

for i from BillIndex bin
  console.log i

# bin = readFileSync './909'
# console.log bin
# console.log Lang bin
