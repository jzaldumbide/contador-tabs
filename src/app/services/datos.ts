import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  nombre = signal('');
  contador = signal(0);
  enviado = signal(false);

  guardar(nombre: string, contador: number): void {
    this.nombre.set(nombre);
    this.contador.set(contador);
    this.enviado.set(true);
  }
}