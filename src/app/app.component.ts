import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: String = 'piratasdeb'

  public clickMe(): void {
    console.log('heelo')
    return
  }
}
