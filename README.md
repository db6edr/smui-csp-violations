# Sample on Svelte Material UI vioating CSP

This repo is a simpla example on where Svelte Material UI violates Content Security Policy.
It is meant as an easy way of reproducing the violations described in **TODO: insert link to issue**.

## CSP setup

The CSP sent to the browser is

````
Content-Security-Policy:
    default-src 'self';
    base-uri 'self';
    form-action 'self';
    script-src 'self';
    script-src-elem 'self' http://localhost:*/;
    style-src 'self';
    style-src-elem 'self' https://fonts.googleapis.com/;
    font-src 'self' https://fonts.gstatic.com/;
    connect-src 'self' ws://localhost:*/;
````

Allowing access to `//localhost:*/` is required for the live reload feature. It won't be used in production.

## Failing components

### Select boxes

Select boxes are failing when used with the variant *outlined*. As far as I can tell, this has got something to
do with how the background for the label is rendered.

### Input fields

Same as with select boxes.

### Textareas

Textareas are always rendered using the *outlined* style; they don't have any other. Same as with select boxes.

### Slider

The Slider component uses some SVG + JS combination to be rendered properly. Lots of the rendering info is pushed
into `style` properties. In this sample, the dot should be in the middle of the slider bar - and the right-hand
side should be much lighter in color.
