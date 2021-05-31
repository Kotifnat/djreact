from django.db import models

# Create your models here.

class Article(models.Model):
    title = models.CharField("Название", max_length=120)
    content = models.TextField("Контент")

    def __str__(self):
        return self.title