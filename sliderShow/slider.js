class slider {
  sliderIndex = 1;
  constructor(props) {
    this.props = props;

    this.inialStuff();

    this.createNextAndPrivBtns();
    this.createDots();
    this.showSlides(1);
    this.setAtuo();
  }

  inialStuff() {
    let { el: sliderElement, slideClass, auto } = this.props;

    //
    if (!sliderElement) throw Error("slider element is not Ok");
    if (!slideClass) throw Error("slide Class is not exist");

    if (!Number.isInteger(auto)) this.auto = 0;
    else this.auto = auto;

    this.sliders = [...sliderElement.children].filter((elm) =>
      elm.classList.contains(slideClass)
    );
  }

  createNextAndPrivBtns() {
    let { el: sliderElement } = this.props;

    sliderElement.insertAdjacentHTML(
      "beforeend",
      `
            <a class="next">&#10095;<a/>
            <a class="prev">&#10094;<a/>
        `
    );

    sliderElement
      .querySelector(".next")
      .addEventListener("click", this.incrementSlide);
    sliderElement
      .querySelector(".prev")
      .addEventListener("click", this.decrementSlide);
  }

  incrementSlide = () => {
    this.resetAutoSlider();
    this.showSlides((this.sliderIndex += 1));
  };
  decrementSlide = () => {
    this.resetAutoSlider();
    this.showSlides((this.sliderIndex -= 1));
  };
  currentSlide = (n) => {
    this.resetAutoSlider();
    this.showSlides((this.sliderIndex = n));
  };

  createDots() {
    let { el: sliderElement } = this.props;

    let dotElements = [...this.sliders].map(
      (slider, index) => `<span class="dot" data-slide="${index + 1}"></span>`
    );

    // create virtual DOM for dots
    let dots = document.createElement("div");
    dots.classList.add("dots");
    dots.innerHTML = `${dotElements.join("")}`;

    sliderElement.after(dots);
    // add event listener for each dots
    this.dots = dots.querySelectorAll(".dot");
    this.dots.forEach((dot) =>
      dot.addEventListener("click", (e) =>
        this.currentSlide(+e.target.dataset.slide)
      )
    );

    console.log(dots);
  }

  showSlides(number) {
    let { el: sliderElement, slideClass, currentSlider } = this.props;

    if (number > this.sliders.length) this.sliderIndex = 1;
    if (number < 1) this.sliderIndex = this.sliders.length;

    sliderElement
      .querySelector(`.${slideClass}.active`)
      .classList.remove("active");
    this.dots.forEach((dot) => dot.classList.remove("active"));

    this.sliders[this.sliderIndex - 1].classList.add("active");
    this.dots[this.sliderIndex - 1].classList.add("active");

    if (currentSlider) currentSlider(this.sliders[this.sliderIndex - 1]);
  }

  setAtuo() {
    if (this.auto !== 0) {
      this.intervalID = setInterval(
        () => this.showSlides((this.sliderIndex += 1)),
        this.auto
      );
    }
  }

  resetAutoSlider() {
    clearInterval(this.intervalID);
    this.setAtuo();
  }
}
