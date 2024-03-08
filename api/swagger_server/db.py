import psycopg
from psycopg.rows import dict_row

def connect():
    conn = psycopg.connect("postgresql://postgres:example@db/postgres")

    return conn

def get_cursor():
    return connect().cursor(row_factory=dict_row)
