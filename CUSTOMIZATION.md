# 🎨 Design System & Customization Guide

## Color Scheme

The portfolio uses a cyberpunk/futuristic color palette:

```css
Primary (Cyan):    #00f5ff
Secondary (Magenta): #ff00ff
Accent (Green):    #00ff88
Dark Background:   #0a0a0f
Darker:           #050508
```

### Changing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
  accent: '#YOUR_COLOR',
  // Add more custom colors
}
```

## Typography

### Fonts
- **Headings**: Inter (Bold, 700-800)
- **Body**: Inter (Regular, 400-500)
- **Code**: JetBrains Mono

### Font Sizes
- Hero Title: 4xl - 7xl (responsive)
- Section Titles: 4xl - 5xl
- Subsections: 2xl - 3xl
- Body: base - lg

## Animations

### Built-in Animations

1. **Gradient Animation**
```jsx
className="animate-gradient"
```

2. **Float Animation**
```jsx
className="animate-float"
```

3. **Pulse Glow**
```jsx
className="animate-pulse-glow"
```

### Framer Motion Variants

```javascript
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
```

## Glass Morphism

### Usage
```jsx
className="glass"           // Light glass effect
className="glass-strong"    // Strong glass effect
```

### Customize
Edit in `src/index.css`:
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## Components Structure

### Reusable Patterns

**Section Wrapper:**
```jsx
<section id="section-name" className="py-20 px-6 relative">
  <div className="container mx-auto max-w-7xl">
    {/* Content */}
  </div>
</section>
```

**Section Header:**
```jsx
<div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold mb-4">
    Title <span className="gradient-text">Highlight</span>
  </h2>
  <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
  <p className="text-gray-400 max-w-2xl mx-auto">Description</p>
</div>
```

## Adding New Sections

1. Create component file in `src/components/`
2. Import in `src/App.jsx`
3. Add to navigation in `Navbar.jsx`
4. Add scroll anchor id

Example:
```jsx
// src/components/NewSection.jsx
export const NewSection = () => {
  return (
    <section id="newsection" className="py-20 px-6">
      {/* Your content */}
    </section>
  )
}
```

## Responsive Design

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Usage
```jsx
className="text-2xl md:text-4xl lg:text-5xl"
className="grid md:grid-cols-2 lg:grid-cols-3"
```

## Icon System

Using React Icons:
```jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa'
```

Available icon sets:
- `fa` - Font Awesome
- `bi` - Bootstrap Icons
- `ai` - Ant Design Icons
- `md` - Material Design Icons

## Performance Tips

1. **Lazy Load Images**
```jsx
<img loading="lazy" src="..." alt="..." />
```

2. **Code Splitting**
```jsx
const Component = lazy(() => import('./Component'))
```

3. **Optimize Animations**
- Use `will-change` sparingly
- Prefer `transform` and `opacity`
- Use `motion.div` only when needed

## Accessibility

### ARIA Labels
```jsx
<button aria-label="Close menu">X</button>
```

### Keyboard Navigation
- All interactive elements focusable
- Clear focus indicators
- Skip links for navigation

### Color Contrast
- Minimum 4.5:1 for body text
- Minimum 3:1 for large text
- Test with contrast checkers

## Browser Compatibility

### Supported Features
- CSS Grid
- Flexbox
- CSS Variables
- Backdrop Filter (with fallback)
- Modern JavaScript (ES6+)

### Fallbacks
```css
/* Fallback for backdrop-filter */
@supports not (backdrop-filter: blur(10px)) {
  .glass {
    background: rgba(255, 255, 255, 0.95);
  }
}
```

## Best Practices

1. **Component Size**: Keep components under 300 lines
2. **Props**: Use TypeScript or PropTypes for type safety
3. **State Management**: Use local state when possible
4. **CSS**: Prefer Tailwind classes over custom CSS
5. **Animations**: Keep under 500ms for UI feel
6. **Images**: Use WebP format with fallbacks

## Common Customizations

### Change Hero Background
```jsx
// In Hero.jsx
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-YOUR-COLOR/30 rounded-full blur-3xl animate-pulse"></div>
```

### Modify Card Styles
```jsx
className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all"
```

### Update Button Styles
```css
/* In index.css */
.btn-primary {
  @apply px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary;
}
```

---

Happy customizing! 🎨
