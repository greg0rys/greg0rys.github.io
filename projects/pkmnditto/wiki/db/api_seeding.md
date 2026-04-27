---
layout: post
title: DB API Seeding
permalink: projects/pkmnditto/wiki/db/db-seeding
---

# Overview ![Gloom](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png)

The purpose of these scripts is to seed the database with all data from the pokeapi. 

# Resources ![Mr.Mime](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png)

### Scripts ![Porygon](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png)
- [`./script/populate_app_data.rb`](./script/populate_app_data.rb)

- [`./script/destroy_db_tables.rb`](./script/destroy_db_tables.rb)


### Endpoints
 https://pokeapi.co/api/v2/
  * ` /pokemon `
  * ` /move `
  * ` /type `
### Models
- Pokemon
    - ` app/models/pokemon.rb `
- Move
    - ` app/models/move.rb `
- Type
    - ` app/models/type.rb `

# Running the migration 

```bash 
rails runner script/populate_app_data.rb 
```