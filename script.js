const copy = {
  en: {
    navWork: "Work", navProjects: "Projects", navAbout: "About",
    availability: "Available for internships and junior roles in Brazil",
    heroTitle: "Software that turns complex operations into dependable workflows.",
    heroCopy: "I am Vinicius Cavalheiro, a software developer and Computer Science student working with backend systems, REST APIs, SQL, Python, automation and controlled AI-assisted engineering.",
    viewWork: "View my work", signalListings: "marketplace listings processed", signalFreelance: "paid freelance projects",
    workEyebrow: "Professional case study", workTitle: "Automation built for real operational pressure",
    mlbotLead: "A confidential production dashboard that automated Mercado Livre listing creation, publishing, editing and catalog-wide auditing.",
    mlbotFeature1: "Independent ownership from architecture through implementation",
    mlbotFeature2: "OAuth2, marketplace APIs, cloud storage, Seller7 and Google Drive integrations",
    mlbotFeature3: "AI-assisted generation protected by validation harnesses, guardrails, tests and human review",
    readCase: "Read the sanitized case study ↗", flowInput: "Product data", flowBackend: "Backend orchestration", flowValidation: "Validation and human review",
    projectsEyebrow: "Selected projects", projectsTitle: "Evidence across backend, systems and desktop development",
    noteDescription: "Harvard CS50 final project: a filesystem-first C CLI for creating, organizing, searching and editing Markdown notes.",
    dietDescription: "University extension web app for educational nutrition estimates, with input validation, health disclaimers and automated tests.",
    controlDescription: "University extension desktop application for product, raw-material and production records with operational indicators.",
    sourceCode: "Source code ↗", liveProject: "Live project ↗",
    aboutEyebrow: "About", aboutTitle: "Engineering judgment before generated output",
    aboutCopy1: "I use AI as an engineering tool, not as a substitute for verification. My workflows combine bounded agent tasks, reusable skills, structured context, automated tests, security checks and human review.",
    aboutCopy2: "I am completing a Bachelor's degree in Computer Science at Cruzeiro do Sul Virtual and seeking remote internships or junior software and backend roles, with availability for opportunities around Araçatuba, São Paulo.",
    footerCopy: "Built to make the work easy to inspect."
  },
  pt: {
    navWork: "Experiência", navProjects: "Projetos", navAbout: "Sobre",
    availability: "Disponível para estágios e vagas júnior no Brasil",
    heroTitle: "Software que transforma operações complexas em fluxos confiáveis.",
    heroCopy: "Sou Vinicius Cavalheiro, desenvolvedor de software e estudante de Ciência da Computação com atuação em backend, APIs REST, SQL, Python, automação e engenharia assistida por IA com controle e validação.",
    viewWork: "Conheça meu trabalho", signalListings: "anúncios processados em marketplace", signalFreelance: "projetos freelance remunerados",
    workEyebrow: "Estudo de caso profissional", workTitle: "Automação construída para uma operação real",
    mlbotLead: "Um painel de produção confidencial que automatizava criação, publicação, edição e conferência geral de anúncios no Mercado Livre.",
    mlbotFeature1: "Responsabilidade independente da arquitetura à implementação",
    mlbotFeature2: "Integrações com OAuth2, APIs de marketplace, armazenamento em nuvem, Seller7 e Google Drive",
    mlbotFeature3: "Geração assistida por IA protegida por harnesses de validação, guardrails, testes e revisão humana",
    readCase: "Leia o estudo de caso sanitizado ↗", flowInput: "Dados do produto", flowBackend: "Orquestração no backend", flowValidation: "Validação e revisão humana",
    projectsEyebrow: "Projetos selecionados", projectsTitle: "Evidências em backend, sistemas e desenvolvimento desktop",
    noteDescription: "Projeto final do Harvard CS50: uma CLI em C orientada ao sistema de arquivos para criar, organizar, buscar e editar notas Markdown.",
    dietDescription: "Aplicação web de extensão universitária para estimativas nutricionais educacionais, com validação, avisos de saúde e testes automatizados.",
    controlDescription: "Aplicação desktop de extensão universitária para produtos, matérias-primas e registros de produção com indicadores operacionais.",
    sourceCode: "Código-fonte ↗", liveProject: "Projeto publicado ↗",
    aboutEyebrow: "Sobre", aboutTitle: "Julgamento de engenharia antes da saída gerada",
    aboutCopy1: "Uso IA como ferramenta de engenharia, não como substituta da verificação. Meus fluxos combinam tarefas limitadas para agentes, skills reutilizáveis, contexto estruturado, testes automatizados, checagens de segurança e revisão humana.",
    aboutCopy2: "Curso o Bacharelado em Ciência da Computação na Cruzeiro do Sul Virtual e procuro estágios ou vagas júnior remotas em desenvolvimento de software e backend, além de oportunidades na região de Araçatuba, São Paulo.",
    footerCopy: "Construído para tornar o trabalho fácil de verificar."
  }
};

function setLanguage(language) {
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[language][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.language === language);
  });
  localStorage.setItem("portfolio-language", language);
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

setLanguage(localStorage.getItem("portfolio-language") || "en");
