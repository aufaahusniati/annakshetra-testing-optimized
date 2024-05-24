class highlightBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        .content_highlight {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
          }
          
          .image_hightlight img {
            width: 100%;
            border: none;
            border-radius: 90px;
            padding-bottom: 1em;
            padding-top: 2em;
          }
          
          .text_hightlight {
            margin: auto;
          }
          
          .text_hightlight h1 {
            font-size: 1.9em;
            color: #962824;
            padding-bottom: 0.5em;
            text-align: center;
          }
          
          .text_hightlight p {
            font-size: 1em;
            padding-top: 1em;
            text-align: justify;
          }

          @media screen and (min-width: 768px) {
            .content_highlight {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
              }
            
              .image_hightlight img {
                padding-right: 1em;
              }
            
              .text_hightlight {
                margin: auto;
              }
            
              .text_hightlight h1 {
                font-size: 1.5em;
                color: #962824;
                padding-bottom: 0.5em;
                text-align: center;
              }
            
              .text_hightlight p {
                font-size: 1em;
              }
            }
    
            @media screen and (min-width: 1024px) {
                .content_highlight {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    padding-top: 3em;
                  }
                
                  .image_hightlight img {
                    padding-right: 2em;
                  }
                
                  .text_hightlight {
                    margin: auto;
                    padding-left: 20px;
                  }
                
                  .text_hightlight h1 {
                    font-size: 2em;
                    color: #962824;
                  }
                
                  .text_hightlight p {
                    font-size: 1.1em;
                  }
            }
        </style>

        <article class="content_highlight">
          <div class="image_hightlight">
          <picture>
              <source media="(max-width: 600px)" srcset="./heros/hero-image_2-large.jpg">
              <img src="./heros/hero-image_2-small.jpg" 
                    alt="hero restaurant"
                    class="lazyload">
            </picture>
          </div>
          <div class="text_hightlight">
            <h1>Don't leave Indonesia before You Get a Taste</h1>
            <hr style="width: 50%; border: 3px solid #de9d7e; margin: auto" />
            <p>
              Indonesia is a melting pot of different flavors. Home to over 300
              ethnic groups, it offers a varied range of delicacies, many of
              which use herbs and spices to enhance the flavor. The
              mouth-watering dishes will leave you wanting more! So, feast your
              eyes and try not to drool over these must-try savory Indonesian
              foods.
            </p>
          </div>
        </article>
      `;
  }
}

customElements.define('highlight-bar', highlightBar);
