import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Importa el módulo completo de Ionic

@Component({
  standalone: true,
  selector: 'app-animal-form',
  templateUrl: './animal-form.page.html',
  styleUrls: ['./animal-form.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule // Usa IonicModule para incluir todos los componentes necesarios de Ionic
  ]
})
export class AnimalFormPage {
  animal = {
    nombre: '',
    especie: '',
    raza: '',
    edad: null,
    sexo: '',
    alergias: ''
  };

  cerrarFormulario() {
    // Lógica para cerrar el formulario
  }

  onSubmit() {
    console.log('Datos del animal:', this.animal);
    // Lógica para guardar el formulario
  }
}
