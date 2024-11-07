async function loadStylesheet(href) {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.id = 'styles-link';
        link.href = href;
        
        // Set a timeout for loading
        const timeoutId = setTimeout(() => {
            reject(new Error('Stylesheet load timeout'));
        }, 5000); // 5 second timeout
        
        link.onload = () => {
            clearTimeout(timeoutId);
            resolve();
        };
        
        link.onerror = () => {
            clearTimeout(timeoutId);
            reject(new Error('Stylesheet failed to load'));
        };
        
        document.head.appendChild(link);
    });
}

async function initializePage() {
    const repoName = window.location.pathname.split('/')[1];
    
    try {
        // Load stylesheet first
        await loadStylesheet(`/${repoName}/styles.css`);
        
        const baseUrl = window.location.origin + window.location.pathname.split('/').slice(0, -1).join('/');
        
        // Load the config YAML
        const configResponse = await fetch(`/${repoName}/config.yaml`);
        const configText = await configResponse.text();
        const config = jsyaml.load(configText);
        
        // Update meta tags and titles
        document.title = config.title;
        document.getElementById('page-title').textContent = config.title;
        document.getElementById('app-title').content = config.title;
        document.getElementById('page-description').content = config.description;
        document.getElementById('main-title').textContent = config.title;
        
        // Update OpenGraph tags
        document.getElementById('og-title').content = config.title;
        document.getElementById('og-description').content = config.description;
        document.getElementById('og-image').content = `${baseUrl}/icons/web-app-manifest-512x512.png`;
        document.getElementById('og-url').content = baseUrl;
        document.getElementById('og-site-name').content = config.siteName;
        
        // Update favicon links
        document.getElementById('favicon-png').href = `/${repoName}/icons/favicon-96x96.png`;
        document.getElementById('favicon-svg').href = `/${repoName}/icons/favicon.svg`;
        document.getElementById('favicon-ico').href = `/${repoName}/icons/favicon.ico`;
        document.getElementById('apple-touch-icon').href = `/${repoName}/icons/apple-touch-icon.png`;

        // Load and display the links
        const listResponse = await fetch(`/${repoName}/list.yaml`);
        const listText = await listResponse.text();
        const data = jsyaml.load(listText);
        
        const container = document.getElementById('link-buttons');
        data.links.forEach(link => {
            const button = document.createElement('a');
            button.href = link.url;
            button.className = 'button';
            button.target = '_blank';
            button.style.backgroundColor = link.buttonColor;
            
            let buttonContent = link.name;
            if (link.iconType && link.icon) {
                buttonContent += `<span class="${link.iconType}">${link.icon}</span>`;
            }
            button.innerHTML = buttonContent;
            
            container.appendChild(button);
        });
        
    } catch (error) {
        console.error('Error initializing page:', error);
        document.getElementById('link-buttons').innerHTML = 'Error loading content. Please try again later.';
    } finally {
        // Always remove the overlay, but with a small delay to ensure smooth transition
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 100);
    }
}
// Start loading as soon as possible
initializePage();
