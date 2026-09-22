const copy = {
  "en": {
    "skip": "Skip to content",
    "home": "Back to the beginning",
    "navigation": "Main navigation",
    "language": "Language",
    "navWork": "Work",
    "navProjects": "Projects",
    "navAbout": "About",
    "role": "Software development / backend",
    "heroCopy": "APIs, integrations and automation for real operations. Computer Science student with experience delivering paid freelance projects.",
    "viewWork": "Explore my work ↓",
    "illustration": "Conceptual illustration / workflows and validation",
    "validation": "VALIDATION",
    "highlights": "Professional highlights",
    "signalFreelance": "paid freelance projects",
    "signalListings": "listings processed with MLBot",
    "workEyebrow": "01 / Professional case study",
    "workTitle": "One operation.",
    "workTitleEnd": "Four workflows.",
    "mlbotLead": "A dashboard for creating, publishing, editing and auditing Mercado Livre listings. I independently designed the architecture and implemented the system.",
    "mlbotDetails": "External APIs, OAuth2 and cloud integrations. AI-assisted generation with validation and human review.",
    "readCase": "Explore the sanitized case study ↗",
    "caseLanguage": "Case in English · Portuguese summary available",
    "workflowLabel": "The four MLBot workflows",
    "prepare": "01 / PREPARE",
    "create": "Create",
    "send": "02 / SEND",
    "publish": "Publish",
    "update": "03 / UPDATE",
    "edit": "Edit",
    "review": "04 / REVIEW",
    "audit": "Audit",
    "confidential": "Public case study. Client code, data and screens remain private.",
    "projectsEyebrow": "Selected projects",
    "projectsTitle": "More ways to build.",
    "noteDescription": "A C command-line tool for creating, organizing and searching Markdown notes. Harvard CS50 final project.",
    "dietDescription": "An educational nutrition web app with input validation and automated tests. University extension project.",
    "controlDescription": "A desktop app for product, raw-material and production records, with operational indicators. University extension project.",
    "sourceCode": "Source code ↗",
    "liveProject": "Live demo ↗",
    "aboutEyebrow": "About / availability",
    "aboutTitle": "Software with purpose.",
    "aboutCopy1": "I am studying Computer Science at Cruzeiro do Sul Virtual and looking for remote internships or junior software and backend roles in Brazil. I am also available for opportunities around Araçatuba, São Paulo.",
    "aboutCopy2": "My work connects backend systems, external services and everyday operations. I use AI with bounded tasks, automated tests and human review.",
    "english": "English · EF SET 66/100",
    "contact": "Let’s connect on LinkedIn ↗",
    "skillsLabel": "Core skills",
    "footerCopy": "Vinicius Cavalheiro / Software developer",
    "backTop": "Back to top ↑",
    "description": "Vinicius Cavalheiro — software developer focused on backend, REST APIs, SQL and automation. Explore paid freelance experience and selected projects."
  },
  "pt": {
    "skip": "Pular para o conteúdo",
    "home": "Voltar ao início",
    "navigation": "Navegação principal",
    "language": "Idioma",
    "navWork": "Experiência",
    "navProjects": "Projetos",
    "navAbout": "Sobre",
    "role": "Desenvolvimento de software / backend",
    "heroCopy": "APIs, integrações e automação para operações reais. Estudante de Ciência da Computação com experiência em projetos freelance pagos.",
    "viewWork": "Conheça meu trabalho ↓",
    "illustration": "Ilustração conceitual / fluxos e validação",
    "validation": "VALIDAÇÃO",
    "highlights": "Destaques profissionais",
    "signalFreelance": "projetos freelance pagos",
    "signalListings": "anúncios processados no MLBot",
    "workEyebrow": "01 / Case profissional",
    "workTitle": "Uma operação.",
    "workTitleEnd": "Quatro fluxos.",
    "mlbotLead": "Dashboard para criar, publicar, editar e auditar anúncios no Mercado Livre. Desenvolvi a arquitetura e implementei o sistema de forma independente.",
    "mlbotDetails": "APIs externas, OAuth2 e integrações em nuvem. Geração assistida por IA com validação e revisão humana.",
    "readCase": "Explore o case sanitizado ↗",
    "caseLanguage": "Case em inglês · resumo em português disponível",
    "workflowLabel": "Os quatro fluxos do MLBot",
    "prepare": "01 / PREPARAR",
    "create": "Criar",
    "send": "02 / ENVIAR",
    "publish": "Publicar",
    "update": "03 / ATUALIZAR",
    "edit": "Editar",
    "review": "04 / REVISAR",
    "audit": "Auditar",
    "confidential": "Case público. Código, dados e telas do cliente permanecem privados.",
    "projectsEyebrow": "Projetos selecionados",
    "projectsTitle": "Outras formas de construir.",
    "noteDescription": "Ferramenta de terminal em C para criar, organizar e buscar notas Markdown. Projeto final do Harvard CS50.",
    "dietDescription": "Aplicação educacional de nutrição, com validação de dados e testes automatizados. Projeto de extensão universitária.",
    "controlDescription": "Aplicação desktop para produtos, matérias-primas e registros de produção com indicadores operacionais. Projeto de extensão universitária.",
    "sourceCode": "Código-fonte ↗",
    "liveProject": "Demonstração ↗",
    "aboutEyebrow": "Sobre / disponibilidade",
    "aboutTitle": "Software com propósito.",
    "aboutCopy1": "Curso Ciência da Computação na Cruzeiro do Sul Virtual e busco estágio ou posição júnior remota em software e backend no Brasil. Também tenho disponibilidade para oportunidades na região de Araçatuba, São Paulo.",
    "aboutCopy2": "Meu trabalho conecta sistemas backend, serviços externos e operações do dia a dia. Uso IA com tarefas delimitadas, testes automatizados e revisão humana.",
    "english": "Inglês · EF SET 66/100",
    "contact": "Vamos conversar no LinkedIn ↗",
    "skillsLabel": "Principais competências",
    "footerCopy": "Vinicius Cavalheiro / Desenvolvedor de software",
    "backTop": "Voltar ao início ↑",
    "description": "Vinicius Cavalheiro — desenvolvedor de software com foco em backend, APIs REST, SQL e automação. Conheça minha experiência freelance e projetos selecionados."
  }
};

function setLanguage(language) {
  const selected = Object.hasOwn(copy, language) ? language : 'en';
  document.documentElement.lang = selected === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = copy[selected][element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    element.setAttribute('aria-label', copy[selected][element.dataset.i18nAria]);
  });
  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === selected));
  });
  document.querySelector('meta[name="description"]').content = copy[selected].description;
  try { localStorage.setItem('portfolio-language', selected); } catch { /* Language switching also works when storage is blocked. */ }
}

document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('portfolio-language') || 'en'; } catch { /* Keep the readable English default. */ }
setLanguage(savedLanguage);
