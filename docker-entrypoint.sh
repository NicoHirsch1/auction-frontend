#!/usr/bin/env sh

if [ -z "$BACKEND_URL" ]; then
    echo "Please set the BACKEND_URL environment variable" 1>&2
    exit
fi

find '/usr/share/nginx/html' -name '*.js' -exec sed -i -e 's,BACKEND_URL,'"$BACKEND_URL"',g' {} \;
nginx -g "daemon off;"
