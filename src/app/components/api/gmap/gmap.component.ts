import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {
  latitude = 44.052071;
  longitude = -123.086754;
  mapType = 'roadmap';

  constructor() { }

  ngOnInit() {
  }

}
