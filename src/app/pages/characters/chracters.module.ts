import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';

@NgModule({
    declarations: [
        CharactersComponent
    ],
    imports: [
        CommonModule,
        CharacterRoutingModule
    ]
})

export class CharacterModule { }