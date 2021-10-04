Modal = {
    open(){
        document.querySelector(".modal-overlay").classList.add("active")
    },
    close(){
        document.querySelector(".modal-overlay").classList.remove("active")
    }
}


var newsDiv = document.getElementById("news")

var news = [{
    imagem: "logo_size_invert.jpg",
    titulo: "A mais nova plataforma do EoFut",
    subtitle: '"Mais tecnológico, mais moderno e mais conceitual."',
    data: 4,
    autor: "Júlio Casablanca",
    notice: `Agora, o Jornal EoFut finalmente está de cara nova!
    Agora com um novo site, novo logo e várias outras novidades, o time
    EoFut esrá mais motivado nunca para trazer novidades para vocês!
      Apesar de ser apenas uma breve mensagem, agradecemos o apoio do nosso 
    incrível público e esperamos que todos estejam juntos para essa próxima 
    jornada, sem você não seriamos nada	.
    
    Espero que gostem!`
}]

var jornalist = [{
    foto: "",
    nome: "Júlio Casablaca",
    cargo: "Jornalisa Esportivo"
},
{
    foto: "",
    nome: "Tadeu Schulz",
    cargo: "Pesquisador Esportivo"
},
]

var jl = document.querySelector(".line-jornalist")
var ln = document.querySelector(".line-news")

var date = new Date
var Today = date.getDate()


function notice(i){
    newsDiv.innerHTML = `
    <a href="index.html">&blacktriangleleft;</a>
                    <div class="notice-title">
                    <h1>${news[i].titulo}</h1>
                </div>
                <div class="notice-subtitle">
                    <h2>${news[i].subtitle}</h2>
                </div>
                    <div class="notice-paragraph">
                    <p>${news[i].notice}</p>
                    </div>
                    <div class="notice-credits">
                        <h3>${news[i].autor}, do Jornal EoFut</h3>
                    </div>
    `
    
}

function load(){
    var textj = ''
    var textn = ""

    for(var i = 0; i < jornalist.length; i++){
        
        textj += `
         <div class="jornalist-perfil">
            <div class="jornalist-photo"></div>
            <div class="jornalist-data">
            <div class="jornalist-name"><a href="#">${jornalist[i].nome}</a></div>
            <div class="jornalist-function"><a href="#">${jornalist[i].cargo}</a></div>
            </div>
            </div>  
        `
    }
    jl.innerHTML = textj

    for(var i = 0; i < news.length; i++){

        dfData = news[i].data - Today 
        timeDate = ''

        if(news[i].data == Today){
            timeDate = 'Hoje'
        }
        else if(dfData < Today && dfData == 1){
            timeDate = "Ontem"
        }
        else if(dfData < Today && 1 < dfData < 7){
            timeDate = `Há ${dfData} dias`
        }
        textn +=`
            <div class="card-news" onclick="notice(${i})">
                <div class="card-image">
                    <img src="./img/${news[i].imagem}" alt="">
                </div>
            <div class="card-data">
                <div class="card-title">
                        <h1>${news[i].titulo}</h1>
                </div>
                <div class="card-date">
                    <span>${timeDate}</span>
                </div>
                </div>
            </div>
        `
    }
    ln.innerHTML += textn
}