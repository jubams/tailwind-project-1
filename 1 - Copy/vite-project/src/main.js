import './style.css'

// Sample projects data
const projects = [
    {
        id: 1,
        title: 'Brand Identity Design',
        description: 'Complete brand identity design for a tech startup including logo, color palette, typography, and brand guidelines.',
        thumbnail: '/api/placeholder/600/400',
        fullImage: '/api/placeholder/1200/800',
        type: 'image',
        category: 'branding',
        client: 'TechVisionaries Inc.',
        year: '2024',
        services: 'Logo Design, Brand Guidelines, Typography'
    },
    {
        id: 2,
        title: 'Motion Graphics Explainer',
        description: 'An animated explainer video showcasing a new software product with custom illustrations and transitions.',
        thumbnail: '/api/placeholder/600/400',
        fullImage: '/api/placeholder/1200/800', 
        type: 'video',
        category: 'motion',
        client: 'SoftSolutions',
        year: '2024',
        services: 'Motion Graphics, Animation, Storyboarding'
    },
    {
        id: 3,
        title: 'UI/UX Design System',
        description: 'Comprehensive design system for a financial app, including component library and interaction patterns.',
        thumbnail: '/api/placeholder/600/400',
        fullImage: '/api/placeholder/1200/800',
        type: 'image',
        category: 'ui',
        client: 'FinanceTrack',
        year: '2023',
        services: 'UI Design, UX Research, Prototyping'
    },
    {
        id: 4,
        title: 'Product Packaging',
        description: 'Sustainable packaging design for an eco-friendly cosmetics brand with custom illustrations.',
        thumbnail: '/api/placeholder/600/400',
        fullImage: '/api/placeholder/1200/800',
        type: 'image',
        category: 'packaging',
        client: 'EcoGlow Beauty',
        year: '2023',
        services: 'Packaging Design, Illustration, Mockups'
    },
    {
        id: 5,
        title: 'Social Media Campaign',
        description: 'Series of animated posts and stories for a seasonal marketing campaign.',
        thumbnail: '/api/placeholder/600/400',
        fullImage: '/api/placeholder/1200/800',
        type: 'video',
        category: 'motion',
        client: 'Fashion Forward',
        year: '2024',
        services: 'Animation, Social Media Graphics, Concept Development'
    },
    {
        id: 6,
        title: 'Interactive Annual Report',
        description: 'Digital annual report with interactive data visualizations and animations.',
        thumbnail: '/api/placeholder/600/400',
        fullImage: '/api/placeholder/1200/800',
        type: 'image',
        category: 'ui',
        client: 'Global Innovations',
        year: '2023',
        services: 'UI Design, Data Visualization, Interactive Design'
    },
];

// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const projectModal = document.getElementById('project-modal');
const closeModalButton = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalYear = document.getElementById('modal-year');
const modalDescription = document.getElementById('modal-description');
const modalClient = document.getElementById('modal-client');
const modalServices = document.getElementById('modal-services');
const modalContent = document.getElementById('modal-content');

// Toggle Mobile Menu
menuToggle.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        mobileMenu.classList.add('hidden');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    
    const isDarkMode = document.body.classList.contains('dark');
    
    // Update desktop toggle
    if (isDarkMode) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.classList.remove('bg-gray-200', 'text-gray-700');
        themeToggle.classList.add('bg-gray-800', 'text-yellow-400');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.classList.remove('bg-gray-800', 'text-yellow-400');
        themeToggle.classList.add('bg-gray-200', 'text-gray-700');
    }
    
    // Update mobile toggle
    if (isDarkMode) {
        mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        mobileThemeToggle.classList.remove('bg-gray-200', 'text-gray-700');
        mobileThemeToggle.classList.add('bg-gray-700', 'text-yellow-400');
        mobileThemeToggle.nextElementSibling.textContent = 'Light Mode';
    } else {
        mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        mobileThemeToggle.classList.remove('bg-gray-700', 'text-yellow-400');
        mobileThemeToggle.classList.add('bg-gray-200', 'text-gray-700');
        mobileThemeToggle.nextElementSibling.textContent = 'Dark Mode';
    }
}

themeToggle.addEventListener('click', toggleDarkMode);
mobileThemeToggle.addEventListener('click', toggleDarkMode);

// Portfolio Filtering
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => {
            btn.classList.remove('gradient-bg', 'text-white');
            btn.classList.add('bg-white', 'text-gray-800', 'border', 'border-gray-300', 'dark-card', 'dark-border');
        });
        
        button.classList.remove('bg-white', 'text-gray-800', 'border', 'border-gray-300');
        button.classList.add('gradient-bg', 'text-white');
        
        const category = button.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Modal functionality
portfolioItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const project = projects[index];
        
        // Set modal content
        modalTitle.textContent = project.title;
        modalCategory.textContent = project.category.charAt(0).toUpperCase() + project.category.slice(1);
        modalYear.textContent = project.year;
        modalDescription.textContent = project.description;
        modalClient.textContent = project.client;
        modalServices.textContent = project.services;
        
        // Set image or video
        if (project.type === 'video') {
            modalContent.innerHTML = `
                <div class="relative w-full h-full flex items-center justify-center bg-black">
                    <img src="${project.fullImage}" alt="${project.title}" class="max-h-full max-w-full">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-white">
                            <i class="fas fa-play text-2xl"></i>
                        </div>
                    </div>
                </div>
            `;
        } else {
            modalContent.innerHTML = `
                <img src="${project.fullImage}" alt="${project.title}" class="w-full h-full object-cover">
            `;
        }
        
        // Show modal
        projectModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

// Close modal
closeModalButton.addEventListener('click', () => {
    projectModal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Enable scrolling
});

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Accounting for fixed header
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Add hover effect to portfolio items
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px)';
        item.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.1)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
    });
});