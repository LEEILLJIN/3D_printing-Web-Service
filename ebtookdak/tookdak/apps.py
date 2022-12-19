from django.apps import AppConfig


class TookdakConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'tookdak'


    # job_scheduler 
    # background service
    def ready(self):
        from jobscheduler import updater
        updater.Start()


