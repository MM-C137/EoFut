Modal = {
    open(){
        document.querySelector(".modal-overlay").classList.add("active")
        document.querySelector("html").style.overflowY = 'hidden'
    },
    close(){
        document.querySelector(".modal-overlay").classList.remove("active")
        document.querySelector("html").style.overflowY = 'scroll'
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
    autor: "Júlio Casablanca",
    notice: `Agora, o Jornal EoFut finalmente está de cara nova!
    Agora com um novo site, novo logo e várias outras novidades, o time
    EoFut esrá mais motivado nunca para trazer novidades para vocês!

      Apesar de ser apenas uma breve mensagem, agradecemos o apoio do nosso 
    incrível público e esperamos que todos estejam juntos para essa próxima 
    jornada, sem você não seriamos nada	.
    
    Espero que gostem!`,
    tags: ["Tecnologia"]  
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
    100% de por clones, jogar é tão emocionante quanto ver jogadores reais? `,
    tags: ["Tecnologia"]    
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
    autor: 'Júlio Casablanca',
    notice: `Em entrevista, perguntei ao técnico Pedro Henrique: "Será que ele merece a camisa 9 do Coutinho, que era do Douglas Costas, que marcou a história do clube Real Madrid como camisa nove lendário?" <br>
Sua resposta foi:"Não sabemos se alcançará o mesmo nível técnico, mas vamos construir mas uma mostro no meio campo e buscaremos o campeonato e o El clássico."`,
    tags: ["Real Madrid"]
}
,{
    imagem: "https://us.123rf.com/450wm/dizanna/dizanna1906/dizanna190600619/125622199-esteroides-palabra-nube-collage-fondo-del-concepto-de-salud.jpg?ver=6",
    titulo: 'Reforço de Forma: são ou não esteroides?',
    subtitle: '"Não usamos Reforço de Forma, mas não sou contra." - Maurício Miranda, treinador do Sugiro que Fuja ',
    data: {
        dia: 15,
        mes: 10,
        ano: 2021
    },
    autor: 'Tadeu Schulz',
    notice: `O uso de substâncias químicas no mundo esportivo sempre foi motivo para polêmicas. Muitas dessas substâncias são proibidas e até podem fazer que atleta seja banido do esporte. Esteroides melhoram tanto as habilidades físicas, quanto psicológicas, fazendo que o competidor tenha uma vantagem injusta sobre seus adversários. <br>
O Reforço de Forma é um conjunto de treinos e medicamentos que melhoram as habilidades de um jogador pelo determinado tempo. Então... Reforço de Forma é esteroides? <br>
A resposta é Não, enquanto esteroides são feito a base de substancias ilegais, os medicamentos que são usados no Reforço de Forma são 100% naturais e orgânicos, selecionados de acordo com a sequência de treinos que são realizados naquele dia. `,
    tags: ["Tecnologia"]  
}
,{
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxLKWBrLmko-78rn2y2MsLVM0WHb2FYR9Ig&usqp=CAU",
    titulo: 'Mohamed Salah é o novo reforço do Real Madrid',
    subtitle: '',
    data: {
        dia: 23,
        mes: 10,
        ano: 2021
    },
    autor: 'Júlio Casablanca',
    notice: 'Hoje pela manha, o treinador Henrique, divulgou a contratação do ex-Liverpool e ex-Juventus nessa atual janela de transferência, com bastante esforço da área financeira pra arrecadar dinheiro suficiente para a contratação do novo camisa 11 do Real Madrid,o egípcio Mohamed Salah.',
    tags: ["Real Madrid"]
}
]

var jornalist = [{
    foto: "",
    nome: "Júlio Casablanca",
    cargo: "Jornalisa Esportivo"
},
{
    foto: "",
    nome: "Tadeu Schulz",
    cargo: "Pesquisador Esportivo"
},
]

var tagsNews = []

function notice(i, dataNews){
    if(dataNews == news){
        backButton = 'href="index.html" target="_self" class="backButton"'
    }else{
       
        indexBackTag = jornalist.findIndex((jornalistIndex)=>{
            return jornalistIndex.nome == dataNews[i].autor
        })
        backButton = `href="#" target="_self" class="backButton" onclick="jornalistNews(${indexBackTag})"`
    }
    newsDiv.innerHTML = `
    <div id="notice-content">
        <a ${backButton}>&blacktriangleleft;</a>
        <div class="notice-title">
            <h1>${dataNews[i].titulo}</h1>
        </div>
        <div class="notice-subtitle">
            <h2>${dataNews[i].subtitle}</h2>
        </div>
        <div class="notice-paragraph">
            <p>${dataNews[i].notice}</p>
        </div>
         <div class="notice-credits">
             <h3>${dataNews[i].autor}, do Jornal EoFut</h3>
        </div>
        <div class="notice-tags">
            <h3>Tags: <a href="#"> ${dataNews[i].tags}</a></h3>
        </div>
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
        <div class="jornalist-perfil" onclick="jornalistNews(${i})">
            <div class="jornalist-photo">
                <div class="loading"></div>
            </div>
            <div class="jornalist-data">
            <div class="jornalist-name">
                <a href="#">${jornalist[i].nome}</a>
                <div class="loading"></div>
            </div>
            <div class="jornalist-function ">
                <a href="#">${jornalist[i].cargo}</a>
                <div class="loading"></div>
            </div>
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

        let timeDate = noticeDate(news[i].data)

        textn =`
        <div class="card-content">
            <div class="card-news" onclick="notice(${i}, news)">
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
        <div class="loading"></div></div> 
        `

    let nl = parseInt(i/3)
    document.querySelectorAll(".line-news")[nl].innerHTML += textn
    }
    
}

function jornalistNews(number){
    tagsNews = []
    newsDiv.innerHTML = `<h2>Notícias de: ${jornalist[number].nome}</h2>
    <a href="index.html" target="_self" class="backButton">&blacktriangleleft;</a>`

    let dataJornalistNotice = news.filter((notice)=>{
        return notice.autor == jornalist[number].nome
    })

    for(var m = 0; m < dataJornalistNotice.length; m++){
        tagsNews.push(dataJornalistNotice[m])
    }

    let jornalistTagLines = parseInt(dataJornalistNotice.length/3)

    for(var i = 0; i <= jornalistTagLines; i++){
        newsDiv.innerHTML += `<div class="line-news"></div>`
    }

    for(var n = 0; n < dataJornalistNotice.length; n++){
        let timeDate = noticeDate(news[n].data)

        textn =`
            <div class="card-news" onclick="notice(${n}, tagsNews)">
                <div class="card-image">
                    <img src="${dataJornalistNotice[n].imagem}">
                </div>
            <div class="card-data">
                <div class="card-title">
                        <h1 class="">${dataJornalistNotice[n].titulo}</h1>
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

function noticeDate(datesOfNews){
    let noticeDay = datesOfNews.dia
    let noticeMouth = datesOfNews.mes
    let noticeYear = datesOfNews.ano

    dfData =  Today - noticeDay 
    dfMouth = Mouth - noticeMouth
    timeDate = '' 
    if(noticeDay == Today && noticeMouth == Mouth && noticeYear == Year){
        timeDate = 'Hoje'
    }
    else if(dfData < Today && dfData == 1 && noticeMouth == Mouth && noticeYear == Year){
        timeDate = "Ontem"
    }
    else if(dfData < Today && 1 < dfData && dfData < 7 && noticeMouth == Mouth && noticeYear == Year){
        timeDate = `Há ${dfData} dias`
    }
    else if(7 <=dfData <= 31 && noticeMouth == Mouth && noticeMouth == Mouth && noticeYear == Year){
        dfWeek = parseInt(dfData/7)
        if(dfWeek == 1){
            timeDate = `Há ${dfWeek} semana`
        }else{
            timeDate = `Há ${dfWeek} semanas`
        }
    }else if(dfData > 1 && noticeMouth != Mouth && noticeYear == Year){
        dfData = Today - dfData
        dfWeek = parseInt(dfData/7)

        if(dfWeek == 1){
            timeDate = `Há ${dfWeek} semana`
        }else{
            timeDate = `Há ${dfWeek} semanas`
        }
    }else if(dfMouth > 0 && noticeMouth != Mouth && noticeYear == Year){
        if(dfMouth == 1){
            timeDate = `Há ${dfMouth} mês`
        }else{
            timeDate = `Há ${dfMouth} meses`
        }
    }
    return timeDate
}




setTimeout(()=>{
    let loadingClass = document.querySelectorAll(".loading")
    loadingClass.forEach(el=> el.remove())
}, 1000)
    
   
