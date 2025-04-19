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
      "Site criado para um desafio de uma empresa, foco no cadastro do usuario com sistema de autenticação com criptografia, login, cadastro, visualização de informações do cadastro e listagem de outros usuários.",
    frameworks: "Feito com Next.js",
  },
  {
    name: "LDrinks",
    img: NotFound,
    altimg: "gif de apresentação do projeto LDrinks",
    linkGit: "https://github.com/LeonardoPNunes/LDrinks",
    description:
      "Complemento do PLNEFO cocktail, mas na versão mobile, com o mesmo sistema de filtragem usando api publica com redux, modo noturno e diurno, favoritos, login...",
    frameworks: "Feito com React-Native",
  },
  {
    name: "PLNEFO cocktail",
    img: cocktail,
    altimg: "gif de apresentação do projeto PLNEFO cocktail",
    linkGit: "https://github.com/LeonardoPNunes/P-L-N-E-F-O",
    linkProject: "https://plnefo-cocktail.vercel.app/",
    description:
      "Site com sistema de filtragem usando api publica com redux, modo noturno e diurno, favoritos, login...",
    frameworks: "Feito com React",
  },
  {
    name: "Github Profiles",
    img: githubProfile,
    altimg: "gif de apresentação do Github Profiles",
    linkGit: "https://github.com/LeonardoPNunes/githubProfiles",
    linkProject: "https://github-profiles-project-leo.vercel.app/",
    description:
      "Site usando api publica do github onde podemos buscar perfils, projetos, seguidores, seguindo e nome da pessoa.",
    frameworks: "Feito com React",
  },
  {
    name: "Buscador de CEP",
    img: zipCodeFinder,
    altimg: "gif de apresentação do buscador de CEP",
    linkGit: "https://github.com/LeonardoPNunes/Buscador-De-CEP",
    linkProject: "https://buscador-de-cep-project-leo.vercel.app/",
    description:
      "Site usando api publica, onde buscamos o cep e os dados referentes a rua, bairro, cidade e complemento são mostrados",
    frameworks: "Feito com React",
  },
  {
    name: "Encurtador de link",
    img: linkShortener,
    altimg: "gif de apresentação do encurtador de link",
    linkGit: "https://github.com/LeonardoPNunes/link-generator",
    linkProject: "https://link-generator-project-leo.vercel.app/",
    description:
      "Site usando api publica, onde podemos encurtar um link e copiar ele, todos os links ficarão salvos para caso queira copiar novamente",
    frameworks: "Feito com React",
  },
  {
    name: "Fashion",
    img: fashion,
    altimg: "gif de apresentação do site fashion",
    linkGit: "https://github.com/LeonardoPNunes/Responsive-website",
    linkProject: "https://responsive-website-project-leo.vercel.app/",
    description:
      "criado um site de loja de roupa com foco no visual e responsividade.",
    frameworks: "Feito com React",
  },
  {
    name: "Infusion",
    img: infusion,
    altimg: "gif de apresentação do site infusion",
    linkGit: "https://github.com/LeonardoPNunes/InFusion",
    linkProject: "https://in-fusion.vercel.app/",
    description: "criado um site de loja de roupa com foco no visual",
    frameworks: "Feito com Html e Css",
  },
];
