import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card-responsive.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  cardTitle: string = "";

  @Input()
  cardImage: string = "";

  @Input()
  idContent: string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
