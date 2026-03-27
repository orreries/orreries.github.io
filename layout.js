document.addEventListener("DOMContentLoaded", function () {
  loadLayoutByPetraPixel();
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  return `
      <header>
        <div class="header-content">
          <div class="header-title"><a href="${nesting}index.html" style="text-decoration:none; color:inherit;">Oriel's Portfolio</a></div>
          <nav>
            <ul>
              <li><a href="${nesting}home.html">Home</a></li>
              <li><a href="${nesting}projects/aave-nlp.html">AAVE NLP</a></li>
              <li><a href="${nesting}projects/qoz-geospatial.html">QOZ Analysis</a></li>
              <li><a href="${nesting}projects/institutional-revenue.html">Institutional Revenue</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <aside class="left-sidebar">

        <div class="sidebar-section">
          <div class="sidebar-title">About</div>
          <p>MS Data Analysis & Visualization candidate at Pratt Institute. I work at the intersection of data, design, and storytelling.</p>
          <p>[Add a sentence or two about your background or interests here.]</p>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">Projects</div>
          <ul>
            <li><a href="${nesting}projects/aave-nlp.html">AAVE NLP Analysis</a></li>
            <li><a href="${nesting}projects/qoz-geospatial.html">QOZ Efficacy</a></li>
            <li><a href="${nesting}projects/institutional-revenue.html">Institutional Revenue</a></li>
          </ul>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">Contact</div>
          <ul class="contact-links">
            <li><a href="https://github.com/orreries" target="_blank">↗ GitHub</a></li>
            <li><a href="https://linkedin.com/in/orreries" target="_blank">↗ LinkedIn</a></li>
            <li><a href="mailto:omwa5410@gmail.com">↗ Email</a></li>
          </ul>
        </div>

      </aside>
  `;
}

function footerHTML() {
  return `
      <footer>
        <div>Oriel · MS Data Analysis & Visualization · Pratt Institute · <a href="https://petrapixel.neocities.org/coding/layout-generator.html">Template</a></div>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

    if (href == "/" || href == `${nesting}index.html` || href.endsWith("/index")) {
      if (pathname == "/" || pathname.endsWith("/index")) {
        el.classList.add("active");
      }
    } else {
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
            el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
