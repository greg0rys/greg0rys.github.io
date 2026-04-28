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
    short_text: String,
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
    url: String,
}
```

# Damage Relation 

