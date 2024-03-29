function getView(){
    let view = {
        menu:()=>{
            return `
        
                <button class="col-auto btn btn-sm border-white text-white" id="btnMenEspera">
                    <i class="fal fa-list"></i>    
                    <small>Espera(<label class="negrita" id="lbMenTotalEspera">-</label>)</small>
                </button>
                
                <button class="col-auto btn btn-sm border-white text-white" id="btnMenPacientes">
                    <i class="fal fa-edit"></i> 
                    <small>Pacientes</small>
                </button>

                <button class="col-auto btn btn-sm border-white text-white" id="btnMenReportes">
                    <i class="fal fa-chart-pie"></i><small>Reportes</small>
                </button>
              
            `
        },
        body:()=>{
            return `
                 <div class="col-12 p-0 shadow bg-white card-rounded">

                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="espera" role="tabpanel" aria-labelledby="receta-tab">    
                            ${view.homeEspera()}
                        </div>
                        <div class="tab-pane fade" id="preconsultas" role="tabpanel" aria-labelledby="home-tab">
                            ${view.homePreconsultas()}
                        </div>
                        <div class="tab-pane fade" id="pacientes" role="tabpanel" aria-labelledby="home-tab">  
                            ${view.homePacientes()}
                        </div>
                        <div class="tab-pane fade" id="reportes" role="tabpanel" aria-labelledby="tab-reportes">
                            ${view.homeReportes()}
                        </div>
                        <div class="tab-pane fade" id="consultamen" role="tabpanel" aria-labelledby="tab-consulta">
                            ${view.homeNuevaReceta()}
                        </div>
                    </div>
                    
                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-espera" data-toggle="tab" href="#espera" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i>Turnos Espera</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-preconsultas" data-toggle="tab" href="#preconsultas" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i>Pre-Consultas</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-info" id="tab-pacientes" data-toggle="tab" href="#pacientes" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-edit"></i>Pacientes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-warning" id="tab-reportes" data-toggle="tab" href="#reportes" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-chart-pie"></i>Reportes</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-warning" id="tab-consultamen" data-toggle="tab" href="#consultamen" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-chart-pie"></i>Consulta</a>
                        </li> 
                                
                    </ul>

                  

                </div>
               
            `
        },
        homePacientes:()=>{
            return `
            <div class="card-body bg-white shadow">
                <h5 class="text-especial negrita">Listado de Pacientes</h5>
                
                <div class="row">
                    <div class="form-group col-sm-12 col-md-6 col-lg-4 col-xl-4">

                        <div class="input-group">
                            <input type="text" class="form-control border-especial" id="txtBuscarReceta" placeholder="Escriba para Buscar...">
                            <div class="input-group-append">
                                <button class="btn btn-especial shadow" id="btnBuscarP">
                                    <i class="fal fa-search"></i>Buscar
                                </button>    
                            </div>
                        </div>
                        
                        
                    </div>
                
                </div>
                
                <br>

                <div class="row">
                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover" id="tblPacientes">
                            <thead  class="bg-especial text-white">
                                <tr>
                                    <td>Paciente / Teléfono / Edad</td>
                                  
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblListaPacientes">
                        
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <button type="button" class="btn btn-info btn-xl btn-circle hand btn-right shadow" id="btnNuevoPaciente">
                <i class="fal fa-plus"></i>
            </button>
            `
        },
        homeEspera:()=>{
            return `
            <div class="card shadow p-0">
                <div class="card-body p-0">
                    <div class="p-4">
                        <h5 class="text-success negrita">Lista de Espera</h5>
                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-lg btn-success btn-circle" onclick="getTblTurnos()">
                                    <i class="fal fa-sync"></i>
                                </button>    
                            </div>
                            <div class="col-6">
                                <label class="negrita">Total Turnos: </label><h3 class="negrita text-danger" id="lbTotalTurnos">0</h3>
                            </div>
                        </div>
                    </div>
                                        
                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover" id="tblEspera">
                            <thead class="bg-especial text-white">
                                <tr>
                                    <td>Paciente</td>
                                    <td>Seguro/Tipo Consulta</td>
                                </tr>
                            </thead>
                            <tbody id="tblEsperaData">
                            
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            `

        },
        homePreconsultas:()=>{
            return `
            <h5 class="text-danger text-center negrita">Lista de Preconsultas (Plan Dx)</h5>
            <div class="p-2" id="tblPreconsultas"></div>
            `

        },
        homeReportes:()=>{
            return `
            <div class="card shadow p-4">
                <h5 class="negrita text-warning">Reportes Disponibles</h5>
                <div class="row">
                    <div class="col-lg-2 col-xl-2 col-md-4 col-sm-5">
                        <div class="form-group">
                            <label>Fecha Inicio</label>
                            <input type="date" id="txtFechaInicio" class="form-control">
                        </div>
                       
                    </div>
                    <div class="col-lg-2 col-xl-2 col-md-4 col-sm-5">
                        <div class="form-group">
                            <label>Fecha Final</label>
                            <input type="date" id="txtFechaFinal" class="form-control">
                        </div>
                       
                    </div>
                </div>

                <br>

                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-auto">
                            <button class="btn btn-outline-info shadow" id="btnRptConsultas">
                                Consultas Atendidas
                            </button>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-outline-success shadow" id="btnRptMorbilidades">
                                Morbilidades Encontradas
                            </button> 
                        </div>
                    </div>

                    <div class="row" id="containerReports">
                    
                    </div>
                      
                  
                </div>
            </div>
            `

        },
        homeNuevaReceta:()=>{
            return `
                    <div class="card card-rounded fullhorizontal col-12">
                   
                        <div class="card-body">
                                <h5 class="text-danger" id="lbPaciente">Consumidor Final</h5>
                                <h5 class="text-info" id="lbEdadPaciente">-</h5>
                                
                              
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active negrita text-info" id="home-tab" data-toggle="tab" href="#consulta" role="tab" aria-controls="home" aria-selected="true">
                                        <i class="fal fa-edit"></i>Consulta</a>
                                </li>
                                <li class="nav-item hidden">
                                    <a class="nav-link negrita text-primary" id="receta-tab" data-toggle="tab" href="#receta" role="tab" aria-controls="profile" aria-selected="false">
                                        <i class="fal fa-print"></i>Receta</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link negrita text-secondary" id="historial-tab" data-toggle="tab" href="#historialp" role="tab" aria-controls="profile" aria-selected="false">
                                        <i class="fal fa-list"></i>Historial</a>
                                </li>
                               
                            </ul>

                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="consulta" role="tabpanel" aria-labelledby="home-tab">
                                    ${view.formConsulta()}
                                </div>
                           
                                <div class="tab-pane fade" id="receta" role="tabpanel" aria-labelledby="receta-tab">
                                    
                                </div>

                                <div class="tab-pane fade" id="historialp" role="tabpanel" aria-labelledby="historial-tab">
                                    <h3 class="text-danger">Consultas anteriores</h3>
                                         
                                    <div id="containerHistorialP">
                                    </div>
                                     
                                    
                                </div>


                            </div>
                        </div>

                    </div>
                
            `
        },
        modalNuevoPaciente:()=>{
            return `
            <div class="modal fade" id="modalNuevoPaciente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                    <div class="modal-header bg-info">
                        <h5 class="modal-title  text-white">Nuevo Paciente</h5>
                       
                    </div>
                    <div class="modal-body">

                        <hr class="solid">

                        <div class="form-group">
                            <label class="negrita">Nombre del Paciente</label>
                            <input type="text" class="form-control" id="Nombre" autocomplete="false">
                        </div>

                        <div class="form-group">
                            <label class="negrita">Domicilio / Dirección</label>
                            <input type="text" class="form-control" id="Direccion" placeholder="Escriba la dirección del paciente" autocomplete="false">
                        </div>

                        <div class="form-group">
                            <label class="negrita">Departamento</label>
                            <select class="form-control" id="cmbDepartamento"></select>
                        </div>


                        <hr class="solid">

                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form-group">
                                    <label class="negrita">Fecha de nacimiento</label>
                                    <input type="date" class="form-control" id="FechaNacimiento">
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form-group">
                                    <label class="negrita">Teléfono del Paciente</label>
                                    <input type="number" class="form-control" id="Telefono">
                                </div>
                            </div>
                        </div>

                        
                        <hr class="solid">

                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-secondary btn-xl btn-circle hand shadow" id="btnCerrarModalClienteNuevo">
                                    <i class="fal fa-angle-left"></i>
                                </button>
                            </div>
                            <div class="col-6">
                              

                                <button type="button" class="btn btn-info btn-xl btn-circle hand shadow" id="btnGuardarCliente">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                       

                    </div>
                    </div>
                </div>
            </div>
            `
        },
        modalEditarPaciente:()=>{
            return `
            <div class="modal fade" id="modalEditarPaciente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                    <div class="modal-header bg-success">
                        <h5 class="modal-title  text-white">Editar Datos Paciente</h5>
                    </div>
                    <div class="modal-body">

                        <hr class="solid">

                        <div class="form-group">
                            <label class="negrita">Nombre del Paciente</label>
                            <input type="text" class="form-control" id="txtEditNomclie" autocomplete="false">
                        </div>

                        <div class="form-group">
                            <label class="negrita">Domicilio / Dirección</label>
                            <input type="text" class="form-control" id="txtEditDirclie" placeholder="Escriba la dirección del paciente" autocomplete="false">
                        </div>

                        <div class="form-group">
                            <label class="negrita">Departamento</label>
                            <select class="form-control" id="cmbEditDepartamento"></select>
                        </div>


                        <hr class="solid">

                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form-group">
                                    <label class="negrita">Fecha de nacimiento</label>
                                    <input type="date" class="form-control" id="txtEditFechaNacimiento">
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form-group">
                                    <label class="negrita">Teléfono del Paciente</label>
                                    <input type="number" class="form-control" id="txtEditTelefono">
                                </div>
                            </div>
                        </div>

                        
                        <hr class="solid">

                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-secondary btn-xl btn-circle hand shadow" id="" data-dismiss="modal">
                                    <i class="fal fa-angle-left"></i>
                                </button>
                            </div>
                            <div class="col-6">
                              

                                <button type="button" class="btn btn-success btn-xl btn-circle hand shadow" id="btnEditarCliente">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                       

                    </div>
                    </div>
                </div>
            </div>
            `
        },
        modalHistorialRecetas:()=>{
            return `
            <div class="modal fade modal-with-scroll" id="modalHistorialRecetas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-secondary">
                            <h5 class="modal-title  text-white">Historial de recetas del paciente</h5>
                            <button class="btn btn-secondary btn-sm border-white" data-dismiss="modal">
                                Cerrar
                            </button>
                        </div>
                    <div class="modal-body">
                    
                        <h5 class="text-danger" id="lbPacienteHistorial">CONSUMIDOR FINAL</h5>
                        
                        <ul class="nav nav-tabs" id="myTabHome" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="tab-cons-listado" data-toggle="tab" href="#tconslistado" role="tab" aria-controls="home" aria-selected="true">
                                    <i class="fal fa-list"></i>Historial</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="tab-cons-graficas" data-toggle="tab" href="#tconsgraficas" role="tab" aria-controls="profile" aria-selected="false">
                                    <i class="fal fa-chart"></i>Gráficas</a>
                            </li>             
                        </ul>

                        <div class="tab-content" id="myTabHomeContent">
                            <div class="tab-pane fade show active" id="tconslistado" role="tabpanel" aria-labelledby="home-tab">

                                <br>

                                <div id="tblHistorialRecetas">
                                            
                                
                                </div>                                                    
                            </div>
                            
                            <div class="tab-pane fade" id="tconsgraficas" role="tabpanel" aria-labelledby="receta-tab">
                                <div class="" id="containerGrafPeso">
                                
                                </div>
                                <hr class="solid">
                                <div class="" id="containerGrafTalla">
                                
                                </div>
                              
                            </div>
                        </div>

                        
                        

                    
                      
                    </div>
                    <div class="modal-footer">
                        <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-secondary btn-xl btn-circle hand shadow" id="btnCerrarModalHistorialRecetaNueva">
                                    <i class="fal fa-angle-left"></i>
                                </button>
                            </div>
                        </div>
                       

                    </div>
                    </div>
                </div>
            </div>
            `
        },
        formConsulta:()=>{
            return `
           
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label class="negrita">Peso</label>
                            <input type="number" class="form-control" id="txtCPeso">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label class="negrita">Talla</label>
                            <input type="number" class="form-control" id="txtCTalla">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="negrita">(MC) Motivo de la consulta</label>
                    <textarea class="form-control" id="txtCMotivo" rows="2" placeholder="Escriba el motivo de la consulta..."></textarea>
                </div>

                <div class="form-group">
                    <label class="negrita">(HEA) Historia de la Enfermedad Actual</label>
                    <textarea class="form-control" id="txtCHEA" rows="2" placeholder="Historia de la Enfermedad..."></textarea>
                </div>

                <div class="form-group">
                    <label class="negrita">Antecedentes</label>
                    <textarea class="form-control" id="txtCAntecedentes" rows="2" placeholder="Describa los antecedentes si los hay..."></textarea>
                </div>

                <div class="form-group">
                    <label class="negrita">(EF) Exámen Físico</label>
                    <textarea class="form-control" id="txtCEF" rows="2" placeholder="Exámen físico..."></textarea>
                </div>

                <div class="form-group">
                    <label class="negrita">(PLAN DX) Plan Diagnóstico</label>
                    <textarea class="form-control" id="txtCDiagnostico" rows="2" placeholder="Escriba el diagnóstico de la consulta..."></textarea>
                </div>

                <div class="form-group">
                    <label class="negrita">(IC) Impresión Clínica</label>
                    <textarea class="form-control" id="txtCIC" rows="2" placeholder="Impresión clínica..."></textarea>
                </div>

                <div class="form-group">
                    <label class="negrita">(PLAN TX) Plan Tratamiento</label>
                    <textarea class="form-control" id="txtCPTX" rows="2" placeholder="Escriba el plan tratamiento..."></textarea>
                </div>

                <div class="row">
                    <div class="col-6">
                                           
                    </div>
                    <div class="col-6">
                        <button class="btn btn-especial btn-md hand shadow" id="btnGuardarReceta">
                            <i class="fal fa-save"></i> Guardar Consulta
                        </button>
                    </div>
                </div>
                           
            `
        },
        formReceta:()=>{
            return `
            <div class="modal fade modal-with-scroll" id="modal_nueva_receta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-body p-2">

                            <div class="form-group">
                                <label>Receta No.</label><label class="negrita text-danger" id="lbCorrelativo">0</label>
                            </div>                     

                            <div class="card card-rounded shadow p-4">
                                <label class="negrita text-especial">Agregue un Medicamento</label>                                   
                                    
                                <div class="row">
                                    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <input type="text" class="form-control" placeholder="Medicamento..." id="txtRecetaMedicamento"> 
                                    </div>
                                    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <input type="text" class="form-control" placeholder="Dosis...Frecuencia" id="txtRecetaDosis">
                                    </div>
                                    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Duración..." id="txtRecetaDuracion">
                                            <button class="btn btn-success btn-md shadow hand col-6" id="btnAgregarMedicamento">Agregar(+)</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="card shadow p-2">
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead class="bg-especial text-white">
                                            <tr>
                                                <td>Medicamento</td>
                                                <td>Dosis</td>
                                                <td>Duración</td>
                                                <td></td>
                                            </tr>
                                        </thead>         
                                        <tbody id="tblReceta">
                                        
                                        </tbody>                       
                                    </table>

                                    <div class="row">
                                        <div class="col-9">
                                            <div class="form-group p-4">
                                                <label class="negrita text-especial">Observaciones</label>
                                                <textarea class="form-control" rows="3" placeholder="Observaciones adicionales..." id="txtRecetaObs">
                                                </textarea>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="form-group">
                                                <label class="negrita text-especial">Próxima cita</label>
                                                <input type="date" class="form-control negrita text-danger" id="txtFechaProximaCita">
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <hr class="solid">

                            <div class="row">
                                <div class="col-4 text-left">
                                    <button type="button" class="btn btn-secondary btn-xl btn-circle hand shadow" data-dismiss="modal">
                                        <i class="fal fa-angle-left"></i>
                                    </button>
                                </div>
                                <div class="col-4">
                                    
                                </div>
                                <div class="col-4">
                                    <button type="button" class="btn btn-outline-danger btn-md hand shadow" id="btnGuardarRecetaPrint">
                                        <i class="fal fa-print"></i> Guardar e Imprimir
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            `
        },
        modalDatosConsulta:()=>{
            return `
            <div class="modal fade" id="modalDatosConsulta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-info">
                            <h5 class="modal-title  text-white">Detalle de la Consulta</h5>
                            <button class="btn btn-sm btn-info border-white" data-dismiss="modal">Cerrar</button>
                        </div>
                        <div class="modal-body card shadow">
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label class="negrita">Fecha</label>
                                        <h5 class="text-danger" id="lbCFecha"></h5>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label class="negrita">Peso</label>
                                        <h5 class="text-danger" id="lbCPeso"></h5>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label class="negrita">Talla</label>
                                        <h5 class="text-danger" id="lbCTalla"></h5>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="negrita">Motivo de la Consulta</label>
                                <textarea class="form-control" id="lbCMotivo" rows="2"></textarea>
                            </div>



                            <div class="form-group">
                                <label class="negrita">(HEA) Historia de la Enfermedad Actual</label>
                                <textarea class="form-control" id="lbCHEA" rows="2"></textarea>
                            </div>

                            <div class="form-group">
                                <label class="negrita">Antecedentes</label>
                                <textarea class="form-control" id="lbCAntecedentes" rows="2"></textarea>
                            </div>

                            <div class="form-group">
                                <label class="negrita">(EF) Exámen Físico</label>
                                <textarea class="form-control" id="lbCEF" rows="2"></textarea>
                            </div>

                            <div class="form-group">
                                <label class="negrita">(PLAN DX) Plan Diagnóstico</label>
                                <textarea class="form-control" id="lbCDiagnostico" rows="2"></textarea>
                            </div>


                            <div class="form-group">
                                <label class="negrita">(IC) Impresión Clínica</label>
                                <textarea class="form-control" id="lbCIC" rows="2"></textarea>
                            </div>

                            <div class="form-group">
                                <label class="negrita">(PLAN TX) Plan Tratamiento</label>
                                <textarea class="form-control" id="lbCPTX" rows="2"></textarea>
                            </div>



                            
                        
                        </div>
                        <div class="modal-footer">
                            <div class="row">
                                <div class="col-6">
                                    <button type="button" class="btn btn-secondary btn-xl btn-circle hand shadow" id="btnCerrarModalDetConsulta">
                                        <i class="fal fa-angle-left"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            `
        }
    }

    //root.innerHTML = view.body() + view.modalNuevaReceta() + view.modalHistorialRecetas() + view.modalDatosConsulta() + view.modalNuevoPaciente() + view.modalEditarPaciente();
    root.innerHTML = view.body()  + view.modalHistorialRecetas() + view.modalDatosConsulta() + view.modalNuevoPaciente() + view.modalEditarPaciente() + view.formReceta();
    rootMenuFooter.innerHTML = view.menu();

};

function addListeners(){

    //funciones.animateCSS('men1','fadeInBottomLeft');
    //funciones.animateCSS('men2','fadeInBottomLeft');
    //funciones.animateCSS('men3','fadeInBottomLeft');
    //funciones.animateCSS('men4','fadeInBottomLeft');

    //----------------------------
    //BOTONES DEL MENU

    document.getElementById('btnMenEspera').addEventListener('click',()=>{
        document.getElementById('tab-espera').click();
        GlobalSelectedTab = "ESPERA";
        funciones.animateCSS('btnMenEspera','jello');
    });

    
    document.getElementById('btnMenPacientes').addEventListener('click',()=>{
        document.getElementById('tab-pacientes').click();
        GlobalSelectedTab = "PACIENTES";
        funciones.animateCSS('btnMenPacientes','jello');
    });
    document.getElementById('btnMenReportes').addEventListener('click',()=>{
        document.getElementById('tab-reportes').click();
        GlobalSelectedTab = "REPORTES";
        funciones.animateCSS('btnMenReportes','jello');
    });

    document.getElementById('btnMenEspera').click();
    //BOTONES DEL MENU
    //----------------------------
 
    let btnBuscarP = document.getElementById('btnBuscarP');
    btnBuscarP.addEventListener('click',()=>{

        getTblPacientes();

    });

    document.getElementById('txtBuscarReceta').addEventListener('keyup',(e)=>{
        
        if (e.key === "Enter") {
            // Cancel the default action, if needed
            //e.preventDefault();
            // Trigger the button element with a click
            btnBuscarP.click();
        };
        if (e.keyCode === 13) {
            btnBuscarP.click();
        };

    });

  

    document.getElementById('FechaNacimiento').value = funciones.getFecha();
    let btnNuevoPaciente = document.getElementById('btnNuevoPaciente');
    btnNuevoPaciente.addEventListener('click',()=>{

        document.getElementById('Nombre').value='';
        document.getElementById('Direccion').value = '';
        document.getElementById('FechaNacimiento').value = funciones.getFecha();
        document.getElementById('Telefono').value=0;

        $('#modalNuevoPaciente').modal('show');
    });

    //Combo departamentos
    document.getElementById('cmbDepartamento').innerHTML = funciones.getComboDepartamentos();
    document.getElementById('cmbEditDepartamento').innerHTML = funciones.getComboDepartamentos();

    document.getElementById('btnCerrarModalClienteNuevo').addEventListener('click',()=>{$('#modalNuevoPaciente').modal('hide')});


    let btnGuardarCliente = document.getElementById('btnGuardarCliente');
    btnGuardarCliente.addEventListener('click',()=>{
        
       

        funciones.Confirmacion('¿Está seguro que desea Guardar este Paciente?')
        .then((value)=>{
            if(value==true){
                let nombre = document.getElementById('Nombre');
                let direccion = document.getElementById('Direccion').value || 'SN';
                let cmbDepartamento = document.getElementById('cmbDepartamento');

                let fechanacimiento = funciones.devuelveFecha('FechaNacimiento');
                let telefono = document.getElementById('Telefono') || '0';

                btnGuardarCliente.disabled = true;
                btnGuardarCliente.innerHTML = '<i class="fal fa-save fa-spin"></i>';

                insert_paciente(funciones.limpiarTexto(nombre.value),fechanacimiento,telefono.value,funciones.limpiarTexto(direccion),cmbDepartamento.value)
                .then(()=>{
                    funciones.Aviso('Cliente agregado exitosamente!!')
                    btnGuardarCliente.disabled = false;
                    btnGuardarCliente.innerHTML = '<i class="fal fa-save"></i>';
                    $('#modalNuevoPaciente').modal('hide');

                    document.getElementById('txtBuscarReceta').value = nombre.value;
                    getTblPacientes();
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo guardar')
                    btnGuardarCliente.disabled = false;
                    btnGuardarCliente.innerHTML = '<i class="fal fa-save"></i>';
                })
               
            }
        })
    });

    //RECETA
    /*
    document.getElementById('btnCerrarModalRecetaNueva').addEventListener('click',()=>{
        //$('#modalNuevaReceta').modal('hide')
        document.getElementById('home-tab').click();
    });
    */

    let btnAgregarMedicamento = document.getElementById('btnAgregarMedicamento');
    btnAgregarMedicamento.addEventListener('click',()=>{
        
        let medicamento = document.getElementById('txtRecetaMedicamento').value || 'SN';
        let dosis = document.getElementById('txtRecetaDosis').value || 'SN';
        let duracion = document.getElementById('txtRecetaDuracion').value || 'SN';

        if(medicamento == 'SN'){funciones.AvisoError('Escriba el nombre del medicamento');return;}
        if(dosis == 'SN'){funciones.AvisoError('Escriba la dosis');return;}
        if(duracion == 'SN'){funciones.AvisoError('Escriba la duración del tratamiento');return;}

        btnAgregarMedicamento.disabled = true;
        btnAgregarMedicamento.innerHTML = '<i class="fal fa-save fa-spin"></i>';

        db_insertTempReceta(funciones.limpiarTexto(medicamento),dosis,duracion)
        .then(()=>{
            btnAgregarMedicamento.disabled = false;
            btnAgregarMedicamento.innerHTML = 'Agregar(+)';

            //funciones.Aviso('Medicamento agregado exitosamente!!');
            getTblTempReceta();

            document.getElementById('txtRecetaMedicamento').value ='';
            document.getElementById('txtRecetaDosis').value ='';
            document.getElementById('txtRecetaDuracion').value ='';

            document.getElementById('txtRecetaMedicamento').focus();
        })
        .catch(()=>{
            funciones.AvisoError('No se pudo agregar el medicamento')
            btnAgregarMedicamento.disabled = false;
            btnAgregarMedicamento.innerHTML = 'Agregar(+)';
        })

    });
   
   

    let imprimeReceta = 'NO';
    let btnGuardarReceta = document.getElementById('btnGuardarReceta');
    let btnGuardarRecetaPrint = document.getElementById('btnGuardarRecetaPrint');
    btnGuardarRecetaPrint.addEventListener('click',()=>{
        
        imprimeReceta = 'SI';
        
        

        funciones.Confirmacion("¿Está seguro que desea Guardar esta nueva receta?")
        .then((value)=>{
            if(value==true){

                btnGuardarRecetaPrint.disabled = true;
                btnGuardarRecetaPrint.innerHTML = '<i class="fal fa-save fa-spin"></i>';

                insert_nueva_receta(GlobalSelectedIdReceta)
                .then(()=>{
                    
                        funciones.Aviso('Receta guardada exitosamente!!');

                        btnGuardarRecetaPrint.disabled = false;
                        btnGuardarRecetaPrint.innerHTML = '<i class="fal fa-print"></i> Guardar e Imprimir'

                        $("#modal_nueva_receta").modal('hide');
                    
                        db_deleteTempRecetaAll();

                        try {
                            receta_imprimir(GlobalCodSucursal,GlobalSelectedIdReceta,'DESKTOP');        
                        } catch (error) {
                            
                        };
                                        
                })
                .catch(()=>{
                   
                    btnGuardarRecetaPrint.disabled = false;
                    btnGuardarRecetaPrint.innerHTML = '<i class="fal fa-print"></i> Guardar e Imprimir'
                   
                    funciones.AvisoError('No se puede guardar');

                })

            }
        })
    });


    btnGuardarReceta.addEventListener('click',()=>{
        
        
        funciones.Confirmacion('¿Está seguro que desea Guardar esta Receta?')
        .then((value)=>{
            if(value==true){
        
                btnGuardarReceta.disabled = true;
                btnGuardarReceta.innerHTML = '<i class="fal fa-save fa-spin"></i>';
        

                let obs = '';

                let peso = document.getElementById('txtCPeso').value || '0';
                let talla = document.getElementById('txtCTalla').value || '0';
                let motivo = funciones.limpiarTexto(document.getElementById('txtCMotivo').value) || 'SN';
                let diagnostico = funciones.limpiarTexto(document.getElementById('txtCDiagnostico').value) || 'SN'

                let txtCHEA = document.getElementById('txtCHEA').value || 'SN';
                let txtCAntecedentes = document.getElementById('txtCAntecedentes').value || 'SN';
                let txtCEF = document.getElementById('txtCEF').value || 'SN';
                let txtCIC = document.getElementById('txtCIC').value || 'SN';
                let txtCPTX = document.getElementById('txtCPTX').value || 'SN';

                
                    insert_receta(GlobalSelectedCodPaciente,funciones.limpiarTexto(obs),GlobalCorrelativo,peso,talla,motivo,diagnostico,txtCHEA, txtCAntecedentes, txtCEF, txtCIC, txtCPTX,'')
                    .then(async(data)=>{
                        
                        funciones.Aviso('Consulta Guardad exitosamente!!');
    
                        btnGuardarReceta.disabled = false;
                        btnGuardarReceta.innerHTML = '<i class="fal fa-save"></i> Guardar Consulta';
                        
                        
                        
                        //$("#modalNuevaReceta").modal('hide');
                        
                        //regresa a la tab inicial en la consulta
                        document.getElementById('home-tab').click();
    
                        switch (GlobalSelectedTab) {
                            case 'ESPERA':

                                if(Number(GlobalSelectedIdTurno)==0){
                                }else{
                                    delete_turno(GlobalSelectedIdTurno);
                                };

                                document.getElementById('btnMenEspera').click();
                                break;
                            case 'PRECONSULTA':
                                document.getElementById('btnMenPreconsultas').click();
                                break;
                            case 'PACIENTES':
                                document.getElementById('btnMenPacientes').click();
                                break;
                            case 'REPORTES':
                                document.getElementById('btnMenReportes').click();
                                break;
                        }
                                            
    
                        getCorrelativoCoddoc();
                        imprimeReceta ='NO';

                        db_deleteTempRecetaAll();
    
                        GlobalSelectedIdPreconsulta = 0;

                        funciones.Confirmacion('¿Desea agregar una receta a esta consulta?')
                        .then((value)=>{
                            if(value==true){

                                let id = Number(data.insertId)
                                GlobalSelectedIdReceta = id;
                                agregar_nueva_receta_consulta(id);

                            }
                        })
    
                    })
                    .catch(()=>{
                        btnGuardarReceta.disabled = false;
                        btnGuardarReceta.innerHTML = '<i class="fal fa-save"></i> Guardar Consulta';
                        
                        
                        funciones.AvisoError('No se pudo guardar la receta');

                    })

            

            
               
            }
        })
    });


    getCorrelativoCoddoc();


    //HISTORIAL RECETAS
    document.getElementById('btnCerrarModalHistorialRecetaNueva').addEventListener('click',()=>{$('#modalHistorialRecetas').modal('hide');});
    document.getElementById('btnCerrarModalDetConsulta').addEventListener('click',()=>{$('#modalDatosConsulta').modal('hide')});

    funciones.slideAnimationTabs();

  
  
    document.getElementById('txtFechaProximaCita').value = funciones.getFecha();
    // Reportes
    document.getElementById('txtFechaInicio').value = funciones.getFecha();
    document.getElementById('txtFechaFinal').value = funciones.getFecha();

    let btnRptConsultas = document.getElementById('btnRptConsultas');
    btnRptConsultas.addEventListener('click',()=>{
        getTblRptConsulta();
    });

    let btnRptMorbilidades = document.getElementById('btnRptMorbilidades');
    btnRptMorbilidades.addEventListener('click',()=>{
        funciones.hablar('Próximamente tendrás disponible esta funcionalidad');
        funciones.Aviso('Próximamente tendrás disponible esta funcionalidad');
    });


    //EDICION DE PACIENTES

    let btnEditarCliente = document.getElementById('btnEditarCliente');
    btnEditarCliente.addEventListener('click',()=>{
        
       

        funciones.Confirmacion('¿Está seguro que desea EDITAR este Paciente?')
        .then((value)=>{
            if(value==true){

                let nombre = document.getElementById('txtEditNomclie');
                let direccion = document.getElementById('txtEditDirclie').value || 'SN';
                let cmbDepartamento = document.getElementById('cmbEditDepartamento');

                let fechanacimiento = funciones.devuelveFecha('txtEditFechaNacimiento');
                let telefono = document.getElementById('txtEditTelefono').value || '0';

                btnEditarCliente.disabled = true;
                btnEditarCliente.innerHTML = '<i class="fal fa-save fa-spin"></i>';

                edit_paciente(GlobalSelectedCodPaciente,funciones.limpiarTexto(nombre.value),fechanacimiento,telefono,funciones.limpiarTexto(direccion),cmbDepartamento.value)
                .then(()=>{
                    funciones.Aviso('Paciente editado exitosamente!!')
                    btnEditarCliente.disabled = false;
                    btnEditarCliente.innerHTML = '<i class="fal fa-save"></i>';
                    $('#modalEditarPaciente').modal('hide');

                    document.getElementById('txtBuscarReceta').value = nombre.value;
                    getTblPacientes();
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo guardar')
                    btnEditarCliente.disabled = false;
                    btnEditarCliente.innerHTML = '<i class="fal fa-save"></i>';
                })
               
            }
        })
    });

    //EDICION DE PACIENTES
  
    keyboard_listeners();

};

function keyboard_listeners(){
    //Mousetrap.bind('enter', function(e) {  
    //});

    //form receta
    document.getElementById('txtRecetaMedicamento').addEventListener('keyup',(e)=>{
        if (e.keyCode === 13) {
           document.getElementById('txtRecetaDosis').focus();
        };
        if (e.key === 'Enter') {
            document.getElementById('txtRecetaDosis').focus();
        };
    });

    document.getElementById('txtRecetaDosis').addEventListener('keyup',(e)=>{
        if (e.keyCode === 13) {
           document.getElementById('txtRecetaDuracion').focus();
        };
        if (e.key === 'Enter') {
            document.getElementById('txtRecetaDuracion').focus();
        };
    });

    document.getElementById('txtRecetaDuracion').addEventListener('keyup',(e)=>{
        if (e.keyCode === 13) {
           document.getElementById('btnAgregarMedicamento').focus();
        };
        if (e.key === 'Enter') {
            document.getElementById('btnAgregarMedicamento').focus();
        };
    });





    //form consulta
    document.getElementById('txtCPeso').addEventListener('keyup',(e)=>{
        if (e.keyCode === 13) {
            document.getElementById('txtCTalla').focus();
         };
         if (e.key === 'Enter') {
             document.getElementById('txtCTalla').focus();
         };
    });
    document.getElementById('txtCTalla').addEventListener('keyup',(e)=>{
    if (e.keyCode === 13) {
            document.getElementById('txtCMotivo').focus();
         };
         if (e.key === 'Enter') {
             document.getElementById('txtCMotivo').focus();
         };
    });
    document.getElementById('txtCMotivo').addEventListener('keyup',(e)=>{
        if (e.keyCode === 13) {
            document.getElementById('txtCHEA').focus();
         };
         if (e.key === 'Enter') {
             document.getElementById('txtCHEA').focus();
         };
    });
    document.getElementById('txtCHEA').addEventListener('keyup',(e)=>{
        if (e.keyCode === 13) {
            document.getElementById('txtCAntecedentes').focus();
         };
         if (e.key === 'Enter') {
             document.getElementById('txtCAntecedentes').focus();
         };
    });
    document.getElementById('txtCAntecedentes').addEventListener('keyup',(e)=>{
        if (e.keyCode === 13) {
            document.getElementById('txtCEF').focus();
         };
         if (e.key === 'Enter') {
             document.getElementById('txtCEF').focus();
         };
    });
    document.getElementById('txtCEF').addEventListener('keyup',(e)=>{
        if (e.keyCode === 13) {
            document.getElementById('txtCDiagnostico').focus();
         };
         if (e.key === 'Enter') {
             document.getElementById('txtCDiagnostico').focus();
         };
    });
    document.getElementById('txtCDiagnostico').addEventListener('keyup',(e)=>{
        if (e.keyCode === 13) {
            document.getElementById('txtCIC').focus();
         };
         if (e.key === 'Enter') {
             document.getElementById('txtCIC').focus();
         };
    });
    document.getElementById('txtCIC').addEventListener('keyup',(e)=>{
        if (e.keyCode === 13) {
            document.getElementById('txtCPTX').focus();
         };
         if (e.key === 'Enter') {
             document.getElementById('txtCPTX').focus();
         };
    });
    document.getElementById('txtCPTX').addEventListener('keyup',(e)=>{
        if (e.keyCode === 13) {
            document.getElementById('btnGuardarReceta').focus();
         };
         if (e.key === 'Enter') {
             document.getElementById('btnGuardarReceta').focus();
         };
    });



};


function getCorrelativoCoddoc(){
    get_correlativo(GlobalCoddoc)
    .then((correlativo)=> {
        document.getElementById('lbCorrelativo').innerText = correlativo;
        GlobalCorrelativo = correlativo;
    })
    .catch(()=>{
        document.getElementById('lbCorrelativo').innerText = 0;
        GlobalCorrelativo = 0;
    })
}

function initView(){
    getView();
    addListeners();
    //getTblPacientes();
    getTblTurnos();
    //getTblPreconsultas();
    
};


function getTblPacientes(){
    
    let filtro = document.getElementById('txtBuscarReceta').value || '';
    if(filtro==''){
        return;
    };


    let container = document.getElementById('tblListaPacientes');
    container.innerHTML = GlobalLoader;
    let str = '';

    let stclass = '';

    getDataPacientes()
    .then((data)=>{
        data.map((r)=>{
            if(r.TOKEN==GlobalCodSucursal){stclass=''}else{stclass='text-danger'};
            str += `
                <tr class="border-secondary border-bottom border-left-0 border-right-0 border-top-0">
                    <td class="${stclass}">${r.NOMCLIE}
                        <br>
                            <small class="">${r.DIRCLIE})</small>
                        <br>
                            <small class="negrita text-danger">${funciones.getEdad(r.FECHANACIMIENTO)} (${funciones.convertDate(r.FECHANACIMIENTO)})</small>
                        <br>
                            <small class="negrita text-primary">${r.TELEFONOS}</small>
                        <br>

                        <div class="row">
                            <div class="col-4">
                                <button class="btn btn-info btn-sm hand shadow" onclick="getNuevaReceta('${r.IDCLIENTE}','${r.NOMCLIE}','0','${funciones.getEdad(r.FECHANACIMIENTO)}')">
                                    <i class="fal fa-edit"></i> Consulta
                                </button>
                            </div>
                            <div class="col-4">
                                <button class="btn btn-secondary btn-sm hand shadow" onclick="getTblHistorial('${r.IDCLIENTE}','${r.NOMCLIE}','${r.TELEFONOS}')">
                                    <i class="fal fa-folder-open"></i>Historial
                                </button>
                            </div>
                            <div class="col-4">
                                <button class="btn btn-success btn-sm hand shadow" onclick="getDataPaciente('${r.IDCLIENTE}','${r.NOMCLIE}','${r.DIRCLIE}','${r.CODDEPTO}','${r.FECHANACIMIENTO}','${r.TELEFONOS}')">
                                    <i class="fal fa-edit"></i>Editar
                                </button>
                            </div>
                        </div>
                        
                    </td>
                    
                    <td>
                        <button class="btn btn-danger btn-circle btn-sm hand shadow" onclick="delete_paciente('${r.IDCLIENTE}')" id="${'p' + r.IDCLIENTE.toString()}">
                            <i class="fal fa-trash"></i>
                        </button>
                    </td>
                    
                </tr>
            `
        })
        container.innerHTML = str;
        funciones.OcultarRows('tblPacientes');
    })
    .catch((error)=>{
        console.log(error);
        container.innerHTML = 'No se pudieron cargar los datos...'
    })
    

    
};

async function getNuevaReceta(idcliente,nombre,idturno, edad,seguro){

    document.getElementById('tab-consultamen').click();


    GlobalSelectedCodPaciente = idcliente;
    GlobalSelectedConsultaSeguro = 'DOCTOR';

    document.getElementById('lbPaciente').innerText = nombre;
    document.getElementById('lbEdadPaciente').innerText = edad;

    document.getElementById('txtRecetaObs').value = '';

    document.getElementById('txtCPeso').value = '';
    document.getElementById('txtCTalla').value = '';
    document.getElementById('txtCMotivo').value = '';
    document.getElementById('txtCDiagnostico').value = '';

    document.getElementById('txtCHEA').value = '';
    document.getElementById('txtCAntecedentes').value = '';
    document.getElementById('txtCEF').value = '';
    document.getElementById('txtCIC').value = '';
    document.getElementById('txtCPTX').value = '';


    GlobalSelectedIdTurno = Number(idturno);
    GlobalSelectedIdPreconsulta = 0;

    getTblTempReceta();

    await getTblHistorialConsultas(idcliente)

    //$('#modalNuevaReceta').modal('show');


};

function agregar_nueva_receta_consulta(idconsulta){

    GlobalSelectedIdReceta = Number(idconsulta);

    $("#modal_nueva_receta").modal('show');
    
    
    getTblTempReceta();

};

function insert_nueva_receta(id){

    return new Promise((resolve,reject)=>{
        db_selectTempReceta()
        .then((response)=>{
                
            let receta = JSON.stringify(response);
            let proximacita = funciones.devuelveFecha('txtFechaProximaCita');
            let obs = funciones.limpiarTexto(document.getElementById('txtRecetaObs').value) || '';

            axios.post('/update_receta_consulta',{
                sucursal:GlobalCodSucursal,
                id:id,
                receta:receta,
                proximacita:proximacita,
                obs:obs
            })
            .then((response) => {   
                let data = response.data; 
               
                if(Number(data.affectedRows)==0){
                    reject();
                }else{
                    resolve(data);
                }
            }, (error) => {
                reject(error);
            });
        })
        .catch(()=>{
            reject();
        })
    })

};

function getDataPaciente(id,nombre,direccion,coddepto,fechanacimiento,telefono){

   

    GlobalSelectedCodPaciente = Number(id);
    document.getElementById('txtEditNomclie').value = nombre;
    document.getElementById('txtEditDirclie').value = direccion;
    document.getElementById('cmbEditDepartamento').value = coddepto;
    document.getElementById('txtEditTelefono').value = telefono;
    document.getElementById('txtEditFechaNacimiento').value = fechanacimiento.replace('T06:00:00.000Z','').replace('T00:00:00.000Z','');    

        
    $('#modalEditarPaciente').modal('show');

};

function getDataPacientes(){

   
    let filtro = document.getElementById('txtBuscarReceta').value;

    return new Promise((resolve, reject) => {

        axios.post('/select_lista_pacientes',{
            sucursal:GlobalCodSucursal,
            filtro:filtro
        })
        .then((response) => {   
            let data = response.data; 
            resolve(data);
        }, (error) => {
            reject(error);
        });
    })
    
};

function insert_paciente(nombre,fechanacimiento,telefono,direccion,coddepto){
    return new Promise((resolve,reject)=>{
        axios.post('/insert_paciente',{
            sucursal:GlobalCodSucursal,
            nombre:nombre,
            fechanacimiento:fechanacimiento,
            telefonos:telefono,
            direccion:direccion,
            coddepto:coddepto
        })
        .then((response) => {          
            resolve();             
        }, (error) => {
            reject();
        });
    });
};

function edit_paciente(id,nombre,fechanacimiento,telefono,direccion,coddepto){
    return new Promise((resolve,reject)=>{
        axios.post('/edit_paciente',{
            sucursal:GlobalCodSucursal,
            nombre:nombre,
            fechanacimiento:fechanacimiento,
            telefonos:telefono,
            direccion:direccion,
            coddepto:coddepto,
            id:id
        })
        .then((response) => {          
            resolve();             
        }, (error) => {
            reject();
        });
    });
};

function delete_paciente(id){
   
    funciones.solicitarClave()
    .then((name)=>{
        if(name==GlobalConfPa){

            funciones.Confirmacion("¿Está seguro que desea ELIMINAR este Paciente y todo su historial?")
            .then((value)=>{
                if(value==true){
                    let btn = document.getElementById('p' + id.toString())
                    btn.disabled = true;
                    btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;
                    
                        axios.post('/delete_paciente',{
                            sucursal:GlobalCodSucursal,
                            id:id
                        })
                        .then((response) => {   
                            let data = response.data; 
                            getTblPacientes();
                        }, (error) => {
                            funciones.AvisoError('No se pudo eliminar este item')
                            btn.disabled = false;
                            btn.innerHTML = `<i class="fal fa-trash"></i>`;
                        
                        });
        
                }
            })

        }else{
            funciones.AvisoError('Clave inválida');
            return;
        }
    })
    .catch((name)=>{
        funciones.AvisoError('Clave inválida');
        return;
    })
    
   
    
    
};

function insert_temp_receta(medicamento,dosis,duracion){
    return new Promise((resolve,reject)=>{
        axios.post('/insert_temp_receta',{
            sucursal:GlobalCodSucursal,
            medicamento:medicamento,
            dosis:dosis,
            duracion:duracion
        })
        .then((response) => {          
            resolve();             
        }, (error) => {
            reject();
        });
    });
};

function delete_TempReceta(id){
    funciones.Confirmacion("¿Está seguro que desea quitar este medicamento de la lista?")
    .then((value)=>{
        if(value==true){
            let btn = document.getElementById('rtemp' + id.toString())
            btn.disabled = true;
            btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;
            
          
                db_deleteTempReceta(id)
                .then(()=>{
                    getTblTempReceta();
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo eliminar este item')
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fal fa-trash"></i>`;
                })

        }
    })
    
    
};


function getDataTempReceta(){
    return new Promise((resolve, reject) => {

        axios.post('/select_temp_receta',{
            sucursal:GlobalCodSucursal
        })
        .then((response) => {   
            let data = response.data; 
            resolve(data);
        }, (error) => {
            reject(error);
        });
    })
    
};


function getTblTempReceta(){
    let container = document.getElementById('tblReceta');
    container.innerHTML = GlobalLoader;
    
    let str = '';

    db_selectTempReceta()
    .then((data) => {
        data.map((r)=>{
            str += `
                <tr class="border-info border-top-0 border-right-0">
                    <td>${r.DESPROD}</td>
                    <td>${r.DOSIS}</td>
                    <td>${r.DURACION}</td>
                    <td>
                        <button class="btn btn-sm btn-danger btn-circle hand shadow" onclick="delete_TempReceta('${r.ID}')" id="${'rtemp' + r.ID.toString()}">
                            <i class="fal fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `
        })
        container.innerHTML =str;
    })
    .catch(() => {
        container.innerHTML = 'No se pudieron cargar los datos...'
    })

};


function insert_receta(idcliente,obs,correlativo,peso,talla,motivo,diagnostico,historia,antecedentes,examenf,impclinica,plantx,receta){
    return new Promise((resolve,reject)=>{
        axios.post('/insert_receta',{
            sucursal:GlobalCodSucursal,
            idcliente:idcliente,
            obs:obs,
            fecha:funciones.getFecha(),
            hora:funciones.getHora(),
            correlativo:correlativo,
            coddoc:GlobalCoddoc,
            peso:peso,
            talla:talla,
            motivo:motivo,
            diagnostico: diagnostico,
            historia:historia,
            antecedentes:antecedentes,
            examenf:examenf,
            impclinica:impclinica,
            plantx:plantx,
            idmorbilidad:0,
            seguro: GlobalSelectedConsultaSeguro,
            json_receta:receta
        })
        .then((response) => {          
            resolve(response.data);             
        }, (error) => {
            reject();
        });
    });
};

function delete_all_TempReceta(){
  
                axios.post('/delete_all_temp_receta',{
                    sucursal:GlobalCodSucursal
                })
                .then((response) => {   
                    let data = response.data; 
                    
                }, (error) => {
  
                });
 
    
};


//Historial

function getDataHistorialReceta(codcliente){
    return new Promise((resolve, reject) => {

        axios.post('/select_historial_recetas',{
            sucursal:GlobalCodSucursal,
            codclie:codcliente
        })
        .then((response) => {   
            let data = response.data; 
            resolve(data);
        }, (error) => {
            reject(error);
        });
    })
    
};

function getTblHistorial(idcliente,nomclie,telefono){

    GlobalSelectedCodPaciente = idcliente;
    GlobalSelectedNomPaciente = nomclie;

    let container = document.getElementById('tblHistorialRecetas');
    container.innerHTML = GlobalLoader;

    let str ='';
    getDataHistorialReceta(idcliente)
    .then(async(data)=> {  
        data.map((r)=> {
            let strClass = ''; let strReceta = '';
            let receta = r.RECETA;
            if(receta==''){strClass='';strReceta='hidden'}else{strClass='hidden';strReceta=''};
            str += `
            <div class="card card-rounded shadow p-2 border-especial">
                <div class="card-body">
                    <div class="row">
                        <div class="col-5">
                            <div class="form-group">
                                <i class="fal fa-folder"></i> <label class="">Fecha:</label>
                                <b>${funciones.convertDate(r.FECHA)}</b>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="form-group">
                                <small class="negrita">Hora:${r.HORA}</small>
                            </div>
                        </div>
                        
                        <div class="col-2 text-right"> 
                            <button class="btn btn-danger btn-circle btn-md hand shadow" onclick="receta_eliminar('${r.IDRECETA}')" id="${'r' + r.IDRECETA.toString()}">
                                <i class="fal fa-trash"></i>
                            </button>
                        </div> 

                    </div>
                    <div class="row">
                            <div class="col-6">
                                    <button class="col-12 btn btn-secondary btn-sm hand shadow" onclick="receta_consulta('${funciones.convertDate(r.FECHA)}','${r.PESO}','${r.TALLA}','${r.MOTIVO.replace(/(\r\n|\n|\r)/gm, "*-")}','${r.DIAGNOSTICO.replace(/(\r\n|\n|\r)/gm, "*-")}','${funciones.quitarEnter(r.HISTORIAENF)}','${funciones.quitarEnter(r.ANTECEDENTES)}','${funciones.quitarEnter(r.EXAMENFISICO)}','${funciones.quitarEnter(r.IMPRESIONCLINICA)}','${funciones.quitarEnter(r.PLANTX)}')">
                                        <i class="fal fa-edit"></i> Consulta
                                    </button>
                            </div>
                            <div class="col-6">
                                    <button class="col-12 btn btn-especial btn-sm hand shadow ${strClass}" onclick="agregar_nueva_receta_consulta('${r.ID}')" data-dismiss="modal">
                                        <i class="fal fa-plus"></i> Recetar
                                    </button>
                            </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-6">    
                            <button class="col-12 btn btn-success btn-sm hand shadow ${strReceta}" onclick="receta_whatsapp('${nomclie}','${telefono}',${r.ID})">
                                <i class="fal fa-paper-plane"></i> Enviar Whatsapp
                            </button>
                        </div>        
                        <div class="col-6">    
                            <button class="col-12 btn btn-info btn-sm hand shadow ${strReceta}" onclick="receta_imprimir('${r.TOKEN}','${r.ID}','DESKTOP')">
                                <i class="fal fa-print"></i> Imprimir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="solid">  
                   `
        })
        container.innerHTML = str;
        try {
            grafica_peso(data);
            grafica_talla(data);
        } catch (error) {
            
        }
       
    })
    .catch(()=> {
        container.innerHTML = 'No se pudieron cargar los datos...';
    })

    document.getElementById('lbPacienteHistorial').innerText = nomclie;
    $('#modalHistorialRecetas').modal('show');


    /*
    str += `
                <div class="card card-rounded shadow hand p-2 bg-carpeta">
                    
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                            <i class="fal fa-folder"></i> <label class="">Fecha:</label>
                                <b>${funciones.convertDate(r.FECHA)}</b>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                                <small class="negrita">Hora:${r.HORA}</small>
                                <br>
                                <small class="negrita">No.:${r.IDRECETA}</small>
                            </div>
                        </div>

                        <div class="col-2"> 
                            <button class="btn btn-danger btn-circle btn-md hand shadow" onclick="receta_eliminar('${r.IDRECETA}')" id="${'r' + r.IDRECETA.toString()}">
                                <i class="fal fa-trash"></i>
                            </button>
                        </div> 

                    </div>
                    <i class="fal fa-folder-open big-centered-icon"></i>
                    <br>
                    <div class="row">

                        <div class="col-3">  
                            <button class="btn btn-secondary btn-sm hand shadow" onclick="receta_consulta('${funciones.convertDate(r.FECHA)}','${r.PESO}','${r.TALLA}','${r.MOTIVO.replace(/(\r\n|\n|\r)/gm, "*-")}','${r.DIAGNOSTICO.replace(/(\r\n|\n|\r)/gm, "*-")}','${funciones.quitarEnter(r.HISTORIAENF)}','${funciones.quitarEnter(r.ANTECEDENTES)}','${funciones.quitarEnter(r.EXAMENFISICO)}','${funciones.quitarEnter(r.IMPRESIONCLINICA)}','${funciones.quitarEnter(r.PLANTX)}')">
                                <i class="fal fa-edit"></i>Consulta
                            </button>
                        </div>
                        <div class="col-3"> 
                            <button class="btn btn-success btn-sm hand shadow ${strReceta}" onclick="receta_whatsapp('${nomclie}','${telefono}',${r.ID})">
                                <i class="fal fa-paper-plane"></i>Whatsapp
                            </button>
                        </div>
                        <div class="col-3"> 
                            <button class="btn btn-info btn-sm hand shadow ${strReceta}" onclick="receta_imprimir('${r.TOKEN}','${r.ID}','DESKTOP')">
                                <i class="fal fa-print"></i>Imprimir
                            </button>
                        </div>
                        <div class="col-3"> 
                            <button class="btn btn-especial btn-sm hand shadow ${strClass}" onclick="agregar_nueva_receta_consulta('${r.ID}')" data-dismiss="modal">
                                <i class="fal fa-plus"></i>Recetar
                            </button>
                        </div>

                       

                    </div>

                </div>
                <hr class="solid">  
                   `
    */

};


function getDataHistorialConsultas(codcliente){
    return new Promise((resolve, reject) => {

        axios.post('/select_historial_consultas',{
            sucursal:GlobalCodSucursal,
            codclie:codcliente
        })
        .then((response) => {   
            let data = response.data; 
            resolve(data);
        }, (error) => {
            reject(error);
        });
    })
    
};

function getTblHistorialConsultas(idcliente){

    GlobalSelectedCodPaciente = idcliente;
  
    let container = document.getElementById('containerHistorialP');
    container.innerHTML = GlobalLoader;

    // '','','','',''
 
    let str ='';
    getDataHistorialConsultas(idcliente)
    .then(async(data)=> {  
        data.map((r)=> {
            str += `
            <div class="card card-rounded shadow p-2 bg-carpeta">
                <i class="fal fa-folder-open big-centered-icon"></i>
                <table class="table"><tbody>
                    <tr class="">
                        <td><b class="negrita text-danger">${funciones.convertDate(r.FECHA)} - Hora:${r.HORA}</b>
                            <div class="row">
                                <div class="col-6">
                                    PESO: ${r.PESO}
                                </div>
                                <div class="col-6">
                                    TALLA: ${r.TALLA}
                                </div>
                            </div>
                                    <br>
                                <small class="negrita">Motivo:</small>
                                <label>${funciones.quitarEnter(r.MOTIVO)}</label>
                                <br>
                                <small class="negrita">Historia de la Enfermedad:</small>
                                <label>${funciones.quitarEnter(r.HISTORIAENF)}</label>
                                <br>
                                <small class="negrita">Antecedentes:</small>
                                <label>${funciones.quitarEnter(r.ANTECEDENTES)}</label>
                                <br>
                                <small class="negrita">Exámen Físico:</small>
                                <label>${funciones.quitarEnter(r.EXAMENFISICO)}</label>
                                <br>
                                <small class="negrita">Plan Diagnóstico:</small>
                                <label>${funciones.quitarEnter(r.DIAGNOSTICO)}</label>                             
                                <br>
                                <small class="negrita">Historia Clínica:</small>
                                <label>${funciones.quitarEnter(r.IMPRESIONCLINICA)}</label>
                                <br>
                                <small class="negrita">Plan Tratamiento:</small>
                                <label>${funciones.quitarEnter(r.PLANTX)}</label>
                            </div>
                        </td>
            
                    </tr>
                </tbody></table>
            </div>
            <hr class"solid">`
        })
        container.innerHTML = str;
       
       
    })
    .catch(()=> {
        container.innerHTML = 'No se pudieron cargar los datos...';
    })


    /**
    str += `<tr class="border-primary border-left-0 border-right-0 border-top-0 border-bottom">
                        <td><b class="negrita text-danger">${funciones.convertDate(r.FECHA)} - Hora:${r.HORA}</b>
                            <div class="row">
                                <div class="col-6">
                                    PESO: ${r.PESO}
                                </div>
                                <div class="col-6">
                                    TALLA: ${r.TALLA}
                                </div>
                            </div>
                                    <br>
                                <small class="negrita">Motivo:</small>
                                <label>${funciones.quitarEnter(r.MOTIVO)}</label>
                                <br>
                                <small class="negrita">Historia de la Enfermedad:</small>
                                <label>${funciones.quitarEnter(r.HISTORIAENF)}</label>
                                <br>
                                <small class="negrita">Antecedentes:</small>
                                <label>${funciones.quitarEnter(r.ANTECEDENTES)}</label>
                                <br>
                                <small class="negrita">Exámen Físico:</small>
                                <label>${funciones.quitarEnter(r.EXAMENFISICO)}</label>
                                <br>
                                <small class="negrita">Plan Diagnóstico:</small>
                                <label>${funciones.quitarEnter(r.DIAGNOSTICO)}</label>                             
                                <br>
                                <small class="negrita">Historia Clínica:</small>
                                <label>${funciones.quitarEnter(r.IMPRESIONCLINICA)}</label>
                                <br>
                                <small class="negrita">Plan Tratamiento:</small>
                                <label>${funciones.quitarEnter(r.PLANTX)}</label>
                            </div>
                        </td>
            
                    </tr>`

     */

};





function receta_consulta(fecha,peso,talla,motivo,diagnostico,historia,antecedentes,examenf,impclinica,plantx){

    document.getElementById('lbCFecha').innerText = fecha;
    document.getElementById('lbCPeso').innerText = peso;
    document.getElementById('lbCTalla').innerText = talla;
    document.getElementById('lbCMotivo').value = motivo;
    document.getElementById('lbCDiagnostico').value = diagnostico;

    document.getElementById('lbCHEA').value = historia;
    document.getElementById('lbCAntecedentes').value = antecedentes;
    document.getElementById('lbCEF').value = examenf;
    document.getElementById('lbCIC').value = impclinica;
    document.getElementById('lbCPTX').value = plantx;

    $('#modalDatosConsulta').modal('show');

};

function receta_whatsapp(nomclie,telefono,receta){

    $('#modalHistorialRecetas').modal('hide');
    
  

    funciones.enviarRecetaWhatsapp2(nomclie,telefono,receta);

};



function receta_eliminar(id){

    $('#modalHistorialRecetas').modal('hide');

    funciones.solicitarClave()
    .then((name)=>{
        if(name==GlobalConfPa){

            funciones.Confirmacion("¿Está seguro que desea ELIMINAR esta receta?")
            .then((value)=>{
                if(value==true){
                    let btn = document.getElementById('r' + id.toString())
                    btn.disabled = true;
                    btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;
                    
                        axios.post('/delete_receta',{
                            sucursal:GlobalCodSucursal,
                            id:id
                        })
                        .then((response) => {   
                            let data = response.data; 
                            getTblHistorial(GlobalSelectedCodPaciente,GlobalSelectedNomPaciente);
                        }, (error) => {
                            funciones.AvisoError('No se pudo eliminar esta Receta')
                            btn.disabled = false;
                            btn.innerHTML = `<i class="fal fa-trash"></i>`;
                        
                        });
        
                }
            })

        }else{
            funciones.AvisoError('Clave inválida');
            return;
        }
    })
    .catch((name)=>{
        funciones.AvisoError('Clave inválida');
        return;
    })

  

};



function grafica_peso(data){
   
  
    let container = document.getElementById('containerGrafPeso');
    
    container.innerHTML = '';
    container.innerHTML ='<canvas id="containerGraficaPeso" height="100"></canvas>';

    //container.innerHTML = '<canvas id="myChart1" width="40" height="40"></canvas>';

    let label = []; let valor = []; let bgColor = [];
      
    data.map((r)=>{
            label.push(r.IDRECETA);
            valor.push( Number(r.PESO));
            bgColor.push('red')
    })


    var ctx = document.getElementById('containerGraficaPeso').getContext('2d');
    var myChart = new Chart(ctx, {
        plugins: [ChartDataLabels],
        type: 'line',
        data: {
            labels: label.reverse(),
            datasets: [{
                data:valor.reverse(),
                borderColor: 'red',
                backgroundColor:bgColor
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'GRAFICA POR PESO'
                  },
                // Change options for ALL labels of THIS CHART
                datalabels: {
                  anchor:'end',
                  align:'end',
                  listeners: {
                    click: function(context) {
                      // Receives `click` events only for labels of the first dataset.
                      // The clicked label index is available in `context.dataIndex`.
                      //console.log(context);
                    }
                  },
                  formatter: function(value) {
                    return value;
                    // eq. return ['line1', 'line2', value]
                  },
                  color: function(context) {
                    return context.dataset.backgroundColor;
                  },
                  //borderColor: 'white',
                  borderRadius: 25,
                  borderWidth: 0,
                  font: {
                    weight: 'bold'
                  }
                }
            }
        }
    });


    

};

function grafica_talla(data){
   
  
    let container = document.getElementById('containerGrafTalla');
    
    container.innerHTML = '';
    container.innerHTML ='<canvas id="containerGraficaTalla" height="100"></canvas>';

    //container.innerHTML = '<canvas id="myChart1" width="40" height="40"></canvas>';

    let label = []; let valor = []; let bgColor = [];
      
    data.map((r)=>{
            label.push(r.IDRECETA);
            valor.push( Number(r.TALLA));
            bgColor.push('blue')
    })


    var ctx = document.getElementById('containerGraficaTalla').getContext('2d');
    var myChart = new Chart(ctx, {
        plugins: [ChartDataLabels],
        type: 'line',
        data: {
            labels: label.reverse(),
            datasets: [{
                data:valor.reverse(),
                borderColor: 'blue',
                backgroundColor:bgColor
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'GRAFICA POR TALLA'
                  },
                // Change options for ALL labels of THIS CHART
                datalabels: {
                  anchor:'end',
                  align:'end',
                  listeners: {
                    click: function(context) {
                      // Receives `click` events only for labels of the first dataset.
                      // The clicked label index is available in `context.dataIndex`.
                      console.log(context);
                    }
                  },
                  formatter: function(value) {
                    return value;
                    // eq. return ['line1', 'line2', value]
                  },
                  color: function(context) {
                    return context.dataset.backgroundColor;
                  },
                  //borderColor: 'white',
                  borderRadius: 25,
                  borderWidth: 0,
                  font: {
                    weight: 'bold'
                  }
                }
            }
        }
    });


    

};




function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


//********************* */
//turnos de Espera
//********************* */

function getDataTurnos(){
    return new Promise((resolve, reject) => {

        axios.post('/select_lista_espera',{
            sucursal:GlobalCodSucursal
        })
        .then((response) => {   
            let data = response.data; 
            resolve(data);
        }, (error) => {
            reject(error);
        });
    })
    
};

function getTblTurnos(){
    

    let container = document.getElementById('tblEsperaData');
    container.innerHTML = GlobalLoader;
    let lbTotalTurnos = document.getElementById('lbTotalTurnos');
    lbTotalTurnos.innerText = '--';

    let lbMenTotalEspera = document.getElementById('lbMenTotalEspera');
    lbMenTotalEspera.innerText= '-';

    let str = '';
    let conteo = 0;

    getDataTurnos()
    .then((data)=>{
        data.map((r)=>{
            conteo += 1;
            let rowid = r.ID.toString() + 'row';
            str += `
                <tr class="border-secondary border-bottom border-left-0 border-right-0 border-top-0">
                    <td>(T:${conteo}) - ${r.NOMCLIE}
                        <div class="row">
                            <div class="col-4">
                                <small class="negrita text-danger">Temp: ${r.TEMPERATURA}</small>
                            </div>
                            <div class="col-4">
                                <small class="negrita text-danger">P/A: ${r.PA}</small>
                            </div>
                            <div class="col-4">
                                <small class="negrita text-info">Hora: ${r.HORA}</small>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-4">
                                <button class="btn btn-secondary btn-sm hand shadow" onclick="getTblHistorial('${r.IDCLIENTE}','${r.NOMCLIE}')">
                                    <i class="fal fa-folder-open"></i>Histor
                                </button>        
                            </div>
                            <div class="col-4">
                                <button class="btn btn-info btn-sm hand shadow" onclick="getNuevaReceta('${r.IDCLIENTE}','${r.NOMCLIE}','${r.ID}','${funciones.getEdad(r.FECHANACIMIENTO)}','${r.SEGURO}')">
                                    <i class="fal fa-edit"></i>Consul
                                </button>
                            </div>
                            <div class="col-4">
                                <button class="btn btn-success btn-sm hand shadow" onclick="funciones.hablar('Es el turno de ' + '${r.NOMCLIE}' + ', adelante por favor')">
                                    <i class="fal fa-bullhorn"></i>Llamar
                                </button>    
                            </div>
                            
                        </div>
                    </td>
                    <td class="text-right">${r.SEGURO}
                        <br>
                        <small class="negrita text-info">Código: ${r.CODIGO_SEGURO}</small>
                        <br>
                        <button class="btn btn-danger btn-circle btn-sm hand shadow" onclick="eliminar_turno('${rowid}','${r.ID}')" id='${rowid}'>
                            <i class="fal fa-trash"></i>
                        </button>
                    </td>
                   
                </tr>
            `
        })
        container.innerHTML = str;
        lbTotalTurnos.innerText = conteo;
        lbMenTotalEspera.innerText = conteo;
    })
    .catch((error)=>{
       
        container.innerHTML = 'No se pudieron cargar los datos...';
        lbTotalTurnos.innerText = conteo;
        lbMenTotalEspera.innerText = conteo;
    })
    

    
};


function eliminar_turno(idturno, id){
    funciones.Confirmacion('¿Está seguro que desea ELIMINAR este turno?')
    .then((value)=>{
        if(value==true){

            document.getElementById(idturno).disabled = true;
            document.getElementById(idturno).innerHTML = '<i class="fal fa-trash fa-spin"></i>'

            delete_turno_secre(id)
            .then(async()=>{
                funciones.Aviso('Turno eliminado exitosamente!!');
               
                await getTblTurnos();
                socket.emit('turno finalizado', GlobalCodSucursal, idturno);
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo eliminar este turno');
                document.getElementById(idturno).disabled = false;
                document.getElementById(idturno).innerHTML = '<i class="fal fa-trash"></i>'
            })

        }
    })
}

function delete_turno_secre(idturno){
    return new Promise((resolve, reject) => {

        axios.post('/delete_temp_espera',{
            sucursal:GlobalCodSucursal,
            id:idturno
            })
        .then(async(response) => {          
            GlobalSelectedIdTurno = 0;
            resolve();    
        }, (error) => {
            console.log('turno no eliminado');
            reject();
        });

    })
    

}

function delete_turno(idturno){

    axios.post('/delete_temp_espera',{
        sucursal:GlobalCodSucursal,
        id:idturno
        })
    .then(async(response) => {          
        
        GlobalSelectedIdTurno = 0;
        socket.emit('turno finalizado doctor', GlobalCodSucursal, idturno)
        await getTblTurnos();             
    }, (error) => {
        console.log('turno no eliminado');
    });

};
 
//********************* */
//********************* */

//***** PRECONSULTAS ******/


function getDatosPreconsulta(idcliente,nombre,idpreconsulta, edad, peso, talla, motivo,diagnostico,historia,antecedentes,examenf,impclinica,plantx,seguro){

    GlobalSelectedCodPaciente = idcliente;
    document.getElementById('lbPaciente').innerText = nombre;
    document.getElementById('lbEdadPaciente').innerText = edad;

    document.getElementById('txtRecetaObs').value = '';

    document.getElementById('txtCPeso').value = peso;
    document.getElementById('txtCTalla').value = talla;
    document.getElementById('txtCMotivo').value = motivo;
    document.getElementById('txtCDiagnostico').value = diagnostico;

    document.getElementById('txtCHEA').value = historia;
    document.getElementById('txtCAntecedentes').value = antecedentes;
    document.getElementById('txtCEF').value = examenf;
    document.getElementById('txtCIC').value = impclinica;
    document.getElementById('txtCPTX').value = plantx;

    GlobalSelectedConsultaSeguro = seguro;

    GlobalSelectedIdTurno = 0;
    GlobalSelectedIdPreconsulta = idpreconsulta;

    getTblTempReceta();

    //$('#modalNuevaReceta').modal('show');
    //document.getElementById('consulta-tab').click();
    document.getElementById('tab-consultamen').click();

};

/************ */



/***** REPORTES ****/
function getDataRptConsultas(){

    let fi = funciones.devuelveFecha('txtFechaInicio');
    let ff = funciones.devuelveFecha('txtFechaFinal');

    return new Promise((resolve, reject) => {

        axios.post('/rpt_consultas',{
            sucursal:GlobalCodSucursal,
            fi:fi,
            ff:ff
        })
        .then((response) => {   
            let data = response.data; 
            resolve(data);
        }, (error) => {
            reject(error);
        });
    })
    
};

function getTblRptConsulta(){
    

    let container = document.getElementById('containerReports');
    container.innerHTML = GlobalLoader;
   

    let str = '';
    let conteo = 0;
 
    getDataRptConsultas()
    .then((data)=>{
        data.map((r)=>{
            conteo += 1;
            str += `
                <tr class="border-secondary border-bottom border-left-0 border-right-0 border-top-0">
                    <td>${funciones.convertDate(r.FECHA)}
                        <br>
                        <small class="negrita text-danger">Hora: ${r.HORA}</small>
                    </td>
                    <td>${r.NOMCLIE}</td>
                    <td>${r.SEGURO}                 
                    </td>
                </tr>
            `
        })

        let table = `
                    
                    <div class="row">
                        <br><br>
                        <hr class="solid">
                        <h4 class="text-danger">Total Consultas: ${conteo}</h4>
                        <hr class="solid">
                    </div>
                    <table class="table table-responsive col-12">
                        <thead class="bg-info text-white">
                            <tr>
                                <td>FECHA</td>
                                <td>PACIENTE</td>
                                <td>TIPO</td>
                            </tr>
                        </thead>
                        <tbody>${str}</tbody>
                    </table>`

        container.innerHTML = table;
       
    })
    .catch((error)=>{
        console.log(error);
        container.innerHTML = 'No se pudieron cargar los datos...'
    })
    

    
};

/***** REPORTES ****/