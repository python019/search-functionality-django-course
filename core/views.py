from django.shortcuts import render
from .models import Ishchilar

def home(request):
    ishchilar = Ishchilar.objects.all()
    context = {
        'ishchilar': ishchilar
    }
    return render(request, 'index.html', context)