
       //#to-top button appears after scrolling
       var fixed = false;
       $(document).scroll(function () {
           if ($(this).scrollTop() > 250) {
               if (!fixed) {
                   fixed = true;
                   // $('#to-top').css({position:'fixed', display:'block'});
                   $('#to-top').show("slow", function () {
                       $('#to-top').css({
                           position: 'fixed',
                           display: 'block'
                       });
                   });
               }
           } else {
               if (fixed) {
                   fixed = false;
                   $('#to-top').hide("slow", function () {
                       $('#to-top').css({
                           display: 'none'
                       });
                   });
               }
           }
       });



       var IP = "10.13.1.172";
       //var IP = "10.17.195.176";
       var PORT = "8080";
       var HTTP_PROTOCOL = "http";

       var URL_GET_GETAT = HTTP_PROTOCOL + "://" + IP + ":" + PORT + "/getAT";
       var URL_GET_OPERADOR_PREFIJO = HTTP_PROTOCOL + "://" + IP + ":" + PORT + "/operador?prefijo=1010";
       var URL_GET_OPERADOR = HTTP_PROTOCOL + "://" + IP + ":" + PORT + "/operador";
       var URL_GET_TARJETA = HTTP_PROTOCOL + "://" + IP + ":" + PORT + "/tarjeta";
       var URL_GET_BT = HTTP_PROTOCOL + "://" + IP + ":" + PORT + "/validarBT";
       var URL_GET_PRINT = HTTP_PROTOCOL + "://" + IP + ":" + PORT + "/nuevojson?recibo=";
       var URL_SET_WORKINGKEY = HTTP_PROTOCOL + "://" + IP + ":" + PORT + "/set?ewk=";
       var URL_GET_EFECTIVO_MOVIL = HTTP_PROTOCOL + "://" + IP + ":" + PORT + "/efectivo_movil";
       var URL_GET_PINPAD = HTTP_PROTOCOL + "://" + IP + ":" + PORT + "/pinpad";

       //Method: /validarBT

       function getMPOSConnectionStatus() {

           $("#BTBody").html("<div style='text-align: center;'><img src='img/iBluetooth.png' /><br /><br /><img id='loading-img' src='img/loading.gif' /> &nbsp;&nbsp; <strong>Conectando al mPOS (BlueTooth)...</strong></div>");

           $('#ConnectBTModal').modal({
               backdrop: 'static',
               keyboard: false
           });

           $.ajax({
               url: URL_GET_BT,
               type: "GET",
               dataType: "json",
               timeout: 30000,
               success: function (result) {
                   setBTStatus(result);
               },
               error: function (XMLHttpRequest, textStatus, errorThrown) {
                   setErrorBT(XMLHttpRequest);
               }
           });

       }

       function setErrorBT(errorMsg) {
           $("#BTBody").html("<div style='text-align: center;'><img src='img/error.png' /><h4>" + JSON.stringify(errorMsg, null, 4) + "</h4></div>");
       }

       function setBTStatus(btData) {

           if (btData.estado == "OK") {
               $("#BTBody").html("<div style='text-align: center;'><img src='img/ok.png' /><h2>Estado BT</h2><strong>Mensaje:</strong> " + btData.mensaje + "</div>");
           } else {
               $("#BTBody").html("<div style='text-align: center;'><img src='img/error.png' /><h4>Mensaje de Error: " + btData.mensaje + "</h4></div>");
           }

       }

       //Method: /nuevojson/impresion={JSONObject}

       function getPrinterData() {

           var now = new Date();

           //Consulta saldo cliente
           //var jsonObjectString = "{\"imprimir\":[{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ESTAB. : FARMACIA CAROL.\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"TERM.\",\"HORA\",\"FECHA\",\"OPERACION\"]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"i\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"********************************\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"00001\",\"13:12\",\"14/06/2018\",3164]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"d\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"CONSULTA DE SALDO\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"TARJETA: 455103******4673\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CTA.AHO: 0011-0241-76-0299981917\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CCI    : 011-241-000299981917-76\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"formulario\",\"tam\":\"p\",\"clave\":[\"COMISION\",\"SALDO CONT.\",\"SALDO DISP.\"],\"valor\":[\"S/1.00\",\"S/647.00\",\"S/647.00\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ATENCION AL CLIENTE: 01-5950000\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CLA.VAL:BS00/J1/00001/3164\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"CLIENTE\"}]}";
           //Consulta saldo establecimiento
           //var jsonObjectString = "{\"imprimir\":[{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ESTAB. : FARMACIA CAROL.\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"TERM.\",\"HORA\",\"FECHA\",\"OPERACION\"]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"i\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"********************************\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"00001\",\"13:12\",\"14/06/2018\",3164]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"d\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"CONSULTA DE SALDO\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"formulario\",\"tam\":\"p\",\"clave\":\"TARJETA\",\"valor\":\"455103******4673\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ATENCION AL AGENTE:0800-10107\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CLA.VAL:BS00/J1/00001/3164\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"ESTABLECIMIENTO\"}]}";
           
           //Consulta movimientos cliente
           var jsonObjectString = "{\"imprimir\":[{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ESTAB. : FARMACIA CAROL.\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"TERM.\",\"HORA\",\"FECHA\",\"OPERACION\"]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"i\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"********************************\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"00001\",\"13:20\",\"14/06/2018\",3165]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"d\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"CONSULTA MOVIMIENTOS\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"TARJETA: 455103******4673\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CUENTA : 0011-0241-76-0299981917\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CCI    : 011-241-000299981917-76\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"F.OPE\",\"IMPORTE\",\"ITF\",\"DESCR.\"],[\"(*)\",\"\",\"\",\"\"]],\"longitud\":[\"5\",\"9\",\"5\",\"10\"],\"align\":[\"i\",\"d\",\"d\",\"c\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"12/06\",\"-2.00\",\"0.00\",\"TRANSF INM\"],[\"12/06\",\"-12.00\",\"0.00\",\"COMIS. TRA\"],[\"12/06\",\"-11.00\",\"0.00\",\"TRANSF INM\"],[\"12/06\",\"-12.00\",\"0.00\",\"COMIS. TRA\"],[\"12/06\",\"-19.00\",\"0.00\",\"TRANSF INM\"],[\"12/06\",\"-12.00\",\"0.00\",\"COMIS. TRA\"],[\"12/06\",\"-1.00\",\"0.00\",\"COMISION C\"],[\"12/06\",\"-1.00\",\"0.00\",\"COMISION M\"],[\"12/06\",\"-1.00\",\"0.00\",\"COMISION C\"],[\"12/06\",\"-1.00\",\"0.00\",\"COMISION C\"],[\"13/06\",\"-1.00\",\"0.00\",\"COMISION C\"],[\"13/06\",\"-1.00\",\"0.00\",\"COMISION M\"],[\"13/06\",\"-1.00\",\"0.00\",\"COMISION M\"],[\"13/06\",\"-1.00\",\"0.00\",\"COMISION M\"],[\"13/06\",\"-15.00\",\"0.00\",\"TRANSF INM\"],[\"13/06\",\"-12.00\",\"0.00\",\"COMIS. TRA\"],[\"13/06\",\"-2.00\",\"0.00\",\"TRANSF INM\"],[\"13/06\",\"-12.00\",\"0.00\",\"COMIS. TRA\"],[\"14/06\",\"-1.00\",\"0.00\",\"COMISION C\"],[\"14/06\",\"-1.00\",\"0.00\",\"COMISION C\"]],\"longitud\":[\"5\",\"9\",\"5\",\"10\"],\"align\":[\"i\",\"d\",\"d\",\"i\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"formulario\",\"tam\":\"p\",\"clave\":[\"SALDO DISP.\",\"COMISION\"],\"valor\":[\"S/646.00\",\"S/1.00\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ATENCION AL CLIENTE: 01-5950000\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"(*) Indica la fecha cuando se\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"realiza el cargo a la cuenta\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CLA.VAL:BS01/J1/00001/3165\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"CLIENTE\"}]}";
           //Consulta movimiento establecimiento
           //var jsonObjectString = "{\"imprimir\":[{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ESTAB. : FARMACIA CAROL.\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"TERM.\",\"HORA\",\"FECHA\",\"OPERACION\"]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"i\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"********************************\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"00001\",\"13:20\",\"14/06/2018\",3165]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"d\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"CONSULTA MOVIMIENTOS\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"formulario\",\"tam\":\"p\",\"clave\":\"TARJETA\",\"valor\":\"455103******4673\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ATENCION AL AGENTE:0800-10107\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CLA.VAL:BS01/J1/00001/3165\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"ESTABLECIMIENTO\"}]}";

           //Retiro cliente
           //var jsonObjectString = "{\"imprimir\":[{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ESTAB. : FARMACIA CAROL.\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"TERM.\",\"HORA\",\"FECHA\",\"OPERACION\"]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"i\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"********************************\"}, {\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"00001\",\"17:19\",\"14/06/2018\",3169]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"d\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"RETIRO EN EFECTIVO\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"TARJETA:455103******4673\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"C.CARGO:0011-0241-76-0299981917\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"formulario\",\"tam\":\"p\",\"clave\":[\"IMPORTE\",\"ITF\",\"CARGO OPERAC\"],\"valor\":[\"S/12.00\",\"S/0.00\",\"S/7.50\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"CON EL USO DE LA CLAVE AUTORIZO\",\"align\":\"i\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"LA OPERACION REALIZADA\",\"align\":\"i\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ATENCION AL CLIENTE: 01-5950000\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CLA.VAL:BS03/J1/00001/3169\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"CLIENTE\"}]}";
           //Retiro establecimiento
           //var jsonObjectString = "{\"imprimir\":[{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ESTAB. : FARMACIA CAROL.\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"TERM.\",\"HORA\",\"FECHA\",\"OPERACION\"]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"i\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"********************************\"}, {\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"00001\",\"17:19\",\"14/06/2018\",3169]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"d\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"RETIRO EN EFECTIVO\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"formulario\",\"tam\":\"p\",\"clave\":[\"TARJETA\",\"IMPORTE\"],\"valor\":[\"455103******4673\",\"S/12.00\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ATENCION AL AGENTE:0800-10107\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CLA.VAL:BS03/J1/00001/3169\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"ESTABLECIMIENTO\"}]}";

           //Efectivo movil cliente
           //var jsonObjectString = "{\"imprimir\":[{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ESTAB. : FARMACIA CAROL.\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"TERM.\",\"HORA\",\"FECHA\",\"OPERACION\"]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"i\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"********************************\"}, {\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"00001\",\"17:45\",\"14/06/2018\",2313]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"d\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"EFECTIVO MOVIL\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"formulario\",\"tam\":\"p\",\"clave\":[\"ORDENANTE\",\"IMPORTE\",\"CEL.BENEF\",\"EF.MOVIL\"],\"valor\":[\"PETER PARKER SPIDERM\",\"S/20.00\",\"933640230\",\"0000025440\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ATENCION AL CLIENTE: 01-5950000\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CLA.VAL:KTMC/J1/00001/2313\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"CLIENTE\"}]}";
           //Efectivo movil establecimiento
           //var jsonObjectString = "{\"imprimir\":[{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ESTAB. : FARMACIA CAROL.\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"TERM.\",\"HORA\",\"FECHA\",\"OPERACION\"]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"i\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"********************************\"}, {\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"00001\",\"17:45\",\"14/06/2018\",2313]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"d\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"EFECTIVO MOVIL\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"formulario\",\"tam\":\"p\",\"clave\":[\"EF.MOVIL\",\"IMPORTE\"],\"valor\":[\"0000025440\",\"S/20.00\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ATENCION AL AGENTE:0800-10107\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CLA.VAL:KTMC/J1/00001/2313\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"ESTABLECIMIENTO\"}]}  ";
           
           //Deposito cliente
           //var jsonObjectString = "{\"imprimir\":[{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ESTAB. : FARMACIA CAROL.\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"TERM.\",\"HORA\",\"FECHA\",\"OPERACION\"]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"i\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"********************************\"}, {\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"00001\",\"17:54\",\"14/06/2018\",3171]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"d\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"DEPOSITO EFECTIVO\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"C.ABONO:0011-0241-0299981917\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"TITULAR:ROVERANO DIAZ GISELA\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"formulario\",\"tam\":\"p\",\"clave\":[\"IMPORTE\",\"ITF\"],\"valor\":[\"S/12.00\",\"S/0.00\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"REF.    :\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ATENCION AL CLIENTE: 01-5950000\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CLA.VAL:BS02/J1/00001/3171\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"CLIENTE\"}]}";
           //Deposito establecimiento
           //var jsonObjectString = "{\"imprimir\":[{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ESTAB. : FARMACIA CAROL.\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"TERM.\",\"HORA\",\"FECHA\",\"OPERACION\"]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"i\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"********************************\"}, {\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"00001\",\"17:54\",\"14/06/2018\",3171]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"d\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"DEPOSITO EFECTIVO\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"formulario\",\"tam\":\"p\",\"clave\":[\"IMPORTE\",\"C.ABONO\"],\"valor\":[\"S/12.00\",\"0011-0241-02****1917\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ATENCION AL AGENTE:0800-10107\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CLA.VAL:BS02/J1/00001/3171\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"ESTABLECIMIENTO\"}]}";
           
           //Giro nacional cliente
           //var jsonObjectString = "{\"imprimir\":[{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ESTAB. : FARMACIA CAROL.\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"TERM.\",\"HORA\",\"FECHA\",\"OPERACION\"]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"i\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"********************************\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"00001\",\"17:30\",\"15/06/2018\",999442209]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"d\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"GIRO NACIONAL\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"ENVIO DE GIRO\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"GIRO  : 889442202\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"BENEF.: CHGHHHHH HJGFFGHGHHHHHH FGGGGGGG\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"DNI   : 40457858\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ORDEN.: GGHHGGGG FFGGHHG BGFFGGGG\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"DNI   : 40425386\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"DEST. : LIMA\"},{\"tipo\":\"formulario\",\"tam\":\"p\",\"clave\":[\"IMPORTE\",\"COMISION\",\"USO DE RED\",\"ITF X TRANSF\",\"IMP. PAGAR\"],\"valor\":[\"S/15.00\",\"S/5.00\",\"S/0.00\",\"S/0.00\",\"S/20.00\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"F.PAGO: EFECTIVO\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"EL GIRO ENVIADO PODRA SER\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"COBRADO EN CUALQUIER AGENTE U\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"OFICINA DEL BBVA A NIVEL\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"NACIONAL, EN EL HORARIO DE\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"ATENCION Y DE ACUERDO A LA\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"DISPONIBILIDAD DE DINERO DEL\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"ESTABLECIMIENTO. PARA EL COBRO,\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"EL BENEFICIARIO DEBERA INDICAR\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"EL NUMERO DE GIRO Y PRESENTAR\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"SU DNI VIGENTE\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ATENCION AL CLIENTE: 01-5950000\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CLA.VAL:BS09/J1/00001/999442209\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"CLIENTE\"}]}";

           //Transferencias interbancarias
           //var jsonObjectString = "{\"imprimir\":[{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ESTAB. : FARMACIA CAROL.\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"TERM.\",\"HORA\",\"FECHA\",\"OPERACION\"]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"i\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"********************************\"},  {\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"00001\",\"17:46\",\"15/06/2018\",320]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"d\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"m\",\"align\":\"c\",\"valor\":\"SIMULACION\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"TRANSFERENCIA INMEDIATA\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"A CUENTA DE OTROS BANCOS\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"TARJETA    :455103******4673\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CTA. CARGO :0011-0241-0299981917\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"TITULAR    :ROVERANO DIAZ GISELA\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"formulario\",\"tam\":\"p\",\"clave\":[\"IMP. ENVIADO\",\"ITF. CARGO\",\"COMISION\",\"IMP. CARGADO\"],\"valor\":[\"S/12.00\",\"S/0.00\",\"S/12.00\",\"S/24.00\"]}, {\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"C.ABONO:038-301-108000112680-86\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"BENEF. :VICTOR MANUEL FLORES MACHADO\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"BANCO DESTINO:INTERAMERICANO DE FINANZAS-BIF\"}, {\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CELULAR:\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CORREO :\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"IMPORTES MAXIMOS A TRANSFERIR\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"EN ESTE CANAL S/ 1,900\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"PARA TRANSFERENCIAS INMEDIATAS\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"SERVICIO DISPONIBLE DE 08:30AM\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"A 04:00PM DE LUNES A VIERNES\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"(NO INCLUYE FERIADOS)\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"RECUERDA QUE SI LA TRANSFERENCIA\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"NO PUDIESE CONCRETARSE POR CAUSA\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"AJENA A NUESTRO BANCO, LA\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"COMISION APLICADA NO PODRA SER\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"REEMBOLSADA. MAYOR INFORMACION\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"SOBRE CONDICIONES Y\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"RESTRICCIONES EN\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"HTTPS://WWW.BBVACONTINENTAL.PE\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"CON EL USO DE ESTA CLAVE\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"AUTORIZO LA OPERACION REALIZADA\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"Y CONFIRMO CONOCER Y ACEPTAR\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"LAS CONDICIONES DE LA MISMA\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ATENCION AL CLIENTE: 01-5950000\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CLA.VAL:F920/J1/00001/320\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"CLIENTE\"}]}";

           //Test documento
           //var jsonObjectString = "{\"imprimir\":[{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ESTAB. : OFICINA LIMA\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"TERM.\",\"HORA\",\"FECHA\",\"OPERACION\"]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"i\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"********************************\"},{\"tipo\":\"matriz\",\"tam\":\"p\",\"valor\":[[\"00001\",\"10:24\",\"13/06/2018\",3157]],\"longitud\":[\"5\",\"5\",\"10\",\"9\"],\"align\":[\"i\",\"i\",\"i\",\"d\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"c\",\"valor\":\"DEPOSITO EFECTIVO\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"C.ABONO:0011-0241-0199016327\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"TITULAR:JORDAN REQUENA MIRTHA\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"formulario\",\"tam\":\"p\",\"clave\":[\"IMPORTE\",\"ITF\"],\"valor\":[\"S/88.00\",\"S/0.00\"]},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"REF.    :888\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"ATENCION AL CLIENTE: 01-5950000\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"i\",\"valor\":\"CLA.VAL:BS02/J5/00001/2236\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"valor\":\"\"},{\"tipo\":\"linea\",\"tam\":\"p\",\"align\":\"d\",\"valor\":\"CLIENTE\"}]}";
           
           var urlPrinter = URL_GET_PRINT + jsonObjectString;

           $("#PrinterBody").html("<div style='text-align: center;'><img src='img/printer.png' /><br /><br /><img id='loading-img' src='img/loading.gif' /> &nbsp;&nbsp; <strong>Imprimiendo...</strong></div>");

           $('#PrinterModal').modal({
               backdrop: 'static',
               keyboard: false
           });

           $.ajax({
               url: urlPrinter,
               type: "GET",
               dataType: "json",
               timeout: 30000,
               success: function (result) {
                   console.log(result);
                   setPrinterResponse(result);
               },
               error: function (XMLHttpRequest, textStatus, errorThrown) {
                   setErrorPrinter(XMLHttpRequest);
               }
           });

       }

       function setErrorPrinter(errorMsg) {
           $("#PrinterBody").html("<div style='text-align: center;'><img src='img/error.png' /><h4>" + JSON.stringify(errorMsg, null, 4) + "</h4></div>");
       }

       function setPrinterResponse(btData) {

           if (btData.estado == "OK") {
               $("#PrinterBody").html("<div style='text-align: center;'><img src='img/ok.png' /><h2>Impresión</h2><strong>Mensaje:</strong> " + btData.mensaje + "</div>");
           } else {
               $("#PrinterBody").html("<div style='text-align: center;'><img src='img/error.png' /><h4>Mensaje de Error: " + btData.mensaje + "</h4></div>");
           }

       }

       //Method: /Working Key={JSONObject}
       function getWorkingKeyData() {

           var value = "1234567890ABCDEFFEDCBA0987654321";
           var agregador = "J5";
           var terminal = "00000020";

           var urlWkey = URL_SET_WORKINGKEY + value + "&agregador=" + agregador + "&terminal=" + terminal;
           console.log(urlWkey);
           $("#WorKingKeyBody").html("<div style='text-align: center;'><img src='img/llave.png' /><br /><br /><img id='loading-img' src='img/loading.gif' /> &nbsp;&nbsp; <strong>Enviando Llave...</strong></div>");

           $('#WorkingKeyModal').modal({
               backdrop: 'static',
               keyboard: false
           });

           $.ajax({
               url: urlWkey,
               type: "GET",
               dataType: "json",
               timeout: 30000,
               success: function (result) {
                   console.log(result);
                   setWorkingKeyResponse(result);
               },
               error: function (XMLHttpRequest, textStatus, errorThrown) {
                   setErrorWorkingKey(XMLHttpRequest);
               }
           });

       }

       function setErrorWorkingKey(errorMsg) {
           $("#WorKingKeyBody").html("<div style='text-align: center;'><img src='img/error.png' /><h4>" + JSON.stringify(errorMsg, null, 4) + "</h4></div>");
       }

       function setWorkingKeyResponse(btData) {

           if (btData.estado == "OK") {
               $("#WorKingKeyBody").html("<div style='text-align: center;'><img src='img/ok.png' /><h2>Working Key</h2><strong>Mensaje:</strong> " + btData.mensaje + "</div>");
           } else {
               $("#WorKingKeyBody").html("<div style='text-align: center;'><img src='img/error.png' /><h4>Mensaje de Error: " + btData.mensaje + "</h4></div>");
           }

       }

       //Method: /efectivo_movil
       function efectivo_movil() {

           $("#EfectivoMovilBody").html("<div style='text-align: center;'><img src='img/efectivo_movil.png' /><br /><br /><img id='loading-img' src='img/loading.gif' /> &nbsp;&nbsp; <strong>Esperando datos ...</strong></div>");

           $('#EfectivoMovilModal').modal({
               backdrop: 'static',
               keyboard: false
           });

           $.ajax({
               url: URL_GET_EFECTIVO_MOVIL,
               type: "GET",
               //dataType: "json",
               timeout: 30000,
               success: function (result) {
                   console.log(result);
                   setEfectivoMovilResponse(result);
               },
               error: function (XMLHttpRequest, textStatus, errorThrown) {
                   setErrorEfectivoMovil(XMLHttpRequest);
               }

           });
       }

       function setErrorEfectivoMovil(errorMsg) {
           $("#EfectivoMovilBody").html("<div style='text-align: center;'><img src='img/error.png' /><h4>" + JSON.stringify(errorMsg, null, 4) + "</h4></div>");
       }

       function setEfectivoMovilResponse(data) {

           if (data.estado == "error") {
               $("#EfectivoMovilBody").html("<div style='text-align: center;'><img src='img/error.png' /><h4>" + JSON.stringify(data, null, 4) + "</h4></div>");
           } else {
               //Correct Response
               $("#EfectivoMovilBody").html("<div style='text-align: center;'><img src='img/ok.png' /><h4>" + JSON.stringify(data, null, 4) + "</h4></div>");
           }

       }

       //Method: /getAT

       function getAt() {

           $("#GetATBody").html("<div style='text-align: center;'><img src='img/setup.png' /><br /><br /><img id='loading-img' src='img/loading.gif' /> &nbsp;&nbsp; <strong>Conectando...</strong></div>");

           $('#GetATModal').modal({
               backdrop: 'static',
               keyboard: false
           });

           $.ajax({
               url: URL_GET_GETAT,
               type: "GET",
               dataType: "json",
               timeout: 30000,
               success: function (result) {
                   console.log(result);
                   setGetATResponse(result);
               },
               error: function (XMLHttpRequest, textStatus, errorThrown) {
                   setErrorGetAT(XMLHttpRequest);
               }
           });

       }

       function setErrorGetAT(errorMsg) {
           $("#GetATBody").html("<div style='text-align: center;'><img src='img/error.png' /><h4>" + JSON.stringify(errorMsg, null, 4) + "</h4></div>");
       }

       function setGetATResponse(data) {

           if (data.error != null) {
               $("#GetATBody").html("<div style='text-align: center;'><img src='img/error.png' /><h4>" + JSON.stringify(data, null, 4) + "</h4></div>");
           } else {
               //Correct Response
               $("#GetATBody").html("<div style='text-align: center;'><img src='img/ok.png' /><h4>" + JSON.stringify(data, null, 4) + "</h4></div>");
           }

       }

       //Methods: /tarjeta, /operador

       function getMethodData(methodName, urlIndex) {

           var finalURL = '';

           $("#GetMethodTitle").html(methodName);
           $("#GetMethodBody").html("<div style='text-align: center;'><img src='img/card_logo.png' style='border-radius: 15px;' /><br /><br /><img src='img/loading.gif' /> &nbsp;&nbsp; <strong>Leyendo datos...</strong></div>");

           $('#GetMethodModal').modal({
               backdrop: 'static',
               keyboard: false
           });

           switch (urlIndex) {
               case 1: finalURL = URL_GET_TARJETA; break;
               case 2: finalURL = URL_GET_OPERADOR; break;
               case 3: finalURL = URL_GET_OPERADOR_PREFIJO; break;
           }

           $.ajax({
               url: finalURL,
               type: "GET",
               dataType: "json",
               timeout: 30000,
               success: function (result) {
                   console.log(result);
                   setMethodResponse(result);
               },
               error: function (XMLHttpRequest, textStatus, errorThrown) {
                   setErrorResponse(XMLHttpRequest);
               }
           });

       }

       function setErrorResponse(errorMsg) {
           $("#GetMethodBody").html("<div style='text-align: center;'><img src='img/error.png' /><h4>" + JSON.stringify(errorMsg, null, 4) + "</h4></div>");
       }

       function setMethodResponse(data) {

           var response = JSON.stringify(data);

           if (response.indexOf('estado') !== -1)
               $("#GetMethodBody").html("<div style='text-align: center;'><img src='img/error.png' /><h4>" + JSON.stringify(data, null, 4) + "</h4></div>");
           else
               //Correct Response
               $("#GetMethodBody").html("<div style='text-align: center;'><img src='img/ok.png' /><h4>" + JSON.stringify(data, null, 4) + "</h4></div>");
       }

       //Method getScreenSize
       function getScreenSize() {
           alert("Height: " + $(window).height() + " - Width: " + $(window).width());
       }


       //Method: /pinpad
       function pinpad() {

           $("#PinpadBody").html("<div style='text-align: center;'><img src='img/mposNewpos.png' /><br /><br /><img id='loading-img' src='img/loading.gif' /> &nbsp;&nbsp; <strong>Esperando datos ...</strong></div>");

           $('#PinpadModal').modal({
               backdrop: 'static',
               keyboard: false
           });

           $.ajax({
               url: URL_GET_PINPAD,
               type: "GET",
               dataType: "json",
               timeout: 30000,
               success: function (result) {
                   console.log(result);
                   setpinpadResponse(result);
               },
               error: function (XMLHttpRequest, textStatus, errorThrown) {
                   setErrorpinpad(XMLHttpRequest);
               }

           });
       }

       function setErrorpinpad(errorMsg) {
           $("#PinpadBody").html("<div style='text-align: center;'><img src='img/error.png' /><h4>" + JSON.stringify(errorMsg, null, 4) + "</h4></div>");
       }

       function setpinpadResponse(data) {

           if (data.estado == "error") {
               $("#PinpadBody").html("<div style='text-align: center;'><img src='img/error.png' /><h4>" + JSON.stringify(data, null, 4) + "</h4></div>");
           } else {
               //Correct Response
               $("#PinpadBody").html("<div style='text-align: center;'><img src='img/ok.png' /><h4>" + JSON.stringify(data, null, 4) + "</h4></div>");
           }

       }
