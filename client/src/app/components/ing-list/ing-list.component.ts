import { Component, HostBinding, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import {IngService} from "../../services/ing.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ing-list',
  templateUrl: './ing-list.component.html',
  styleUrls: ['./ing-list.component.css']
})
export class IngListComponent implements OnInit {

  @HostBinding("class") classes = "row";

  ings: any = {};

  constructor(private ingService: IngService) { }
  usuario = this.ingService.getUser()
  
  ngOnInit(){
    if(this.usuario != ""){
      this.getIng();
    }
    else{
      Swal.fire("Debe loguearse antes")
    }
  }

  getIng(){
    this.ingService.getIngs().subscribe(
      res => {
        this.ings = res;
      },
      err => console.error(err)
    )
  }
  getIngCC(curso_catedratico: string){
    this.ingService.getIng(curso_catedratico).subscribe(
      res => {
        this.ings = res;
      },
      err => console.error(err)
    )
  }
  deleteIng(id: string){
    this.ingService.deleteIng(id).subscribe(
      res =>{console.log(res);
      this.getIng();},
      err => console.log(err)
    )
  }

}
