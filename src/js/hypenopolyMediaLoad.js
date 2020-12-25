(function selectiveLoad() {
    console.log('selectiveLoad');
    let H9YLisLoaded = false;
    let elements = null;
    function handleSize(mql) {
      console.log("handleSize");
      console.log("mql: ");
      console.log(mql);
      if (mql.matches) {
        //i.e. if width <= 600px
        if (H9YLisLoaded) {
          window.Hyphenopoly.hyphenators["ru"].then(deh => {
            elements.list.get("ru").forEach(elo => {
              console.log(elo.element);
              console.log(elo.selector);
              deh(elo.element, elo.selector);
            });
          });
        } else {
          // Hyphenopoly isn't loaded yet, so load the Loader
          // with the following settings:
          window.Hyphenopoly = {
            require: {
              "ru": "FORCEHYPHENOPOLY"
            },
            paths: {
              maindir: "./js/",
              patterndir: "./js/patterns/"
            },
            setup: {
              selectors: {
                ".page-title": {}
              }
            }
          };
          const loaderScript = document.createElement("script");
          loaderScript.src = "./js/Hyphenopoly_Loader.js";
          document.head.appendChild(loaderScript);
          H9YLisLoaded = true;
        }
      } else {
        //i.e. if width > 600px
        if (H9YLisLoaded) {
          //remove hyphenation previously applied by Hyphenopoly
          window.Hyphenopoly.unhyphenate().then(els => {
            elements = els;
          });
        }
      }
    }
    // Create a Media-Query-List
    const mql = window.matchMedia("(max-width: 788px)");
    // Listen to changes
    mql.addListener(handleSize);
    // call handleSize on init
    handleSize(mql);
  })();
