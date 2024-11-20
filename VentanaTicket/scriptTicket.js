function setDatos(datos){
    console.log(datos);

    document.body.innerHTML = `
        <h1>Ticket del prestamo</h1>
        <p>Nombre: ${datos.NombreCompleto}</p>
        <p>Expediente: ${datos.Expediete}</p>
        <P>Correo: ${datos.Correo}</p>
    `;

}