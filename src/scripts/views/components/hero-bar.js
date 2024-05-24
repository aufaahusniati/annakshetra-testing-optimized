class HeroBar extends HTMLElement {
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
          .hero {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
          }

          .hero img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            z-index: -1;
            transform: translateX(-50px);
            margin-top: -70%;
          }
          
          .hero_inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background: rgba(black, 0.6);
          }
          
          .hero_title {
            color: #962824;
            font-weight: 700;
            font-size: 2.9em;
          }
          
          .hero_tagline {
            color: #fff;
            margin-top: 20px;
            font-size: 0.9em;
            font-weight: 400;
            padding-left: 1em;
            padding-right: 1em;
          }
          
  
            @media screen and (min-width: 768px) {
              .hero img {
                margin-top: -40%;
              }
                .hero_title {
                    font-size: 2.7em;
                  }
                
                  .hero_tagline {
                    font-size: 1.2em;
                  }
                
              }
      
              @media screen and (min-width: 1024px) {
                .hero img {
                  margin-top: -30%;
                }
                .hero_title {
                    font-size: 3.1em;
                  }
                
                  .hero_tagline {
                    font-size: 1.1em;
                  }
              }
          </style>
  
          <div class="hero">
            <picture>
              <source media="(max-width: 600px)" srcset="./heros/hero-image_1-large.jpg">
              <img src="./heros/hero-image_1-small.jpg" 
                    alt="hero restaurant"
                    class="lazy">
            </picture>
          <div class="hero_inner">
            <h1 class="hero_title">Where to eat?</h1>
            <p class="hero_tagline">
              We have restaurants that offer fine dining and delicacies.
            </p>
          </div>
        </div>
        `;
  }
}

customElements.define('hero-bar', HeroBar);
