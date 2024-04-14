import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpComunicationService } from '../../services/http-comunication.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'mfee-project-world-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, HttpClientModule],
  providers: [HttpComunicationService],
  templateUrl: './world-card.component.html',
  styleUrl: './world-card.component.scss'
})
export class WorldCardComponent implements OnInit {
  title: string;
  comments: string;
  description: string;
  imageUrl: string;

  constructor(public _http: HttpComunicationService) {}
  ngOnInit() {
    this.title = 'mi primer titulo';
    this.comments = 'mi primer comments';
    this.description = 'mi primer description';
    this.imageUrl = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  }
}
