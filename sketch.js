
            var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });

            function setup() {
                createCanvas(valor, valor, WEBGL).parent("#pecinco");
                select("#nombre").html("Camila Calquín");
                select("#aprendizaje").html("lo más posible de progamación y nivelar las lagunas de aprendizajes que deberiamos tener");
            }
            function draw() {
                background(255, 255, 255);
                orbitControl();
                ambientLight(200);
                pointLight(255, 255, 255, valor/3, valor/2, 50);
                noStroke();
  fill(108, 55, 139);
  specularMaterial(255);
  shininess(20);
                translate(0, 0, 0);
  metalness(1);
  
                translate(0, 0, 0);
  metalness(50);

                torus(valor / 3) ;
            }

            function windowResized() {
                resizeCanvas(valor, valor);
            }
    