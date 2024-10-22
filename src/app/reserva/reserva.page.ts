import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonList, IonDatetime, IonCard, IonCardHeader,IonCardTitle,IonCardContent,IonLabel,IonButton,IonCardSubtitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonDatetime, IonItem, IonList, IonCard, IonCardHeader,IonCardTitle,IonCardContent,IonLabel,IonButton,IonCardSubtitle]
})
export class ReservaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mensaje(){
    alert("hola");
  }

}
