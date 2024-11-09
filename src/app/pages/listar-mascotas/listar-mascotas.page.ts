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
