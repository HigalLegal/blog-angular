import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card-responsive.component.css']
})
export class BigCardComponent implements OnInit {

  width: number = window.screen.width

  @Input()
  photoCover: string = ""

  @Input()
  cardTitle: string = "";

  @Input()
  cardDescription: string = "";

  @Input()
  idContent: string = "0"

  constructor() {
  }

  ngOnInit(): void {
    this.width = window.screen.width
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.screen.width
  }

}
