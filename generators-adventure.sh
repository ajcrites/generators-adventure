#!/bin/bash
/usr/bin/env node --harmony-generators -pe "!function *(){}()" &>/dev/null
if [ 0 -eq $? ]; then
    /usr/bin/env node --harmony-generators $(dirname $0)/generators-adventure.js $@
else
    echo "The version of node you are running does not support generators.
Please install and use node version 0.11 or higher.
https://github.com/creationix/nvm is recommended"
fi

