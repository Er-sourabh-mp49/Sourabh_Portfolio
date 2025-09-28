# Project Images Setup Guide

## Directory Structure
```
public/
├── project-images/          # Developer project screenshots
│   ├── online-food-order-website.jpg
│   ├── shifra-ai-virtual-assistant.jpg
│   ├── tic-tac-toe-game.jpg
│   ├── weather-app.jpg
│   ├── task-manager.jpg
│   └── calculator-app.jpg
└── artist-images/           # Artist artwork images
    ├── krishna-image.jpg
    ├── portrait-1.jpg
    └── [other artwork files]
```

## Required Project Images

### Developer Mode Projects:
1. **online-food-order-website.jpg** - Screenshot of food ordering website
2. **shifra-ai-virtual-assistant.jpg** - Screenshot of AI assistant interface
3. **tic-tac-toe-game.jpg** - Screenshot of tic-tac-toe game
4. **weather-app.jpg** - Screenshot of weather application
5. **task-manager.jpg** - Screenshot of task management app
6. **calculator-app.jpg** - Screenshot of calculator application

### Image Requirements:
- **Format**: JPG or PNG
- **Size**: 800x600px or 16:9 aspect ratio
- **Quality**: High resolution for crisp display
- **Content**: Clean screenshots showing the main interface

### Fallback Behavior:
- If image fails to load, shows project icon instead
- Icons are automatically generated based on project type
- Maintains consistent visual experience

### Adding New Images:
1. Take screenshot of your project
2. Resize to recommended dimensions
3. Save with project name (lowercase, hyphens for spaces)
4. Place in `/public/project-images/` directory

### Example Naming:
- "Online Food Order Website" → `online-food-order-website.jpg`
- "Shifra AI Virtual Assistant" → `shifra-ai-virtual-assistant.jpg`
- "Weather App" → `weather-app.jpg`