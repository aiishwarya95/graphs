import { Component, OnInit } from '@angular/core';
import { games } from '../../jsonData2.js';
import { Custom_d3 } from '../../../assets/custom_d3.js';

@Component({
  selector: 'graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss'],
})
export class GraphsComponent implements OnInit {
  ds = {
    nodes: [],
    links: []
  };
  id = 100;
  GAMES_ID = 1;
  CLASSIC_GAMES_ID = 2;
  CONSOLE_GAMES_ID = 3;
  CARD_GAMES_ID = 4;
  BOARDGAMES_ID = 5;
  NINTENDO_SWITCH_ID = 6;
  PLAYSTATION4_ID = 7;
  XBOX360_ID = 8;

  ngOnInit() {
    this.init();
  }

  init() {
    this.initializeGames();
    this.loadClassicGames();
    this.loadConsoleGames();
    // tslint:disable-next-line:no-unused-expression
    new Custom_d3('#visualization', this.ds);
  }
  initializeGames() {
    this.ds.nodes.push({id: this.GAMES_ID, name: 'games', label: 'games' });
    this.ds.nodes.push({id: this.CLASSIC_GAMES_ID, name: 'classic games', label: 'classic games' });
    this.ds.nodes.push({id: this.CONSOLE_GAMES_ID, name: 'console games', label: 'console games' });
    this.ds.links.push({ source: this.CLASSIC_GAMES_ID, target: this.GAMES_ID, type: ''});
    this.ds.links.push({ source: this.CONSOLE_GAMES_ID, target: this.GAMES_ID, type: ''});
  }
  loadClassicGames() {
    this.ds.nodes.push({id: this.CARD_GAMES_ID, name: 'card games', label: 'card games' });
    this.ds.nodes.push({id: this.BOARDGAMES_ID, name: 'boardgames', label: 'board games' });
    this.ds.links.push({ source: this.CARD_GAMES_ID, target: this.CLASSIC_GAMES_ID, type: ''});
    this.ds.links.push({ source: this.BOARDGAMES_ID, target: this.CLASSIC_GAMES_ID, type: ''});
    games.games.boardgames.boardgames.forEach(obj => {
      this.ds.nodes.push({id: this.id, label: obj.description, name: obj.title});
      this.ds.links.push({ source: this.id, target: this.BOARDGAMES_ID, type: ''});
      this.id += 1;
    });
    games.games.boardgames.cardgames.forEach(obj => {
      this.ds.nodes.push({id: this.id, label: obj.description, name: obj.title});
      this.ds.links.push({ source: this.id, target: this.CARD_GAMES_ID, type: ''});
      this.id += 1;
    });
  }
  loadConsoleGames() {
    this.ds.nodes.push({id: this.NINTENDO_SWITCH_ID, name: 'nintendoSwitch', label: 'Nintendo Switch' });
    this.ds.nodes.push({id: this.PLAYSTATION4_ID, name: 'ps4', label: 'Playstation 4' });
    this.ds.nodes.push({id: this.XBOX360_ID, name: 'xbox360', label: 'XBox 360' });
    this.ds.links.push({ source: this.NINTENDO_SWITCH_ID, target: this.CONSOLE_GAMES_ID, type: ''});
    this.ds.links.push({ source: this.PLAYSTATION4_ID, target: this.CONSOLE_GAMES_ID, type: ''});
    this.ds.links.push({ source: this.XBOX360_ID, target: this.CONSOLE_GAMES_ID, type: ''});
    games.games.consoleGames.nintendoSwitch.forEach(obj => {
      this.ds.nodes.push({id: this.id, label: obj.description, name: obj.title});
      this.ds.links.push({ source: this.id, target: this.NINTENDO_SWITCH_ID, type: ''});
      this.id += 1;
    });
    games.games.consoleGames.ps4.forEach(obj => {
      this.ds.nodes.push({id: this.id, label: obj.description, name: obj.title});
      this.ds.links.push({ source: this.id, target: this.PLAYSTATION4_ID, type: ''});
      this.id += 1;
    });
    games.games.consoleGames.xbox360.forEach(obj => {
      this.ds.nodes.push({id: this.id, label: obj.description, name: obj.title});
      this.ds.links.push({ source: this.id, target: this.XBOX360_ID, type: ''});
      this.id += 1;
    });
  }

}


