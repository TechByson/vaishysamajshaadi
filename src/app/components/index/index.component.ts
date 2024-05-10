import { AfterViewInit, Component, ElementRef } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../shared/slider/slider.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent,MatDividerModule,SliderComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements AfterViewInit {
  constructor(private eleref:ElementRef){}
 
  HappyFaces:any=[
    {
      images:'https://vaishyasamajshaadi.com/image/story1.jpg',
      Name:'Yash and Aditi',
      Content:'In a modern tale of love and understanding, Yash, a social activist, and Aditi, an artist, found each other on VaishyaSamajShaadi. Their diverse backgrounds blended seamlessly, creating a colorful canvas of companionship and shared purpose.'
    },
    {
      images:'https://vaishyasamajshaadi.com/image/story3.jpg',
      Name:'Shiva and Riya',
      Content:'In a modern tale of love and understanding, Yash, a social activist, and Aditi, an artist, found each other on VaishyaSamajShaadi. Their diverse backgrounds blended seamlessly, creating a colorful canvas of companionship and shared purpose.'
    },
    {
      images:'https://vaishyasamajshaadi.com/image/story8.jpg',
      Name:'Harsh and Yashita',
      Content:'In a modern tale of love and understanding, Yash, a social activist, and Aditi, an artist, found each other on VaishyaSamajShaadi. Their diverse backgrounds blended seamlessly, creating a colorful canvas of companionship and shared purpose.'
    },
    {
      images:'https://vaishyasamajshaadi.com/image/story1.jpg',
      Name:'Yash and Aditi',
      Content:'In a modern tale of love and understanding, Yash, a social activist, and Aditi, an artist, found each other on VaishyaSamajShaadi. Their diverse backgrounds blended seamlessly, creating a colorful canvas of companionship and shared purpose.'
    },
    {
      images:'https://vaishyasamajshaadi.com/image/story3.jpg',
      Name:'Shiva and Riya',
      Content:'In a modern tale of love and understanding, Yash, a social activist, and Aditi, an artist, found each other on VaishyaSamajShaadi. Their diverse backgrounds blended seamlessly, creating a colorful canvas of companionship and shared purpose.'
    },
    {
      images:'https://vaishyasamajshaadi.com/image/story8.jpg',
      Name:'Harsh and Yashita',
      Content:'In a modern tale of love and understanding, Yash, a social activist, and Aditi, an artist, found each other on VaishyaSamajShaadi. Their diverse backgrounds blended seamlessly, creating a colorful canvas of companionship and shared purpose.'
    }
  ]
  ngAfterViewInit(): void {
    let menuClose:any = this.eleref.nativeElement.querySelector('#menu-close');
    let menuToggle:any = this.eleref.nativeElement.querySelector('#menu-toggle');
    let sidebarWrapper:any = this.eleref.nativeElement.querySelector('#sidebar-wrapper');

    if (menuClose) {
        menuClose.addEventListener('click', function(e: { preventDefault: () => void; }) {
            e.preventDefault();
            sidebarWrapper.classList.toggle('active');
        });
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', function(e: { preventDefault: () => void; }) {
            e.preventDefault();
            sidebarWrapper.classList.toggle('active');
        });
    }
  }

}
