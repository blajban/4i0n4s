#!/bin/bash

$(> db/climate.sqlite)
cat db/migrate.sql | sqlite3 db/climate.sqlite
