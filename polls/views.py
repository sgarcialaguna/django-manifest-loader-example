from django.shortcuts import render


def index(request):
    return render(request, 'polls/index.html')

def material_index(request):
    return render(request, 'polls/material_index.html')