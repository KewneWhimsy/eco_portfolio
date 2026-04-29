// src/i18n/privacy.ts
import type { Lang } from './index';

export const privacy = {
  fr: {
    title: 'Politique de Confidentialité - Josselin HANEL',
    description: 'Politique de confidentialité et de protection des données du site portfolio de Josselin HANEL.',
    pageTitle: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour : Avril 2025',
    intro: "Je m'engage à respecter votre vie privée et à protéger vos données personnelles.",
    dataCollection: {
      title: 'Collecte de données', content: 'Ce site recueille très peu de données :',
      items: [
        { title: 'Formulaire de contact', description: 'Lorsque vous utilisez le formulaire de contact, je collecte votre nom, email et le contenu de votre message uniquement pour vous répondre. Base légale : intérêt légitime (répondre à une demande entrante) / exécution d\'un contrat pré-contractuel. Ces données sont conservées pendant 3 ans maximum.' },
        { title: 'Préférences utilisateur', description: "Deux valeurs sont stockées localement dans votre navigateur (localStorage) : votre préférence de langue (preferredLanguage) et votre préférence de mode éco. Ces données restent sur votre appareil et ne sont jamais transmises à des tiers." },
        { title: 'Logs du serveur', description: "L'hébergeur collecte automatiquement certaines données techniques (adresse IP, navigateur) pour assurer la sécurité et le bon fonctionnement du site." },
      ],
    },
    noTracking: { title: 'Absence de suivi', content: 'Ce site ne contient aucun outil de suivi analytique ou publicitaire. Je ne partage pas vos données avec des sociétés tierces.' },
    processingData: {
      title: 'Traitement des données de contact',
      content: 'Le formulaire de contact utilise le service Web3Forms (Webmaster Tools Inc., États-Unis) pour transmettre vos messages. Les données saisies dans le formulaire transitent vers des serveurs situés aux États-Unis. Ce transfert est encadré par les clauses contractuelles types (CCT) de la Commission européenne. Web3Forms s\'engage à ne pas utiliser vos données à des fins commerciales et à les supprimer après traitement. Pour plus de détails, consultez leur politique de confidentialité sur web3forms.com.',
    },
    rights: { title: 'Vos droits', content: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-moi à josshanel@gmail.com." },
    security: { title: 'Sécurité', content: "J'applique des mesures de sécurité adaptées pour protéger vos données, notamment l'utilisation du protocole HTTPS." },
    contactSection: { title: 'Contact', content: 'Pour toute question concernant cette politique de confidentialité, vous pouvez ', contactMe: 'me contacter' },
    backLink: "Retour à l'accueil",
  },
  en: {
    title: 'Privacy Policy - Josselin HANEL',
    description: "Privacy and personal data protection policy for Josselin HANEL's portfolio website.",
    pageTitle: 'Privacy Policy',
    lastUpdated: 'Last updated: April 2025',
    intro: 'I am committed to respecting your privacy and protecting your personal data.',
    dataCollection: {
      title: 'Data collection', content: 'This site collects very little data:',
      items: [
        { title: 'Contact form', description: 'When you use the contact form, I collect your name, email and the content of your message only to respond to you. Legal basis: legitimate interest (responding to an incoming request) / pre-contractual performance. This data is kept for a maximum of 3 years.' },
        { title: 'User preferences', description: 'Two values are stored locally in your browser (localStorage): your language preference (preferredLanguage) and your eco mode preference. This data stays on your device and is never transmitted to third parties.' },
        { title: 'Server logs', description: 'The hosting provider automatically collects certain technical data (IP address, browser) to ensure the security and proper functioning of the site.' },
      ],
    },
    noTracking: { title: 'No tracking', content: 'This site does not contain any analytical or advertising tracking tools. I do not share your data with third-party companies.' },
    processingData: {
      title: 'Processing of contact data',
      content: 'The contact form uses Web3Forms (Webmaster Tools Inc., United States) to transmit your messages. Data entered in the form is transferred to servers located in the United States. This transfer is governed by the European Commission\'s Standard Contractual Clauses (SCCs). Web3Forms undertakes not to use your data for commercial purposes and to delete it after processing. For more details, see their privacy policy at web3forms.com.',
    },
    rights: { title: 'Your rights', content: 'In accordance with the GDPR, you have the right to access, rectify and delete your data. To exercise these rights, contact me at josshanel@gmail.com.' },
    security: { title: 'Security', content: 'I apply appropriate security measures to protect your data, including the use of HTTPS protocol.' },
    contactSection: { title: 'Contact', content: 'For any questions regarding this privacy policy, you can ', contactMe: 'contact me' },
    backLink: 'Back to home',
  },
  de: {
    title: 'Datenschutzerklärung - Josselin HANEL',
    description: 'Datenschutzrichtlinie für die Portfolio-Website von Josselin HANEL.',
    pageTitle: 'Datenschutzerklärung',
    lastUpdated: 'Letzte Aktualisierung: April 2025',
    intro: 'Ich verpflichte mich, Ihre Privatsphäre zu respektieren und Ihre persönlichen Daten zu schützen.',
    dataCollection: {
      title: 'Datenerhebung', content: 'Diese Website sammelt sehr wenige Daten:',
      items: [
        { title: 'Kontaktformular', description: 'Wenn Sie das Kontaktformular nutzen, erfasse ich Ihren Namen, Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht. Rechtsgrundlage: berechtigtes Interesse (Beantwortung einer eingehenden Anfrage) / vorvertragliche Erfüllung. Diese Daten werden maximal 3 Jahre aufbewahrt.' },
        { title: 'Benutzereinstellungen', description: 'Zwei Werte werden lokal in Ihrem Browser (localStorage) gespeichert: Ihre Sprachpräferenz (preferredLanguage) und Ihre Öko-Modus-Präferenz. Diese Daten verbleiben auf Ihrem Gerät und werden niemals an Dritte übermittelt.' },
        { title: 'Server-Logs', description: 'Der Hosting-Anbieter erfasst automatisch bestimmte technische Daten (IP-Adresse, Browser).' },
      ],
    },
    noTracking: { title: 'Kein Tracking', content: 'Diese Website enthält keine Analyse- oder Werbe-Tracking-Tools.' },
    processingData: {
      title: 'Verarbeitung von Kontaktdaten',
      content: 'Das Kontaktformular verwendet Web3Forms (Webmaster Tools Inc., Vereinigte Staaten) zur Übermittlung Ihrer Nachrichten. Die im Formular eingegebenen Daten werden auf Server in den USA übertragen. Diese Übertragung wird durch die Standardvertragsklauseln (SCC) der Europäischen Kommission geregelt. Web3Forms verpflichtet sich, Ihre Daten nicht für kommerzielle Zwecke zu verwenden und sie nach der Verarbeitung zu löschen. Weitere Details finden Sie in deren Datenschutzerklärung unter web3forms.com.',
    },
    rights: { title: 'Ihre Rechte', content: 'Gemäß der DSGVO haben Sie das Recht auf Zugang, Berichtigung und Löschung Ihrer Daten. Um diese Rechte auszuüben, kontaktieren Sie mich unter josshanel@gmail.com.' },
    security: { title: 'Sicherheit', content: 'Ich wende angemessene Sicherheitsmaßnahmen zum Schutz Ihrer Daten an.' },
    contactSection: { title: 'Kontakt', content: 'Bei Fragen zu dieser Datenschutzerklärung können Sie ', contactMe: 'mich kontaktieren' },
    backLink: 'Zurück zur Startseite',
  },
} satisfies Record<Lang, any>;
