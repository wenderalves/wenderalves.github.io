import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora-perfil',
  templateUrl: './calculadora-perfil.component.html',
  styleUrls: ['./calculadora-perfil.component.scss']
})
export class CalculadoraPerfilComponent implements OnInit {

  perguntasTestes = [
    {
      numero: 1,
      pergunta: 'Eu sou...',
      respostas: [
        { label: 'Idealista, criativo e visionário', valor: 'I' },
        { label: 'Divertido, espiritual e benéfico', valor: 'C' },
        { label: 'Confiável, meticuloso e previsível', valor: 'O' },
        { label: 'Focado, determinado e persistente', valor: 'A' }
      ]
    },
    {
      numero: 2,
      pergunta: 'Eu gosto de...',
      respostas: [
        { label: 'Ser piloto', valor: 'A' },
        { label: 'Conversar com os passageiros', valor: 'C' },
        { label: 'Planejar a viagem', valor: 'O' },
        { label: 'Explorar novas rotas', valor: 'I' }
      ]
    },
    {
      numero: 3,
      pergunta: 'Se você quiser se dar bem comigo...',
      respostas: [
        { label: 'Me dê liberdade', valor: 'I' },
        { label: 'Me deixe saber sua expectativa', valor: 'O' },
        { label: 'Lidere, siga ou saia do caminho', valor: 'A' },
        { label: 'Seja amigável, carinhoso e compreensivo', valor: 'C' }
      ]
    },
    {
      numero: 4,
      pergunta: 'Para conseguir obter bons resultados é preciso...',
      respostas: [
        { label: 'Ter incertezas', valor: 'I' },
        { label: 'Controlar o essencial', valor: 'O' },
        { label: 'Diversão e celebração', valor: 'C' },
        { label: 'Planejar e obter recursos', valor: 'A' }
      ]
    },
    {
      numero: 5,
      pergunta: 'Eu me divirto quando...',
      respostas: [
        { label: 'Estou me exercitando', valor: 'A' },
        { label: 'Tenho novidades', valor: 'I' },
        { label: 'Estou com os outros', valor: 'C' },
        { label: 'Determino as regras', valor: 'O' }
      ]
    },
    {
      numero: 6,
      pergunta: 'Eu penso que...',
      respostas: [
        { label: 'Unidos venceremos, divididos perderemos', valor: 'C' },
        { label: 'O ataque é melhor que a defesa', valor: 'A' },
        { label: 'É bom ser manso, mas andar com um porrete', valor: 'I' },
        { label: 'Um homem prevenido vale por dois', valor: 'O' }
      ]
    },
    {
      numero: 7,
      pergunta: 'Minha preocupação é...',
      respostas: [
        { label: 'Gerar a ideia global', valor: 'I' },
        { label: 'Fazer com que as pessoas gostem', valor: 'C' },
        { label: 'Fazer com que funcione', valor: 'O' },
        { label: 'Fazer com que aconteça', valor: 'A' }
      ]
    },
    {
      numero: 8,
      pergunta: 'Eu prefiro...',
      respostas: [
        { label: 'Perguntas a respostas', valor: 'I' },
        { label: 'Ter todos os detalhes', valor: 'O' },
        { label: 'Vantagens a meu favor', valor: 'A' },
        { label: 'Que todos tenham a chance de serem ouvidos', valor: 'C' }
      ]
    },
    {
      numero: 9,
      pergunta: 'Eu gosto de...',
      respostas: [
        { label: 'Fazer progresso', valor: 'A' },
        { label: 'Construir memórias', valor: 'I' },
        { label: 'Fazer sentido', valor: 'O' },
        { label: 'Tornar as pessoas confortáveis', valor: 'C' }
      ]
    },
    {
      numero: 10,
      pergunta: 'Eu gosto de chegar...',
      respostas: [
        { label: 'Na frente', valor: 'A' },
        { label: 'Junto', valor: 'C' },
        { label: 'Na hora', valor: 'O' },
        { label: 'Em outro lugar', valor: 'I' }
      ]
    },
    {
      numero: 11,
      pergunta: 'Um ótimo dia para mim é quando...',
      respostas: [
        { label: 'Consigo fazer muitas coisas', valor: 'A' },
        { label: 'Me divirto com meus amigos', valor: 'C' },
        { label: 'Tudo segue conforme planejado', valor: 'O' },
        { label: 'Desfruto de coisas novas e estimulantes', valor: 'I' }
      ]
    },
    {
      numero: 12,
      pergunta: 'Eu vejo a morte como...',
      respostas: [
        { label: 'Uma grande aventura misteriosa', valor: 'I' },
        { label: 'Oportunidade para rever os falecidos', valor: 'C' },
        { label: 'Um modo de receber recompensas', valor: 'O' },
        { label: 'Algo que sempre chega muito cedo', valor: 'A' }
      ]
    },
    {
      numero: 13,
      pergunta: 'Minha filosofia de vida é...',
      respostas: [
        { label: 'Há ganhadores e perdedores, e eu acredito ser um ganhador', valor: 'A' },
        { label: 'Para eu ganhar, ninguém precisa perder', valor: 'C' },
        { label: 'Para ganhar, é preciso seguir as regras', valor: 'O' },
        { label: 'Para ganhar, é necessário inventar novas regras', valor: 'I' }
      ]
    },
    {
      numero: 14,
      pergunta: 'Eu sempre gostei de...',
      respostas: [
        { label: 'Explorar', valor: 'I' },
        { label: 'Evitar surpresas', valor: 'O' },
        { label: 'Focalizar a meta', valor: 'A' },
        { label: 'Realizar uma abordagem natural', valor: 'C' }
      ]
    },
    {
      numero: 15,
      pergunta: 'Eu gosto de mudanças se',
      respostas: [
        { label: 'Me der uma vantagem competitiva', valor: 'A' },
        { label: 'For divertido e puder ser compartilhado', valor: 'C' },
        { label: 'Me der mais liberdade e variedade', valor: 'I' },
        { label: 'Melhorar ou me der mais controle', valor: 'O' }
      ]
    },
    {
      numero: 16,
      pergunta: 'Não existe nada de errado em...',
      respostas: [
        { label: 'Se colocar na frente', valor: 'A' },
        { label: 'Colocar os outros na frente', valor: 'C' },
        { label: 'Mudar de ideia', valor: 'I' },
        { label: 'Ser consistente', valor: 'O' }
      ]
    },
    {
      numero: 17,
      pergunta: 'Eu gosto de buscar conselhos de...',
      respostas: [
        { label: 'Pessoas bem-sucedidas', valor: 'A' },
        { label: 'Anciões e conselheiros', valor: 'C' },
        { label: 'Autoridades no assunto', valor: 'O' },
        { label: 'Lugares, os mais estranhos', valor: 'I' }
      ]
    },
    {
      numero: 18,
      pergunta: 'Meu lema é...',
      respostas: [
        { label: 'Fazer o que precisa ser feito', valor: 'I' },
        { label: 'Fazer bem feito', valor: 'O' },
        { label: 'Fazer junto com o grupo', valor: 'C' },
        { label: 'Simplesmente fazer', valor: 'A' }
      ]
    },
    {
      numero: 19,
      pergunta: 'Eu gosto de...',
      respostas: [
        { label: 'Complexidade, mesmo se confuso', valor: 'I' },
        { label: 'Ordem e sistematização', valor: 'O' },
        { label: 'Calor humano e animação', valor: 'C' },
        { label: 'Coisas claras e simples', valor: 'A' }
      ]
    },
    {
      numero: 20,
      pergunta: 'Tempo para mim é...',
      respostas: [
        { label: 'Algo que detesto desperdiçar', valor: 'A' },
        { label: 'Um grande ciclo', valor: 'C' },
        { label: 'Uma flecha que leva ao inevitável', valor: 'O' },
        { label: 'Irrelevante', valor: 'I' }
      ]
    },
    {
      numero: 21,
      pergunta: 'Se eu fosse bilionário...',
      respostas: [
        { label: 'Faria doações para muitas entidades', valor: 'C' },
        { label: 'Criaria uma poupança avantajada', valor: 'O' },
        { label: 'Faria o que desse na cabeça', valor: 'I' },
        { label: 'Me exibiria bastante para algumas pessoas', valor: 'A' }
      ]
    },
    {
      numero: 22,
      pergunta: 'Eu acredito que...',
      respostas: [
        { label: 'O destino é mais importante que a jornada', valor: 'A' },
        { label: 'A jornada é mais importante que o destino', valor: 'C' },
        { label: 'Um centavo economizado é um centavo ganho', valor: 'O' },
        { label: 'Bastam um navio e uma estrela para navegar', valor: 'I' }
      ]
    },
    {
      numero: 23,
      pergunta: 'Eu acredito também que...',
      respostas: [
        { label: 'Aquele que hesita está perdido', valor: 'A' },
        { label: 'De grão em grão a galinha enche o papo', valor: 'O' },
        { label: 'O que vai, volta', valor: 'C' },
        { label: 'Um sorriso ou uma careta é o mesmo para quem é cego', valor: 'I' }
      ]
    },
    {
      numero: 24,
      pergunta: 'Eu acredito ainda que...',
      respostas: [
        { label: 'É melhor prudência que arrependimento', valor: 'O' },
        { label: 'A autoridade deve ser desafiada', valor: 'I' },
        { label: 'Ganhar é fundamental', valor: 'A' },
        { label: 'O coletivo é mais importante do que o individual', valor: 'C' }
      ]
    },
    {
      numero: 25,
      pergunta: 'Eu penso que...',
      respostas: [
        { label: 'Não é fácil ficar encurralado', valor: 'I' },
        { label: 'É preferível olhar, antes de pular', valor: 'O' },
        { label: 'Duas cabeças pensam melhor do que uma', valor: 'C' },
        { label: 'Se você não tem condições de competir, não compita', valor: 'A' }
      ]
    }
  ];

  resultados: any = undefined;

  constructor() {}

  ngOnInit(): void {
  }

  resultado(res: any) {
    this.resultados = res;
  }

  reset() {
    this.resultados = undefined;
  }
}
