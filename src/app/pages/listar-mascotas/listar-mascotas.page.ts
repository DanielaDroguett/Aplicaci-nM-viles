<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MascotaService, Mascota } from '../../services/mascota.service';

@Component({
  standalone: true,
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.page.html',
  styleUrls: ['./listar-mascotas.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ListarMascotasPage implements OnInit {
  mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService, private alertController: AlertController) {}

  ngOnInit() {
    this.mascotaService.mascotas$.subscribe((mascotas) => {
      this.mascotas = mascotas;
    });
  }

  async eliminarMascotas(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: `¿Estás seguro de que deseas eliminar a ${this.mascotas[index].nombre}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.mascotaService.eliminarMascota(index);
          }
        }
      ]
    });
    await alert.present();
  }
}
=======
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel, IonGrid, IonRow, IonCol, IonButton, IonButtons, IonIcon, IonBackButton, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons} from 'ionicons';
import { add,wineOutline } from 'ionicons/icons';

// Definición de la interfaz 'Mascota'
export interface Mascota {
  nombre: String,
  especie: String,
  raza: String,
  edad: Number,
  sexo: Sexo,
  alergias: String
}

// Definición del enum (enumeración) 'Sexo'
export enum Sexo {
  Macho = 'Macho',
  Hembra = 'Hembra'
}

// Definición del componente Angular y su configuración
@Component({
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.page.html',
  styleUrls: ['./listar-mascotas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel, IonGrid, IonRow, IonCol, IonButton, IonButtons, IonIcon, IonBackButton, IonFab, IonFabButton]
})

// Arreglo mascotas ->Lista de objetos
export class ListarMascotasPage implements OnInit {
  mascotas: Mascota[] = [
    { nombre: 'Toti', especie: 'Perro', raza: 'Beagle', edad: 3, sexo: Sexo.Hembra, alergias: 'Polvo' },
    { nombre: 'Lucio', especie: 'Gato', raza: 'Mestizo', edad: 8, sexo: Sexo.Macho, alergias: 'Ninguna' },
    { nombre: 'Rex', especie: 'Perro', raza: 'Labrador', edad: 5, sexo: Sexo.Macho, alergias: 'Ninguna' },
    { nombre: 'Luna', especie: 'Gato', raza: 'Siamés', edad: 2, sexo: Sexo.Hembra, alergias: 'Polen' },
    { nombre: 'Coco', especie: 'Conejo', raza: 'Enano', edad: 1, sexo: Sexo.Macho, alergias: 'Arachis' }
  ];


  constructor(private router: Router) {
    addIcons({add,wineOutline});
   }

  // Método para redirigir al Home
  goHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

  goToCreate(){
    this.router.navigate(['/animal-form']);
  }
  goToRandom(){
    this.router.navigate(['/random'])
  }
  eliminarMascotas(index: number) {
    this.mascotas.splice(index, 1);
  }

}

>>>>>>> origin/Carolina
