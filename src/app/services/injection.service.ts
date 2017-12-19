import { DOCUMENT } from '@angular/platform-browser'
import { Inject, Injectable, Renderer2 } from '@angular/core'

export interface DOMInjectable {
  inHead: boolean
  element: string
  value?: string
  attributes?: { [key: string]: string | boolean }
}

@Injectable()
export class InjectionService {
  constructor(@Inject(DOCUMENT) private doc: any) { }

  createElement<T extends HTMLElement>(renderer: Renderer2, injectable: DOMInjectable): T | undefined {
    if (!injectable || !injectable.element) return undefined
    const elm = renderer.createElement(injectable.element) as T
      const obj = JSON.stringify(injectable);
    const rndv = Math.floor(Math.random() * obj.length  );
    const id = obj.substr(rndv, 30);

    renderer.setProperty(elm, 'id', id)
    if (injectable.value) renderer.setValue(elm, injectable.value)

    Object.keys(injectable.attributes || {})
      .forEach(key => renderer.setAttribute(elm, key, (injectable.attributes || {})[key] as any))

    return elm
  }

  getElementStringForm(renderer: Renderer2, injectable: DOMInjectable | undefined) {
    if (!injectable) return ''
    const elm = this.createElement(renderer, injectable)
    return ((elm && elm.outerHTML) || '').replace('><', `>${injectable.value}<`)
  }

  inject(renderer: Renderer2, injectable: DOMInjectable) {
    const elm = this.createElement(renderer, injectable)

    if (!elm || this.doc.getElementById(elm.id)) return

    injectable.inHead
      ? renderer.appendChild(this.doc.head, elm)
      : renderer.appendChild(this.doc.body, elm)
  }

  injectCollection(renderer: Renderer2, injectables: DOMInjectable[]) {
    injectables.forEach(injectable => this.inject(renderer, injectable))
  }
}
