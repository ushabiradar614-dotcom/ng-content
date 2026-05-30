import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-content';
  showModel :boolean=false
  constructor(){

  }
getConfirmation(getConfirmFlag:boolean){
  if(getConfirmFlag){
    alert(`Remove It`)
  }else{
    alert(`Dont Remove It`)
  }
}
  getHideFlag(flag: boolean){
    this.showModel = false
  }


  onRemove(){
    this.showModel=true
  }
}
