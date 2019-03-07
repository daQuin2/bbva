import { Component, OnInit } from '@angular/core';
import { BbvaServiceService } from '../../BbvaServicios/bbva-service.service';
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-bbva',
  templateUrl: './bbva.component.html',
  styleUrls: ['./bbva.component.css']
})
export class BbvaComponent implements OnInit {
  JSONObject = "{JSONObject}";
  respuesta= "";
  tittle= "";
  test= "";
  img="";
  mensaje="Enviando...";
  constructor(private bbvaService: BbvaServiceService) { }

  ngOnInit() {
  }

  modalEnvio(modal){
     $(modal).modal("show");
     }

  getAt(modal){
    this.tittle="/getAt";
    this.img = "setup.png";
    this.mensaje="Enviando...";
    $("#gifGetAt").show();
    this.modalEnvio(modal);
    this.bbvaService.getAt()
    .subscribe(res => {
      console.log("respuesta:");
      console.log(res);
      if(Object.values(res)[0] === "error"){
        this.mensaje= JSON.stringify(res);
        this.img = "error.png";
        $("#gifGetAt").hide();
        clearTimeout(temporizador);
        return;
      }else{
        this.mensaje= JSON.stringify(res);
        this.img = "ok.png";
        $("#gifGetAt").hide();
        clearTimeout(temporizador);
      }
    });
    var temporizador= setTimeout(() => {
      $("#gifGetAt").hide();
      this.img = "error.png";
      this.mensaje="ERR_CONNECTION_TIMED_OUT";
      return;
    }, 20000);

  }

  URL_GET_OPERADOR_PREFIJO(modal){
    this.tittle="/operador/prefijo=1010";
    this.img = "card_logo.png";
    this.mensaje="Enviando...";
    $("#gifGetMethod").show();
    this.modalEnvio(modal);
    this.bbvaService.URL_GET_OPERADOR_PREFIJO()
    .subscribe(res => {
      console.log("respuesta URL_GET_OPERADOR_PREFIJO:");
      console.log(Object.values(res));
      if(Object.values(res)[0] === "error"){
        this.mensaje= JSON.stringify(res);
        this.img = "error.png";
        $("#gifGetMethod").hide();
        clearTimeout(temporizador);
        return;
      }else{
        this.mensaje= JSON.stringify(res);
        this.img = "ok.png";
        $("#gifGetMethod").hide();
        clearTimeout(temporizador);
      }
      var temporizador= setTimeout(() => {
        $("#gifGetMethod").hide();
        this.img = "error.png";
        this.mensaje="ERR_CONNECTION_TIMED_OUT";
        return;
      }, 20000);
  
    });
  }

  URL_GET_OPERADOR(modal){
    this.tittle="/Operador";
    this.img = "card_logo.png";
    this.mensaje="Enviando...";
    $("#gifGetMethod").show();
    this.modalEnvio(modal);
    this.bbvaService.URL_GET_OPERADOR()
    .subscribe(res => {
      console.log("respuesta URL_GET_OPERADOR:");
      console.log(res);
      if(Object.values(res)[0] === "error"){
        this.mensaje= JSON.stringify(res);
        this.img = "error.png";
        $("#gifGetMethod").hide();
        clearTimeout(temporizador);
        return;
      }else{
        this.mensaje= JSON.stringify(res);
        this.img = "ok.png";
        $("#gifGetMethod").hide();
        clearTimeout(temporizador);
        }
    });
    var temporizador= setTimeout(() => {
      $("#gifGetMethod").hide();
      this.img = "error.png";
      this.mensaje="ERR_CONNECTION_TIMED_OUT";
      return;
    }, 20000);
  }

  URL_GET_TARJETA(modal){
    this.tittle="/Tarjeta";
    this.img = "card_logo.png";
    this.mensaje="Enviando...";
    $("#gifGetMethod").show();
    this.modalEnvio(modal);
    this.bbvaService.URL_GET_TARJETA()
    .subscribe(res => {
      console.log("respuesta URL_GET_TARJETA:");
      console.log(res);
      if(Object.values(res)[0] === "error"){
        this.mensaje= JSON.stringify(res);
        this.img = "error.png";
        $("#gifGetMethod").hide();
        clearTimeout(temporizador);
        return;
      }else{
        this.mensaje= JSON.stringify(res);
        this.img = "ok.png";
        $("#gifGetMethod").hide();
        clearTimeout(temporizador);
        }
    })
    var temporizador= setTimeout(() => {
      $("#gifGetMethod").hide();
      this.img = "error.png";
      this.mensaje="ERR_CONNECTION_TIMED_OUT";
      return;
    }, 20000);
  }

  URL_GET_BT(modal){
    this.modalEnvio(modal);
    this.bbvaService.URL_GET_BT()
    .subscribe(res => {
      console.log("respuesta URL_GET_BT:");
      console.log(res);
    })
  }

  URL_GET_PRINT(modal){
    this.tittle="/Print";
    this.img = "printer.png";
    this.mensaje="Enviando...";
    $("#gifPinter").show();
    this.modalEnvio(modal);
    this.bbvaService.URL_GET_PRINT()
    .subscribe((res) => {
      console.log("respuesta URL_GET_PRINT:");
      console.log(res);
      if(Object.values(res)[0] === "error"){
        this.mensaje= JSON.stringify(res);
        this.img = "error.png";
        $("#gifPinter").hide();
        clearTimeout(temporizador);
        return;
      }else{
        this.mensaje= JSON.stringify(res);
        this.img = "ok.png";
        $("#gifPinter").hide();
        clearTimeout(temporizador);
        }
    });
    var temporizador= setTimeout(() => {
      $("#gifPinter").hide();
      this.img = "error.png";
      this.mensaje="ERR_CONNECTION_TIMED_OUT";
      return;
    }, 20000);
  }

  URL_SET_WORKINGKEY(modal){
    this.tittle="/WorkinKey";
    this.img = "llave.png";
    this.mensaje="Enviando...";
    $("#gifWorkinKey").show();
    this.modalEnvio(modal);
    try{
      this.bbvaService.URL_SET_WORKINGKEY()
      .subscribe((res) => {
        console.log("respuesta URL_SET_WORKINGKEY:");
        console.log(Object.values(res));
        if(Object.values(res)[0] === "error"){
          this.mensaje= JSON.stringify(res);
          this.img = "error.png";
          $("#gifWorkinKey").hide();
          clearTimeout(temporizador);
          return;
        }else{
          this.mensaje= JSON.stringify(res);
          this.img = "ok.png";
          $("#gifWorkinKey").hide();
          clearTimeout(temporizador);
          }
      });
     var temporizador= setTimeout(() => {
        $("#gifWorkinKey").hide();
        this.img = "error.png";
        this.mensaje="ERR_CONNECTION_TIMED_OUT";
        return;
      }, 20000);
    }catch{
      console.log("entro al catch");
    }
  }

  URL_GET_EFECTIVO_MOVIL(modal){
   
    this.tittle="/EfectivoMovil";
    this.img = "efectivo_movil.png";
    this.mensaje="Enviando...";
    $("#gifEfectivoMovil").show();
    this.modalEnvio(modal);
    this.bbvaService.URL_GET_EFECTIVO_MOVIL()
    .subscribe(res => {
      console.log("respuesta URL_GET_EFECTIVO_MOVIL:");
      console.log(Object.values(res));
      if(Object.values(res)[0] === "cancelado"){
        this.mensaje= JSON.stringify(res);
        this.img = "error.png";
        $("#gifEfectivoMovil").hide();
        clearTimeout(temporizador);
        return;
      }else{
        this.mensaje= JSON.stringify(res);
        this.img = "ok.png";
        $("#gifEfectivoMovil").hide();
        clearTimeout(temporizador);
        }
    });
    var temporizador= setTimeout(() => {
      $("#gifEfectivoMovil").hide();
      this.img = "error.png";
      this.mensaje="ERR_CONNECTION_TIMED_OUT";
      return;
    }, 20000);
  }


  URL_GET_PINPAD(modal){
    this.tittle="/Pindad";
    this.img = "card_logo.png";
    this.mensaje="Enviando...";
    $("#gifPinpad").show();
    this.modalEnvio(modal);
    this.bbvaService.URL_GET_PINPAD()
    .subscribe(res => {
      console.log("respuesta URL_GET_PINPAD:");
      console.log(res);
      if(Object.values(res)[0] === "cancelado"){
        this.mensaje= JSON.stringify(res);
        this.img = "error.png";
        $("#gifPinpad").hide();
        clearTimeout(temporizador);
        return;
      }else{
        this.mensaje= JSON.stringify(res);
        this.img = "ok.png";
        $("#gifPinpad").hide();
        clearTimeout(temporizador);
        }
    });
    var temporizador= setTimeout(() => {
      $("#gifPinpad").hide();
      this.img = "error.png";
      this.mensaje="ERR_CONNECTION_TIMED_OUT";
      return;
    }, 20000);
  }
   getScreenSize(modal) {
    this.tittle="/Test Screen";
    this.test= "Height: " + window.innerHeight + " - Width: " + window.innerWidth;
    this.modalEnvio(modal);
}


}
