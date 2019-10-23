from django.test import TestCase
import json

from .models import Votacao

sampleDataArray = json.dumps([
	{
		"num_votacao": 1,
		"timestamp": "2019-08-20T17:25:00",
		"sigla_tipo": "PL",
		"numero": "PEC110/2016",
		"ano": 2016,
		"obj_votacao": "descreve de maneira mais específica o que está sendo votado em relação à proposição.",
		"url_inteiro_teor": "um link para um PDF que apresenta o conteúdo da proposição sendo votada",
		"id_deputado": 123456,
		"nome": "Deputado Ciclano Fulano",
		"sigla_partido": "S.PART",
		"uf": "DF",
		"voto": "Sim",
		"orient_part": "Liberado",
		"orient_gov": "Obstrução"
	},
	{
		"num_votacao": 2,
		"timestamp": "2019-08-20T17:25:00",
		"sigla_tipo": "PL",
		"numero": "PEC110/2016",
		"ano": 2016,
		"obj_votacao": "descreve de maneira mais específica o que está sendo votado em relação à proposição.",
		"url_inteiro_teor": "um link para um PDF que apresenta o conteúdo da proposição sendo votada",
		"id_deputado": 123456,
		"nome": "Deputado Ciclano Fulano",
		"sigla_partido": "S.PART",
		"uf": "DF",
		"voto": "Sim",
		"orient_part": "Liberado",
		"orient_gov": "Obstrução"
	},
	{
		"num_votacao": 3,
		"timestamp": "2019-08-20T17:25:00",
		"sigla_tipo": "PL",
		"numero": "PEC110/2016",
		"ano": 2016,
		"obj_votacao": "descreve de maneira mais específica o que está sendo votado em relação à proposição.",
		"url_inteiro_teor": "um link para um PDF que apresenta o conteúdo da proposição sendo votada",
		"id_deputado": 123456,
		"nome": "Deputado Ciclano Fulano",
		"sigla_partido": "S.PART",
		"uf": "DF",
		"voto": "Sim",
		"orient_part": "Liberado",
		"orient_gov": "Obstrução"
	}
])


class VotacaoModelTest(TestCase):
	@classmethod
	def setUpTestData(cls):
		sampleData = json.loads(sampleDataArray)
		for element in sampleData:
			Votacao.objects.create(**element)
		
	def test_content_is_valid(self):
		print("Test if all contents in votacao object are valid")
		
		sampleData = json.loads(sampleDataArray)
		firstElementInSampledata = sampleData[0]
		vote = Votacao.objects.get(id=1)

		expected_object_num_votacao = vote.num_votacao
		expected_object_timestamp = vote.timestamp
		expected_object_sigla_tipo = vote.sigla_tipo
		expected_object_numero = vote.numero
		expected_object_ano = vote.ano
		expected_object_obj_votacao = vote.obj_votacao
		expected_object_url_inteiro_teor = vote.url_inteiro_teor
		expected_object_id_deputado = vote.id_deputado
		expected_object_nome = vote.nome
		expected_object_sigla_partido = vote.sigla_partido
		expected_object_uf = vote.uf
		expected_object_voto = vote.voto
		expected_object_orient_part = vote.orient_part
		expected_object_orient_gov = vote.orient_gov

		self.assertEquals(firstElementInSampledata["num_votacao"], expected_object_num_votacao)
		self.assertEquals(firstElementInSampledata["timestamp"], expected_object_timestamp)
		self.assertEquals(firstElementInSampledata["sigla_tipo"], expected_object_sigla_tipo)
		self.assertEquals(firstElementInSampledata["numero"], expected_object_numero)
		self.assertEquals(firstElementInSampledata["ano"], expected_object_ano)
		self.assertEquals(firstElementInSampledata["obj_votacao"], expected_object_obj_votacao)
		self.assertEquals(firstElementInSampledata["url_inteiro_teor"], expected_object_url_inteiro_teor)
		self.assertEquals(firstElementInSampledata["id_deputado"], expected_object_id_deputado)
		self.assertEquals(firstElementInSampledata["nome"], expected_object_nome)
		self.assertEquals(firstElementInSampledata["sigla_partido"], expected_object_sigla_partido)
		self.assertEquals(firstElementInSampledata["uf"], expected_object_uf)
		self.assertEquals(firstElementInSampledata["voto"], expected_object_voto)
		self.assertEquals(firstElementInSampledata["orient_part"], expected_object_orient_part)
		self.assertEquals(firstElementInSampledata["orient_gov"], expected_object_orient_gov)

	def test_content_is_not_valid(self):
		print('Test if content is not valid')
		sampleData = json.loads(sampleDataArray)
		firstElementInSampledata = sampleData[0]
		secondVote = Votacao.objects.get(id=2)
		expected_object_num_votacao = secondVote.num_votacao
		self.assertNotEqual(firstElementInSampledata["num_votacao"], expected_object_num_votacao)