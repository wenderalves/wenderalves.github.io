import { CountUp } from './js/CountUp.min.js';

//CountUp
const options = { separator: '', decimal: ''};

// Contador de COVID19
var elContador = document.getElementsByClassName('contador');
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        const dados = JSON.parse(this.responseText).data.covid19Stats[0];

        let atualizado = dados.lastUpdate;//.split('T')[0]; Atualizado em (<span id="update"></span>)
        atualizado = moment(atualizado).format('DD/MM/YYYY');
        document.getElementById('update').append('Última atualização em ' + atualizado);

        let infectados = new CountUp('infectados', dados.confirmed, options);
        if (!infectados.error) {
            infectados.start();
        } else { console.error(infectados.error); }

        let mortos = new CountUp('mortos', dados.deaths, options);
        if (!mortos.error) {
            mortos.start();
        } else { console.error(mortos.error); }

        let curados = new CountUp('curados', dados.recovered, options);
        if (!curados.error) {
            curados.start();
        } else { console.error(curados.error); }
	}
});
xhr.open("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Brazil");
xhr.setRequestHeader("x-rapidapi-host", "covid-19-coronavirus-statistics.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "0115766de8msh4c9e2ab33c201d2p1c9601jsnea6b83099a5f");
xhr.send();