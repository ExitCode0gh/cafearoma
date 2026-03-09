const docbody = document.body;
const projectimeImages=["cookie.svg","cupcake.svg" , "pastry.svg","frostdonut.svg","crossiant.svg" , "donut.svg", "bread.svg"]
class Projectiles {
    constructor(){
        this.initial_y = window.innerHeight-1;
        const window_x = window.innerWidth;
        this.initial_x = Math.floor(Math.random() * (window_x -10))+10;
        this.direction = (this.initial_x >= (window_x/2) ) ? -1: 1;
        this.x_speed = Math.floor(Math.random() * 10);
        this.y_speed = -(Math.floor(Math.random()*(10))+7);
        this.acceleration = 0.1;
        const projectileobj = document.createElement(`div`);
        const randomimg =  Math.floor(Math.random() * projectimeImages.length);
        const pisrc = `<img class="projectileimg" src="assets/${projectimeImages[randomimg]}" />`
        console.log(pisrc)
        projectileobj.innerHTML= pisrc;
	    projectileobj.classList.add("projectile");
        this.flyingobj = projectileobj;
        this.flyingobj.style.top = this.initial_y+"px";
        this.flyingobj.style.left = this.initial_x+"px";
        docbody.appendChild(this.flyingobj)
    }

    start(){
        const projectileInterval = setInterval(()=>{
            if( this.initial_y > window.innerHeight ){
                this.flyingobj.style.display = "none";
                docbody.removeChild(this.flyingobj);
                clearInterval(projectileInterval);
            }

            if(this.initial_y < 0)
                this.flyingobj.style.zIndex = "1";
            console.log("yeah")
            this.flyingobj.style.top = this.initial_y+"px";
            this.flyingobj.style.left = this.initial_x+"px";
            this.initial_y += this.y_speed;
            this.initial_x += (this.x_speed * this.direction);
            // this.flyingobj.style.transform = `translate(${this.initial_x}px , ${this.initial_y}px)`
            this.y_speed += this.acceleration;
        },10) 
    }
}

const bakerySpawnInterval = setInterval(()=>{
    const projectileobjects = new Projectiles();
    projectileobjects.start();
},700); 