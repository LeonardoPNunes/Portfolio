import cocktail from "../assets/video/cocktail.gif";
import zipCodeFinder from "../assets/video/buscador-de-cep.gif";
import githubProfile from "../assets/video/buscador-do-github.gif";
import linkShortener from "../assets/video/encurtador.gif";
import fashion from "../assets/video/fashion-loja-de-roupas.gif";
import infusion from "../assets/video/infusion.gif";
import taskProject from "../assets/video/task-project.gif";
import NotFound from "../assets/img/not-found.png";

export const data = [
  {
    name: "Task Project",
    img: taskProject,
    altimg: "gif de apresentação do projeto Task Project",
    linkGit: "https://github.com/LeonardoPNunes/task-project",
    linkProject: "https://task-project-leo.vercel.app/",
    description:
      "Aplicação criada para um desafio técnico com autenticação, cadastro, login e listagem de usuários em uma interface clara e objetiva.",
    frameworks: "Next.js",
    category: "Autenticação e dashboard",
    stack: ["Next.js", "Auth", "UI"],
  },
  {
    name: "LDrinks",
    img: NotFound,
    altimg: "gif de apresentação do projeto LDrinks",
    linkGit: "https://github.com/LeonardoPNunes/LDrinks",
    description:
      "Versão mobile de um catálogo de drinks com filtros, favoritos, login e consumo de API pública em uma experiência pensada para celular.",
    frameworks: "React Native",
    category: "Aplicativo mobile",
    stack: ["React Native", "Redux", "API"],
  },
  {
    name: "PLNEFO cocktail",
    img: cocktail,
    altimg: "gif de apresentação do projeto PLNEFO cocktail",
    linkGit: "https://github.com/LeonardoPNunes/P-L-N-E-F-O",
    linkProject: "https://plnefo-cocktail.vercel.app/",
    description:
      "Projeto com filtros, favoritos, login e integração com API pública, combinando funcionalidade com uma navegação visualmente agradável.",
    frameworks: "React",
    category: "Web app com API",
    stack: ["React", "Redux", "API"],
  },
  {
    name: "Github Profiles",
    img: githubProfile,
    altimg: "gif de apresentação do Github Profiles",
    linkGit: "https://github.com/LeonardoPNunes/githubProfiles",
    linkProject: "https://github-profiles-project-leo.vercel.app/",
    description:
      "Busca de perfis do GitHub com consulta de repositórios, seguidores, seguindo e principais dados públicos em uma interface direta.",
    frameworks: "React",
    category: "Integração com API",
    stack: ["React", "GitHub API", "UX"],
  },
  {
    name: "Buscador de CEP",
    img: zipCodeFinder,
    altimg: "gif de apresentação do buscador de CEP",
    linkGit: "https://github.com/LeonardoPNunes/Buscador-De-CEP",
    linkProject: "https://buscador-de-cep-project-leo.vercel.app/",
    description:
      "Ferramenta para consulta de CEP com retorno rápido de endereço, bairro, cidade e complemento em uma interface simples e eficiente.",
    frameworks: "React",
    category: "Ferramenta utilitária",
    stack: ["React", "API", "Formulários"],
  },
  {
    name: "Encurtador de link",
    img: linkShortener,
    altimg: "gif de apresentação do encurtador de link",
    linkGit: "https://github.com/LeonardoPNunes/link-generator",
    linkProject: "https://link-generator-project-leo.vercel.app/",
    description:
      "App para encurtar, copiar e armazenar links, com foco em fluidez de uso e feedback claro para ações rápidas.",
    frameworks: "React",
    category: "Produtividade",
    stack: ["React", "API", "Storage"],
  },
  {
    name: "Fashion",
    img: fashion,
    altimg: "gif de apresentação do site fashion",
    linkGit: "https://github.com/LeonardoPNunes/Responsive-website",
    linkProject: "https://responsive-website-project-leo.vercel.app/",
    description:
      "Landing page para loja de roupas com foco em impacto visual, composição forte e responsividade em diferentes telas.",
    frameworks: "React",
    category: "Landing page",
    stack: ["React", "Responsive", "UI"],
  },
  {
    name: "Infusion",
    img: infusion,
    altimg: "gif de apresentação do site infusion",
    linkGit: "https://github.com/LeonardoPNunes/InFusion",
    linkProject: "https://in-fusion.vercel.app/",
    description:
      "Projeto com foco em identidade visual e apresentação de marca, priorizando composição, estética e navegação leve.",
    frameworks: "HTML e CSS",
    category: "Visual concept",
    stack: ["HTML", "CSS", "Layout"],
  },
];
