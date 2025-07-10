// Tab functionality for reading list
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // CUDA Visualizer placeholder functionality
    const startVizBtn = document.getElementById('start-viz');
    const resetVizBtn = document.getElementById('reset-viz');
    const canvas = document.getElementById('cuda-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;

    if (startVizBtn && resetVizBtn && canvas && ctx) {
        let animationId = null;

        startVizBtn.addEventListener('click', () => {
            if (animationId) return; // Already running
            
            // Simple placeholder animation
            let time = 0;
            function animate() {
                time += 0.02;
                
                // Clear canvas
                ctx.fillStyle = '#f8f9fa';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Draw some animated elements
                ctx.fillStyle = '#e91e63';
                for (let i = 0; i < 10; i++) {
                    const x = canvas.width / 2 + Math.cos(time + i) * 100;
                    const y = canvas.height / 2 + Math.sin(time + i) * 100;
                    ctx.beginPath();
                    ctx.arc(x, y, 5, 0, Math.PI * 2);
                    ctx.fill();
                }
                
                animationId = requestAnimationFrame(animate);
            }
            
            animate();
            startVizBtn.textContent = 'Running...';
            startVizBtn.disabled = true;
        });

        resetVizBtn.addEventListener('click', () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
            
            // Clear canvas
            ctx.fillStyle = '#f8f9fa';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            startVizBtn.textContent = 'Start Visualization';
            startVizBtn.disabled = false;
        });
    }

    // Add some interactivity to blog posts
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        post.addEventListener('click', () => {
            // Add a subtle click effect
            post.style.transform = 'scale(0.98)';
            setTimeout(() => {
                post.style.transform = 'translateY(-2px)';
            }, 150);
        });
    });

    // Add loading animation for social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add a small delay to show the hover effect
            e.preventDefault();
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = 'translateY(-1px)';
                // Here you would normally navigate to the actual social media page
                console.log('Navigating to:', link.textContent.trim());
            }, 150);
        });
    });

    // Add scroll-based navbar styling
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Add intersection observer for smooth animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Initialize first section as visible
    if (sections.length > 0) {
        sections[0].style.opacity = '1';
        sections[0].style.transform = 'translateY(0)';
    }
});

// Utility function to add new blog posts dynamically
function addBlogPost(title, date, tags, content, codeBlock = null) {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    const article = document.createElement('article');
    article.className = 'blog-post';
    
    let codeHTML = '';
    if (codeBlock) {
        codeHTML = `
            <div class="code-block">
                <pre><code>${codeBlock}</code></pre>
            </div>
        `;
    }

    article.innerHTML = `
        <h3>${title}</h3>
        <div class="blog-meta">
            <span class="date">${date}</span>
            <span class="tags">${tags}</span>
        </div>
        <p>${content}</p>
        ${codeHTML}
        <a href="#" class="read-more">Read More</a>
    `;

    blogGrid.appendChild(article);
}

// Utility function to add new items to spreadsheets
function addSpreadsheetRow(tableId, rowData) {
    const table = document.querySelector(`#${tableId} tbody`);
    if (!table) return;

    const row = document.createElement('tr');
    row.innerHTML = rowData.map(cell => `<td>${cell}</td>`).join('');
    table.appendChild(row);
}

// Export functions for global use
window.addBlogPost = addBlogPost;
window.addSpreadsheetRow = addSpreadsheetRow; 