// Blog-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Like button functionality (stored in localStorage for persistence)
    const likeButtons = document.querySelectorAll('.like-btn');
    
    likeButtons.forEach(button => {
        const postId = button.closest('.blog-post').getAttribute('data-post-id');
        const likeCount = button.querySelector('.like-count');
        
        // Load saved like count
        const savedLikes = localStorage.getItem(`likes_${postId}`) || 0;
        likeCount.textContent = savedLikes;
        
        // Check if user has liked this post
        const hasLiked = localStorage.getItem(`liked_${postId}`) === 'true';
        if (hasLiked) {
            button.classList.add('liked');
        }
        
        button.addEventListener('click', () => {
            const currentLikes = parseInt(likeCount.textContent);
            const hasLiked = button.classList.contains('liked');
            
            if (hasLiked) {
                // Unlike
                likeCount.textContent = currentLikes - 1;
                button.classList.remove('liked');
                localStorage.setItem(`likes_${postId}`, currentLikes - 1);
                localStorage.setItem(`liked_${postId}`, 'false');
            } else {
                // Like
                likeCount.textContent = currentLikes + 1;
                button.classList.add('liked');
                localStorage.setItem(`likes_${postId}`, currentLikes + 1);
                localStorage.setItem(`liked_${postId}`, 'true');
            }
        });
    });
    
    // Comment button functionality
    const commentButtons = document.querySelectorAll('.comment-btn');
    
    commentButtons.forEach(button => {
        button.addEventListener('click', () => {
            const postId = button.closest('.blog-post').getAttribute('data-post-id');
            scrollToComments(postId);
        });
    });
    
    // Expand post functionality
    const readMoreButtons = document.querySelectorAll('.read-more');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = button.closest('.blog-post').getAttribute('data-post-id');
            expandPost(postId);
        });
    });
    
    // Add some interactivity to blog posts
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        post.addEventListener('mouseenter', () => {
            post.style.transform = 'translateY(-8px)';
        });
        
        post.addEventListener('mouseleave', () => {
            post.style.transform = 'translateY(-5px)';
        });
    });
});

// Global functions for blog functionality
function toggleLike(postId) {
    const button = document.querySelector(`[data-post-id="${postId}"] .like-btn`);
    const likeCount = button.querySelector('.like-count');
    const currentLikes = parseInt(likeCount.textContent);
    const hasLiked = button.classList.contains('liked');
    
    if (hasLiked) {
        // Unlike
        likeCount.textContent = currentLikes - 1;
        button.classList.remove('liked');
        localStorage.setItem(`likes_${postId}`, currentLikes - 1);
        localStorage.setItem(`liked_${postId}`, 'false');
    } else {
        // Like
        likeCount.textContent = currentLikes + 1;
        button.classList.add('liked');
        localStorage.setItem(`likes_${postId}`, currentLikes + 1);
        localStorage.setItem(`liked_${postId}`, 'true');
    }
}

function scrollToComments(postId) {
    const commentsSection = document.querySelector('.comments-section');
    if (commentsSection) {
        commentsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Highlight the comments section briefly
        commentsSection.style.backgroundColor = 'var(--uchu-pink-1)';
        setTimeout(() => {
            commentsSection.style.backgroundColor = 'white';
        }, 1000);
    }
}

function expandPost(postId) {
    // This function can be used to show full blog posts
    // For now, it just scrolls to the comments section
    scrollToComments(postId);
    
    // You could also implement a modal or expand the post content here
    console.log(`Expanding post: ${postId}`);
}

// Utility function to add new blog posts dynamically
function addBlogPostWithActions(title, date, tags, content, codeBlock = null) {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;
    
    const postId = 'post-' + Date.now();
    
    const article = document.createElement('article');
    article.className = 'blog-post';
    article.setAttribute('data-post-id', postId);
    
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
        <div class="blog-actions">
            <button class="like-btn" onclick="toggleLike('${postId}')">
                <span class="like-icon">❤️</span>
                <span class="like-count">0</span>
            </button>
            <button class="comment-btn" onclick="scrollToComments('${postId}')">
                💬 Comment
            </button>
        </div>
        <a href="#" class="read-more" onclick="expandPost('${postId}')">Read More</a>
    `;
    
    blogGrid.appendChild(article);
    
    // Initialize the new post's like functionality
    const newButton = article.querySelector('.like-btn');
    const likeCount = newButton.querySelector('.like-count');
    const savedLikes = localStorage.getItem(`likes_${postId}`) || 0;
    likeCount.textContent = savedLikes;
}

// Export functions for global use
window.toggleLike = toggleLike;
window.scrollToComments = scrollToComments;
window.expandPost = expandPost;
window.addBlogPostWithActions = addBlogPostWithActions; 