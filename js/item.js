
let Res = 0;
let itemsID = 0;
let caftPower = 10;

class Armor {
    life;
    armorValue;
	itemsID;
    constructor(life, armorValue){
		itemsID += 1;
        this.life = life;
        this.armorValue = armorValue;
		this.itemsID = itemsID;
    }
	print(){ 
	return `ID:${this.itemsID}, LIFE:${this.life}, ARMOR:${this.armorValue};`;
	}
};
let myPocket = [];

const generateArmor = () => {
	let item = new Armor( Math.round(Math.random() * caftPower), Math.round(Math.random() * caftPower));
	myPocket.push(item);
	document.getElementById("display").innerHTML = `You craft this: ${item.print()}`;
};


const watchPocket = () => {
const result = myPocket.map( (item) => `<li>${item.print()}</li>` ).join('\n');

document.getElementById("display").innerHTML = `Your Pocket: ${result}`;
};