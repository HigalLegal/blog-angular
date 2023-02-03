import { dataFake } from './../../data/data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content-responsive.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "";
  contentTitle = ""
  contentDescription: string = "";

  private id: string | null = "0"

  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"))
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null): void {
    const result = dataFake.filter(object => object.id.toString() == id)[0];

    this.contentTitle = result.title
    this.photoCover = result.photo
    this.contentDescription = result.description

  }

}
