/* =========================================================
   EN / FR language switcher
   English text lives in index.html; French translations below.
   Each key matches a data-i18n="…" attribute in the HTML.
   ========================================================= */
(() => {
  const fr = {
    'meta.title': 'Nicolas Brants — Business Developer Junior à Liège, Belgique',
    'meta.description': 'Business developer junior basé à Liège, Belgique. Vente B2B, études de marché internationales et e-commerce, avec une expérience à l’AWEX et une mission export à Birmingham.',

    'nav.skip': 'Aller au contenu',
    'nav.label': 'Navigation principale',
    'nav.lang': 'Langue',
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.resume': 'Parcours',
    'nav.contact': 'Contact',
    'nav.cv': 'Télécharger le CV',
    'nav.open': 'Ouvrir le menu',
    'nav.close': 'Fermer le menu',
    'theme.toLight': 'Passer au thème clair',
    'theme.toDark': 'Passer au thème sombre',
    'theme.light': 'Thème clair',
    'theme.dark': 'Thème sombre',
    'nav.top': 'Retour en haut',
    'aria.email': 'E-mail',
    'alt.cmm': 'Outil de maturité e-commerce (CMM)',
    'alt.charlemagne': 'Mission commerciale de Charlemagne Chocolatiers au Royaume-Uni',

    'hero.hello': 'Bonjour, je suis',
    'hero.role': 'Business Developer Junior',
    'hero.pitch': 'Diplômé en E-Business, basé à Liège. Après une campagne de prospection et une semaine sur le terrain à Birmingham, j’ai décroché avec mon équipe une commande de plus de 10&nbsp;000 unités auprès d’un grand hôtel. J’ai aussi audité la maturité digitale de PME wallonnes, face à leurs dirigeants.',
    'hero.hire': 'Me contacter',
    'hero.view': 'Voir mon parcours',
    'hero.find': 'Retrouvez-moi sur',
    'hero.status': 'Ouvert aux opportunités',

    'stats.units': 'Pièces vendues en une seule commande',
    'stats.languages': 'Langues parlées',
    'stats.audits': 'Audits digitaux de PME wallonnes',
    'stats.service': 'Ans de contact client en face-à-face',

    'about.eyebrow': 'Qui suis-je',
    'about.title': 'À propos de moi',
    'about.p1': 'Business developer junior, titulaire d’un <strong>bachelier en E-Business</strong>. Lors de mon stage à l’<strong>AWEX</strong> — l’Agence wallonne à l’Exportation et aux Investissements étrangers — j’ai audité la maturité digitale d’une dizaine de PME wallonnes en entretien avec leurs dirigeants, identifié leurs points faibles, recommandé des solutions et mis des entreprises en relation avec des plateformes e-commerce.',
    'about.p2': 'Auparavant, lors d’une mission commerciale export pour <strong>Charlemagne Chocolatiers</strong>, j’ai coordonné une équipe d’étudiants pendant plusieurs semaines de prospection à distance puis une semaine sur le terrain à Birmingham, conclue par une seule commande de plus de 10&nbsp;000 unités avec The Grand Hotel Birmingham. En parallèle de mes études, cinq ans de jobs en salle m’ont appris le contact client en face-à-face — en français, en anglais ou en espagnol.',
    'about.cta': 'Me contacter',

    'fact.location': 'Basé à',
    'fact.location.value': 'Liège, Belgique',
    'fact.degree': 'Diplôme',
    'fact.degree.value': 'Bachelier en E-Business',
    'fact.languages': 'Langues',
    'fact.mobility': 'Mobilité',
    'fact.mobility.value': 'Permis B · véhiculé',

    'skills.eyebrow': 'Ce que j’apporte',
    'skills.title': 'Mes compétences',
    'skills.sub': 'Un mélange de développement commercial, d’expertise e-commerce et d’outils digitaux.',
    'skills.expertise': 'Compétences professionnelles',
    's1.t': 'Développement commercial',
    's1.d': 'Prospection, développement de relations &amp; nouvelles opportunités',
    's2.t': 'Vente B2B &amp; pitch',
    's2.d': 'Présentations produits &amp; discussions commerciales',
    's3.t': 'Études de marché internationales',
    's3.d': 'Marchés étrangers, concurrents &amp; opportunités',
    's4.t': 'E-commerce &amp; commerce digital',
    's4.d': 'Vente en ligne internationale &amp; croissance digitale',
    's5.t': 'Audits &amp; conseil e-commerce',
    's5.d': 'Maturité digitale &amp; recommandations de croissance',
    's6.t': 'Commerce international',
    's6.d': 'Vente transfrontalière &amp; entrée sur de nouveaux marchés',
    'skills.languages': 'Langues',
    'lang.fr': 'Français',
    'lang.en': 'Anglais',
    'lang.es': 'Espagnol',
    'lang.c2': 'Expert',
    'lang.c1': 'Autonome',
    'lang.b1': 'Intermédiaire',
    'skills.software': 'Outils que j’utilise',
    'skills.soft': 'Savoir-être',
    'soft.punctual': 'Ponctuel',
    'soft.adaptability': 'Adaptabilité',
    'soft.sociable': 'Sociable',
    'soft.autonomous': 'Autonome',
    'soft.reliability': 'Fiabilité',
    'soft.communication': 'Communication',
    'soft.organized': 'Organisé',
    'soft.openminded': 'Ouverture d’esprit',
    'soft.teamwork': 'Travail d’équipe',
    'soft.analytical': 'Esprit d’analyse',
    'soft.selfcontrol': 'Maîtrise de soi',
    'soft.responsibility': 'Sens des responsabilités',
    'cv.file': 'assets/Nicolas-Brants-CV-FR.pdf',
    'software.ai': 'Outils d’IA',

    'projects.eyebrow': 'Temps forts',
    'projects.title': 'Projets phares',
    'projects.all': 'Voir tout le parcours',
    'projects.visit': 'Voir le site',
    'projects.story': 'Découvrir la mission',

    'story.close': 'Fermer',
    'story.eyebrow': 'Charlemagne Chocolatiers · Oct. 2022',
    'story.title': 'Mission économique — Birmingham, Royaume-Uni',
    'story.f1.v': '1 semaine',
    'story.f1.l': 'sur le terrain à Birmingham',
    'story.f2.v': '2 magasins',
    'story.f2.l': 'bio indépendants',
    'story.f3.v': '10&nbsp;000',
    'story.f3.l': 'chocolats personnalisés commandés par The Grand Hotel',
    'story.p1': 'Grâce à une collaboration entre l’<strong>AWEX et la HEPL</strong>, j’ai eu l’opportunité de participer à une véritable mission économique, conçue pour aider des entreprises wallonnes à explorer et développer des opportunités sur des marchés étrangers, tout en offrant aux étudiants une expérience concrète du commerce international et de l’export.',
    'story.p2': 'La participation était sélective. Pour être retenu, j’ai d’abord réalisé une <strong>analyse de marché de la Wallonie et du Royaume-Uni</strong>, dans le secteur agroalimentaire ou pharmaceutique. J’ai ensuite élaboré une stratégie d’export complète pour une entreprise wallonne fictive souhaitant s’implanter au Royaume-Uni. Le projet a été présenté à un jury composé de <strong>représentants de l’AWEX et de professeurs de la HEPL</strong>, qui ont sélectionné les étudiants les mieux préparés à représenter une entreprise wallonne à l’étranger.',
    'story.p3': 'Une fois sélectionné, je devais trouver une entreprise à représenter&nbsp;: avec mon équipe, nous avons trouvé un accord avec <strong>Charlemagne Chocolatiers</strong>. J’ai ensuite développé, avec l’aide de mon équipe, une stratégie de prospection combinant desk research, prospection téléphonique et e-mailing à froid afin d’identifier des clients britanniques potentiels et de décrocher des rendez-vous avant la mission.',
    'story.p4': 'Pendant ma semaine à <strong>Birmingham</strong>, j’ai rencontré des clients potentiels, visité les entreprises identifiées comme prospects pertinents et présenté Charlemagne Chocolatiers à la <strong>Chambre de Commerce de Birmingham</strong>. La mission a abouti à des ventes auprès de deux magasins bio indépendants et, surtout, à une commande de <strong>10&nbsp;000 chocolats personnalisés</strong> négociée avec <strong>The Grand Hotel Birmingham</strong>, le contrat ayant ensuite été finalisé par le responsable commercial de Charlemagne Chocolatiers. L’accord prévoyait également la possibilité de commandes mensuelles récurrentes de 10&nbsp;000 unités supplémentaires si le lancement était concluant.',
    'story.p5': 'Cette mission m’a permis de découvrir concrètement la <strong>prospection internationale, la vente B2B, les rendez-vous clients, le pitch commercial et le développement export</strong>, de l’étude de marché jusqu’à la négociation de véritables opportunités commerciales.',
    'p1.desc': 'Co-organisation de l’édition 2025 de ce forum européen consacré à l’e-commerce transfrontalier, dans le cadre de mon stage à l’AWEX.',
    'p2.title': 'Outil de maturité e-commerce (CMM)',
    'p2.desc': 'Digitalisation du CMM, un outil d’analyse de la maturité e-commerce des entreprises, pour soutenir les audits des entreprises wallonnes sur leur développement international.',
    'p3.badge': 'Oct. 2022',
    'p3.metric': '10K+ pièces en une commande',
    'p3.desc': 'Mission commerciale export avec une équipe d’étudiants&nbsp;: plusieurs semaines de prospection à distance, une semaine sur le terrain à Birmingham, un pitch à la Chambre de Commerce et une seule commande de plus de 10&nbsp;000 unités avec The Grand Hotel Birmingham.',
    'tag.events': 'Organisation d’événements',
    'tag.digital': 'Digitalisation',
    'tag.analysis': 'Analyse',
    'tag.research': 'Études de marché',
    'tag.sales': 'Vente',

    'resume.eyebrow': 'Mon parcours',
    'resume.title': 'Expérience &amp; formation',
    'resume.experience': 'Expérience professionnelle',
    'resume.education': 'Études &amp; formations',
    'x1.title': 'Service client en salle (jobs étudiants)',
    'x1.org': 'Horeca — 4 établissements · Liège',
    'x1.b1': '5 ans de contact client en face-à-face, dans des environnements à fort rythme',
    'x1.b2': 'Prise de commande, conseil et gestion des clients exigeants',
    'x1.b3': 'Résistance à la pression et constance, en parallèle des études',
    'x2.date': 'Févr. 2025 – juin 2025',
    'x2.title': 'E-Commerce Business Developer (stage)',
    'x2.org': 'AWEX — Agence wallonne à l’Exportation · Namur',
    'x2.b1': 'Audit de la maturité digitale d’une dizaine de PME wallonnes, en entretien avec leurs dirigeants (3 sur site, les autres en visio)',
    'x2.b2': 'Identification des points faibles et recommandations de solutions',
    'x2.b3': 'Mise en relation d’entreprises avec des plateformes e-commerce&nbsp;: présentation de la solution et adhésion du client',
    'x2.b4': 'Co-organisation de l’<strong>EU Cross-Border E-Commerce Forum 2025</strong>',
    'x2.b5': 'Digitalisation d’un outil d’analyse de maturité e-commerce (CMM)',
    'x3.date': 'Oct. 2022',
    'x3.title': 'Mission commerciale export (projet étudiant)',
    'x3.b1': 'Coordination informelle d’une équipe d’étudiants (sans hiérarchie, par prise d’initiative)',
    'x3.b2': 'Plusieurs semaines de prospection à distance (recherche de cibles, appels à froid, e-mailing), puis 1 semaine de prospection terrain à Birmingham',
    'x3.b3': 'Une seule commande de <strong>plus de 10&nbsp;000 unités</strong> conclue avec The Grand Hotel Birmingham',
    'x3.b4': 'Pitch commercial devant la Chambre de Commerce de Birmingham',
    'x3.b5': 'Retenu par un jury de professeurs HEPL et d’agents AWEX',
    'e1.title': 'Bachelier en E-Business (diplômé)',
    'e2.title': 'Formation IA et technologies émergentes (3 jours)',
    'e3.org': 'Universidad de Málaga (Espagne)',
    'e4.title': 'CESS',
    'e5.title': 'Échange AFS',
    'e5.org': 'Kohler High School (États-Unis)',

    'contact.title': 'Travaillons ensemble',
    'contact.text': 'Je suis ouvert aux postes de business developer ou de commercial junior — en particulier dans l’e-commerce, l’export et le commerce international. Une opportunité ou simplement envie d’échanger&nbsp;? Écrivez-moi.',
    'contact.send': 'M’envoyer un e-mail',
    'contact.email': 'E-mail',
    'contact.location': 'Localisation',
    'contact.linkedin': 'Connectons-nous',
    'contact.copy': 'Copier',
    'contact.copied': 'Copié&nbsp;!',

    'footer.rights': 'Tous droits réservés.',
  };

  // Extra English strings that aren't in the HTML
  const enExtra = {
    'nav.open': 'Open menu',
    'nav.close': 'Close menu',
    'theme.toLight': 'Switch to light theme',
    'theme.toDark': 'Switch to dark theme',
    'theme.light': 'Light theme',
    'theme.dark': 'Dark theme',
    'contact.copied': 'Copied!',
  };

  const STORAGE_KEY = 'nb-lang';
  const textNodes = [...document.querySelectorAll('[data-i18n]')];
  const attrNodes = [...document.querySelectorAll('[data-i18n-attr]')];
  const metaDesc = document.querySelector('meta[name="description"]');

  const parseAttrs = (el) =>
    el.dataset.i18nAttr.split(';').map((pair) => pair.split(':').map((s) => s.trim()));

  // Harvest English from the page itself so it only lives in one place
  const en = { ...enExtra };
  textNodes.forEach((el) => {
    const key = el.dataset.i18n;
    if (!(key in en)) en[key] = el.innerHTML.trim();
  });
  attrNodes.forEach((el) => {
    parseAttrs(el).forEach(([attr, key]) => { en[key] = el.getAttribute(attr); });
  });
  en['meta.title'] = document.title;
  en['meta.description'] = metaDesc ? metaDesc.content : '';

  const dict = { en, fr };
  let current = 'en';

  const t = (key) => dict[current][key] ?? en[key] ?? key;

  function apply(lang) {
    current = dict[lang] ? lang : 'en';
    document.documentElement.lang = current;

    textNodes.forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
    attrNodes.forEach((el) => {
      parseAttrs(el).forEach(([attr, key]) => el.setAttribute(attr, t(key)));
    });
    document.title = t('meta.title');
    if (metaDesc) metaDesc.content = t('meta.description');

    document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === current));
    });
    document.dispatchEvent(new CustomEvent('langchange', { detail: current }));
  }

  function initialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && dict[saved]) return saved;
    } catch (_) { /* storage unavailable */ }
    return (navigator.language || '').toLowerCase().startsWith('fr') ? 'fr' : 'en';
  }

  document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      apply(btn.dataset.lang);
      try { localStorage.setItem(STORAGE_KEY, current); } catch (_) { /* ignore */ }
    });
  });

  window.i18n = { t, apply, get lang() { return current; } };
  apply(initialLang());
})();
