import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  
  constructor(private eleRef:ElementRef,private route: ActivatedRoute){}
  @HostListener('window:scroll', ['$event'])
  ngAfterViewInit(): void { 
    this.route.url.subscribe(segments => {
      // segments is an array of URL segments
      const path = segments.map(segment => segment.path).join('/');
      if(path=='contact'){
        this.eleRef.nativeElement.querySelector('.navbar').style.backgroundColor='#2bbd9b'
      }else{
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
    });

   
  }

}
