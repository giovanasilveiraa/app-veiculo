import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    ProdutoComponent,
    CarrinhoComponent,
    PerfilComponent,
    FavoritosComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
