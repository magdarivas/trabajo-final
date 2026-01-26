// Datos de los proyectos
const projectsData = {
    1: {
        title: "Hilos Místicos",
        client: "Proyecto de Título",
        year: "2025",
        category: "Diseño Textil",
        iconType: "image",
        icon: "img/img/PT1.jpg",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        description:
            "Colección de seis cinturones tipo faja con bordados inspirados en La Pincoya y La Añañuca. Producción 100% artesanal",
        challenge:
            "Propuesta realizada como entrega final individual de mi carrera. Con la opción de un ámbito del diseño libre, decidí realizarla en torno al bordado, una práctica a la cual le tengo especial cariño y poseo una amplia experiencia.",
        solution: [
            "El bordado es una práctica capaz de narrar historias, y en los últimos años, ha crecido signicativamente su interés. Sin embargo, sigue habiendo una escasvalorización del trabajo implicado por parte del público general. Además, existe un predominio de influencias extranjeras y tendencias globalizadas, mientras que la representación de relatos locales son reiteradas y muy acotadas.",
            "En búsqueda de un sello distintivo en una práctica donde las posibilidades son casi infinitas, se desarrolló una metología propia basada en la investigación y la experimentación. Tras varias iteraciones materiales y compositivas, se cayó en cuenta que estos no bastarían por sí solos. Luego de una búsqueda de relatos locales poco difundidos, se quiso poner en valor a las mitologías chilenas, cuya propia sociedad casi no recuerda o reconoce.",
            "Colección de cinturones tipo faja inspirados en La Pincoya y La Añañuca, mitos del sur y del norte de Chile respectivamente. De manera intencional, se elgieron dos personajes femeninos por la fuerte relación simbólica entre mujer y bordado, con sus diversas connotaciones a lo largo de la historia. Es una propuesta que resulta como punto de inicio para poner en valor el bordado y los relatos locales.",
        ],
        galleryImages: ["img/img/PT3.jpg", "img/img/PT4.jpg", "img/img/PT5.jpg", "img/img/PT6.jpg","img/img/PT7.jpg", "img/img/PT8.jpg"],
    },
    2: {
        title: "Bolso tejido a telar",
        client: "OPR Textiles Andinos",
        year: "2023",
        category: "Diseño Textil",
        iconType: "image",
        icon: "img/img/textilesandinos.jpg",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        description:
            "Bolso tejido en hilos de algodón en cuatro colores, con argollas y cierre metálicos para facilitar su uso. Producción artesanal",
        challenge:
            "Realizar un accesorio o colección a partir de una de las técnicas de los textiles andinos aprendidos durante el ramo.",
        solution:
            "Se realizó un bolso pequeño tejido a telar, el cual funciona tanto como cartera como riñonera. La idea es que el usuario le inserte su propia correa o cinturón respectivamente y así pueda ir alternando su función a gusto.",
        galleryImages: ["img/img/textilesandinos.jpg", "img/img/textilesandinos.jpg", "img/img/textilesandinos.jpg"],
    },
    3: {
        title: "Mad Smile",
        client: "Taller 4",
        year: "2022",
        category: "Diseño Textil",
        iconType: "image",
        icon: "img/img/tallercuatro.jpg",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        description:
            "Bolso modificado inspirado en el gato de Cheshire de Alicia en el País de las Maravillas, versión de Disney.",
        challenge:
            "Realizar upcycling a partir de un objeto nuevo o desechado, tomando como inspiración un personaje ficticio",
        solution:
            "Se modificó un bolso bastante simple de color rosado, agregándole curvas de colores de diversas telas, creando compartimientos adicionales y también creando estrategias para que el bolso pueda ser usado en distintos formatos. Todo esto pensando en los colores del personaje, su característico caos y separación de su cuerpo, sin tener que mostrar directamente al personaje en sí.",
        galleryImages: [
            "img/img/tallercuatro1.png",
            "img/img/tallercuatro2.png",
            "img/img/tallercuatro3.png",
            "img/img/tallercuatro4.png",
        ],
    },
    4: {
        title: "Experimentaciones bordadas",
        client: "Proyecto de Título",
        year: "2025",
        category: "Diseño Textil",
        iconType: "image",
        icon: "img/img/exp4.jpg",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        description:
            "Exploraciones realizadas en la primera etapa del Proyecto de Título para indagar en posibles sellos propios en la práctica del bordado.",
        challenge:
            "El bordado es una artesanía con posibilidades casi infinitas, donde se han creado incontables composiciones y materiales, por lo que buscar un sello propio y que distinga de los demás es uno de los grandes desafíos.",
        solution:
            "Realicé 12 exploraciones bordadas con distintos materiales, soportes y disposiciones, en búsqueda de algo nuevo que proponer. Si bien más adelante no apliqué en un mayor formato ninguna de las experimentaciones, hubieron ciertos elementos e intervenciones que me inspiraron para crear la propuesta del proyecto final.",
        galleryImages: [
            "img/img/exp1.jpeg",
            "img/img/exp2.jpeg",
            "img/img/exp3.jpeg",
            "img/img/exp4.jpg",
            "img/img/exp5.jpg",
            "img/img/exp6.jpeg",
            "img/img/exp7.jpeg",
            "img/img/exp8.jpeg",
            "img/img/exp9.jpg",
            "img/img/exp0.1.jpeg",
            "img/img/exp0.2.jpg",
            "img/img/exp0.3.jpg",
        ],
    },
    5: {
        title: "Falda inspirada en huracán",
        client: "Taller 6",
        year: "2023",
        category: "Diseño Textil",
        iconType: "image",
        icon: "img/img/superficiest6.jpg",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        description:
            "Falda inspirada en el huracán Sandy, realizado principalmente con mezclilla, lino reutilizado y un patrón bordado.",
        challenge:
            "Confeccionar una prenda y bocetear una colección a partir de la inspiración en un desastre natural en específico. El proceso debe contar con al menos una parte sostenible, y deben existir dos propuestas de superficies textiles.",
        solution:
            "Se desarrollaron patrones con bordado como dos superficies: una con estampado directo y metalizado y otra con aplicaciones de textiles reutilizados. Se bocetearon diversas propuestas de prendas que integran esas superficies y se llevó a cabo la confección de una de ellas (la falda).",
        galleryImages: [
            "img/img/superficieA.jpeg",
            "img/img/superficieB.jpeg",
            "img/img/look1.png",
            "img/img/look2.png",
            "img/img/look3.png",
        ],
    },
    6: {
        title: "Calidez nostálgica",
        client: "Taller 7",
        year: "2024",
        category: "Diseño Textil",
        iconType: "video",
        icon: "img/video/videot7.mp4",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        description: "Envolvente zero-waste inspirado en la hakama y la estética vintage.",
        challenge:
            "Diseñar y confeccionar un envolvente (es decir, una prenda que no define del todo la figura) que utilice un patronaje zero-waste (sin desperdicio de tela), cuya inspiración incial debe ser una prenda tradicional que utilice plisado.",
        solution:
            "La hakama es una prenda tradicional japonesa aparentemente simple, que se caracteriza por su construcción simétrica de cinco pliegues delanteros y dos traseros. A partir de esta construcción realicé una capa externa inspirado en ella y el uso de cuerdas (comunes en la vestimenta tradicional nipona). Para la capa interna, se creé un patrón bordadoa partir de la vista lateral formada por sus pliegues de las piezas externas (frontal y trasera). Dando una estética entre artesanal, elegante y vintage, se confeccionó mediante la utilización de dos tipos de lino (distinto gramaje y color) en conjunto al bordado en hilo con aplicaciones de pedrería.",
        galleryImages: ["img/img/moodboardt7.jpeg", "img/img/patronhakama.jpg", "img/img/bordadot7.jpg"],
    },
    7: {
        title: "Calidez silvestre",
        client: "OPR Sistemas de Configuración desde el Textil",
        year: "2023",
        category: "Diseño Textil",
        iconType: "image",
        icon: "img/img/20exp.jpg",
        gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        description: "Colección de patrones continuos para estampado",
        challenge:
            "Realizar una colección de patrones continuos a partir de unidades de repetición, con distintos desplazamientos de este.",
        solution:
            "Desarrollé una colección inspirándome en elementos de bosque como hojas y hongos. Primero los dibujé y pinté en acuarela manualmente las distintas figuras por separado para luego digitalizarlas y crear distintas unidades de repetición, jugando con variaciones de distribución, color y aprovechando el uso de mismos elementos combinados con figuras variadas. Mi idea era que, a pesar de contar con diversos elementos simultáneos, los colores y la apariencia propia del acuerela permiten una estética suavizada y que permite dar la idea de inmersión en la naturaleza.",
        galleryImages: ["img/img/6.jpg", "img/img/11.jpg", "img/img/16.jpg"],
    },
};

// Variable global para guardar la posición del scroll
let scrollPosition = 0;

// Función para mostrar detalle del proyecto
function showProjectDetail(projectId) {
    // Guardar la posición actual del scroll ANTES de cambiar de página
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    const project = projectsData[projectId];
    const detailPage = document.getElementById("project-detail");
    const mainPage = document.getElementById("main-page");

    // Llenar los datos
    document.getElementById("detail-title").textContent = project.title;
    document.getElementById("detail-client").textContent = project.client;
    document.getElementById("detail-year").textContent = project.year;
    document.getElementById("detail-category").textContent = project.category;
    document.getElementById("detail-description").textContent = project.description;

    // Challenge con soporte para múltiples párrafos
    const challengeElement = document.getElementById("detail-challenge");
    if (Array.isArray(project.challenge)) {
        challengeElement.innerHTML = project.challenge
            .map((p) => `<p style="font-size: 1.1rem; line-height: 1.8; color: #666; margin-bottom: 1rem;">${p}</p>`)
            .join("");
    } else {
        challengeElement.textContent = project.challenge;
    }

    // Solution con soporte para múltiples párrafos
    const solutionElement = document.getElementById("detail-solution");
    if (Array.isArray(project.solution)) {
        solutionElement.innerHTML = project.solution
            .map((p) => `<p style="font-size: 1.1rem; line-height: 1.8; color: #666; margin-bottom: 1rem;">${p}</p>`)
            .join("");
    } else {
        solutionElement.textContent = project.solution;
    }

    // Hero con ícono y gradiente
    const hero = document.getElementById("detail-hero");
    hero.style.background = project.gradient;

    if (project.iconType === "image") {
        hero.innerHTML = `<img src="${project.icon}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 30px;">`;
    } else if (project.iconType === "video") {
        hero.innerHTML = `<video autoplay loop muted style="width: 100%; height: 100%; object-fit: cover; border-radius: 30px;">
            <source src="${project.icon}" type="video/mp4">
        </video>`;
    } else {
        hero.textContent = project.icon;
    }

    // Galería de imágenes con imágenes reales
    const gallery = document.getElementById("detail-gallery");
    let galleryHTML = "";
    project.galleryImages.forEach((imageSrc) => {
        galleryHTML += `
            <div class="detail-image">
                <img src="${imageSrc}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px; cursor: pointer;" onclick="openLightbox('${imageSrc}')">
            </div>
        `;
    });
    gallery.innerHTML = galleryHTML;

    // Mostrar página de detalle
    mainPage.style.display = "none";
    detailPage.classList.add("active");
    window.scrollTo(0, 0);
}


// Función para ocultar detalle del proyecto
function hideProjectDetail() {
    const detailPage = document.getElementById("project-detail");
    const mainPage = document.getElementById("main-page");

    detailPage.classList.remove("active");
    mainPage.style.display = "block";

    // Restaurar la posición del scroll guardada
    window.scrollTo(0, scrollPosition);

    return false;
}

// Función para scroll suave
function scrollToSection(sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
}

// Función para abrir lightbox
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = imageSrc;
    lightbox.classList.add("active");
}

// Función para cerrar lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("active");
}

// Cerrar lightbox al hacer click en la X o fuera de la imagen
document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.querySelector(".lightbox-close");
    if (closeBtn) {
        closeBtn.addEventListener("click", closeLightbox);
    }

    // Cerrar lightbox al hacer click fuera de la imagen
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.addEventListener("click", function (e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});
