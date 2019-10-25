from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListVotacao.as_view()),
    path('<int:pk>/', views.DetailVote.as_view()),
]