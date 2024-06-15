import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

export const routes: Routes = [
  { path: "", component: ListarProductosComponent },
  { path: "crear-producto", component: CrearProductoComponent },
  { path: "editar-producto/:id", component: CrearProductoComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

//@module({
//imports: [RouterModule.forRoot(routes)],
//exports: [RouterModule]
//})


export class AppRoutingModule { }
