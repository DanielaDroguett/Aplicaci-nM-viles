import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';


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
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel, IonGrid, IonRow, IonCol]
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


  constructor() { }

  ngOnInit() {
  }

}
