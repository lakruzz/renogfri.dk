---
title: Vores Støtter
---

<div class="bg-organic-base min-h-screen py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-organic-dark font-serif mb-4">
        Vores Støtter
      </h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Her er en bred vifte af organisationer, virksomheder og foreninger, der alle deler vores vision om at gøre det sunde valg til det billigste valg.
      </p>
    </div>

    {% if site.supporters.size > 0 %}
    <!-- Supporters Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {% for supporter in site.supporters %}
      <a href="{{ supporter.url | relative_url }}" class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div class="p-6">
          <!-- Logo -->
          {% if supporter.logo %}
          <div class="flex justify-center mb-4">
            <img src="{{ supporter.logo | relative_url }}" alt="{{ supporter.name }} logo" class="h-24 object-contain">
          </div>
          {% endif %}
          
          <!-- Name -->
          <h3 class="text-xl font-bold text-organic-dark text-center mb-2">
            {{ supporter.name }}
          </h3>
          
          <!-- Tagline -->
          {% if supporter.tagline %}
          <p class="text-gray-600 text-center text-sm">
            {{ supporter.tagline }}
          </p>
          {% endif %}
        </div>
      </a>
      {% endfor %}
    </div>
    {% else %}
    <!-- Empty State -->
    <div class="text-center py-12">
      <div class="text-6xl mb-4">🤝</div>
      <p class="text-xl text-gray-600">
        Endnu ingen støtter. Vil du være den første?
      </p>
      <p class="text-gray-500 mt-2">
        <a href="https://github.com/lakruzz/renogfri.dk/issues/new?template=new-supporter.yml" class="text-organic-green hover:underline">
          Tilmeld din organisation her
        </a>
      </p>
    </div>
    {% endif %}

    <!-- Call to Action -->
    <div class="mt-16 bg-white rounded-xl shadow-md p-8 text-center">
      <h2 class="text-2xl font-bold text-organic-dark mb-4">
        Vil din organisation også støtte forslaget om 0-moms på rene råvarer?
      </h2>
      <h3 class="text-lg text-gray-600 mb-6">
        — og få sin egen profilside her på renogfri.dk?
      </h3>
      <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
        Vi søger støtte fra organisationer, virksomheder, NGO'er og politiske partier, der ønsker at være med til at gøre det sunde valg til det billigste valg. 
        Det koster ikke noget at være støtte - det handler blot om at vise sin opbakning og være en del af bevægelsen for en grønnere og sundere fremtid.
      </p>
      <a href="https://github.com/lakruzz/renogfri.dk/issues/new?template=new-supporter.yml" 
         target="_blank"
         class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-organic-green hover:bg-organic-green-light shadow-lg transition-all">
        Bliv støtte
      </a>
      <p>&nbsp;</p>
      <h3 class="text-lg text-gray-600 mb-6">
        Som privatperson støtter du forslaget ved at<br/>👇  skrive under på vores borgerforslag 👇
      </h3>
    </div>
  </div>
</div>
