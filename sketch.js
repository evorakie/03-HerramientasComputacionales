
            var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });

            function setup() {
                createCanvas(valor, valor, WEBGL).parent("#pecinco");
                select("#nombre").html("Sayen Padilla");
                select("#aprendizaje").html(" manejar distintos programas!!! (*ᴗ͈ˬᴗ͈)ꕤ*.");
                noStroke();
            }
            function draw() {
                background(255, 155, 212);
                orbitControl();
                torus(valor / 30, 15, 5, 3);
                ambientLight(200);
                let mx = mouseX ;
                let my = mouseY ;
                pointLight(255, 255, 255, mx, my, 50);
                noStroke();
                fill(30, 30, 255);
                specularMaterial(255);
                shininess(20);
                translate(-25, 0, 0);
                metalness(1);
                metalness(50);
                sphere(20);
            }

            function windowResized() {
                resizeCanvas(valor, valor);
            }