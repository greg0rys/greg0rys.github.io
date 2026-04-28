---
layout: page
title: pkmnditto wiki
permalink: /projects/pkmnditto
---

<span class="sprite-no-space">![Porygon2](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png)</span>

<ul>
  {% for p in site.pages %}
    {% if p.path contains "pkmnditto/" and p.url != page.url %}
      <li>
        <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
