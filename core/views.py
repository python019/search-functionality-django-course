from django.shortcuts import render
from .models import Ishchilar
from django.db.models import Q

def home(request):
    if 'q' in request.GET:
        qidirish_sozi = request.GET['q']
        toliq = Q(Q(ismi__icontains=qidirish_sozi) | Q(familiyasi__icontains=qidirish_sozi) | Q(yoshi__icontains=qidirish_sozi) | Q(kasbi__icontains=qidirish_sozi))
        ishchilar = Ishchilar.objects.filter(toliq)
    else:
        ishchilar = Ishchilar.objects.all()

    context = {
        'ishchilar': ishchilar
    }
    return render(request, 'index.html', context)
