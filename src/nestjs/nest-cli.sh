#!/bin/bash

if [ "$1" = "controller" ] || [ "$1" = "co" ]; then
  npx nest g "$1" "$2"/presentation/"$2" "$3" --flat
else
  npx nest g "$1" "$2" "$3"
fi
