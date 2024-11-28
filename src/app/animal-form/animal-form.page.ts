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
      this.router.navigate(['/listar-mascotas']); 
    } else {
    }
  }
}
