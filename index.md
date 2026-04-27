---
layout: home
title: Home
permalink: /
---

<span class="sprite-no-space">![Porygon2](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png)</span>

 
{% highlight ruby linenos %}
def get_pokemon(name: nil)
  return nil it name.nil?
  pkmn = HTTparty.get("#{name}")
  return nil if pkmn.blank? 
  return pkmn["results"]["name"]
end
{% endhighlight %}
