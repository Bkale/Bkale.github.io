(()=>{
  const home = document.querySelector('.js-homeContainer')
  const hamburger = document.querySelector('.js-hamburger')
  const portfolioContainer = document.querySelector('.js-portfolioContainer')
  const aboutContainer = document.querySelector('.js-aboutContainer')
  const header = document.querySelector('.js-header')
  const remove = document.querySelector('.js-remove')
  const aboutLoop = document.querySelector('.js-aboutLoop')
  console.log(portfolioContainer);
  console.log(aboutContainer);

  const quotes = [
    {
      quote:'The best preparation for tomorrow is doing your best today.',
      author: 'H. Jackson Brown, Jr.'
    },
    {
      quote:'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
      author: '  Helen Keller'
    },
    {
      quote:"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
      author: 'Jimmy Dean'
    },
    {
      quote:"Put your heart, mind, and soul into even your smallest acts. This is the secret of success.",
      author: 'Swami Sivananda'
    },
    {
      quote:"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
      author: 'Maya Angelou'
    },
    {
      quote:"What we think, we become.",
      author: 'Buddha'
    },
    {
      quote:"Never succumb to the temptation of bitterness",
      author: 'Dr. Martin Luther King Jr'
    },
    {
      quote:"Be thankful for what you have; you’ll end up having more. If you concentrate on what you don’t have, you will never, ever have enough.",
      author: 'Oprah Winfrey'
    },
    {
      quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier",
      author: 'Mother Teresa'
    },
    {
      quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: 'Ralph Waldo Emerson'
    }
  ]
  const renderQuote = (quote) => {
    home.innerHTML = `
    <div class="quote">
      <h1>~ ${quote.quote}<h1>
      <h2>~ ${quote.author}<h2>
    </div>
    `
  }

  const titles = ['FRONT_END DEVELOPER','PHOTOGRAPHER','CONTENT-STRATEGIST', 'ENTREPRENEUR']
  let loopCount = 0;
  window.setInterval(()=>{
    if(loopCount === titles.length){
      loopCount = 0
    }
    aboutLoop.innerHTML = `${titles[loopCount]}`
    loopCount++
  },3000)






  // // // Slideshow Background.
  // (function() {
  //   // Settings.
  //     var settings = {
  //         images: {
  //           '../assets/home.jpg': 'center',
  //           '../assets/home.jpg': 'center',
  //           '../assets/home.jpg': 'center'
  //         },
  //         delay: 6000
  //     };
  //
  //     // Vars.
  //     var	pos = 0, lastPos = 0,$wrapper, $bgs = [], $bg,k, v;
  //
  //     // Create BG wrapper, BGs.
  //     $wrapper = document.createElement('div');
  //     $wrapper.id = 'bg';
  //     $body.appendChild($wrapper);
  //
  //     for (k in settings.images) {
  //       // Create BG.
  //       $bg = document.createElement('div');
  //       $bg.style.backgroundImage = 'url("' + k + '")';
  //       $bg.style.backgroundPosition = settings.images[k];
  //       $wrapper.appendChild($bg);
  //       // Add it to array.
  //       $bgs.push($bg);
  //     }
  //     console.log($bgs);
  //   // Main loop.
  //     $bgs[pos].classList.add('visible');
  //     $bgs[pos].classList.add('top');
  //
  //     // Bail if we only have a single BG or the client doesn't support transitions.
  //       if ($bgs.length == 1
  //       ||	!canUse('transition'))
  //         return;
  //
  //     window.setInterval(function() {
  //       lastPos = pos;
  //       pos++;
  //       // Wrap to beginning if necessary.
  //         if (pos >= $bgs.length)
  //           pos = 0;
  //       // Swap top images.
  //         $bgs[lastPos].classList.remove('top');
  //         $bgs[pos].classList.add('visible');
  //         $bgs[pos].classList.add('top');
  //
  //       // Hide last image after a short delay.
  //         window.setTimeout(function() {
  //           $bgs[lastPos].classList.remove('visible');
  //         }, settings.delay / 2);
  //
  //     }, settings.delay);
  //
  // })();






// #########  CLICK EVENTS #############
  document.addEventListener("DOMContentLoaded",async () => {
       renderQuote(quotes[ Math.floor((Math.random() * (quotes.length - 0) + 0))])
  })
  hamburger.addEventListener('click',() => {
    header.style.display = "block"
    remove.style.display = "block"
    portfolioContainer.style.width = "80%"
    aboutContainer.style.width = "80%"
  })
  remove.addEventListener('click', () => {
    header.style.display = "none"
    remove.style.display = "none"
    portfolioContainer.style.width = "100%"
    aboutContainer.style.width = "100%"
  })
})();
