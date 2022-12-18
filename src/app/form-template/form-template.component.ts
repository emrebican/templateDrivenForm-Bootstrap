import { Component } from '@angular/core';
import { Hero } from '../hero';

interface IHero {
  id: number;
  name: string;
  alterEgo: string;
  power: string;
  isActive: boolean;
}

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {
  powers: string[] = [
    'Really Smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer'
  ];

  heroList: IHero[] = [];

  model = new Hero('', '', '', false);

  handleSubmit(object: any) {
    this.heroList.push(object.form.value);
    console.log(this.heroList);
  }
}
