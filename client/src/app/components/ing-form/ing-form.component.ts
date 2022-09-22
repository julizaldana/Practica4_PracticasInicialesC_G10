import { Component, HostBinding, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
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
    user: "",
    curso_catedratico: "",
    mensaje: "",
    fecha: new Date()
  }

  constructor(private ingService: IngService) { }
  usuario = this.ingService.getUser()
  
  ngOnInit(): void {
  }
  
  saveNewPublication(){
    if(this.usuario != ""){
      this.ingService.saveIng(this.titulo).subscribe(
        res =>{
          console.log(res);
        },
        err => console.error(err)
      )
      Swal.fire("Publicación guardada correctamente")
    }
    else{
      Swal.fire("Debe loguearse antes")
    }
  }
  getUser(){
    return this.usuario
  }

}

