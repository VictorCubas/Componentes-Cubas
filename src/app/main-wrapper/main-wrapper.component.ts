import { Component } from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  template: `
    <main>
      <!-- RENDERIZAR EL CONTENIDO -->
      <ng-content></ng-content>
    </main>
  `,
  styleUrls: ['./main-wrapper.component.scss']
})
export class MainWrapperComponent {

}


