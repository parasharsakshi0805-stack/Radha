// Galaxy Background Canvas Setup
const canvas = document.getElementById('galaxy-canvas');
const ctx = canvas.getContext('2d');
let width, height;
let stars = [];
let shootingStars = [];
function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initStars();
}
window.addEventListener('resize', resize);
class Star {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 2;
        this.size = Math.random() * 1.5 + 0.1;
        this.opacity = Math.random();
        this.fadeDir = Math.random() > 0.5 ? 1 : -1;
        this.color = Math.random() > 0.85 ? '#ffb6c1' : '#ffffff'; // Occasional pink stars
    }
    update() {
        this.opacity += 0.005 * this.fadeDir;
        if (this.opacity >= 1) {
            this.opacity = 1;
            this.fadeDir = -1;
        }
        if (this.opacity <= 0.1) {
            this.opacity = 0.1;
            this.fadeDir = 1;
        }
        
        // Parallax slow movement
        this.y -= this.z * 0.1;
        if (this.y < 0) {
            this.y = height;
            this.x = Math.random() * width;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}
class ShootingStar {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * width * 1.5;
        this.y = 0;
        this.length = Math.random() * 80 + 30;
        this.speed = Math.random() * 6 + 6;
        this.angle = (Math.PI / 180) * (Math.random() * 20 + 30); // 30-50 degrees
        this.opacity = 0;
        this.active = false;
        this.delay = Math.random() * 4000 + 3000;
        this.lastSpawn = Date.now();
    }
    update() {
        if (!this.active) {
            if (Date.now() - this.lastSpawn > this.delay) {
                this.active = true;
                this.x = Math.random() * width * 1.5;
                this.y = -this.length;
            }
            return;
        }
        this.x -= this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
        this.opacity = Math.min(1, this.opacity + 0.1);
        if (this.y > height || this.x < 0) {
            this.reset();
        }
    }
    draw() {
        if (!this.active) return;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.length * Math.cos(this.angle), this.y - this.length * Math.sin(this.angle));
        
        // Gradient for shooting star
        const gradient = ctx.createLinearGradient(this.x, this.y, this.x + this.length * Math.cos(this.angle), this.y - this.length * Math.sin(this.angle));
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }
}
function initStars() {
    stars = [];
    const numStars = width < 768 ? 100 : 250;
    for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
    }
    shootingStars = [new ShootingStar(), new ShootingStar(), new ShootingStar()];
}
function animate() {
    ctx.clearRect(0, 0, width, height);
    
    stars.forEach(star => {
        star.update();
        star.draw();
    });
    shootingStars.forEach(star => {
        star.update();
        star.draw();
    });
    requestAnimationFrame(animate);
}
resize();
animate();
// Generate Heart Text
const heartContainer = document.getElementById('heart-container');
function generateHeartText() {
    // Generate enough words to comfortably fill the container area
    const numWords = window.innerWidth < 768 ? 1200 : 2500;
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < numWords; i++) {
        const span = document.createElement('span');
        span.className = 'heart-word';
        span.textContent = 'राधा';
        
        // Randomize animations for each word
        const duration = Math.random() * 2 + 2; // 2s to 4s
        const delay = Math.random() * 4; // 0s to 4s
        
        span.style.animationDuration = `${duration}s`;
        span.style.animationDelay = `-${delay}s`; 
        
        fragment.appendChild(span);
        fragment.appendChild(document.createTextNode(' '));
    }
    
    heartContainer.appendChild(fragment);
}
generateHeartText();
// Generate Floating Text Effect
const floatingContainer = document.getElementById('floating-text-container');
const floatingWordsList = ['राधा', 'राधा', 'राधा', '❤️', '✨']; 
function createFloatingWord() {
    const word = document.createElement('div');
    word.className = 'floating-word';
    word.innerText = floatingWordsList[Math.floor(Math.random() * floatingWordsList.length)];
    
    const startX = Math.random() * window.innerWidth;
    const size = Math.random() * 2 + 1.5; // 1.5rem to 3.5rem
    const duration = Math.random() * 15 + 10; // 10s to 25s
    
    word.style.left = `${startX}px`;
    word.style.top = `${window.innerHeight + 50}px`; 
    word.style.fontSize = `${size}rem`;
    word.style.animationDuration = `${duration}s`;
    
    word.style.opacity = Math.random() * 0.5 + 0.1;
    
    floatingContainer.appendChild(word);
    
    setTimeout(() => {
        word.remove();
    }, duration * 1000);
}
// create floating words periodically
setInterval(createFloatingWord, 800);
for(let i=0; i<15; i++) {
    setTimeout(createFloatingWord, i * 200);
}
// Mouse Interaction Particles
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.4) return; 
    
    const particle = document.createElement('div');
    particle.className = 'mouse-particle';
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    
    const rx = (Math.random() - 0.5) * 2; 
    const ry = Math.random(); 
    particle.style.setProperty('--rx', rx);
    particle.style.setProperty('--ry', ry);
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 1200);
});