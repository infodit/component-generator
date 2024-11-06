"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratoreComponenti = void 0;
class GeneratoreComponenti {
    constructor() {
        this.listaComponenti = [];
    }
    /**
     *
     * @param nome
     * @param componente
     */
    Add(nome, componente) {
        customElements.define(`${nome}-component`, componente);
        this.listaComponenti.push(nome);
        return this;
    }
    CreaComponente(nome, elemento_genitore) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.listaComponenti.includes(nome)) {
                const componente = document.createElement(`${nome}-component`);
                elemento_genitore.appendChild(componente);
            }
            return this;
        });
    }
    Add_Create(nome, componente, elemento_genitore) {
        this.Add(nome, componente).CreaComponente(nome, elemento_genitore);
    }
}
exports.GeneratoreComponenti = GeneratoreComponenti;
