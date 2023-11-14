let Navegar ={
    login : ()=>{
        funciones.loadScript('./views/login.js','root')
        .then(()=>{
            GlobalSelectedForm ='LOGIN';
            GlobalCodSucursal = '';
            GlobalSelectedCodPaciente = 0;
            GlobalSelectedNomPaciente = '';
            InicializarVista();
        })
    },
    recetas: ()=>{
        funciones.loadScript('./views/viewDoctor.js','root')
          .then(()=>{
            GlobalSelectedForm ='DOCTOR';
            initView();
          })
    },
    recepcion: ()=>{
        funciones.loadScript('./views/viewSecretaria.js','root')
        .then(()=>{
          GlobalSelectedForm ='SECRETARIA';
          initView();
        })
    }
}