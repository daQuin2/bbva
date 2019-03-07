import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})




export class BbvaServiceService {

  constructor(private http: HttpClient) { }

  ip_route= '10.13.1.172';
  port= '8080';

  jsonObjectString = "{\"imprimir\":[{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ESTAB. : SUPERMERCADO WILSON.\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"TERM.\",\"HORA\",\"FECHA\",\"OPERACION\"]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"i\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"********************************\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"00001\",\"13:20\",\"14/06/2018\",3165]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"d\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"CONSULTA MOVIMIENTOS\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"TARJETA: 455103******4673\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CUENTA : 0011-0241-76-0299981917\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CCI    : 011-241-000299981917-76\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"F.OPE\",\"IMPORTE\",\"ITF\",\"DESCR.\"],[\"(*)\",\"\",\"\",\"\"]],\"longitud\":[\"5\",\"9\",\"5\",\"10\"],\"align\":[\"i\",\"d\",\"d\",\"c\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"12/06\",\"-2.00\",\"0.00\",\"TRANSF INM\"],[\"12/06\",\"-12.00\",\"0.00\",\"COMIS. TRA\"],[\"12/06\",\"-11.00\",\"0.00\",\"TRANSF INM\"],[\"12/06\",\"-12.00\",\"0.00\",\"COMIS. TRA\"],[\"12/06\",\"-19.00\",\"0.00\",\"TRANSF INM\"],[\"12/06\",\"-12.00\",\"0.00\",\"COMIS. TRA\"],[\"12/06\",\"-1.00\",\"0.00\",\"COMISION C\"],[\"12/06\",\"-1.00\",\"0.00\",\"COMISION M\"],[\"12/06\",\"-1.00\",\"0.00\",\"COMISION C\"],[\"12/06\",\"-1.00\",\"0.00\",\"COMISION C\"],[\"13/06\",\"-1.00\",\"0.00\",\"COMISION C\"],[\"13/06\",\"-1.00\",\"0.00\",\"COMISION M\"],[\"13/06\",\"-1.00\",\"0.00\",\"COMISION M\"],[\"13/06\",\"-1.00\",\"0.00\",\"COMISION M\"],[\"13/06\",\"-15.00\",\"0.00\",\"TRANSF INM\"],[\"13/06\",\"-12.00\",\"0.00\",\"COMIS. TRA\"],[\"13/06\",\"-2.00\",\"0.00\",\"TRANSF INM\"],[\"13/06\",\"-12.00\",\"0.00\",\"COMIS. TRA\"],[\"14/06\",\"-1.00\",\"0.00\",\"COMISION C\"],[\"14/06\",\"-1.00\",\"0.00\",\"COMISION C\"]],\"longitud\":[\"5\",\"9\",\"5\",\"10\"],\"align\":[\"i\",\"d\",\"d\",\"i\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"formulario\",\"tam\":\"p\",\"clave\":[\"SALDO DISP.\",\"COMISION\"],\"valor\":[\"S/646.00\",\"S/1.00\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ATENCION AL CLIENTE: 01-5950000\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"(*) Indica la fecha cuando se\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"realiza el cargo a la cuenta\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CLA.VAL:BS01/J1/00001/3165\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"CLIENTE\"}]}";
  
   value = "1234567890ABCDEFFEDCBA0987654321";
   agregador = "J5";
   terminal = "00000020";
   workingKey= this.value + "&agregador=" + this.agregador + "&terminal=" + this.terminal;  
   
                
  getAt(){
    console.log("entro al servicio getAt");
    return this.http.get("http://"+this.ip_route+":"+this.port+"/getAT");
  }
  URL_GET_OPERADOR_PREFIJO(){
    console.log("entro al servicio URL_GET_OPERADOR_PREFIJO");
    return this.http.get("http://"+this.ip_route+":"+this.port+"/operador?prefijo=1010");
  }
  URL_GET_OPERADOR(){
    console.log("entro al servicio URL_GET_OPERADOR");
    return this.http.get("http://"+this.ip_route+":"+this.port+"/operador");
  }

  URL_GET_TARJETA(){
    console.log("entro al servicio URL_GET_TARJETA");
    return this.http.get("http://"+this.ip_route+":"+this.port+"/tarjeta");
  }
  URL_GET_BT(){
    console.log("entro al servicio URL_GET_BT");
    return this.http.get("http://"+this.ip_route+":"+this.port+"/validarBT");
  }
  URL_GET_PRINT(){
    console.log("entro al servicio URL_GET_PRINT");
    return this.http.get("http://"+this.ip_route+":"+this.port+"/nuevojson?recibo="+this.jsonObjectString);
  }
  URL_SET_WORKINGKEY(){
    console.log("entro al servicio URL_SET_WORKINGKEY");
    return this.http.get("http://"+this.ip_route+":"+this.port+"/set?ewk="+this.workingKey);
  }
  URL_GET_EFECTIVO_MOVIL(){
    console.log("entro al servicio URL_GET_EFECTIVO_MOVIL");
    return this.http.get("http://"+this.ip_route+":"+this.port+"/efectivo_movil");
  }
  URL_GET_PINPAD(){
    console.log("entro al servicio URL_GET_PINPAD");
    return this.http.get("http://"+this.ip_route+":"+this.port+"/pinpad");
  }


}
