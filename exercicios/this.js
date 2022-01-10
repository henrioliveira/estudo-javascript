/* const person = {
	firstName: "Dolores",
	lastName: "Madrigal",
	id: 6,
	fullName: function() {
		return this.firstName + " " + this.lastName;
	},
	getId: function () {
		return this.id;
	}
};

//this refere-se ao objeto person, logo é equivalente a person.id

console.log (person.fullName())

console.log (person.getId()) */

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
	calculaIdade.call(a)
}

const a = {
	nome: 'Juca',
	idade: 25
}

const b = {
	nome: 'Carol',
	idade: 17
}

const c = {
	nome: 'Marcela',
	idade: 32
}


console.log(calculaIdade.call(c, 6))