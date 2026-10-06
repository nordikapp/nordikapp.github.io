export const langs = ['fr', 'en'] as const;
export type Lang = (typeof langs)[number];

// FR à la racine, EN sous /en.
export const langPaths = () => langs.map((lang) => ({ params: { lang: lang === 'fr' ? undefined : lang } }));
export const getLang = (param: string | undefined): Lang => (param === 'en' ? 'en' : 'fr');
export const href = (lang: Lang, path = '') => `${lang === 'fr' ? '' : '/en'}/${path}`.replace(/\/+$/, '') || '/';

export const ui = {
  fr: {
    tagline: 'Un petit studio québécois qui fait graviter des applications utiles autour de la vie de tous les jours.',
    appsTitle: 'Nos applications',
    aboutTitle: 'À propos',
    about: 'NordikApp Galaxy est un studio indépendant établi au Saguenay, au Québec. Il réunit sous un même toit des applications conçues par différents développeurs, avec un engagement commun sur la qualité et le respect des données.',
    nextApp: 'Prochaine application…',
    nextAppText: 'La galaxie grandit.',
    status: { live: 'Disponible', beta: 'En développement', soon: 'Bientôt' },
    platforms: { ios: 'iOS', android: 'Android', web: 'Web' },
    discover: 'Découvrir',
    by: 'Par',
    support: 'Support',
    privacy: 'Confidentialité',
    deleteAccount: 'Suppression de compte',
    legal: 'Mentions légales',
    contact: 'Contact',
    updated: 'Dernière mise à jour',
    switchLang: 'English',
    backHome: 'Retour à l’accueil',
    notFound: 'Page introuvable',
  },
  en: {
    tagline: 'A small studio from Québec, putting useful apps into orbit around everyday life.',
    appsTitle: 'Our apps',
    aboutTitle: 'About',
    about: 'NordikApp Galaxy is an independent studio based in Saguenay, Québec. It brings together apps built by different developers under one roof, with a shared commitment to quality and to respecting your data.',
    nextApp: 'Next app…',
    nextAppText: 'The galaxy keeps growing.',
    status: { live: 'Available', beta: 'In development', soon: 'Coming soon' },
    platforms: { ios: 'iOS', android: 'Android', web: 'Web' },
    discover: 'Discover',
    by: 'By',
    support: 'Support',
    privacy: 'Privacy',
    deleteAccount: 'Account deletion',
    legal: 'Legal notice',
    contact: 'Contact',
    updated: 'Last updated',
    switchLang: 'Français',
    backHome: 'Back to home',
    notFound: 'Page not found',
  },
} as const;

export const fmtDate = (d: Date, lang: Lang) =>
  d.toLocaleDateString(lang === 'fr' ? 'fr-CA' : 'en-CA', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
