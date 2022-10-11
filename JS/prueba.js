let button = document.getElementById("leer");

button.addEventListener("click", () => {
  if (localStorage.getItem("datosApi") == null) {
    fetch("https://reqres.in/api/users?delay=2")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        localStorage.setItem("datosApi", JSON.stringify(datos));
        console.log(datos);
        imprimirTodo();
      });
  } else {
    //LOCAL
    imprimirTodo();
  }
});
function usuarios(a, i, b) {
  //IMPRIMIR DATOS DE CADA USUARIO
  a = document.getElementById(b);
  a.innerHTML = `<div class="row justify-content-around mt-5">
            <hr>
            <div class="col-md-2 justify-content-center"><p class="text-center">${datos.data[i].id}</p></div>
            <div class="col-md-2 justify-content-center"><p class="text-center">${datos.data[i].first_name}</p></div>
            <div class="col-md-2 justify-content-center"><p class="text-center">${datos.data[i].last_name}</p></div>
            <div class="col-md-2 justify-content-center"><p class="text-center">${datos.data[i].email}</p></div>
            <div class="col-md-2 justify-content-center"><img src="${datos.data[i].avatar}"class="rounded-circle mx-auto"style="width: 50px"></img></div>
            </div>`;
}
function header() {
  //TITULOS
  let titulos = document.getElementById("titulo");
  titulos.innerHTML = `
        <div class="row justify-content-around mt-5">
                        <div class="row border-bottom border-2 border-dark" >
                        <div class="col-md-2">
                            <p class="text-center"><b>Id</b></p>
                        </div>
                        <div class="col-md-3">
                            <p class="text-center"><b>first_name</b></p>
                        </div>
                        <div class="col-md-2">
                            <p class="text-center"><b>last_name</b></p>
                        </div>
                        <div class="col-md-3">
                            <p class="text-center"><b>email</b></p>
                        </div>
                        <div class="col-md-2">
                            <p class="text-center"><b>Image</b></p>
                        </div>
                    </div>`;
}
function imprimirTodo() {
  //EJECUTA LA FUNCION QUE TRAE EL HEADER Y LOS DATOS

  datos = JSON.parse(localStorage.getItem("datosApi"));
  header();
  usuarios(0, 0, "div1");
  usuarios(1, 1, "div2");
  usuarios(2, 2, "div3");
  usuarios(3, 3, "div4");
  usuarios(4, 4, "div5");
  usuarios(5, 5, "div6");
  usuarios(6, 6, "div7");
}