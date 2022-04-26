from django.db import models

class Ishchilar(models.Model):
    class Meta:
        verbose_name = 'Worker'
        verbose_name_plural = 'Ishchilar'
    
    ismi = models.CharField(max_length=255)
    familiyasi = models.CharField(max_length=255)
    yoshi = models.IntegerField(default=18)
    kasbi = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.ismi
