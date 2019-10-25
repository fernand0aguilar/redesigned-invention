from rest_framework import generics
from .models import Votacao
from .serializers import VotacaoSerializer

# Create your views here.

class ListVotacao(generics.ListCreateAPIView):
    queryset = Votacao.objects.all()
    serializer_class = VotacaoSerializer

class DetailVote(generics.ListCreateAPIView):
    queryset = Votacao.objects.all()
    serializer_class = VotacaoSerializer
