import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  
  hora: number;
  minutos:number;;
  segundos:number;
  

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
    const data = new Date();
    this.hora = data.getHours();
    this.minutos = data.getMinutes()
    this.segundos = data.getSeconds()
    }, 1000); // Atualiza a cada 1 segundo (1000 milissegundos)
  }

   padZero(value: number): string {
     return value.toString().padStart(2, '0');
   }

    

}
