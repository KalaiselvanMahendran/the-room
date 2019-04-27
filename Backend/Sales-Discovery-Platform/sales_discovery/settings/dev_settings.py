from .base_settings import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '!78qo5rkqq+_c!o2f*n+&=hn5^o66i+$9*7t^)-8mh7*g50bq*'

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'sales_discovery',
        'USER': 'admin',
        'PASSWORD': 'admin',
        'HOST': 'localhost',
        'PORT': '',
    }
}

CLIENT_ID = 'PX4qs6bbVGU708IkstvhoLMcb6ZoqrtTLF32I2R4'
CLIENT_SECRET = 'lHxXstftKNmWIrE6qcLypAAsniIlgARPzthTO2RprRAOtadkrSJMMiXE6fPkxVl4WFKntknNqolGnVJ9xcCMtTlHNkw7XTNcqmSfYXUSPJNmYnuLQJicrmi5C2CTdIGS'

# social auth
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = '988230190073-7j5bop0hatauei9khh2lkkvilrmjobur.apps.googleusercontent.com'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = '8xYI0pRubCzhexc0dGt2Rr0z'

REDIRECT_TO_FRONTEND_URL = 'http://localhost:8000/'

# Using SQLite for testing since it is much faster
import sys
if 'test' in sys.argv or 'test_coverage' in sys.argv:  # Covers regular testing and django-coverage
    DATABASES['default']['ENGINE'] = 'django.db.backends.sqlite3'
