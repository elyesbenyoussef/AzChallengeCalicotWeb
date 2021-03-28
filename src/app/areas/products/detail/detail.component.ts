import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageEntity } from 'src/app/entities/image.entity';
import { ProductEntity } from 'src/app/entities/product.entity';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  produit: ProductEntity = new ProductEntity();
  images: ImageEntity[] = [];
  slideIndex = 0;
  defaultImage: string;

  constructor(private activeRouted: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.activeRouted.data.subscribe((resolveData: any) => {
      this.produit = resolveData.collection.data;
      this.chargerImages(resolveData.collection.data.images);
      this.defaultImage = this.images[0].urlThumb;
    })
  }

  chargerImages(images: ImageEntity[]) {
    for (let index = 0; index < images.length; index++) {
      const element = images[index];

      element.urlThumb = this.productService.GetUrlThumb(element.url);

      this.images.push(element);
    }
  }



  ImageClick(image: string) {
    this.defaultImage = image;
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
    const index = this.images.findIndex(x => x.urlThumb === image);
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
