async function initializePage() {
    try {
        const baseUrl = window.location.origin + window.location.pathname.split('/').slice(0, -1).join('/');
        const repoName = window.location.pathname.split('/')[1];

        console.log('Initializing with repo:', repoName); // Debug log

        // Load the config YAML
        const configResponse = await fetch(`/${repoName}/config.yaml`);
        const configText = await configResponse.text();
        const config = jsyaml.load(configText);

        console.log('Loaded config:', config); // Debug log

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

        // Update links
        document.getElementById('styles-link').href = `/${repoName}/styles.css`;
        document.getElementById('favicon-png').href = `/${repoName}/icons/favicon-96x96.png`;
        document.getElementById('favicon-svg').href = `/${repoName}/icons/favicon.svg`;
        document.getElementById('favicon-ico').href = `/${repoName}/icons/favicon.ico`;
        document.getElementById('apple-touch-icon').href = `/${repoName}/icons/apple-touch-icon.png`;

        // Load and display the links
        const listResponse = await fetch(`/${repoName}/list.yaml`);
        const listText = await listResponse.text();
        const data = jsyaml.load(listText);
        
        console.log('Loaded list data:', data); // Debug log

        const container = document.getElementById('link-buttons');
        container.innerHTML = ''; // Clear any existing content

        if (data.links && Array.isArray(data.links)) {
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
        } else {
            console.error('No links array found in list.yaml');
            container.innerHTML = 'No links available.';
        }

        // Wait for styles to load
        const styleLink = document.getElementById('styles-link');
        if (styleLink) {
            await new Promise((resolve) => {
                if (styleLink.sheet) {
                    resolve();
                } else {
                    styleLink.onload = resolve;
                }
            });
        }

        console.log('Everything loaded, showing content'); // Debug log

        // Show content with smooth transition
        document.body.classList.remove('content-hidden');
        document.body.classList.add('content-visible');

    } catch (error) {
        console.error('Error initializing page:', error);
        document.getElementById('link-buttons').innerHTML = 'Error loading content. Please try again later.';
        // Show content even if there's an error
        document.body.classList.remove('content-hidden');
        document.body.classList.add('content-visible');
    }
}

// Add error handling for script loading
window.onerror = function(msg, url, line, col, error) {
    console.error("Global error:", { msg, url, line, col, error });
    document.body.classList.remove('content-hidden');
    document.body.classList.add('content-visible');
    return false;
};

document.addEventListener('DOMContentLoaded', initializePage);
