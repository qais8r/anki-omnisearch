# OmniSearch

## Description

**OmniSearch adds a small popup to Anki cards whenever you highlight text.** Instead of copying text and opening a browser manually, you can select a word or phrase and open it instantly in search, image search, pronunciation search, or an AI assistant.

## Features

When you highlight text on a card, a clean floating tooltip appears next to the selection with one-click actions for:

- Google Search
- Google Images
- Pronunciation
- ChatGPT
- Gemini
- Claude

For AI actions, the selected text is automatically wrapped in a simple prompt: `Explain this in an easy to understand way: {selected text}`. In the future, I'll probably implement a configuration that let's you change the prompt prefix.

## How To Use

To use OmniSearch, open any card during review or preview. Highlight any word or phrase, and a tooltip should appear. Click one of the icons in the popup tooltip. That action opens your browser with the selected text already filled in.
