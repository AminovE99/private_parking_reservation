#!/bin/bash

# PG_DATABASES=database1,database2,database3
# PG_USERS=user1,user2,user3
# PG_PASSWORDS=password1,password2,password3

set -e

function create_databases {
	local database=$1
	local user=$2
	local password=$3
	echo "  Creating user '$user' with password '$password' and database '$database'"
	psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	    CREATE USER $user WITH PASSWORD '$password';
	    CREATE DATABASE $database;
	    GRANT ALL PRIVILEGES ON DATABASE $database TO $user;
	    GRANT ALL PRIVILEGES ON DATABASE $database TO $POSTGRES_USER;
EOSQL
}

if [ -n "$PG_DATABASES" ]; then
    array_databases=($PG_DATABASES)
    if [ -n "$PG_USERS" ]; then
        array_users=($PG_USERS)
        array_passwords=($PG_PASSWORDS)
        if [ ${#array_databases[@]} -eq "${#array_users[@]}" ] && [ "${#array_databases[@]}" -eq "${#array_passwords[@]}" ]; then
            for key in "${!array_databases[@]}"; do
                create_databases ${array_databases[$key]} ${array_users[$key]} ${array_passwords[$key]}
	        done
        else
            echo 'ERROR: Databases, Users and Passwords do not match in number'
            echo "Databases: ${#array_databases[@]}"
            echo "Users: ${#array_users[@]}"
            echo "Passwords: ${#array_passwords[@]}"
            exit 1
        fi
    fi
	echo "All databases succesfully created."
fi