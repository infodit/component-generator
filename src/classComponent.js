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
exports.Component = void 0;
class Component extends HTMLElement {
    constructor(nomeComponente) {
        super();
        this.riquadroTemplate = null;
        this.COMPONENT_PATH = 'script/componenti';
        this.CaricaTemplate(nomeComponente);
    }
    CreaShadow() {
        const shadow = this.attachShadow({ mode: 'closed' });
        const template_element = document.getElementById('card-template');
        const template = template_element.content.cloneNode(true);
        shadow.appendChild(template);
        return shadow;
    }
    CaricaTemplate(nomeComponente) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.COMPONENT_PATH}/${nomeComponente}-template.html`);
            const text = yield response.text();
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = text.trim();
            const template = tempContainer.querySelector('template');
            if (this.riquadroTemplate == null) {
                this.riquadroTemplate = document.createElement('div');
                this.riquadroTemplate.id = 'riquadro-template';
                document.body.appendChild(this.riquadroTemplate);
            }
            const shadowRoot = this.attachShadow({ mode: 'closed' });
            shadowRoot.appendChild(template.content.cloneNode(true));
            return shadowRoot;
        });
    }
}
exports.Component = Component;
