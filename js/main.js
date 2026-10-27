(() => {
  const STORAGE_KEY = "moitop-lang";

  const strings = {
    en: {
      skip: "Skip to content",
      "nav.features": "Features",
      "nav.how": "How it works",
      "nav.families": "For families",
      "hero.tagline": "Connect · Celebrate · Remember",
      "hero.title": "Your family’s gift register for every Tamil function",
      "hero.lead":
        "Turn the handwritten moi notebook into a private digital ledger — cash, jewellery, guests, and memories in one place.",
      "slide1.eyebrow": "Cash & jewellery",
      "slide1.title": "Record every gift by function",
      "slide1.body": "Track cash, jewellery, or both — with metal and weight — as guests arrive.",
      "slide2.eyebrow": "Guests",
      "slide2.title": "Know your people across celebrations",
      "slide2.body": "Guest history and reciprocity help you remember what was given and received.",
      "slide3.eyebrow": "Import",
      "slide3.title": "Photo notebook & Excel ready",
      "slide3.body": "Digitize old ledgers with a photo, or import spreadsheets with preview and checks.",
      "slide4.eyebrow": "Insights",
      "slide4.title": "Dashboard, reports & export",
      "slide4.body": "See totals and trends, then export Excel, CSV, or PDF whenever you need.",
      "slide5.eyebrow": "Family",
      "slide5.title": "Private accounts, phone-ready",
      "slide5.body": "Invite family members and use MoiTop on the day — installable like an app.",
      "hero.prev": "Previous slide",
      "hero.next": "Next slide",
      "shift.eyebrow": "The shift",
      "shift.title": "From paper pages to a living register",
      "shift.body":
        "MoiTop is your மொய் கணக்கு online: create functions, record gifts as they arrive, and keep every guest’s history ready for the next celebration — without hunting through old notebooks.",
      "shift.caption": "The traditional moi notebook — pages of names, amounts, and villages.",
      "features.eyebrow": "Features",
      "features.title": "Everything a family register needs",
      "features.lead": "Built for the day of the function and the years of reciprocity that follow.",
      "features.f1.title": "Cash & jewellery by function",
      "features.f1.body":
        "Open an occasion and record moi as cash, jewellery, or both — including metal and weight for each piece.",
      "features.f2.title": "Guest history & reciprocity",
      "features.f2.body":
        "See what was received and given across functions — so you remember people, not chase “debt.”",
      "features.f3.title": "Photo notebook & Excel import",
      "features.f3.body":
        "Photograph old ledger pages and pull text into fields, or import a spreadsheet with preview and validation.",
      "features.f4.title": "Dashboard, reports & export",
      "features.f4.body":
        "Totals, trends, and top givers at a glance — then export function, guest, cash, jewellery, or place reports as Excel, CSV, or PDF.",
      "features.f5.title": "Places & easy contact",
      "features.f5.body":
        "Pin guest places on a map and keep phone numbers ready for WhatsApp — villages and hometowns stay part of the story.",
      "features.f6.title": "Private family accounts, phone-ready",
      "features.f6.body":
        "Each family or organization keeps its own register in its own separate database. Use it on the day from any phone — and install it like an app.",
      "features.f7.title": "Share with family, switch between families",
      "features.f7.body":
        "Send a one-time link by email to bring in relatives as an admin, a member, or view-only. In more than one family? Switch between them in a tap — each family’s records stay separate.",
      "features.f8.title": "Fast entry on the function day",
      "features.f8.body":
        "“Save & Next” keeps the queue moving, the search in the top bar finds any guest, and closing a function stops new entries once the event is over.",
      "features.f9.title": "Function expenses & balance",
      "features.f9.body":
        "Note the hall, catering, and other costs against each function, and see the balance left from the moi received.",
      "features.f10.title": "A tidy guest list",
      "features.f10.body":
        "Merge duplicate guests in one step and bring in your existing guest list from Excel — each person’s history stays together.",
      "families.eyebrow": "For Tamil homes",
      "families.title": "Built the way your community celebrates",
      "families.lead":
        "English and Tamil side by side. Places that matter. Jewellery recorded with care. A register meant for the people who show up for each other.",
      "families.p1": "Bilingual interface — English & Tamil",
      "families.p2": "Villages, towns, and map pins for guests",
      "families.p3": "Jewellery by metal and weight, not just a total",
      "footer.tagline": "Connect · Celebrate · Remember",
      "footer.rights": "All rights reserved.",
    },
    ta: {
      skip: "உள்ளடக்கத்திற்குச் செல்",
      "nav.features": "அம்சங்கள்",
      "nav.how": "எப்படி வேலை செய்கிறது",
      "nav.families": "குடும்பங்களுக்கு",
      "hero.tagline": "இணை · கொண்டாடு · நினைவுகொள்",
      "hero.title": "ஒவ்வொரு தமிழ் விழாவுக்கும் உங்கள் குடும்ப மொய் பதிவேடு",
      "hero.lead":
        "கையெழுத்து மொய் புத்தகத்தை தனிப்பட்ட டிஜிட்டல் கணக்காக மாற்றுங்கள் — பணம், நகை, விருந்தினர்கள், நினைவுகள் ஒரே இடத்தில்.",
      "slide1.eyebrow": "பணம் & நகை",
      "slide1.title": "ஒவ்வொரு மொயையும் விழாவாகப் பதிவு செய்யுங்கள்",
      "slide1.body": "விருந்தினர்கள் வரும்போதே பணம், நகை அல்லது இரண்டையும் — உலோகம், எடையுடன் — பதிவு செய்யுங்கள்.",
      "slide2.eyebrow": "விருந்தினர்கள்",
      "slide2.title": "கொண்டாட்டங்கள் முழுவதும் உங்கள் மக்களை அறியுங்கள்",
      "slide2.body": "விருந்தினர் வரலாறும் பரிமாற்றமும் கொடுத்ததும் பெற்றதும் நினைவில் இருக்க உதவும்.",
      "slide3.eyebrow": "இறக்குமதி",
      "slide3.title": "புகைப்படப் புத்தகம் & Excel தயார்",
      "slide3.body": "பழைய கணக்குகளைப் புகைப்படத்தால் டிஜிட்டலாக்குங்கள் அல்லது முன்னோட்டத்துடன் அட்டவணைகளை இறக்குமதி செய்யுங்கள்.",
      "slide4.eyebrow": "பகுப்பாய்வு",
      "slide4.title": "டாஷ்போர்டு, அறிக்கைகள் & ஏற்றுமதி",
      "slide4.body": "மொத்தமும் போக்குகளும் காணுங்கள் — தேவைப்படும்போது Excel, CSV அல்லது PDF ஏற்றுமதி செய்யுங்கள்.",
      "slide5.eyebrow": "குடும்பம்",
      "slide5.title": "தனிப்பட்ட கணக்குகள், தொலைபேசிக்கு ஏற்றது",
      "slide5.body": "குடும்ப உறுப்பினர்களை அழைத்து, விழா நாளில் MoiTop-ஐப் பயன்படுத்துங்கள் — செயலியைப் போல நிறுவலாம்.",
      "hero.prev": "முந்தைய ஸ்லைடு",
      "hero.next": "அடுத்த ஸ்லைடு",
      "shift.eyebrow": "மாற்றம்",
      "shift.title": "காகிதப் பக்கங்களிலிருந்து உயிருள்ள பதிவேட்டிற்கு",
      "shift.body":
        "MoiTop உங்கள் ஆன்லைன் மொய் கணக்கு: விழாக்களை உருவாக்குங்கள், வரும் மொய்களை பதிவு செய்யுங்கள், அடுத்த கொண்டாட்டத்திற்கு ஒவ்வொரு விருந்தினரின் வரலாறும் தயாராக இருக்கட்டும் — பழைய புத்தகங்களைத் தேடாமல்.",
      "shift.caption": "பாரம்பரிய மொய் புத்தகம் — பெயர்கள், தொகைகள், ஊர்கள் நிறைந்த பக்கங்கள்.",
      "features.eyebrow": "அம்சங்கள்",
      "features.title": "ஒரு குடும்பப் பதிவேட்டிற்கு தேவையான அனைத்தும்",
      "features.lead": "விழா நாளில் பயன்படுத்தவும், பின்வரும் ஆண்டுகளின் பரிமாற்றத்தையும் நினைவில் வைக்கவும்.",
      "features.f1.title": "விழாவாகப் பணம் & நகை",
      "features.f1.body":
        "ஒரு விழாவைத் திறந்து மொயைப் பணமாகவும், நகையாகவும், அல்லது இரண்டாகவும் பதிவு செய்யுங்கள் — ஒவ்வொரு நகைக்கும் உலோகமும் எடையும் உடன்.",
      "features.f2.title": "விருந்தினர் வரலாறு & பரிமாற்றம்",
      "features.f2.body":
        "விழாக்கள் முழுவதும் பெற்றதும் கொடுத்ததும் காணுங்கள் — “கடன்” தேடாமல் மக்களை நினைவில் வைத்திருங்கள்.",
      "features.f3.title": "புகைப்படப் புத்தகம் & Excel இறக்குமதி",
      "features.f3.body":
        "பழைய கணக்குப் பக்கங்களைப் புகைப்படம் எடுத்து புலங்களுக்கு உரையைக் கொண்டு வாருங்கள், அல்லது முன்னோட்டத்துடன் அட்டவணையை இறக்குமதி செய்யுங்கள்.",
      "features.f4.title": "டாஷ்போர்டு, அறிக்கைகள் & ஏற்றுமதி",
      "features.f4.body":
        "மொத்தம், போக்குகள், முக்கிய கொடுப்பவர்கள் ஒரே பார்வையில் — பிறகு விழா, விருந்தினர், பணம், நகை அல்லது ஊர் அறிக்கைகளை Excel, CSV அல்லது PDF ஆக ஏற்றுமதி செய்யுங்கள்.",
      "features.f5.title": "இடங்கள் & எளிய தொடர்பு",
      "features.f5.body":
        "விருந்தினர் ஊர்களை வரைபடத்தில் குறித்து, WhatsApp-க்கு தயார் எண்களை வைத்திருங்கள் — கிராமங்களும் சொந்த ஊர்களும் கதையின் பகுதியாகவே இருக்கும்.",
      "features.f6.title": "தனிப்பட்ட குடும்பக் கணக்குகள், தொலைபேசிக்கு ஏற்றது",
      "features.f6.body":
        "ஒவ்வொரு குடும்பமும் அமைப்பும் தன் சொந்தப் பதிவேட்டைத் தனி தரவுத்தளத்தில் வைத்திருக்கும். விழா நாளில் எந்தத் தொலைபேசியிலிருந்தும் பயன்படுத்துங்கள் — செயலியைப் போல நிறுவலாம்.",
      "features.f7.title": "குடும்பத்துடன் பகிருங்கள், குடும்பங்களுக்கு இடையே மாறுங்கள்",
      "features.f7.body":
        "மின்னஞ்சலில் ஒருமுறை மட்டும் வேலை செய்யும் இணைப்பை அனுப்பி, உறவினர்களை நிர்வாகி, உறுப்பினர் அல்லது பார்வை-மட்டும் அனுமதியுடன் சேர்க்கலாம். ஒன்றுக்கும் மேற்பட்ட குடும்பங்களில் இருந்தால் ஒரே தட்டில் மாறலாம் — ஒவ்வொரு குடும்பத்தின் பதிவுகளும் தனித்தனியாகவே இருக்கும்.",
      "features.f8.title": "விழா நாளில் விரைவான பதிவு",
      "features.f8.body":
        "“சேமி & அடுத்து” வரிசையைத் தடையின்றி நகர்த்துகிறது, மேல் பட்டியிலுள்ள தேடல் எந்த விருந்தினரையும் கண்டுபிடிக்கும், நிகழ்வு முடிந்ததும் விழாவை மூடினால் புதிய பதிவுகள் சேராது.",
      "features.f9.title": "விழாச் செலவுகள் & இருப்பு",
      "features.f9.body":
        "மண்டபம், சமையல் போன்ற செலவுகளை ஒவ்வொரு விழாவிலும் குறித்து, பெற்ற மொயிலிருந்து மீதமுள்ள இருப்பைக் காணுங்கள்.",
      "features.f10.title": "ஒழுங்கான விருந்தினர் பட்டியல்",
      "features.f10.body":
        "இரட்டிப்பான விருந்தினர்களை ஒரே படியில் இணைத்து, உங்களிடம் உள்ள விருந்தினர் பட்டியலை Excel-இலிருந்து கொண்டு வாருங்கள் — ஒவ்வொருவரின் வரலாறும் ஒன்றாகவே இருக்கும்.",
      "families.eyebrow": "தமிழ் வீடுகளுக்கு",
      "families.title": "உங்கள் சமூகம் கொண்டாடும் விதத்திற்கேற்ப",
      "families.lead":
        "ஆங்கிலமும் தமிழும் அருகருகே. முக்கியம் வகிக்கும் இடங்கள். கவனத்துடன் பதிவுசெய்யும் நகை. ஒருவருக்கொருவர் உதவுபவர்களுக்கான பதிவேடு.",
      "families.p1": "இருமொழி இடைமுகம் — ஆங்கிலம் & தமிழ்",
      "families.p2": "விருந்தினர்களுக்கான கிராமங்கள், நகரங்கள், வரைபடக் குறிகள்",
      "families.p3": "மொத்தம் மட்டும் அல்ல — உலோகம் மற்றும் எடையுடன் நகை",
      "footer.tagline": "இணை · கொண்டாடு · நினைவுகொள்",
      "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    },
  };

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function applyLang(lang) {
    const dict = strings[lang] || strings.en;
    document.documentElement.lang = lang === "ta" ? "ta" : "en";
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key] != null) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key && dict[key] != null) {
        el.setAttribute("aria-label", dict[key]);
      }
    });

    document.title =
      lang === "ta"
        ? "MoiTop — குடும்ப மொய் பதிவேடு"
        : "MoiTop — Family gift register";

    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      const active = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* ignore */
    }
  }

  function setLang(lang) {
    const next = lang === "ta" ? "ta" : "en";
    const current = document.documentElement.getAttribute("data-lang") || "en";
    if (next === current) return;

    document.body.classList.add("is-lang-fade");
    window.setTimeout(() => {
      applyLang(next);
      document.body.classList.remove("is-lang-fade");
    }, 180);
  }

  let initial = "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ta" || saved === "en") initial = saved;
  } catch (_) {
    /* ignore */
  }
  applyLang(initial);

  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLang(btn.getAttribute("data-set-lang"));
    });
  });

  /* Hero slider */
  const slides = [...document.querySelectorAll(".hero-slide")];
  const shots = [...document.querySelectorAll(".hero-shot")];
  const dotsRoot = document.querySelector(".hero-dots");
  const prevBtn = document.querySelector(".hero-prev");
  const nextBtn = document.querySelector(".hero-next");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let index = 0;
  let timer = null;

  function goTo(next) {
    if (!slides.length) return;
    const previous = index;
    index = (next + slides.length) % slides.length;
    const markLeaving = (el, leaving) => {
      window.clearTimeout(el._leaveTimer);
      el.classList.toggle("is-leaving", leaving);
      if (leaving) {
        el._leaveTimer = window.setTimeout(() => el.classList.remove("is-leaving"), 900);
      }
    };
    slides.forEach((slide, i) => {
      const active = i === index;
      markLeaving(slide, i === previous && previous !== index);
      slide.classList.toggle("is-active", active);
      if (active) {
        slide.removeAttribute("hidden");
      } else {
        slide.setAttribute("hidden", "");
      }
    });
    shots.forEach((shot) => {
      const n = Number(shot.dataset.shot);
      markLeaving(shot, n === previous && previous !== index);
      shot.classList.toggle("is-active", n === index);
    });
    if (dotsRoot) {
      [...dotsRoot.children].forEach((dot, i) => {
        dot.classList.toggle("is-active", i === index);
        dot.setAttribute("aria-selected", i === index ? "true" : "false");
      });
    }
  }

  function next() {
    goTo(index + 1);
  }

  function prev() {
    goTo(index - 1);
  }

  function startAuto() {
    stopAuto();
    if (reduceMotion || slides.length < 2) return;
    timer = window.setInterval(next, 5500);
  }

  function stopAuto() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  if (dotsRoot && slides.length) {
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "hero-dot" + (i === 0 ? " is-active" : "");
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Slide ${i + 1}`);
      dot.setAttribute("aria-selected", i === 0 ? "true" : "false");
      dot.addEventListener("click", () => {
        goTo(i);
        startAuto();
      });
      dotsRoot.appendChild(dot);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prev();
      startAuto();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      next();
      startAuto();
    });
  }

  const hero = document.querySelector(".hero");
  if (hero) {
    hero.addEventListener("mouseenter", stopAuto);
    hero.addEventListener("mouseleave", startAuto);
    hero.addEventListener("focusin", stopAuto);
    hero.addEventListener("focusout", (e) => {
      if (!hero.contains(e.relatedTarget)) startAuto();
    });
  }

  goTo(0);
  startAuto();

  /* Scroll reveal */
  const reveals = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  }
})();
