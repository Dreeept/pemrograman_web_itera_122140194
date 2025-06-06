import argparse
import sys
from datetime import date

from pyramid.paster import bootstrap, setup_logging
from sqlalchemy.exc import OperationalError

from .. import models


def setup_models(dbsession):
    """
    Tambahkan data awal untuk tabel matakuliah.
    """
    mk1 = models.Matakuliah(
        kode_mk='IF101',
        nama_mk='Pemrograman Dasar',
        sks=3,
        semester=1
    )
    mk2 = models.Matakuliah(
        kode_mk='SI202',
        nama_mk='Basis Data',
        sks=4,
        semester=2
    )
    mk3 = models.Matakuliah(
        kode_mk='IF303',
        nama_mk='Jaringan Komputer',
        sks=3,
        semester=3
    )
    dbsession.add_all([mk1, mk2, mk3])


def parse_args(argv):
    parser = argparse.ArgumentParser()
    parser.add_argument(
        'config_uri',
        help='Configuration file, e.g., development.ini',
    )
    return parser.parse_args(argv[1:])


def main(argv=sys.argv):
    args = parse_args(argv)
    setup_logging(args.config_uri)
    env = bootstrap(args.config_uri)

    try:
        with env['request'].tm:
            dbsession = env['request'].dbsession
            setup_models(dbsession)
    except OperationalError:
        print('''
Pyramid is having a problem using your SQL database.

Your database should be up and running before you
initialize your project. Make sure your database server
is running and your connection string in development.ini
is correctly configured.
''')


if __name__ == '__main__':
    main()