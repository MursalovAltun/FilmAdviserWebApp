import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {
  @Input()
  icon: string;

  constructor() {}

  ngOnInit() {}
}
