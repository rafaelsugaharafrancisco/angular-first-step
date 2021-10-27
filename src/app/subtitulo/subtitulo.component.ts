import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'u-subtitulo',
  templateUrl: './subtitulo.component.html',
  styleUrls: ['./subtitulo.component.css']
})
export class SubtituloComponent implements OnInit {

  @Input() texto: string;

  constructor() { }

  ngOnInit() {
  }

}
