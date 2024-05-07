import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  
  constructor(private eleRef:ElementRef){}
  @HostListener('window:scroll', ['$event'])
  ngAfterViewInit(): void { 
    window.addEventListener('scroll', (event) => {
      // Handle scroll event
     if(window.scrollY >300)
     {
       this.eleRef.nativeElement.querySelector('.navbar').style.transitionDuration='1s'
      this.eleRef.nativeElement.querySelector('.navbar').style.backgroundColor='#2bbd9b'
     }
    else
    {
      this.eleRef.nativeElement.querySelector('.navbar').style.backgroundColor='transparent'
    }
    });
  }

}
