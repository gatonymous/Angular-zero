import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Add CommonModule here
  //imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hello World!';
  tasks = [
    'instalar angular cli',
    'crear nuevo proyecto',
    'crear componente',
    'crear servicio',
  ];

}
