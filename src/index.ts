import { Component } from "./classComponent"


export class GeneratoreComponenti {

    listaComponenti: string[] = []

    /**
     * 
     * @param nome 
     * @param componente 
     */
    Add(nome: string, componente: typeof Component) {
        customElements.define(`${nome}-component`,componente)
        this.listaComponenti.push(nome)
        return this
    }

    async CreaComponente(nome: string,elemento_genitore: HTMLElement) {
        if (this.listaComponenti.includes(nome)) {
            const componente = document.createElement(`${nome}-component`)
            elemento_genitore.appendChild(componente)
        }
        return this
    }
    
    Add_Create(nome: string, componente: typeof Component,elemento_genitore:HTMLElement) {
        this.Add(nome,componente).CreaComponente(nome,elemento_genitore)
    }
}