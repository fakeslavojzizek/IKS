import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-particle-background',
  standalone: true,
  templateUrl: './particle-background.html',
  styleUrl: './particle-background.css'
})
export class ParticleBackground implements AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animId = 0;
  private starField: Star[] = [];

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resize();
    this.initStars();
    this.initParticles();
    this.animate();
    window.addEventListener('resize', this.resizeHandler);
  }

  private resizeHandler = () => this.resize();

  private resize() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 5;
  }

  private initStars() {
    const canvas = this.canvasRef.nativeElement;
    for (let i = 0; i < 200; i++) {
      this.starField.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.005 + 0.002
      });
    }
  }

  private initParticles() {
    const canvas = this.canvasRef.nativeElement;
    for (let i = 0; i < 60; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.7 ? '#d4a424' : '#243d6e'
      });
    }
  }

  private animate = () => {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw stars
    const time = Date.now() * 0.001;
    this.starField.forEach(star => {
      const twinkle = Math.sin(time * star.speed * 100 + star.x) * 0.3 + 0.7;
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
      this.ctx.fill();
    });

    // Draw and connect particles
    this.particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color.replace(')', `, ${p.opacity})`).replace('rgb', 'rgba').replace('#d4a424', 'rgba(212, 164, 36, ' + p.opacity + ')').replace('#243d6e', 'rgba(36, 61, 110, ' + p.opacity + ')');

      if (p.color === '#d4a424') {
        this.ctx.fillStyle = `rgba(212, 164, 36, ${p.opacity})`;
      } else {
        this.ctx.fillStyle = `rgba(36, 61, 110, ${p.opacity})`;
      }
      this.ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(212, 164, 36, ${(1 - dist / 150) * 0.1})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    });

    this.animId = requestAnimationFrame(this.animate);
  };

  ngOnDestroy() {
    cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.resizeHandler);
  }
}

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number; opacity: number;
  color: string;
}

interface Star {
  x: number; y: number;
  radius: number; opacity: number;
  speed: number;
}
