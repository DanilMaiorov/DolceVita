export function animate ({timing, draw, duration}) {    
     
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction)

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

export function disableScrolling () {
    const x = window.scrollX
    const y = window.scrollY
    window.onscroll = function () {
        window.scrollTo(x, y) 
    }
}