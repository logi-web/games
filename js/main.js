async function initializePage() {
    try {
        const baseUrl = window.location.origin + window.location.pathname.split('/').slice(0, -1).join('/');
        const repoName = window.location.pathname.split('/')[1];

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

        // Wait for styles to load
        await new Promise(resolve => {
            const styleLink = document.getElementById('styles-link');
            if (styleLink.sheet) {
                resolve();
            } else {
                styleLink.onload = resolve;
            }
        });

        // Show content with smooth transition
        requestAnimationFrame(() => {
            document.getElementById('main-container').classList.add('loaded');
            document.getElementById('main-footer').classList.add('loaded');
        });

    } catch (error) {
        console.error('Error initializing page:', error);
        document.getElementById('link-buttons').innerHTML = 'Error loading content. Please try again later.';
        // Show content even if there's an error
        document.getElementById('main-container').classList.add('loaded');
        document.getElementById('main-footer').classList.add('loaded');
    }
}

document.addEventListener('DOMContentLoaded', initializePage);
