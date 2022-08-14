/*recurso do ES6 +*/
import './heading.css';

class heading{
    
    create(text){
        const heading = document.createElement('h2');
        heading.innerHTML=text;
        heading.classList.add('main-titulo')
        document.querySelector('body').appendChild(heading);
    }
}

export default heading;