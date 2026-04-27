<h2>Project Wiki</h2>
<ul>
  {% for p in site.pages %}
    {% if p.path contains "projects/" %}
      <li>
        <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
