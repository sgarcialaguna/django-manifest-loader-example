from django.urls import path

from . import views

urlpatterns = [
    path('material/', views.material_index, name='material_index'),
    path('', views.index, name='index')
]