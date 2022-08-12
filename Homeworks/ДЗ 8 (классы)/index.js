

class Weapon {

    

    constructor({type, name, level, minDamage, maxDamage, speed}) {

        this.type=type;
        this.name=name;
        this.level=level;
        this.damage= {
            min: minDamage,
            max: maxDamage,
        };
        this.speed = speed;
    }

    getInfo() {
        return console.log( `name: ${this.name}\nlevel: ${this.level}\ndamage: ${this.damage.min}-${this.damage.max}\nspeed: ${this.speed}`)
        
    };

    levelUp() {
        console.log ('Уровень вашего оружия повышен!')
    }
}

function getRandomNumber(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1) + min);
  }

class RangeWeapon extends Weapon {
constructor ({type, name, level, minDamage, maxDamage, speed, range, ammo}) {
    super({type, name, level, minDamage, maxDamage, speed});
    
	this.range = range; 
	this.ammo = { 
		total: ammo, 
		current: ammo,
	};
	
}

attack() {
const chance = Math.random()
    if (this.ammo.current === 0) {
   return console.log ("Пополните боезапас")
};
if ( chance <= 0.30) {
    this.ammo.current -= 1;

    return console.log ("Промах")
} else {
    this.ammo.current -= 1;

   return console.log ( `Успех! Вы нанесли: ${getRandomNumber (this.damage.min, this.damage.max)}` )
   
    
}


};
                              

fillAmmo() {
        this.ammo.current = this.ammo.total
        console.log('Боезапас пополнен')
        
};




getInfo() {
  super.getInfo()  
  return console.log( `range: ${this.range}\nammo: ${this.ammo.current}-${this.ammo.total}`)
    
};

}


class Bow extends RangeWeapon {
    constructor({type, name, level, minDamage, maxDamage, speed, range, ammo}) {
        super({type, name, level, minDamage, maxDamage, speed, range, ammo})
    };
levelUp() {
    this.level +=1;
    if (this.level %2 === 0) {
        this.damage.max += 3
    };
    if(this.level %2 !==0) {
        this.damage.min += 2 
        this.speed -= 15
    }
    super.levelUp()
}
}


class Crossbow extends RangeWeapon {
    constructor({type, name, level, minDamage, maxDamage, speed, range, ammo}) {
        super({type, name, level, minDamage, maxDamage, speed, range, ammo})
    };
levelUp() {
    this.level +=1;
    
    this.damage.max += 2
   
    this.damage.min += 2 

    this.speed -= 5
    
    super.levelUp()
}
}

const bow = new Bow ({name:'Bow', type:"Bow", level:0, range:5, minDamage:1, maxDamage:100, ammo:5, speed:48});


const crossbow = new Crossbow ({name:'Crossbow', level:0, range:8,  minDamage:1, maxDamage:100, ammo:55, speed:60});



class MeleeWeapon extends Weapon {
    constructor ({type, name, level, minDamage, maxDamage, speed, radius, durability}) {
    super({type, name, level, minDamage, maxDamage, speed});
    
	
	 
	this.radius = radius;
	
	this.durability = { 
		total: durability,
		current: durability,
	}
    };

fix() {

};

attack() {

};


getInfo() {
return `${this.name}\n${this.level}\n${this.damage}\n${this.range}\n${this.ammo}\n${this.radius}\n${this.durability}`
}
};


    

class Sword extends MeleeWeapon {
    constructor({type, name, level, minDamage, maxDamage, speed, radius, durability}) {
        super ({type, name, level, minDamage, maxDamage, speed, radius, durability})
    }
    levelUp() {
        this.level +=1;
        if (this.level %2 === 0) {
            this.damage.min += 3
        };
        if(this.level %2 !==0) {
            this.damage.max += 3 
            this.speed -= 20
        }
        super.levelUp()
    }


};

class Axe extends MeleeWeapon {
    constructor({type, name, level, minDamage, maxDamage, speed, radius, durability}) {
        super ({type, name, level, minDamage, maxDamage, speed, radius, durability})
    }
    levelUp() {
        this.level +=1;
        
        this.damage.min += 1;
        
        this.damage.max += 2;

        this.speed -= 15;
        }
        super.levelUp()
};



class Spear extends MeleeWeapon {
    constructor({type, name, level, minDamage, maxDamage, speed, radius, durability}) {
        super ({type, name, level, minDamage, maxDamage, speed, radius, durability})
    }
    levelUp() {
        this.level +=1;
        
        this.damage.max += 3;

        this.speed -= 5;
        }
        super.levelUp()
};



const sword = new Sword ({name:'Sword', level:0, radius: 65,  minDamage:1, maxDamage:43, durability:87, speed:176});  


const axe = new Axe ({name:'Axe', level:0, radius: 42, minDamage:3, maxDamage:49, durability:46, speed:98});


const spear = new Spear ({name:'Spear', level:0, radius: 44, minDamage:1, maxDamage:50, durability:66, speed:65});



// console.log(bow)
// bow.attack()
// bow.attack()
// console.log(bow)
// crossbow.getInfo()

// bow.getInfo()
// bow.levelUp()
// bow.levelUp()
// bow.levelUp()
// bow.getInfo()

bow.attack()
bow.attack()
bow.attack()
bow.attack()
bow.attack()
bow.attack()
bow.getInfo()
bow.fillAmmo()
bow.attack()
bow.attack()
bow.getInfo()

bow.levelUp()
bow.attack()
bow.attack()
bow.getInfo()
