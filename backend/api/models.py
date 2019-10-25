from django.db import models

# Create your models here.

class Votacao(models.Model):
    num_votacao = models.IntegerField()
    timestamp = models.CharField(max_length=30)
    sigla_tipo = models.CharField(max_length=30)
    numero = models.CharField(max_length=30)
    ano = models.IntegerField()
    obj_votacao = models.CharField(max_length=1000)
    url_inteiro_teor = models.CharField(max_length=100)
    id_deputado = models.IntegerField()
    nome = models.CharField(max_length=100)
    sigla_partido = models.CharField(max_length=30)
    uf = models.CharField(max_length=30)
    voto = models.CharField(max_length=30)
    orient_part = models.CharField(max_length=30, null=True, blank=True)
    orient_gov = models.CharField(max_length=30)

    def __str__(self):
        """A string representation of the model."""
        return self.obj_votacao + str(self.ano) + self.nome + self.voto