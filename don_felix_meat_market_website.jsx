export default function DonFelixWebsite() {
  const reviews = [
    {
      quote:
        "LOVE the smoked meats here. Beef ribs and chicken. I’ve been coming here for about 2.5 years and it’s my favorite.",
      name: "Christopher Anaya",
    },
    {
      quote:
        "We come here often on Sundays and always enjoy their smoked ribs and chicken thighs. The guacamole is my favorite in LA.",
      name: "Makayla Wright",
    },
    {
      quote:
        "The beef ribs and tri tip were the best my wife and I have ever had. We will be coming back here over and over.",
      name: "Paul Castro",
    },
    {
      quote:
        "Best BBQ I’ve ever had. Everything is so tender, smoky. I’m definitely going to be a regular.",
      name: "Ash",
    },
    {
      quote:
        "My favorite new meat market for authentic Mexican meat, smokers outside, salsas, everything you need and Juan the owner was very hospitable.",
      name: "Ulysses Solis",
    },
    {
      quote:
        "Have you ever had a taste for something but couldn’t get the itch scratched? Don Felix fixes that.",
      name: "Nicole Williams",
    },
  ];

  const highlights = [
    "Smoked beef ribs",
    "Tri-tip and brisket",
    "Chicken thighs and turkey",
    "Fresh guacamole, chips, and salsas",
    "Premium butcher cuts",
    "Holiday catering and family feasts",
  ];

  const strengths = [
    {
      title: "Family-owned warmth",
      copy:
        "The reviews say it over and over: people don’t just come for the meat. They come back for the way they’re treated.",
    },
    {
      title: "Westside BBQ reputation",
      copy:
        "Customers call it a local gem, a hidden gold find, and some of the best BBQ on the Westside. That kind of love becomes the brand.",
    },
    {
      title: "Premium quality, no gimmicks",
      copy:
        "Prime meats, slow smoke, real flavor, and simple sides that actually hit. The site leans into confidence, appetite, and trust.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#120b08] text-stone-100 selection:bg-orange-500/30 selection:text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.16),transparent_35%),linear-gradient(180deg,#1a100c_0%,#120b08_60%,#0d0907_100%)]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-500 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-red-500 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-amber-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <div>
              <div className="text-lg font-black uppercase tracking-[0.24em] text-orange-300">
                Don Felix
              </div>
              <div className="text-xs uppercase tracking-[0.35em] text-stone-400">
                Meat Market
              </div>
            </div>
            <div className="hidden items-center gap-8 text-sm text-stone-300 md:flex">
              <a href="#menu" className="transition hover:text-white">
                Menu
              </a>
              <a href="#story" className="transition hover:text-white">
                Story
              </a>
              <a href="#reviews" className="transition hover:text-white">
                Reviews
              </a>
              <a href="#contact" className="transition hover:text-white">
                Visit
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-10">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-200">
              West LA favorite • family-owned • smoked fresh
            </div>

            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl">
              Premium cuts.
              <br />
              Street-side smoke.
              <br />
              Real family flavor.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">
              Don Felix Meat Market is where butcher-shop quality meets weekend BBQ obsession. From
              legendary beef ribs and tri-tip to house guacamole, fresh salsa, and holiday feasts,
              this is the kind of spot people find once and keep coming back to.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-orange-500 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white shadow-2xl shadow-orange-900/40 transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Order now
              </a>
              <a
                href="#reviews"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-stone-100 transition hover:border-white/30 hover:bg-white/10"
              >
                See the hype
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["5-star love", "From locals, regulars, and first-timers"],
                ["Bestsellers", "Beef ribs, tri-tip, chicken, turkey"],
                ["Hospitality", "Customers say they feel like family"],
                ["Holiday ready", "Thanksgiving and catering favorites"],
              ].map(([title, subtitle]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-sm font-black uppercase tracking-[0.14em] text-orange-300">{title}</div>
                  <div className="mt-2 text-sm leading-6 text-stone-400">{subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#2b1711] to-[#17100c] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <div className="rounded-[1.75rem] border border-orange-400/20 bg-[#120d0a] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.35em] text-stone-500">Featured</div>
                    <div className="mt-1 text-2xl font-black uppercase tracking-tight text-white">
                      Smokehouse Favorites
                    </div>
                  </div>
                  <div className="rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-orange-200">
                    Hot now
                  </div>
                </div>

                <div className="space-y-3">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                    >
                      <span className="text-base font-semibold text-stone-100">{item}</span>
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                        Signature
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-r from-orange-500/15 to-red-500/10 p-5">
                  <div className="text-xs uppercase tracking-[0.3em] text-orange-200">Customer favorite</div>
                  <div className="mt-2 text-3xl font-black uppercase text-white">Beef ribs</div>
                  <p className="mt-2 text-sm leading-6 text-stone-300">
                    The product that keeps showing up in the reviews. Tender, smoky, rich, and the
                    reason first-timers turn into regulars.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
              Brand direction
            </div>
            <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-white md:text-5xl">
              Bold. Smoky.
              <br />
              Premium. Welcoming.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-stone-400">
              This brand should feel like a hidden neighborhood classic that already has a cult
              following. Dark, rich tones. Fire accents. Premium typography. A confident voice.
              Nothing too polished or corporate. It should feel expensive, but still warm and real.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-[#17110d] p-6 shadow-xl shadow-black/20"
              >
                <div className="text-xl font-black uppercase tracking-tight text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-stone-400">{item.copy}</p>
              </div>
            ))}
            <div className="rounded-[1.75rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 shadow-xl shadow-black/20">
              <div className="text-xl font-black uppercase tracking-tight text-white">Built to convert</div>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                Strong hero message, food-first positioning, testimonials placed early, high-intent
                calls to action, and multiple reasons to trust the brand within the first scroll.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#17100d]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
              What people love most
            </div>
            <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-white md:text-5xl">
              The reasons they come in.
              <br />
              The reasons they come back.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Slow-smoked BBQ", "Beef ribs, brisket, tri-tip, chicken, and turkey that people keep talking about."],
              ["Prime butcher quality", "A trusted neighborhood meat market with serious standards and top-quality cuts."],
              ["Fresh sides and extras", "Guacamole, chips, salsas, drinks, and party-ready add-ons that round out the meal."],
              ["People-first service", "Attentive staff, fast responses, and a family-owned energy that makes the place memorable."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                <div className="text-lg font-black uppercase tracking-tight text-white">{title}</div>
                <p className="mt-3 text-sm leading-7 text-stone-400">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-[#18110d] p-8">
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">Our story</div>
            <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-white">Built on trust, smoke, and community.</h2>
            <p className="mt-5 text-base leading-8 text-stone-400">
              Don Felix Meat Market should feel like more than a butcher shop. It should feel like a
              neighborhood institution. The kind of place people text their friends about after one
              plate. The kind of place they trust for Sunday BBQ, family dinners, and holiday meals.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-400">
              The website leans into that identity with a strong family-owned narrative, premium food
              photography areas, social proof, and a warm but elevated tone that sells both quality
              and belonging.
            </p>
          </div>

          <div className="rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-[#2a1811] to-[#16100c] p-8">
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">Perfect for</div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                "Weekend BBQ runs",
                "Game day food",
                "Family dinners",
                "Holiday turkey orders",
                "Catering trays",
                "Premium marinated meats",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-stone-100">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-5">
              <div className="text-xs uppercase tracking-[0.3em] text-stone-400">Positioning line</div>
              <div className="mt-2 text-2xl font-black uppercase leading-tight text-white">
                Premium butcher cuts and unforgettable BBQ, served with real family hospitality.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="border-t border-white/10 bg-[#0f0a08]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
              Social proof
            </div>
            <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-white md:text-5xl">
              Real reviews. Real obsession.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-400">
              The site should use customer language heavily because the reviews already do the
              selling: tender, smoky, hospitable, flavorful, family-owned, hidden gem, best on the
              Westside.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-[1.75rem] border border-white/10 bg-[#17110d] p-6 shadow-xl shadow-black/20"
              >
                <div className="text-orange-300">★★★★★</div>
                <p className="mt-4 text-base leading-8 text-stone-200">“{review.quote}”</p>
                <div className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-stone-500">
                  {review.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#21130d] to-[#140d09] p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">Seasonal revenue driver</div>
            <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-white">
              Own the holidays,
              <br />
              not just the weekends.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">
              The reviews show huge trust around Thanksgiving turkeys, family dinners, delivery, and
              catering. This site should give that offer a premium home with an early-order push,
              preorder sections, and a polished catering inquiry flow.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Holiday turkey preorders",
              "Catering trays for gatherings",
              "Family meal bundles",
              "Easy inquiry and text-to-order CTA",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-stone-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#17100d]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
                Final call to action
              </div>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-white md:text-5xl">
                Come hungry.
                <br />
                Leave with your new favorite spot.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-400">
                This section is built to close. It should make it easy to visit, call, text, or place
                an order. Keep it simple. Keep it direct. Let the food and the trust do the work.
              </p>
            </div>

            <div className="rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-red-500/10 p-8">
              <div className="text-xs uppercase tracking-[0.35em] text-orange-200">Visit Don Felix</div>
              <div className="mt-4 space-y-4 text-stone-100">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-stone-400">Location</div>
                  <div className="mt-1 text-lg font-semibold">Sawtelle & Washington Place, Los Angeles</div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-stone-400">Best known for</div>
                  <div className="mt-1 text-lg font-semibold">Beef ribs, tri-tip, turkey, guacamole, and hospitality</div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-stone-400">Best vibe</div>
                  <div className="mt-1 text-lg font-semibold">Weekend smoke, family energy, premium butcher quality</div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <button className="rounded-full bg-orange-500 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-orange-400">
                  Call now
                </button>
                <button className="rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-stone-100 transition hover:bg-white/10">
                  Text to order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
