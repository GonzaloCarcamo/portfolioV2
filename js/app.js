const list = [
    {title: 'Primera App', github: 'https://www.github.com', web: 'https://www.google.cl', hash: 'angular'},
    {title: 'Segunda App', github: 'https://www.github.com', web: 'https://www.google.cl', hash: 'angular'},
    {title: 'Tercera App', github: 'https://www.github.com', web: 'https://www.google.cl', hash: 'angular'},
    {title: 'Cuarta App', github: 'https://www.github.com', web: 'https://www.google.cl', hash: 'angular'},
    {title: 'Quinta App', github: 'https://www.github.com', web: 'https://www.google.cl', hash: 'angular'},
    {title: 'Sexta App', github: 'https://www.github.com', web: 'https://www.google.cl', hash: 'angular'},
    {title: 'Séptima App', github: 'https://www.github.com', web: 'https://www.google.cl', hash: 'javascript'}
]

const angularLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'
const javascriptLogo = 'https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png'
const cards = [];

const projects = document.querySelector('#projects');

list.forEach(element => {
    console.log(element);
    let hashtag = '';
    element.hash === 'angular' ? hashtag = angularLogo : hashtag = javascriptLogo;
    
    const card = `
    <div class="card">
    <div class="card-body">
        <div class="info">
            <h2>"${ element.title }"</h2>
            <h3>
                <a href="${ element.github }">Repositorio Github</a>
            </h3>
        </div>
        <div class="link">
            <img src="${ hashtag }">
        </div>
    </div>
    <div class="card-footer">
        <div class="buttons">
            <button>
            <a href="${ element.web }">Link WEB</a>
            </button>
            <button>
            <a id="description" href="">Descripción</a>
            </button>
        </div>
        <div class="hashtag">
            <h5>#"${ element.hash }"</h4>
        </div>
    </div>
</div>
    `;

    cards.push(card);
});

projects.innerHTML = cards.toString().replace(/,/g, '').replace(/"/g, '');

const about = document.querySelector('#about');

const text = `
    <h5>
        Hola! En esta sección relato aspectos que, probablemente no son importantes (o tan importantes) para algún reclutador.
        Sin embargo, personalmente creo que las personas son más que un título universitario, años de experiencia, etc.
        <br> <br>
        Si estás leyendo aún, es porque si quisiste saber más de mí, lo cual agradezco mucho.
        Soy de Santiago, y viví ahí hasta mi adolescencia. Hice la enseñanza básica en el colegio Patrocinio de San José, en el barrio 
        Bellavista.
        <br> <br>
        Luego nos fuimos a vivir con mi familia a Puerto Varas, y realicé mis estudios en el Colegio Alemán de Puerto Varas.
        <br> <br>
        Durante el colegio, participé activamente en las áreas de música, teatro y debate. Siempre he tenido mucho interés en la expresión
        corporal, el arte, las comunicaciones, y sobre todo en la música. En los últimos años de mi vida me he encontrado con otra tremenda
        pasión (aparte de la programación), me refiero al deporte.
        <br> <br>
        Despué de salir del colegio me dediqué a trabajar y después de algunos años (y algunas malas decisiones) llegué a trabajar
        al Banco de Chile, para una sucursal en Providencia. Ahí me desempeñé en labores de caja y mesón, además de apoyar al control
        de los movimientos diarios realizados por los ejecutivos de inversión. En esa época aprendí muchísimo acerca de como 
        interactuar con clientes de forma presencial, y de la tolerancia al estrés.
        <br> <br>
        Cuando terminé mis estudios de Ingeniería en Administración, decidí enfrentarme a un nuevo desafío, esta vez en Banco BCI,
        para trabajar como Asistente Comercial para el segmento Grandes Empresas. Algunos meses después cambié de cargo a Especialista
        de Apoyo, puesto que desempeñé algunos años. Principalmente lo que se hacía era prestar apoyo para realizar operaciones de 
        de la Banca Electrónica, donde constantemente debía estar en contacto con técnicos informáticos en caso de que hubiese errores
        en la plataforma. Tuve largas conversaciones con aquellos técnicos, y de apoco comencé a cautivarme con el trabajo que ellos hacían.
        <br> <br>
        Comencé a investigar y darme cuenta que si me capacitaba de forma adecuada, podría llegar a trabajar en el área informática,
        a todo esto en ese tiempo estaba ya titulado de Ingeniero Comercial.
        <br> <br>

    </h5>

`

about.innerHTML = text;

