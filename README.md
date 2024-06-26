# Chrome Canary built-in AI

#### This project is inspired by [this](https://x.com/mortenjust/status/1805190952358650251) post form X.

### How to set up built-in ai:

1. Install Chrome Canary version 128 or above.
2. Open `chrome://flags/#prompt-api-for-gemini-nano`, set it to "**Enabled**".
3. Open `chrome://flags/#optimization-guide-on-device-model`, set it to "**Enabled BypassPerfRequirement**". Restart your browser.
4. Go to `chrome://components/`, find "**Optimization Guide On Device Model**". If the version is "0.0.0.0", click "Check for update".
5. To check if ai is set properly, press F12, type `window.ai` in the console and press Enter.

_For more details read the origninal article [here](https://x.com/lightning_joyce/status/180013856541179909)._

### Usage:

Clone the repository:

```
git clone https://github.com/mur073/chrome-canary-ai.git
```

Open installed folder in terminal and run:

```
npm install
npm run dev
```

Open `localhost:5173/` in your browser.
