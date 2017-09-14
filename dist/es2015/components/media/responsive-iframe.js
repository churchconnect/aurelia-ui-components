var _dec, _dec2, _class;

import { inject, customAttribute } from 'aurelia-framework';

export let ResponsiveIframe = (_dec = customAttribute('responsive-iframe'), _dec2 = inject(Element), _dec(_class = _dec2(_class = class ResponsiveIframe {

    constructor(element) {
        this.resizeTimer = null;

        this.resizeEventHandler = () => this.resized();

        this.element = element;
    }

    attached() {
        this.aspectRatio = this.element.offsetHeight / this.element.offsetWidth;
        this.adjustDimensions();

        window.addEventListener('resize', this.resizeEventHandler);
    }

    detached() {
        window.removeEventListener('resize', this.resizeEventHandler);
    }

    resized() {
        clearTimeout(this.resizeTimer);

        this.resizeTimer = setTimeout(() => {
            this.adjustDimensions();
        }, 50);
    }

    adjustDimensions() {
        this.element.width = '100%';
        this.element.height = `${this.element.offsetWidth * this.aspectRatio}px`;
    }

}) || _class) || _class);