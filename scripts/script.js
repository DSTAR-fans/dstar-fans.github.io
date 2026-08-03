document.addEventListener('DOMContentLoaded', function () {
    // Mobile nav toggle
    const navToggle = document.querySelector('[data-nav-toggle]');
    const navLinks = document.querySelector('[data-nav-links]');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            const open = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        });
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Open menu');
            });
        });
    }

    // Translate control — Google Translate of the current page (no self-hosted translations)
    initTranslateControl();

    // Seasonal event visibility
    const currentDate = new Date();

    const events = [
        {
            startDate: new Date('2026-04-18'),
            endDate: new Date('2026-05-18'),
            eventId: 'hamvention'
        },
        {
            startDate: new Date('2025-06-01'),
            endDate: new Date('2025-07-01'),
            eventId: 'field-day'
        },
        {
            startDate: new Date('2026-01-01'),
            endDate: new Date('2026-02-01'),
            eventId: 'winter-field-day'
        },
        {
            startDate: new Date('2025-10-15'),
            endDate: new Date('2026-03-01'),
            eventId: 'dstar-qso-party'
        },
        // Add more events here
    ];

    events.forEach(function (event) {
        const eventDiv = document.getElementById(event.eventId);

        if (eventDiv) {
            if (currentDate >= event.startDate && currentDate <= event.endDate) {
                eventDiv.style.display = 'block';
            } else {
                eventDiv.style.display = 'none';
            }
        }
    });
});

/**
 * Inject a "Translate" control into the site nav.
 * Uses Google Translate with the current page URL (sl=en → target language).
 * Best option for a static English site without maintaining per-language copies.
 */
function initTranslateControl() {
    const navInner = document.querySelector('.nav-inner');
    if (!navInner || document.querySelector('[data-translate-control]')) {
        return;
    }

    const languages = [
        { code: 'ja', label: '日本語 (Japanese)' },
        { code: 'zh-CN', label: '简体中文 (Chinese)' },
        { code: 'zh-TW', label: '繁體中文 (Chinese Trad.)' },
        { code: 'ko', label: '한국어 (Korean)' },
        { code: 'de', label: 'Deutsch' },
        { code: 'fr', label: 'Français' },
        { code: 'es', label: 'Español' },
        { code: 'pt', label: 'Português' },
        { code: 'it', label: 'Italiano' },
        { code: 'nl', label: 'Nederlands' },
        { code: 'pl', label: 'Polski' },
        { code: 'ru', label: 'Русский' },
        { code: 'uk', label: 'Українська' },
        { code: 'sv', label: 'Svenska' },
        { code: 'fi', label: 'Suomi' },
        { code: 'da', label: 'Dansk' },
        { code: 'no', label: 'Norsk' },
        { code: 'cs', label: 'Čeština' },
        { code: 'hu', label: 'Magyar' },
        { code: 'ro', label: 'Română' },
        { code: 'tr', label: 'Türkçe' },
        { code: 'ar', label: 'العربية' },
        { code: 'hi', label: 'हिन्दी' },
        { code: 'th', label: 'ไทย' },
        { code: 'vi', label: 'Tiếng Việt' },
        { code: 'id', label: 'Bahasa Indonesia' }
    ];

    function browserLangCode() {
        const raw = (navigator.language || navigator.userLanguage || 'en').trim();
        const lower = raw.toLowerCase();
        // Prefer exact matches like zh-CN when listed
        if (languages.some(function (l) { return l.code.toLowerCase() === lower; })) {
            return languages.find(function (l) { return l.code.toLowerCase() === lower; }).code;
        }
        const base = lower.split('-')[0];
        if (base === 'zh') {
            // Default Simplified unless Taiwan/HK
            if (lower.indexOf('tw') !== -1 || lower.indexOf('hk') !== -1 || lower.indexOf('mo') !== -1) {
                return 'zh-TW';
            }
            return 'zh-CN';
        }
        if (languages.some(function (l) { return l.code === base; })) {
            return base;
        }
        return null;
    }

    function googleTranslateUrl(tl) {
        const pageUrl = encodeURIComponent(window.location.href);
        return 'https://translate.google.com/translate?sl=en&tl=' + encodeURIComponent(tl) + '&u=' + pageUrl;
    }

    const wrap = document.createElement('div');
    wrap.className = 'translate-control';
    wrap.setAttribute('data-translate-control', '');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'translate-btn';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-controls', 'translate-menu');
    btn.innerHTML = '<i class="fa-solid fa-language" aria-hidden="true"></i><span>Translate</span>';

    const menu = document.createElement('div');
    menu.id = 'translate-menu';
    menu.className = 'translate-menu';
    menu.hidden = true;
    menu.setAttribute('role', 'menu');

    const preferred = browserLangCode();
    if (preferred && preferred !== 'en') {
        const preferredMeta = languages.find(function (l) { return l.code === preferred; });
        const quick = document.createElement('a');
        quick.href = googleTranslateUrl(preferred);
        quick.target = '_blank';
        quick.rel = 'noopener';
        quick.className = 'translate-preferred';
        quick.setAttribute('role', 'menuitem');
        quick.textContent = 'Your language' + (preferredMeta ? ' — ' + preferredMeta.label : '');
        menu.appendChild(quick);

        const sep = document.createElement('div');
        sep.className = 'translate-sep';
        sep.setAttribute('aria-hidden', 'true');
        menu.appendChild(sep);
    }

    const note = document.createElement('p');
    note.className = 'translate-note';
    note.textContent = 'Opens this page in Google Translate (English → your language).';
    menu.appendChild(note);

    languages.forEach(function (lang) {
        const a = document.createElement('a');
        a.href = googleTranslateUrl(lang.code);
        a.target = '_blank';
        a.rel = 'noopener';
        a.setAttribute('role', 'menuitem');
        a.textContent = lang.label;
        if (preferred && lang.code === preferred) {
            a.className = 'is-preferred';
        }
        menu.appendChild(a);
    });

    function closeMenu() {
        menu.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
        menu.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
    }

    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (menu.hidden) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    document.addEventListener('click', function (e) {
        if (!wrap.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    wrap.appendChild(btn);
    wrap.appendChild(menu);
    navInner.appendChild(wrap);
}
