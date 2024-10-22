import { Routes } from '@angular/router';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';

export const routes: Routes = [ 
    {
        path: "tienda",
        component: TiendaComponent,
        title: "Tienda Neoclothes"
      },
      {
        path: "nosotros",
        component: NosotrosComponent,
        title: "Nosotros Neoclothes"
      },

      {
        path: "contacto",
        component: ContactoComponent,
        title: "Contacto Neoclothes"
      }


];
