class Pokemon_Type{
    constructor()
    {
        this.type_name = "";
        this.type_advantage = [];
        this.type_weakness = [];
        this.type_resists = '';
    }

    add_type_advantage(...types){

        if(!types.length > 0)
            return;
        types.forEach(val => {
            this.type_advantage.push(val);
        });
        
    }

    add_type_weakeness(...weakness){
        
    }
}



/**OLD CODE
 */
// // use generic objects to create a map
// let monster_strengths = {};
// let monster_weakness = {};

// this method should be removed and the data can just be simply read from flat files. 
// function assign_keys(){
//     monster_types.forEach(val =>{
//         monster_strengths[val] = [];
//         monster_weakness[val] = []
//     });
// }
