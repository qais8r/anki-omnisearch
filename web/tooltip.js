(function () {
  const TOOLTIP_ID = "omni-selection-tooltip";
  const VISIBLE_CLASS = "is-visible";
  const ACTIONS = [
    {
      key: "google",
      label: "Google Search",
      title: "Search Google",
      href: (selection) =>
        `https://www.google.com/search?q=${encodeURIComponent(selection)}`,
      icon: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      `,
    },
    {
      key: "images",
      label: "Google Images",
      title: "Search Google Images",
      href: (selection) =>
        `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(selection)}`,
      icon: `
        <svg viewBox="0 0 59 59" aria-hidden="true">
          <path d="M14.75 13.41c8.146 0 14.75 6.603 14.75 14.75v1.34H1.34C.6 29.5 0 28.9 0 28.16c0-8.147 6.604-14.75 14.75-14.75z" fill="#FBBC04"/>
          <path d="M45.59 14.75c0 8.146-6.603 14.75-14.75 14.75H29.5V1.34C29.5.6 30.1 0 30.84 0c8.147 0 14.75 6.604 14.75 14.75z" fill="#EA4335"/>
          <path d="M44.25 45.59c-8.146 0-14.75-6.603-14.75-14.75V29.5h28.16c.74 0 1.34.6 1.34 1.34 0 8.147-6.604 14.75-14.75 14.75z" fill="#4285F4"/>
          <path d="M13.41 44.25c0-8.146 6.603-14.75 14.75-14.75h1.34v28.16c0 .74-.6 1.34-1.34 1.34-8.147 0-14.75-6.604-14.75-14.75z" fill="#34A853"/>
        </svg>
      `,
    },
    {
      key: "pronunciation",
      label: "Pronunciation",
      title: "Search pronunciation",
      href: (selection) =>
        `https://www.google.com/search?q=${encodeURIComponent(`${selection} pronunciation`)}`,
      icon: `
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1657 2.14424C12.8728 2.50021 13 3.27314 13 3.7446V20.2561C13 20.7286 12.8717 21.4998 12.1656 21.8554C11.416 22.2331 10.7175 21.8081 10.3623 21.4891L4.95001 16.6248H3.00001C1.89544 16.6248 1.00001 15.7293 1.00001 14.6248L1 9.43717C1 8.3326 1.89543 7.43717 3 7.43717H4.94661L10.3623 2.51158C10.7163 2.19354 11.4151 1.76635 12.1657 2.14424ZM11 4.63507L6.00618 9.17696C5.82209 9.34439 5.58219 9.43717 5.33334 9.43717H3L3.00001 14.6248H5.33334C5.58015 14.6248 5.81823 14.716 6.00179 14.881L11 19.3731V4.63507Z" fill="#000000"/>
          <path d="M16.0368 4.73124C16.1852 4.19927 16.7368 3.88837 17.2688 4.03681C20.6116 4.9696 23 8.22106 23 12C23 15.779 20.6116 19.0304 17.2688 19.9632C16.7368 20.1117 16.1852 19.8007 16.0368 19.2688C15.8884 18.7368 16.1993 18.1852 16.7312 18.0368C19.1391 17.3649 21 14.9567 21 12C21 9.04332 19.1391 6.63512 16.7312 5.96321C16.1993 5.81477 15.8884 5.2632 16.0368 4.73124Z" fill="#000000"/>
          <path d="M16.2865 8.04192C15.7573 7.88372 15.2001 8.18443 15.0419 8.71357C14.8837 9.24271 15.1844 9.79992 15.7136 9.95812C16.3702 10.1544 17 10.9209 17 12C17 13.0791 16.3702 13.8456 15.7136 14.0419C15.1844 14.2001 14.8837 14.7573 15.0419 15.2865C15.2001 15.8156 15.7573 16.1163 16.2865 15.9581C17.9301 15.4667 19 13.8076 19 12C19 10.1924 17.9301 8.53333 16.2865 8.04192Z" fill="#000000"/>
        </svg>
      `,
    },
    {
      key: "chatgpt",
      label: "ChatGPT",
      title: "Ask ChatGPT",
      href: (selection) =>
        `https://chatgpt.com/?q=${encodeURIComponent(
          `Explain this in an easy to understand way: ${selection}`
        )}`,
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="256" height="260" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
          <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"/>
        </svg>
      `,
    },
    {
      key: "gemini",
      label: "Gemini",
      title: "Ask Gemini",
      href: (selection) =>
        `https://www.google.com/search?q=${encodeURIComponent(
          `Explain in an easy to understand way: ${selection}`
        )}&udm=50`,
      icon: `
        <svg height="1em" style="flex:none;line-height:1" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
          <title>Gemini</title>
          <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="#3186FF"></path>
          <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#lobe-icons-gemini-fill-0)"></path>
          <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#lobe-icons-gemini-fill-1)"></path>
          <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#lobe-icons-gemini-fill-2)"></path>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-gemini-fill-0" x1="7" x2="11" y1="15.5" y2="12">
              <stop stop-color="#08B962"></stop>
              <stop offset="1" stop-color="#08B962" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-gemini-fill-1" x1="8" x2="11.5" y1="5.5" y2="11">
              <stop stop-color="#F94543"></stop>
              <stop offset="1" stop-color="#F94543" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-gemini-fill-2" x1="3.5" x2="17.5" y1="13.5" y2="12">
              <stop stop-color="#FABC12"></stop>
              <stop offset=".46" stop-color="#FABC12" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      `,
    },
    {
      key: "claude",
      label: "Claude",
      title: "Ask Claude",
      href: (selection) =>
        `https://claude.ai/?q=${encodeURIComponent(
          `Explain this in an easy to understand way: ${selection}`
        )}`,
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="256" height="257" preserveAspectRatio="xMidYMid" viewBox="0 0 256 257">
          <path fill="#D97757" d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"/>
        </svg>
      `,
    },
  ];

  function normalizeSelection(rawText) {
    return rawText.replace(/\s+/g, " ").trim();
  }

  function getSelectionText() {
    const selection = window.getSelection();
    return selection ? normalizeSelection(selection.toString()) : "";
  }

  function getSelectionRect() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return null;
    }

    const range = selection.getRangeAt(0);
    let rect = range.getBoundingClientRect();

    if (!rect || (!rect.width && !rect.height)) {
      const rects = range.getClientRects();
      rect = rects.length > 0 ? rects[0] : null;
    }

    if (!rect || (!rect.width && !rect.height)) {
      return null;
    }

    return rect;
  }

  function createTooltip() {
    const tooltip = document.createElement("div");
    tooltip.id = TOOLTIP_ID;
    tooltip.dataset.placement = "top";
    tooltip.setAttribute("role", "toolbar");
    tooltip.setAttribute("aria-hidden", "true");
    tooltip.innerHTML = `
      <div class="omni-selection-tooltip__actions"></div>
    `;

    tooltip.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });

    const actions = tooltip.querySelector(".omni-selection-tooltip__actions");

    ACTIONS.forEach((action) => {
      const link = document.createElement("a");
      link.className = "omni-selection-tooltip__action";
      link.dataset.service = action.key;
      link.setAttribute("aria-label", action.label);
      link.setAttribute("title", action.title);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.innerHTML = action.icon;
      actions.appendChild(link);
    });

    document.body.appendChild(tooltip);
    return tooltip;
  }

  function positionTooltip(tooltip, rect) {
    tooltip.style.left = "0px";
    tooltip.style.top = "0px";

    const tooltipRect = tooltip.getBoundingClientRect();
    const margin = 12;
    const gap = 16;
    const fitsAbove = rect.top >= tooltipRect.height + gap + margin;
    const placement = fitsAbove ? "top" : "bottom";
    const unclampedLeft = rect.left + rect.width / 2 - tooltipRect.width / 2;
    const left = Math.min(
      Math.max(unclampedLeft, margin),
      window.innerWidth - tooltipRect.width - margin
    );
    const top = fitsAbove
      ? rect.top - tooltipRect.height - gap
      : rect.bottom + gap;

    tooltip.dataset.placement = placement;
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${Math.max(margin, top)}px`;
  }

  function install() {
    if (window.__omniSelectionTooltip) {
      window.__omniSelectionTooltip.ensureTooltip();
      return;
    }

    const state = {
      activeSelection: "",
      tooltip: null,
      hideTimer: null,
    };

    function ensureTooltip() {
      if (state.tooltip && document.body.contains(state.tooltip)) {
        return state.tooltip;
      }

      state.tooltip = createTooltip();
      return state.tooltip;
    }

    function hideTooltip() {
      const tooltip = ensureTooltip();
      tooltip.classList.remove(VISIBLE_CLASS);
      tooltip.setAttribute("aria-hidden", "true");
    }

    function updateLinks(selection) {
      const tooltip = ensureTooltip();
      tooltip
        .querySelectorAll(".omni-selection-tooltip__action")
        .forEach((link, index) => {
          link.href = ACTIONS[index].href(selection);
        });
    }

    function showTooltip() {
      const selection = getSelectionText();
      const rect = getSelectionRect();

      if (!selection || !rect) {
        state.activeSelection = "";
        hideTooltip();
        return;
      }

      const tooltip = ensureTooltip();
      state.activeSelection = selection;
      updateLinks(selection);
      tooltip.classList.add(VISIBLE_CLASS);
      tooltip.setAttribute("aria-hidden", "false");
      positionTooltip(tooltip, rect);
    }

    function refreshTooltip() {
      window.clearTimeout(state.hideTimer);
      state.hideTimer = window.setTimeout(showTooltip, 20);
    }

    document.addEventListener("mouseup", refreshTooltip, true);
    document.addEventListener("keyup", refreshTooltip, true);
    document.addEventListener(
      "selectionchange",
      () => {
        if (!getSelectionText()) {
          state.activeSelection = "";
          hideTooltip();
        }
      },
      true
    );
    document.addEventListener(
      "pointerdown",
      (event) => {
        const tooltip = ensureTooltip();
        if (!tooltip.contains(event.target)) {
          hideTooltip();
        }
      },
      true
    );
    document.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Escape") {
          hideTooltip();
        }
      },
      true
    );
    window.addEventListener("scroll", hideTooltip, true);
    window.addEventListener("resize", hideTooltip, true);

    window.__omniSelectionTooltip = {
      ensureTooltip,
      hideTooltip,
      refreshTooltip,
    };
  }

  install();
  window.__omniSelectionTooltip.refreshTooltip();
})();
