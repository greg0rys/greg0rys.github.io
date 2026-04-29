---
layout: post
title: DB Models
permalink: /projects/pkmnditto/models
---

{% include wynaut.html %}

# Pokemon 
### paths
```bash
model-path: ./app/models/pokemon.rb

helper-path: ./app/helpers/pokemon_helper.rb
```

### fields

```ruby
{
    poke_id: Integer,
    name: String,
    type: Array,
    base_exp: Integer,
    default_sprite: String,
    short_text: String
}
```

### relations

```ruby
    has_many :types
    has_many :moves
    has_many :damage_relations
```

# Move

# Type

### fields

```ruby
{
    name: String,
    url: String
}
```

# Damage Relation 

### fields

```ruby
{
    pkmn_type: String,
    double_damage_to: Array,
    double_damage_from: Array,
    half_damage_to: Array,
    half_damage_from: Array,
    no_damage_to: Array,
    no_damage_from: Array
}
```
