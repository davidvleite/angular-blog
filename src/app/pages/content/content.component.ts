import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:string = "https://th.bing.com/th/id/OIP.10YWxFjqlvpPXE2PUAQHWwHaEK?rs=1&pid=ImgDetMain";
  @Input()
  contentTitle:string = "Noticia Urgente";
  @Input()
  contentDescription = "Furia perde novamente!";
  constructor() { }

  ngOnInit(): void {
  }

}
