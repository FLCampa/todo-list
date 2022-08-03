// External Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './components/header/header.component';
import { DeleteAllButtonComponent } from './components/delete-all-button/delete-all-button.component';
import { AddItemsInputComponent } from './components/add-items-input/add-items-input.component';
import { ListComponent } from './components/list/list.component';

// Pages
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DeleteAllButtonComponent,
    AddItemsInputComponent,
    ListComponent,
    HomeComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class HomeModule {}
