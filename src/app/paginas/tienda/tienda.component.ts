import { Component } from '@angular/core';
import { NavbarComponent } from '../../componentes/navbar/navbar.component';
import { GaleriaTiendaComponent } from '../../componentes/galeria-tienda/galeria-tienda.component';
import { FooterComponent } from '../../componentes/footer/footer.component';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [NavbarComponent,GaleriaTiendaComponent,FooterComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {

}
