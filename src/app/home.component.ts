import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template:'<h1>home works {{title}}</h1>'
})
export class AppHome {
  title = 'Home Test';
}
