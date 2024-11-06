# Simple Lists with GitHub Pages
A lightweight, YAML-driven web application for pretty link collections. Originally created to bookmark daily web-based games, but versatile enough for any collection of links.

**[Demo](https://logi-web.github.io/games/)**

## Features
- 🎨 Clean, responsive design
- 🌓 Automatic dark/light mode
- 📱 Mobile-friendly
- 🎯 Material Design icons
- ⚡ Fast loading
- 🔧 Easy to customize
- 📝 YAML-based configuration

## Quick Start
1. Fork this repository
2. Edit `list.yaml`:
   ```yaml
   list:
     - name: "Your Link Name"
       url: "https://your-url.com"
       buttonColor: "#HEX-COLOR"
       icon: "icon-name"
       iconType: "material-icons"
   ```
3. Deploy via GitHub Pages
   - In your repository go to Settings > Pages
   - Select 'main' as Source
   - Save and wait for deployment
   - Your site will be live at `https://[username].github.io/[repo-name]`

## Configuration
Each YAML entry needs:
- `name`: Display text
- `url`: Link destination
- `buttonColor`: HEX color code
- `icon`: Material icon name
- `iconType`: `material-icons` or `material-symbols-outlined`

Example:
```yaml
- name: Worldle
  url: http://worldle.teuteuf.fr/
  buttonColor: "#28a745"
  icon: language
  iconType: material-icons
```

## Example Use Cases
- Daily game collections
- Bookmark organizations
- Resource directories
- Quick link dashboards
- Personal portfolios
- Team tool collections

---
*Created by [Louis Giron](https://github.com/logi-web) • MIT License*