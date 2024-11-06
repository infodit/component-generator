export class Component extends HTMLElement {

    riquadroTemplate: HTMLDivElement | null = null
    COMPONENT_PATH = '/components'

    constructor(nomeComponente:string) {
        super()
        this.CaricaTemplate(nomeComponente)
    }

    CreaShadow(): ShadowRoot {
        const shadow = this.attachShadow({ mode: 'closed' })

        const template_element = document.getElementById('card-template') as HTMLTemplateElement
        const template = template_element.content.cloneNode(true)

        shadow.appendChild(template)

        return shadow
    }

    async CaricaTemplate(nomeComponente: string): Promise<ShadowRoot> {
        const DIR_PATH = `${nomeComponente}`
        const response = await fetch(`${this.COMPONENT_PATH}/${DIR_PATH}/${nomeComponente}-template.html`)
        const text = await response.text()

        const tempContainer = document.createElement('div')
        tempContainer.innerHTML = text.trim()

        const template = tempContainer.querySelector('template') as HTMLTemplateElement

        if (this.riquadroTemplate == null) {
            this.riquadroTemplate = document.createElement('div') as HTMLDivElement
            this.riquadroTemplate.id = 'riquadro-template'
            document.body.appendChild(this.riquadroTemplate)
        }
        
        const shadowRoot = this.attachShadow({mode:'closed'})
        
        shadowRoot.appendChild(template.content.cloneNode(true))
        
        return shadowRoot
    }
}