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

### paths

```bash
model-path: ./app/models/move.rb

helper-path: ./app/helpers/moves_helper.rb
```

### fields
```ruby
{
    id: Integer,
    created_at: DateTime NotNull,
    updated_at: DateTime NotNull,
    move_type: String,
    name: String,
    power: Integer,
    short_text: String
}
```

# Type

### paths 

```bash
model-path: ./app/models/type.rb

helper-path: ./app/helpers/types_helper.rb
```

### fields

```ruby
{
    name: String,
    url: String
}
```

# Damage Relation 

### paths

```bash
model-path: ./app/models/damage_relation.rb

helper-path: ./app/helpers/damage_relation_helper.rb
```
### fields

```ruby
{
    type_name: String,
    double_damage_to: Array,
    double_damage_from: Array,
    half_damage_to: Array,
    half_damage_from: Array,
    no_damage_to: Array,
    no_damage_from: Array
}
```
