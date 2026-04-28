---
layout: post
title: DB Models
permalink: /projects/models
---

# Models

### Pokemon 

```bash
./app/models/pokemon.rb
```

fields

```ruby
{
    poke_id: integer,
    name: string,
    base_exp: integer,
    default_sprite: string,
    short_text: string
}
```

relations

```ruby
    has_many :types
    has_many :moves
    has_many :damage_relations
```

### Move

### Type

### Damage Relation 

