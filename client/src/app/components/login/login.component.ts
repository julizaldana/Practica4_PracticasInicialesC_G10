import { Component, OnInit, HostBinding } from '@angular/core';
import { Login } from 'src/app/models/ing';
import Swal from 'sweetalert2'
import{IngService} from "../../services/ing.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @HostBinding("class") classes = "row";

  user: Login ={
    carne: "",
    correo: "",
    passw: "",
    nombres: "",
    apellidos: ""
  }

  constructor(private ingService: IngService) { }

  ngOnInit(): void {
  }
  saveNewUser(){
    this.ingService.saveUser(this.user).subscribe(
      res =>{
        console.log(res);
        this.ingService.setUser(this.user.carne)
      },
      err => console.error(err)
    )
    Swal.fire("Usuario registrado correctamente")
  }
  logUser(){
  }
}
