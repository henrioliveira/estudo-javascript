class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this._saldo = 0;
        this.tipo = tipo;
    }

    get saldo (){
        return this._saldo
    }

    set saldo(valor){
        return this._saldo = valor
    }

    sacar(valor){
        if (valor > this.saldo){
            return 'Operação negada'
        }
        this._saldo = this._saldo - valor

        return this._saldo
    }

    depositar(valor){
        this._saldo = this._saldo + valor
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero,);
        this.tipo = 'corrente';
        this.cartaoCredito = Boolean
    }

    get cartaoCredito (){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
         this._cartaoCredito = valor
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero,){
        super(agencia, numero,);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero,){
        super(agencia, numero,);
        this.tipo = 'universitaria';
    }

    sacar (valor){
        if (valor > 500){
            return 'Operacao Negada'
        }

        this._saldo = this._saldo - valor

        return this._saldo
    }
}



