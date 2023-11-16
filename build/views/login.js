function getView(){
    let view = {
        formLogin:()=>{
            return `
                <div class="card col-sm-12 col-md-6 col-lg-6 col-xl-6 card-rounded shadow">
                    <div class="card-header text-center bg-white">
                         <img src="../favicon.png" with="80" height="80">
                    </div>
                    <div class="card-body">
                    
                        <div class="form-group">
                            <label class="text-especial negrita">Usuario</label>
                            <select class="form-control" id="cmbTipo">
                                <option value="DOCTOR">DOCTOR</option>
                                <option value="SECRETARIA">SECRETARIA</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="text-especial negrita">Consultorio:</label>
                            <input type="text" class="form-control" id="txtU">
                        </div>

                        <div class="form-group">
                            <label class="text-especial negrita">Contraseña</label>
                            <input type="password" class="form-control" id="txtP">
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-6">
                                <small class="negrita">por Alexis Burgos</small>
                                <br>
                                <small class="negrita">modif:16.11.2023.2</small>
                            </div>
                            <div class="col-6 text-right">
                                <button class="btn btn-especial shadow btn-xl btn-circle" id="btnIniciar">
                                    <i class="fal fa-lock"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                    
                </div>
            `
        }
    }

    //root es una variable que representa el contenedor principal
    // ahi dibulo el html 
    root.innerHTML = view.formLogin();
    
    rootMenuFooter.innerHTML = '<b class="text-white">Onne Business</b>';
}



function addListeners(){

    GlobalConfPa = '';

    let btnIniciar = document.getElementById('btnIniciar');
    btnIniciar.addEventListener('click',()=>{


        let tipo = document.getElementById('cmbTipo');
        let u = document.getElementById('txtU').value || 'SN';
        let p = document.getElementById('txtP').value || 'SN';

        if(u=='SN'){funciones.AvisoError('Escriba el nombre de usuario');return;}
        if(p=='SN'){funciones.AvisoError('Escriba su contraseña');return;}

        btnIniciar.disabled = true;
        btnIniciar.innerHTML = '<i class="fal fa-unlock fa-spin"></i>';
        let us = '';

        login(tipo.value,u,p)
        .then((data)=>{         
            data.map((r)=>{
                us = r.TIPO;
                GlobalCodSucursal = r.TOKEN;
                GlobalTipoUsuario = r.TIPO;
                GlobalRecetaEmpresa = r.EMPRESA;
                GlobalRecetaDireccion = r.DIRECCION;
                GlobalRecetaTelefono = r.TELEFONO;
                GlobalRecetaLogo = r.LOGO;
            })
            let resultado = us.toString()==tipo.value.toString();
            //GlobalTipoUsuario = cmbTipo.value;


            if(resultado==false){
                funciones.AvisoError('Usuario o clave incorrecta'); 
                btnIniciar.disabled = false;
                btnIniciar.innerHTML = '<i class="fal fa-lock"></i>';
            }else{
                if(GlobalTipoUsuario=='DOCTOR'){
                    GlobalConfPa = p;
                    Navegar.recetas();
                }else{
                    Navegar.recepcion();
                }
            }
            console.log(resultado);
            
            //btnIniciar.disabled = false;
            //btnIniciar.innerHTML = '<i class="fal fa-lock"></i> Iniciar';
        })
        .catch(()=>{
            funciones.AvisoError('No se pudo iniciar sesión');
            GlobalCodSucursal = '';
            btnIniciar.disabled = false;
            btnIniciar.innerHTML = '<i class="fal fa-lock"></i>';
        })
        
        
       
    })
}

function InicializarVista(){
    getView(); //esta funcion dibuja el html dentro del contenedor principal
    //aca abajo haré otra funcion para ir agregandole los eventos a cada elemento
    addListeners();
};



function login(tipo,usuario,pass){
    return new Promise((resolve, reject) => {

        axios.post('/login',{
            tipo:tipo,
            usuario:usuario,
            pass:pass
        })
        .then((response) => {   
            let data = response.data; 
            
            resolve(data);
        }, (error) => {
            reject(error);
        });
    })
    
};