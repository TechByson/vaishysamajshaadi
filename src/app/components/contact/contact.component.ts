import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MapComponent } from '../../shared/map/map.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,MapComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  constructor(private Eleref:ElementRef){}
  inputs:any;
  ngAfterViewInit(): void {
    this.inputs = this.Eleref.nativeElement.querySelectorAll(".input");
   }

   focusFunc(event: any) {
    let parent:any = (event.target as HTMLElement).parentNode;
    parent?.classList.add('focus');
  }

  blurFunc(event: any) {
    let parent:any = (event.target as HTMLElement).parentNode;
    if (!(event.target as HTMLInputElement).value.trim()) {
      parent?.classList.remove('focus');
    }
  }
}
