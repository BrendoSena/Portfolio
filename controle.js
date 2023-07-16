function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });

const elements = document.querySelectorAll('.animate');

elements.forEach(element => {
  observer.observe(element);
});

// função exibir e ocultar habilidades

function addHtml() {
  var htmlContent = document.querySelector('.contHtml');
  var htmlButton = document.getElementById('html');
  
  if (htmlContent.style.display === 'none' || htmlContent.style.display === '') {
    htmlContent.style.display = 'block';
    htmlButton.classList.add('active');
    hideOtherContent(htmlContent);
  } else {
    htmlContent.style.display = 'none';
    htmlButton.classList.remove('active');
  }
  
  var buttons = document.querySelectorAll('.animate button');
  buttons.forEach(button => {
    if (button !== htmlButton) {
      button.classList.remove('active');
    }
  });
}

function addCss() {
  var cssContent = document.querySelector('.contCss');
  var cssButton = document.getElementById('css');
  
  if (cssContent.style.display === 'none' || cssContent.style.display === '') {
    cssContent.style.display = 'block';
    cssButton.classList.add('active');
    hideOtherContent(cssContent);
  } else {
    cssContent.style.display = 'none';
    cssButton.classList.remove('active');
  }
  
  var buttons = document.querySelectorAll('.animate button');
  buttons.forEach(button => {
    if (button !== cssButton) {
      button.classList.remove('active');
    }
  });
}

function addBoot() {
  var bootContent = document.querySelector('.contBoot');
  var bootButton = document.getElementById('boot');
  
  if (bootContent.style.display === 'none' || bootContent.style.display === '') {
    bootContent.style.display = 'block';
    bootButton.classList.add('active');
    hideOtherContent(bootContent);
  } else {
    bootContent.style.display = 'none';
    bootButton.classList.remove('active');
  }
  
  var buttons = document.querySelectorAll('.animate button');
  buttons.forEach(button => {
    if (button !== bootButton) {
      button.classList.remove('active');
    }
  });
}

function addJs() {
  var jsContent = document.querySelector('.contJs');
  var jsButton = document.getElementById('js');
  
  if (jsContent.style.display === 'none' || jsContent.style.display === '') {
    jsContent.style.display = 'block';
    jsButton.classList.add('active');
    hideOtherContent(jsContent);
  } else {
    jsContent.style.display = 'none';
    jsButton.classList.remove('active');
  }
  
  var buttons = document.querySelectorAll('.animate button');
  buttons.forEach(button => {
    if (button !== jsButton) {
      button.classList.remove('active');
    }
  });
}

function hideOtherContent(exceptElement) {
  var contentElements = document.querySelectorAll('.sumir');
  contentElements.forEach(element => {
    if (element !== exceptElement) {
      element.style.display = 'none';
    }
  });
}
// fim da função

// função voltar para o topo

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("voltarTopo").style.display = "block";
  }else {
    document.getElementById("voltarTopo").style.display = "none";
  }
}

// função transição suave

$(".btnHab, .btnProject, .btnContact, #voltarTopo, .contFooter a").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

