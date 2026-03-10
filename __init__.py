from __future__ import annotations

from aqt import gui_hooks, mw

CARD_CONTEXTS = {
    "reviewQuestion",
    "reviewAnswer",
    "previewQuestion",
    "previewAnswer",
    "clayoutQuestion",
    "clayoutAnswer",
}

ADDON_PACKAGE = mw.addonManager.addonFromModule(__name__)
CSS_PATH = f"/_addons/{ADDON_PACKAGE}/web/tooltip.css"
JS_PATH = f"/_addons/{ADDON_PACKAGE}/web/tooltip.js"


def inject_selection_tooltip(html: str, card, context: str) -> str:
    if context not in CARD_CONTEXTS:
        return html

    return (
        html
        + f'\n<link rel="stylesheet" href="{CSS_PATH}">\n'
        + f'<script src="{JS_PATH}"></script>\n'
    )


mw.addonManager.setWebExports(__name__, r"web/.*\.(css|js)")
gui_hooks.card_will_show.append(inject_selection_tooltip)
