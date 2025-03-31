import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './../../shared/material.module';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MaterialModule,RouterOutlet,SidebarComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
