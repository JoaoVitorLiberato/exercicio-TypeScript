"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(agencia, numero) {
        this._saldo = 0;
        this._numero = this._validarNumero(numero) ? numero : '00000-0';
        this._agencia = this._validarAgencia(numero) ? agencia : '0000';
    }
    Object.defineProperty(ContaBancaria.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (valor) {
            if (this._validarNumero(valor)) {
                this._numero = valor;
            }
            else {
                console.error('Agencia ou número da conta inválido.');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContaBancaria.prototype, "agencia", {
        get: function () {
            return this._agencia;
        },
        set: function (valor) {
            if (this._validarAgencia(valor)) {
                this._agencia = valor;
            }
            else {
                console.error('Agencia ou número da conta inválido.');
            }
        },
        enumerable: false,
        configurable: true
    });
    ContaBancaria.prototype.consultar = function () {
        return this._saldo;
    };
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor >= 0) {
            this._saldo += valor;
            return true;
        }
        return false;
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor > 0 && this._saldo > valor) {
            this._saldo -= valor;
            return true;
        }
        return false;
    };
    ContaBancaria.prototype._validarNumero = function (numero) {
        var regex = /^\d{5}-\d{1}$/;
        if (regex.test(numero)) {
            this._numero = numero;
            return true;
        }
        return false;
    };
    ContaBancaria.prototype._validarAgencia = function (numero) {
        var regex = /^\d{4}$/;
        if (regex.test(numero)) {
            this._agencia = numero;
            return true;
        }
        return false;
    };
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;
