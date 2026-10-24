# Online presence

Everything outside the code that decides whether people find the site and call: domain, Google listing, analytics, SEO.
Account logins and recovery details are kept privately, not in this public repo.

## Domain and hosting

- `taxisrestauracao.pt`, DNS on Cloudflare (`aarav.ns.cloudflare.com`, `betty.ns.cloudflare.com`). Expires 3 Oct 2027.
- Site: Cloudflare Pages project `restaxi-web`, deployed by hand with `pnpm build && pnpm deploy`.
- `www.taxisrestauracao.pt` does not resolve. To do: add a `www` record and redirect it to the apex.
- Email: Cloudflare Email Routing (free). There are no mailboxes; mail to `@taxisrestauracao.pt` is forwarded to a personal Gmail. The old paid mailbox was cancelled.

## Accounts status (Oct 2026)

- Google Business Profile: access recovered and verified ("Você gerencia este Perfil da Empresa").
- Google Ads: an account is linked to the listing and has a disapproved ad. Needs a check: is billing attached, is anything running or spending, why was it rejected.
- Google Search Console: enabled in Oct 2026, no data yet. Data shows up after a few days.
- Analytics: Cloudflare Web Analytics on the Pages project (PostHog was tried and dropped, see Analytics).

## Baseline: Business Profile performance, May–Oct 2026

From the profile's "Desempenho" page, seen on 24 Oct 2026 (October is only partly counted).

- 3,949 profile views. 89% from Google Search on mobile, 7% Search on desktop, 5% Google Maps.
- 1,412 searches showed the profile. Top terms: "taxi olhao" 815, "taxis olhao" 290, "táxi olhão contacto" 137, "taxi olhao armona" 42, "olhao taxi" 35.
- 416 interactions: 321 calls and 95 website clicks. No bookings (not set up).
- Calls: about 50 a month, peaking at about 95 in August.
- Website clicks: about 15 a month, peaking at about 25 in September.

What this means:
- The profile does most of the work: for every click to the website there are 3 or 4 direct calls. Improving the profile (photos, reviews, services) matters more than the site.
- Full list ("Ver mais") also has: "taxi olhão" 23, "taxi armona" 18, "taxi armona olhao" 18, "taxi olhao faro airport" 18, "taxis olhao contacto" 16, then many under 15: "aqua taxi olhao (armona / farol)", "bateau taxi olhão", "olhao wassertaxi", "numero taxi olhao", "olhão taxi phone number 24 hours", "empresas de transfers olhao", "central taxis olhao".
- About 100 searches (Armona, Farol, aqua/bateau/wassertaxi) are people looking for a water taxi to the islands, in PT, FR, DE and EN. Google shows this profile to them, but a road taxi can't take them.
- The family confirms people sometimes call asking for a boat. Rule: never suggest boats. No "Ria Formosa", islands, beaches or waterfront in text or photos; say "by road" where it helps. Removed "Ria Formosa" and "beaches" from the site (Oct 2026). On the profile: replace the market/waterfront photo with the car, and keep the service area on the mainland.
- People search for the plain term "taxi olhao" on their phone. Airport searches don't show in the top 5 yet; an airport page could change that.
- Compare these numbers each season to see if changes help.

## Google Business Profile

The listing is the main source of calls; most people call straight from Maps and never open the site.

- Listing: "Táxi Restauração - Olhão", https://maps.app.goo.gl/Wtkb1L1kejeQwARQ7
- Service-area business (no public address, area around Olhão), category "Serviço de Táxis".
- Oct 2026: 4.4 stars, 24 reviews, 416 customer interactions. No competitor in Olhão has more than about 40 reviews.
- Because it is a service-area business it does not show up in the `business.google.com/add` search. Manage it by searching the name on Google while signed in.

To do:
- Replace the photos (they show the Olhão market, not the taxi). Add 10+ real ones: car outside and inside, driver, airport pickup.
- Fill in services (airport transfer, tours, 24h taxi, business), and the description in PT, mentioning FR and EN.
- Set the website link with UTM tags: `https://taxisrestauracao.pt/?utm_source=google&utm_medium=organic&utm_campaign=gbp`.
- Add the WhatsApp chat link `https://wa.me/351964468494`.
- Ask every customer for a review with the "Solicitar avaliações" link, sent on WhatsApp. Reply to all reviews.
- Check the disapproved ad ("Seu anúncio foi reprovado") and whether the Google Ads account spends money.
- Do not put keywords in the business name; it risks suspension.

Other listings to claim with the same name and phone: Apple Business Connect, Bing Places (import from Google), TripAdvisor, Yelp, pai.pt, guiaempresas.pt, taxis.com.pt.

## Search Console

- DNS already has a `google-site-verification` TXT record, so a property was verified before. Re-enabled in Oct 2026; waiting for data.
- To do: open Search Console, submit `https://taxisrestauracao.pt/sitemap.xml`, check Page indexing and the queries in Performance.

## Analytics

- Cloudflare Web Analytics, enabled on the Pages project (Workers & Pages → `restaxi-web` → Metrics → Web Analytics). Cloudflare injects its small beacon on each deploy, so there is no analytics code in the repo.
- Cookieless and free, so no cookie banner is needed. It shows visits, page views, referrers, countries and page load speed. It cannot track button clicks.
- Replaced GA4 `G-YX1VQ3FMY1`, which ran without consent. PostHog (EU project 319259) was tried and dropped as more than this site needs.
- Links keep their `data-location` attributes in case click tracking is wanted later.
- Google Ads: count calls with a call asset (Google forwarding number) and link the Business Profile as a location asset for "Local actions" conversions. Neither needs a tag on the site.
- Real metric for calls: Google Business Profile → Desempenho (calls, website clicks, search terms).

## SEO notes

Fixed in Oct 2026:
- Canonical and hreflang pointed to `/en` and `/fr`, which redirect. They now use `/en/` and `/fr/`.
- Share image was `favicon.ico`. Now `public/og-image.png` (1200×630).
- Schema was `TaxiService` (a Service, not a business). Now `LocalBusiness` with areas served.
- Google Fonts replaced by self-hosted Inter (faster, no visitor IPs sent to Google).
- Added a real 404 page (before, any URL returned the homepage with 200).

Ideas, not done:
- A Faro airport page in each language, with pickup steps, distance and typical metered fare. Avoid a public fixed-price table: Decreto-Lei 101/2023 and AMT Regulamento 1324-A/2026 restrict it.
- A German version (Germans are the second biggest tourist group in the Algarve after the UK).
- Check claims on the site with the family: flight monitoring with free waiting, business transport, "modern vehicles".
