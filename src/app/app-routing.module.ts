import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { GalleryModule } from './pages/gallery/gallery.module';
import { CharacterModule } from './pages/characters/chracters.module';
import { RegisterModule } from './pages/register/register.module';

const routes: Routes = [{
  path: "", pathMatch: "full", loadChildren: () => import("./pages/home/home.module").then(m => HomeModule)
},
{
  path: "gallery", loadChildren: () => import("./pages/gallery/gallery.module").then(m => GalleryModule)
},
{
  path: "characters", loadChildren: () => import("./pages/characters/chracters.module").then(m => CharacterModule)
},
{
  path: "register", loadChildren: () => import("./pages/register/register.module").then(m => RegisterModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
