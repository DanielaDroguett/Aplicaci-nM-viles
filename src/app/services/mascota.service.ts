// src/app/services/mascota.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Mascota {
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  sexo: Sexo;
  alergias: string;
}

export enum Sexo {
  Macho = 'Macho',
  Hembra = 'Hembra'
}

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private mascotasSubject = new BehaviorSubject<Mascota[]>([
    { nombre: 'Toti', especie: 'Perro', raza: 'Beagle', edad: 3, sexo: Sexo.Hembra, alergias: 'Polvo' },
    { nombre: 'Lucio', especie: 'Gato', raza: 'Mestizo', edad: 8, sexo: Sexo.Macho, alergias: 'Ninguna' }
  ]);

  mascotas$ = this.mascotasSubject.asObservable();

  agregarMascota(mascota: Mascota) {
    const mascotasActuales = this.mascotasSubject.getValue();
    this.mascotasSubject.next([...mascotasActuales, mascota]);
  }

  eliminarMascota(index: number) {
    const mascotasActuales = this.mascotasSubject.getValue();
    mascotasActuales.splice(index, 1);
    this.mascotasSubject.next([...mascotasActuales]);
  }
}
