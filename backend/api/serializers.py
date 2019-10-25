from rest_framework import serializers
from .models import Votacao


class VotacaoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'num_votacao',
            'timestamp',
            'sigla_tipo',
            'numero',
            'ano',
            'obj_votacao',
            'url_inteiro_teor',
            'id_deputado',
            'nome',
            'sigla_partido',
            'uf',
            'voto',
            'orient_part',
            'orient_gov'
        )
        model = Votacao
