# B24ADSPA — Chrome Extension Support Site for Bitrix24

## About

This is a simple single-page web application (SPA) built with Vue 3, designed to support, distribute, and provide guidance for the Chrome extension for Bitrix24.  
The site includes a user guide, FAQ, and download links for the extension and supporting tools.

## Installation & Usage

1. **Clone the repository and install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```
   The production-ready files will be in the `dist/` folder.

## Features

- **Multi-language:** Supports Russian and English. Switch languages using the button in the top right corner.
- **Three main sections:**
    - **Main:** Extension overview, user guide, list of "secret" features, and a changelog.
    - **Download:** Download links for the extension and helper utilities for Windows and macOS.
    - **FAQ:** Answers to common questions, including installation and macOS launch instructions.
- **Downloadable files** are located in the `public/files/` directory:
    - `Bitrix24AD-extension.zip` — the Chrome extension itself.
    - `Bitrix24AD-repackager-win.zip` — helper utility for Windows.
    - `Bitrix24AD-repackager-mac.dmg` — helper utility for macOS.
- **macOS Notice:** The macOS app is not signed or notarized. On first launch, you may need to allow it manually via "System Preferences → Security & Privacy → Open Anyway".

## Updating Downloadable Files

Update downloadable files, with replace the relevant archives in the `public/files/` directory.

## License

MIT (or specify your own)
