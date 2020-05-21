import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <div>
  //     <h1>{{ titulo }}</h1>
  //     <div>Mi componente</div>
  //   </div>
  // `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Pymes';
}
