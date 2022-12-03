#!/usr/bin/env bash
echo "Creating mongo users..."
mongo admin --host localhost -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --eval "db.createUser({user: '$TASK_HANDLER', pwd: '$TASK_HANDLER_PASSWORD', roles: [{role: 'readWrite', db: 'task-manager-api'}]})"
echo "Mongo users created."