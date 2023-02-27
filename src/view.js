import './stile.css';
import { newStories, story, estrazione } from './service.js';

const articoli = async () => {
    let section = document.querySelector("section");
    let ids = await estrazione(newStories);
    ids.slice(0, 10).map( async (id) => {
        const articoli = await estrazione(`${story}${id}.json`)
        const utcDate = (t) => new Date(t*=1000).toString().slice(0, 24);
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let a = document.createElement("a");
        let author = document.createElement("h4");
        let date = document.createElement("h4");
        div.id = "container";
        h3.id = "title";
        a.id = "link";
        author.id = "author";
        date.id = "date";
        section.appendChild(div);
        div.appendChild(h3);
        h3.appendChild(a);
        div.appendChild(author);
        div.appendChild(date);
        a.innerHTML = articoli.title;
        a.href = articoli.url;
        author.innerHTML = `Author: ${articoli.by}`;
        date.innerHTML = `Date: ${utcDate(articoli.time)}`;
     })
    let div = document.querySelector("div");
    let button = document.createElement("button");
    button.id = "button";
    div.appendChild(button);
    button.innerHTML = "Load More";
    let number = 0;
    let number1 = 10;
    button.onclick = () => {
        number += 10;
        number1 += 10;
        ids.slice(number, number1).map( async (id) => {
            const articoli = await estrazione(`${story}${id}.json`)
            const utcDate = (t) => new Date(t*=1000).toString().slice(0, 24);
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            let a = document.createElement("a");
            let author = document.createElement("h4");
            let date = document.createElement("h4");
            div.id = "container";
            h3.id = "title";
            a.id = "link";
            author.id = "author";
            date.id = "date";
            section.appendChild(div);
            div.appendChild(h3);
            h3.appendChild(a);
            div.appendChild(author);
            div.appendChild(date);
            a.innerHTML = articoli.title;
            a.href = articoli.url;
            author.innerHTML = `Author: ${articoli.by}`;
            date.innerHTML = `Date: ${utcDate(articoli.time)}`;
        })
    }
}

articoli();