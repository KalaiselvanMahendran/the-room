# Sales-Discovery-Platform

Clone this repository and do the following to make it development ready.

### Create a virtual environment and install the required packages
<pre>
virtualenv --python /usr/bin/python3 venv
source venv/bin/activate
pip install -r requirements.txt
</pre>




### Setting Up Postgres Database locally

#### Install postgres 
<pre>
sudo apt-get update
sudo apt-get install python-pip python-dev libpq-dev postgresql postgresql-contrib
</pre>
#### Setup the database
<pre>
sudo su - postgres
psql
CREATE DATABASE sales_discovery;
CREATE USER admin WITH PASSWORD 'admin';
ALTER ROLE admin SET client_encoding TO 'utf8';
ALTER ROLE admin SET default_transaction_isolation TO 'read committed';
ALTER ROLE admin SET timezone TO 'UTC';
ALTER ROLE admin CREATEDB;
GRANT ALL PRIVILEGES ON DATABASE sales_discovery TO admin;
\q
exit
</pre>
