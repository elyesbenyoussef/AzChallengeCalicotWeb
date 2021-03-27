import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageEntity } from 'src/app/entities/image.entity';
import { ProductEntity } from 'src/app/entities/product.entity';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  produit: ProductEntity = new ProductEntity();
  images: ImageEntity[] = [];
  slideIndex = 0;

  constructor(private activeRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouted.data.subscribe((resolveData: any) => {
      this.produit = resolveData.collection.data;
      this.images = resolveData.collection.data.images;
    })
  }

  ImageClick(image: string) {
    this.produit.imageSrc = image;
  }

  openModal() {
    document.getElementById('imgModal').style.display = "block";
  }

  closeModal() {
    document.getElementById('imgModal').style.display = "none";
  }


  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(image) {
    const index = this.images.findIndex(x => x.url === image);
    this.showSlides(this.slideIndex = index + 1);
  }

  showSlides(slideIndex);
  showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("img-slides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("images") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    if (dots && dots.length > 0) {
      dots[this.slideIndex - 1].className += " active";
    }
  }
}
