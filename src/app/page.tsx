import { Scissors, MapPin, ShieldCheck, Star, Clock, CalendarCheck, CreditCard, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/lib/company-info";
import { getSiteUrl } from "@/lib/site-url";

// Privacyverklaring/voorwaarden bestaan alleen in de hoofd-app
// (groomy-mvp/groomy/src/app/privacybeleid|voorwaarden) — bewust niet
// hier gedupliceerd (zou de juridische tekst op twee plekken moeten
// bijhouden). Verwijst voorlopig naar de live hoofd-app; zodra die niet
// meer als webapp bereikbaar is, moeten deze twee pagina's alsnog naar
// dit project (of een eigen plek) verhuizen.
const LEGAL_BASE_URL = "https://barberapp-vz1z.vercel.app";

// Marketingpagina voor Groomy — losstaand project, bedoeld om op het
// echte Groomy-domein te staan zodra de app een native App Store/Play
// Store-app wordt en dit domein niet meer de werkende webapp hoeft te
// tonen. Bewust een apart Vercel-project/repo t.o.v. de hoofd-app
// (groomy-mvp/groomy) — geen gedeelde build, geen gedeelde deployment,
// zodat een probleem aan de ene kant de andere nooit kan raken. Zie
// CLAUDE.md in de hoofd-app-repo voor de volledige toelichting.
//
// De statistieken hieronder en de winkel-badges zijn bewust
// illustratief/placeholder — er is nog geen App Store/Play Store-listing
// en de aantallen zijn ronde, plausibele voorbeeldcijfers, geen echte
// meting. Vervang ze zodra er echte cijfers zijn.

const STATS = [
  { value: "500+", label: "boekingen voltooid" },
  { value: "50+", label: "actieve barbers" },
  { value: "4,8★", label: "gemiddelde beoordeling" },
  { value: "15%", label: "servicekosten, verder niets" },
];

const KLANT_FEATURES = [
  "Vind een barber bij jou in de buurt op de kaart",
  "Boek nu voor direct, of plan vooruit voor later",
  "Betaal veilig — het bedrag staat in escrow tot je knipbeurt is afgerond",
  "Volg live waar je barber is tijdens de rit naar je toe",
  "Sla favoriete barbers op en herboek in een paar tikken",
];

const BARBER_FEATURES = [
  "Bouw je eigen klantenkring op — geen stoel, geen wachtruimte nodig",
  "Bepaal zelf je diensten, prijzen en beschikbaarheid",
  "Uitbetaling binnen 24 uur na afronding, automatisch geregeld via Stripe",
  "Zegt een klant op het laatste moment af? Dan krijg je alsnog een vergoeding",
  "Bouw een profiel op met portfolio en echte klantreviews",
];

const STEPS = [
  {
    number: "01",
    title: "Zoek & kies",
    description: "Bekijk barbers bij jou in de buurt, hun profiel, portfolio en reviews — en kies wie bij je past.",
  },
  {
    number: "02",
    title: "Boek & betaal",
    description: "Kies een tijdstip, geef je adres door en betaal veilig in de app. Je geld staat in escrow tot de klus geklaard is.",
  },
  {
    number: "03",
    title: "Ontvang je knipbeurt",
    description: "Je barber komt naar je toe, je volgt de rit live, en na afloop deel je een review.",
  },
];

const REVIEWS = [
  {
    name: "Sanne V.",
    role: "Klant",
    stars: 5,
    quote: "Nooit meer wachten bij de kapper — mijn barber kwam precies op tijd en het resultaat was top.",
  },
  {
    name: "Daan M.",
    role: "Klant",
    stars: 5,
    quote: "Superhandig voor tussen twee afspraken door. Live zien waar je barber is, is echt fijn.",
  },
  {
    name: "Youssef B.",
    role: "Barber op Groomy",
    stars: 5,
    quote: "Ik regel nu mijn hele agenda zelf en heb mijn geld al binnen een dag na een knipbeurt.",
  },
];

function StoreBadge({ label, sublabel }: { label: string; sublabel: string }) {
  return (
    <div
      aria-disabled="true"
      title="Binnenkort beschikbaar"
      className="h-12 px-4 rounded-md bg-primary text-white flex flex-col items-start justify-center opacity-90 cursor-default select-none"
    >
      <span className="text-[10px] text-white/70 leading-none">{sublabel}</span>
      <span className="text-[15px] font-semibold leading-tight">{label}</span>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div aria-hidden="true" className="relative w-[240px] h-[490px] rounded-[36px] bg-primary p-2.5 shadow-2xl flex-shrink-0">
      <div className="w-full h-full rounded-[28px] bg-white overflow-hidden flex flex-col">
        <div className="bg-primary text-white px-4 pt-6 pb-8 rounded-b-[24px]">
          <div className="text-[11px] text-white/60">Onderweg naar jou</div>
          <div className="text-[17px] font-bold mt-1">Barber over 8 min</div>
        </div>
        <div className="flex-1 bg-surface relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#0EA5A420,transparent_45%),radial-gradient(circle_at_70%_60%,#0EA5A415,transparent_40%)]" />
          <div className="absolute top-[38%] left-[45%] w-3 h-3 rounded-full bg-accent shadow-[0_0_0_6px_rgba(14,165,164,0.25)]" />
          <MapPin size={22} className="absolute top-[62%] left-[30%] text-primary" fill="#111111" />
        </div>
        <div className="bg-white px-4 py-3.5 border-t border-border flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-text-accent font-semibold text-[13px]">
            M
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-semibold truncate">Maarten · Knipbeurt</div>
            <div className="text-[11px] text-text-tertiary">4,9 ★ · 128 reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Organization: echte, verifieerbare bedrijfsgegevens (COMPANY_INFO).
// SoftwareApplication: bewust géén `aggregateRating`/reviews — de
// sterren/aantallen op de pagina zijn illustratieve placeholders (zie
// het commentaar bovenaan), en die als structured data opvoeren zou
// nepreviews claimen richting zoekmachines — precies wat Google's
// richtlijnen voor structured data verbieden. Eerlijke, beperkte schema
// is beter dan opgepoetste maar valse schema.
function StructuredData() {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: COMPANY_INFO.name,
        legalName: COMPANY_INFO.legalName,
        url: siteUrl,
        email: COMPANY_INFO.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY_INFO.address,
          postalCode: COMPANY_INFO.postalCode,
          addressLocality: COMPANY_INFO.city,
          addressCountry: "NL",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: COMPANY_INFO.name,
        applicationCategory: "LifestyleApplication",
        operatingSystem: "iOS, Android",
        url: siteUrl,
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function LandingPage() {
  return (
    <div className="min-h-dvh bg-white text-text-primary">
      <StructuredData />
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-[10px] bg-primary text-accent flex items-center justify-center">
              <Scissors size={16} />
            </div>
            <span className="text-[17px] font-bold tracking-[-0.01em]">{COMPANY_INFO.name}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <StoreBadge sublabel="Binnenkort op" label="App Store" />
            <StoreBadge sublabel="Binnenkort op" label="Google Play" />
          </div>
        </div>
      </header>

      <main>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 flex flex-col lg:flex-row items-center gap-14">
        <div className="flex-1 max-w-xl">
          <div className="inline-flex items-center gap-1.5 bg-accent-soft text-text-accent text-[13px] font-medium rounded-pill px-3 py-1.5">
            <Sparkles size={14} />
            Binnenkort beschikbaar
          </div>
          <h1 className="text-[40px] sm:text-[52px] font-bold tracking-[-0.02em] leading-[1.05] mt-5">
            Een barber aan huis. Geboekt in een paar tikken.
          </h1>
          <p className="text-[17px] text-text-secondary leading-[26px] mt-5">
            {COMPANY_INFO.name} brengt professionele barbers naar jouw locatie. Boek nu voor direct, of plan
            vooruit voor later — je betaalt veilig via escrow, pas vrijgegeven zodra je knipbeurt is afgerond.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <StoreBadge sublabel="Binnenkort op" label="App Store" />
            <StoreBadge sublabel="Binnenkort op" label="Google Play" />
            <a href="#hoe-het-werkt" className="text-[15px] font-semibold text-text-accent underline underline-offset-4">
              Bekijk hoe het werkt →
            </a>
          </div>
        </div>
        <PhoneMockup />
      </section>

      <section className="border-y border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[28px] font-bold tracking-[-0.01em] text-primary">{s.value}</div>
              <div className="text-[13px] text-text-secondary mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-[13px] font-semibold text-text-accent tracking-wide uppercase">Wat is Groomy</div>
        <h2 className="text-[30px] sm:text-[36px] font-bold tracking-[-0.01em] mt-2 max-w-2xl">
          Je eigen barber, waar je ook bent.
        </h2>
        <p className="text-[16px] text-text-secondary leading-[24px] mt-4 max-w-2xl">
          Geen wachtruimte, geen afspraak op locatie van de kapper — de barber komt naar jou. Veilig betalen,
          live volgen, en achteraf beoordelen. Voor barbers is Groomy een eigen klantenkring zonder de kosten van
          een fysieke zaak.
        </p>

        <div className="grid sm:grid-cols-2 gap-10 mt-12">
          <div>
            <h3 className="flex items-center gap-2 text-[18px] font-semibold">
              <CalendarCheck size={20} className="text-text-accent" />
              Voor klanten
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {KLANT_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[14px] text-text-secondary leading-[21px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-[18px] font-semibold">
              <Scissors size={20} className="text-text-accent" />
              Voor barbers
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {BARBER_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[14px] text-text-secondary leading-[21px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="hoe-het-werkt" className="bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-[13px] font-semibold text-text-accent tracking-wide uppercase">Hoe het werkt</div>
          <h2 className="text-[30px] sm:text-[36px] font-bold tracking-[-0.01em] mt-2">Drie stappen. Eén verse knipbeurt.</h2>

          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {STEPS.map((step) => (
              <div key={step.number}>
                <div className="text-[13px] font-bold text-text-tertiary">{step.number}</div>
                <h3 className="text-[19px] font-semibold mt-1.5">{step.title}</h3>
                <div className="text-[14px] text-text-secondary leading-[21px] mt-2">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-6 flex-wrap mb-10">
          <div className="flex items-center gap-2 text-[14px] text-text-secondary">
            <ShieldCheck size={18} className="text-text-accent" /> Veilig betalen via escrow
          </div>
          <div className="flex items-center gap-2 text-[14px] text-text-secondary">
            <Clock size={18} className="text-text-accent" /> Live volgen onderweg
          </div>
          <div className="flex items-center gap-2 text-[14px] text-text-secondary">
            <CreditCard size={18} className="text-text-accent" /> Uitbetaling binnen 24 uur voor barbers
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-white border border-border rounded-lg p-5">
              <div className="flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-[14px] text-text-primary leading-[21px] mt-3">&ldquo;{r.quote}&rdquo;</p>
              <div className="text-[13px] text-text-tertiary mt-4">
                {r.name} · {r.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center">
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.01em] max-w-lg">
            Klaar voor je volgende knipbeurt?
          </h2>
          <p className="text-[15px] text-white/70 mt-3 max-w-md">
            {COMPANY_INFO.name} komt binnenkort naar de App Store en Google Play.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-7">
            <StoreBadge sublabel="Binnenkort op" label="App Store" />
            <StoreBadge sublabel="Binnenkort op" label="Google Play" />
          </div>
        </div>
      </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-6 text-[13px] text-text-tertiary">
        <div>
          <div className="text-text-secondary font-medium">
            {COMPANY_INFO.legalName} ({COMPANY_INFO.legalForm})
          </div>
          <div>
            {COMPANY_INFO.address}, {COMPANY_INFO.postalCode} {COMPANY_INFO.city}
          </div>
          <div>KvK {COMPANY_INFO.kvkNumber}</div>
          <a href={`mailto:${COMPANY_INFO.email}`} className="text-text-accent">
            {COMPANY_INFO.email}
          </a>
        </div>
        <div className="flex flex-col gap-1.5">
          <a href={`${LEGAL_BASE_URL}/voorwaarden`} className="text-text-accent">
            Algemene voorwaarden
          </a>
          <a href={`${LEGAL_BASE_URL}/privacybeleid`} className="text-text-accent">
            Privacyverklaring
          </a>
        </div>
        <div className="sm:text-right">
          © {new Date().getFullYear()} {COMPANY_INFO.name}. Alle rechten voorbehouden.
        </div>
      </footer>
    </div>
  );
}
