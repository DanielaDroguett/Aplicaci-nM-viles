<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MascotaService, Mascota, Sexo } from '../services/mascota.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-animal-form',
  templateUrl: './animal-form.page.html',
  styleUrls: ['./animal-form.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class AnimalFormPage {
  animal: Mascota = {
    nombre: '',
    especie: '',
    raza: '',
    edad: 0,
    sexo: Sexo.Macho,
    alergias: ''
  };

  constructor(private mascotaService: MascotaService, private router: Router) {}

  onSubmit() {
    if (this.animal.nombre && this.animal.especie) {
      this.mascotaService.agregarMascota(this.animal);
      this.router.navigate(['/listar-mascotas']); // Redirige a la lista de mascotas
    } else {
      // Mostrar una alerta de validación si faltan campos requeridos
    }
  }
}
=======
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { IonicModule } from '@ionic/angular'; // Importa el módulo completo de Ionic
import { addIcons} from 'ionicons';
import { add,listOutline } from 'ionicons/icons';
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

  constructor(private router: Router) { 
    addIcons({add,listOutline});

  }

  // Método para redirigir al Home
  goHome() {
    this.router.navigate(['/home']);
  }
  
  cerrarFormulario() {
    // Lógica para cerrar el formulario
  }
  
  onSubmit() {
    console.log('Datos del animal:', this.animal);
    // Lógica para guardar el formulario
  }

  goToCreate(){
    this.router.navigate(['/animal-form']);
  }

  goToRandom(){
    this.router.navigate(['/listar-mascotas'])
  }
}
>>>>>>> 2886ce30bcb35fb04dfdfae404625d75bb23f5d2
