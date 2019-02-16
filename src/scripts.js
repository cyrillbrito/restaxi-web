import './styles.css';

let language;

function init() {
  detectLanguage();

  const languageElement = document.getElementById(language + '-a');
  languageElement.classList.add('selected-lang-a');
  languageElement.href = 'javascript:;';
}

function detectLanguage() {
  const url = window.location.href;
  if (url.includes('/en')) {
    language = 'en';
  } else if (url.includes('/fr')) {
    language = 'fr';
  } else {
    language = 'pt';
  }
}

// main
init();
