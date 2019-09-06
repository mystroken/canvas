# Canvas

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/mystroken/s/issues)

> Object oriented canvas 2D rendering in JavaScript.

<br>

## Installation

```bash
npm install @mystroken/canvas
```

<br>

## Usage

Look at the sources files for more information.

###### Import

```javascript

import Canvas from '@mystroken/canvas';
import Renderable from '@mystroken/canvas/Renderable'; 
```

###### Create a renderable.

```javascript
class Circle extends Renderable {

    render(ctx) {
        ctx.beginPath();
        ctx.arc(110, 110, 25, Math.PI * 2, false);
        ctx.closePath();

        ctx.stroke();
    }
}
```

###### Add renderables on the canvas.

```javascript
const canvas = new Canvas(document.querySelector('#canvas'));

// Get some renderables.
const circle = new Circle();
const rect = new Rectangle();

// Adds renderables to canvas.
canvas.add(circle);
canvas.add(rect);

// Render the canvas.
canvas.render();
```
