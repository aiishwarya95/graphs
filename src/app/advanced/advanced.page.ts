import { Component } from '@angular/core';

import { dataSet } from '../jsonData2.js';
import { Custom_d3 } from '../../assets/custom_d3.js';

@Component({
  selector: 'app-advanced',
  templateUrl: 'advanced.page.html',
  styleUrls: ['advanced.page.scss'],
})
export class AdvancedPage {
  // chart = '01';
   constructor() {}

  // ionViewDidEnter() {
  //   this.init();
  //   console.log(dataSet);
  // }

  // init() {
  //   // new Custom_d3("#visualization", dataSet[0]);
  //   new Custom_d3("#visualization", this.getTransformedData(dataSet));
  // }

  // changeChart() {
  //   this.init();
  // }

  // getTransformedData(set) {
  //   //Structure we want the data in
  //   let id = 1;
  //   let ds =
  //     {
  //       "nodes": [],
  //       "links": []
  //     };
  //   //create root node, for the organisation
  //   ds.nodes.push({id, name: set[0].shortLabel, label: set[0].label});

  //   id += 1;
  //   //create nodes and links for begrippen
  //   set[0].begrippen.forEach(obj => {
  //     ds.nodes.push({id, label: obj.id, name: obj.naam});
  //     ds.links.push({ source: id, target: 1, type: "BEGRIP_VAN"});
  //     id += 1;
  //   });

  //   return ds;
  // }
}
