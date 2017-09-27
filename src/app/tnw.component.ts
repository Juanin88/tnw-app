import { Component } from '@angular/core';

@Component({
    selector: 'tnw-comp',
    template: `<h2>Mira TNW comp!!!</h2>
    <h1>{{titulotest}}</h1>`
})

export class TnwComponent {
    titulotest = 'TNW view Vista Wiii!!';
}
