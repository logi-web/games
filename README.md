# Simple Link Lists with GitHub Pages
A simple web application that uses Jekyll to build YAML lists into responsive, neat link collections. Originally built for daily web [games](https://logi-web.github.io/games/), but perfect for any collection of links.

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
2. Edit `_data/list.yaml`:
   ```yaml
   links:
     - name: "Your Link Name"
       url: "https://your-url.com"
       buttonColor: "#HEX-COLOR"
       icon: "icon-name"             # OPTIONAL
       iconType: "material-icons"    # OPTIONAL
   ```
4. Edit `_config.yaml`:
   ```yaml
   title: "Your Title"
   description: "Your Description"
   author: "Your Name"
   ```
5. Deploy via GitHub Pages
   - In your repository go to Settings > Pages
   - Select 'main' as Source
   - Save and wait for deployment
   - Your site will be live at `https://[username].github.io/[repo-name]`
6. Replace icons `/icons/...` to customise how your links page displays
   - The games logo is based on a mnemonic for the Cretan labyrinth, [Morrison. 2021.](https://doi.org/10.1007/978-3-319-57072-3_4)

## Configuration
Each `list.yaml` entry needs:
- `name`: Display text
- `url`: Link destination
- `buttonColor`: HEX color code

Optional: (together)
- `icon`: Material [icon](https://fonts.google.com/icons) name
- `iconType`: `material-icons` or `material-symbols-outlined`

Example:
```yaml
- name: Worldle
  url: http://worldle.teuteuf.fr/
  buttonColor: "#28a745"
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
