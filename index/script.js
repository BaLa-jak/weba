function AbrirVentana(){
    let NombreCompleto = document.getElementById("NombreCompleto");
    let Expediente = document.getElementById("Expediente");
    let Correo = document.getElementById("mail");
    


   const nuevaVentana= window.open(
        '/weba/VentanaTicket/ticket.html',
        'Ticket', 
        'width=400,height=600,scrollbars=no,resizable=no'
    );

    nuevaVentana.onload = () =>{
        nuevaVentana.setDatos({NombreCompleto, Expediente, Correo})
    }
}