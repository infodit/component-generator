
import { Component } from "../classComponent";
import { GeneratoreComponenti } from "../index";

const generatoreComponenti = new GeneratoreComponenti()
generatoreComponenti.Add_Create('card',class Card extends Component {
    constructor() {
        super('card')
    }
},document.body)