import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() counterValue: number;
  @Output() counterValueEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public increment() {
    this.counterValue++;
    this.counterValueEvent.emit({
      value: this.counterValue,
    });
  }

  public decrement() {
    this.counterValue--;
    this.counterValueEvent.emit({
      value: this.counterValue,
    });
  }
}
