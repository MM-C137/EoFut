Modal = {
    open(){
        document.querySelector(".modal-overlay").classList.add("active")
    },
    close(){
        document.querySelector(".modal-overlay").classList.remove("active")
    }
}


var newsDiv = document.getElementById("news")
var jornalistDiv = document.getElementById("jornalist")
var titleForNews = document.getElementById("title")

var news = [{
    imagem: "./img/logo_size_invert.jpg",
    titulo: "A mais nova plataforma do EoFut",
    subtitle: '"Mais tecnológico, mais moderno e mais conceitual."',
    data: {
        dia: 4,
        mes: 10,
        ano: 2021
    },
    autor: "Julio Casablanca",
    notice: `Agora, o Jornal EoFut finalmente está de cara nova!
    Agora com um novo site, novo logo e várias outras novidades, o time
    EoFut esrá mais motivado nunca para trazer novidades para vocês!

      Apesar de ser apenas uma breve mensagem, agradecemos o apoio do nosso 
    incrível público e esperamos que todos estejam juntos para essa próxima 
    jornada, sem você não seriamos nada	.
    
    Espero que gostem!`,
}
,{
    imagem: "https://st2.depositphotos.com/1579454/12350/i/950/depositphotos_123503422-stock-photo-3d-illustration-of-chromosomes.jpg",
    titulo: "O avanço da tecnologia dos clones no futebol",
    subtitle: '"No passado, a tecnologia era aplicável em todas as áreas. Hoje, é inevitável"',
    data: {
        dia: 7,
        mes: 10,
        ano: 2021
    },
    autor: "Tadeu Schulz",
    notice: `O futebol existe a mais de um século, foi responsável por criar 
    grandes estrelas, grandes histórias e fazer que nós, torcedores, sofram
    com grandes emoções. Essa história, com toda certeza, vai continuar por
    vários anos, mas hoje, essa história ganha mais um capítulo, clones. <br>
     Depois de um investimento coletivo de grandes clubes ao redor do mundo,
    Um grupo de cientistas conseguiram criar o primeiro grupos de jogadores clones
    do mundo, grupo esse composto por Benzema, Cristiano Ronaldo, Douglas Costa, 
    Toni Kroos e Pickford. Os clones foram treinados e conseguiram resultados semelhantes
    aos jogadores reais. <br>
    Esse investimento foi feito com a intenção de serem realizados mais jogos de futebol por ano,
    onde será possíviel realizar uma Olimpíado sem atrapalhar os campeonatos nacionais e internacionais,
    dando oportunidade do público assistirem mais jogos. Vale ressaltar que os clones somente serão usado
    nesse esporte. <br>
    Mas a pergunta que fica é, ver o seu time do coração, composto por um elenco
    100% de por clones, jogar é tão emocionante quanto ver jogadores reais? `    
}
,{
    imagem: "https://mercadodofutebol.com/wp-content/uploads/2021/06/60d952e479da2.jpg",
    titulo: 'Kevin De Bruyne chega ao Real Madrid!',
    subtitle: '"O homem chegou, a lenda" - Pedro Henrique, técnico do Real Madrid',
    data: {
        dia: 13,
        mes: 10,
        ano: 2021
    },
    autor: 'Julio Casablanca',
    notice: `Em entrevista, perguntei ao técnico Pedro Henrique: "Será que ele merece a camisa 9 do Coutinho, que era do Douglas Costas, que marcou a história do clube Real Madrid como camisa nove lendário?" <br>
Sua resposta foi:"Não sabemos se alcançará o mesmo nível técnico, mas vamos construir mas uma mostro no meio campo e buscaremos o campeonato e o El clássico."`
}
]

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

    var numberJornalistLines = parseInt(jornalist.length/3)

    for(var n = 0; n <= numberJornalistLines; n++){
        jornalistDiv.innerHTML += '<div class="line-jornalist"></div>'
    }

    for(var i = 0; i < jornalist.length; i++){
        
        textj = `
        <div class="jornalist-perfil">
            <div class="jornalist-photo"></div>
            <div class="jornalist-data">
            <div class="jornalist-name"><a href="#">${jornalist[i].nome}</a></div>
            <div class="jornalist-function"><a href="#">${jornalist[i].cargo}</a></div>
            </div>
        </div>  
        `

        let jl = parseInt(i/3)
        document.querySelectorAll(".line-jornalist")[jl].innerHTML += textj
    }
    
    var numberLineNews = parseInt(news.length/3)
        
    for(var n = 0; n <= numberLineNews; n++){
        newsDiv.innerHTML += '<div class="line-news"></div>'
    }

    news.reverse()
    for(var i = 0; i < news.length; i++){

        let timeDate = noticeDate(news[i].data.dia)

        textn =`
            <div class="card-news" onclick="notice(${i},news)">
                <div class="card-image">
                    <img src="${news[i].imagem}">
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

    let nl = parseInt(i/3)
    document.querySelectorAll(".line-news")[nl].innerHTML += textn
    }
}

 var date = new Date
var Today = date.getDate()
var Mouth = date.getMonth() + 1
var Year = date.getFullYear()

function noticeDate(newsDate){
    dfData =  Today - newsDate 
    dfWeek = ''
    timeDate = '' 
    if(newsDate == Today){
        timeDate = 'Hoje'
    }
    else if(dfData < Today && dfData == 1){
        timeDate = "Ontem"
    }
    else if(dfData < Today && 1 < dfData && dfData < 7){
        timeDate = `Há ${dfData} dias`
    }
    else if(7 <=dfData < 30){
        dfWeek = parseInt(dfData/7)
        if(dfWeek == 1){
            timeDate = `Há ${dfWeek} semana`
        }else{
            timeDate = `Há ${dfWeek} semanas`
        }
    }
    return timeDate
}
