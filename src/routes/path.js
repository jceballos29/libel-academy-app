const path = {
  home: '/',
  login: '/ingreso',
  register: '/registro',
  courses: {
    home: '/cursos',
    detail: '/cursos/:slug',
    lessons: '/cursos/:slug/clases',
    lesson: '/cursos/:slug/clases/:lesson',
  },
  categories: {
    home: '/categorias',
    detail: '/categorias/:id',
  },
  user: {
    dashboard: '/panel',
    profile: '/panel/perfil',
    courses: '/panel/cursos',
    wishlist: '/panel/lista-deseos',
    settings: '/panel/configuracion',
  },
  privacy: '/politica-de-privacidad',
  terms: '/terminos-y-condiciones',
  checkout: '/checkout',
}

export default path;
