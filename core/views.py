from django.shortcuts import render
from .models import Ishchilar

def home(request):
    if 'q' in request.GET:
        qidirish_sozi = request.GET['q']
        ishchilar = Ishchilar.objects.filter(ismi__icontains=qidirish_sozi)
    else:
        ishchilar = Ishchilar.objects.all()

    context = {
        'ishchilar': ishchilar
    }
    return render(request, 'index.html', context)