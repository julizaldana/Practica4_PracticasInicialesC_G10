import { Component, HostBinding, OnInit } from '@angular/core';
import { Ing } from 'src/app/models/ing';
import{IngService} from "../../services/ing.service"

@Component({
  selector: 'app-ing-form',
  templateUrl: './ing-form.component.html',
  styleUrls: ['./ing-form.component.css']
})
export class IngFormComponent implements OnInit {

  @HostBinding("class") classes = "row";

  titulo: Ing ={
    id: 0,
    title: "",
    description: "",
    created_at: new Date()
  }

  constructor(private ingService: IngService) { }

  ngOnInit(): void {
  }
  saveNewPublication(){
    delete this.titulo.created_at;
    delete this.titulo.id;
    this.ingService.saveIng(this.titulo).subscribe(
      res =>{
        console.log(res);
      },
      err => console.error(err)
    )
  }

}
