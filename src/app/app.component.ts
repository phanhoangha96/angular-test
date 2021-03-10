import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular 6";
  keyType: any = "Numeric";
  tasks: Task[] = [
    {
      id: 1,
      name: "AngularJS"
    },
    {
      id: 2,
      name: "ReactJS"
    },
    {
      id: 3,
      name: "VueJS"
    },
    {
      id: 4,
      name: "NodeJS"
    }
  ];
}

export interface Task {
  id: number;
  name: string;
}
