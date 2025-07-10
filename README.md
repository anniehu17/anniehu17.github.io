# Annie Hu's Personal Website

A beautiful, minimalistic personal website built with HTML, CSS, and JavaScript, featuring the stunning Uchu pink color palette.

## 🎨 Design

This website uses the [Uchu color palette](https://uchu.style/) by NetOperator Wibby, specifically the pink variants for a cohesive and beautiful design. The palette provides excellent contrast and accessibility while maintaining a modern, clean aesthetic.

### Color Palette Used
- **Uchu Pink 1-9**: Various shades of pink for accents and highlights
- **Uchu Gray 1-9**: Neutral grays for text and backgrounds

## ✨ Features

### 🏠 Home Section
- Clean hero section with introduction
- Call-to-action buttons
- Smooth scrolling navigation

### 👤 About Section
- Personal introduction
- Social media links (LinkedIn, GitHub, Twitter, Instagram)
- Contact information

### 📚 Reading List & Resources
Interactive spreadsheet-style tabs including:
- **Reading List**: Books, articles, and resources you're reading
- **Link List**: Useful links and references
- **Concept List**: Important concepts and ideas
- **People List**: Interesting people and their work

### 📝 Blog Section
- Grid layout for blog posts
- Support for code blocks with syntax highlighting
- Easy to add new posts dynamically
- Responsive design

### 🚀 CUDA Visualizer
- Canvas-based visualization area
- Placeholder for your CUDA visualization code
- Start/Reset controls
- Ready for integration with your existing CUDA code

## 🛠️ Customization

### Adding Blog Posts
You can add new blog posts using the JavaScript function:

```javascript
addBlogPost(
    "Your Post Title",
    "December 2024",
    "Tag1, Tag2, Tag3",
    "Your post content here...",
    "// Optional code block\nconsole.log('Hello World!');"
);
```

### Adding Spreadsheet Rows
Add new items to any spreadsheet tab:

```javascript
addSpreadsheetRow("reading-list", [
    "Book Title",
    "Author Name",
    "Category",
    "Status",
    "Notes"
]);
```

### Updating Social Links
Edit the social media links in the HTML:

```html
<a href="YOUR_LINKEDIN_URL" class="social-link linkedin">
    <span class="social-icon">💼</span>
    LinkedIn
</a>
```

### Customizing Colors
The website uses CSS custom properties for easy color customization. Edit the `:root` section in `index.css`:

```css
:root {
    --uchu-pink-1: oklch(95.8% 0.023 354.27);
    --uchu-pink-2: oklch(92.14% 0.046 352.31);
    /* ... other colors */
}
```

## 📱 Responsive Design

The website is fully responsive and works beautifully on:
- Desktop computers
- Tablets
- Mobile phones

## 🚀 Getting Started

1. **Clone or download** the website files
2. **Open `index.html`** in your web browser
3. **Customize** the content to match your information
4. **Deploy** to your preferred hosting service

## 📁 File Structure

```
anniehu17.github.io/
├── index.html          # Main HTML file
├── index.css           # Styles with Uchu palette
├── index.js            # Interactive functionality
├── README.md           # This documentation
└── prog1_images/       # Your existing images
```

## 🎯 Adding Your CUDA Visualizer

The CUDA Visualizer section is ready for your code. Simply:

1. Replace the placeholder animation in `index.js`
2. Add your CUDA visualization logic
3. Use the existing canvas element (`#cuda-canvas`)
4. Integrate with the Start/Reset buttons

## 🔗 Credits

- **Color Palette**: [Uchu by NetOperator Wibby](https://uchu.style/)
- **Fonts**: Inter font family from Google Fonts
- **Icons**: Emoji icons for social media links

## 📄 License

This website template is free to use and modify for personal projects.

## 🤝 Contributing

Feel free to suggest improvements or report issues!

---

Built with ❤️ using the beautiful Uchu color palette 