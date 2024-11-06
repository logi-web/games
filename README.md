# Simple Lists with GitHub Pages

A lightweight, YAML-driven web application for pretty link collections. Originally created to bookmark daily web-based games, but versatile enough for any collection of links.

## [Example](https://logi-web.github.io/games/)

## Features
- 🎨 Clean, responsive design
- 🌓 Automatic dark/light mode
- 📱 Mobile-friendly
- 🎯 Material Design icons
- ⚡ Fast loading
- 🔧 Easy to customize
- 📝 YAML-based configuration

## Quick Start
1. Clone the repository:
   ```bash
   git clone https://github.com/logi-web/games.git
   ```

2. Customize your links by editing `list.yaml`:
   ```yaml
   list:
     - name: "Your Link Name"
       url: "https://your-url.com"
       buttonColor: "#HEX-COLOR"
       icon: "icon-name"
       iconType: "material-icons"
   ```

3. Deploy via GitHub Pages (need explanation)

## Configuration

### YAML Structure
The `list.yaml` file controls all content. Each entry requires:
- `name`: Display text
- `url`: Link destination
- `buttonColor`: Button background color (hex code)
- `icon`: Material icon name
- `iconType`: Either `material-icons` or `material-symbols-outlined`

### Example Entry
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

Created by [Louis Giron](https://github.com/logi-web)   |   MIT License - feel free to use and modify as needed.
