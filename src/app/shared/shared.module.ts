import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule],
  exports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
