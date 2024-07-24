import { Component, EventEmitter, Output, output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from '../../services/searchbar.service';
import { outputAst } from '@angular/compiler';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  isSearchVisible: any;
  @Output() public inputFiterRes:EventEmitter<any> =new EventEmitter();
  constructor(private router:Router , private sb:SearchBarService){}

ngOnInit():void{
  this.sb.isSearchVisible.subscribe((status: any) =>{
    this.isSearchVisible=status;
  });
}


  onNavigateToLogin(){
    this.router.navigate(['/','login']);
  }
  filterBrowsingList(inputElement :HTMLInputElement){
this.inputFiterRes.emit(inputElement.value);
  }
}






