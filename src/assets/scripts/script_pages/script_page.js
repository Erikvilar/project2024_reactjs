window.addEventListener('load',function(){

    const dataAtual = new Date();
    const opcoesFormatacao = ('en-us',{ weekday:"long", month:"short", day:"numeric",hour:"numeric",minute:"numeric"} );
    const dataFormatada = dataAtual.toLocaleDateString("en-us", opcoesFormatacao);
    var datetime = document.getElementById('datetime').textContent =dataFormatada;
    var  hero =  document.getElementById('hero')
    hero.appendChild(datetime)

})