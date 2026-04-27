<h2>Project Wiki</h2>
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" alt="Tangela" style="margin: 0; padding: 0; display: inline-block; vertical-align: middle;">

<ul>
  {% for p in site.pages %}
    {% if p.path contains "projects/" %}
      <li>
        <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
