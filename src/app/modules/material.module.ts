import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
  ],
})
export class MaterialModule {}
