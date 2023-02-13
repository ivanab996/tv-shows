class TVshow {
    constructor (name, genre, image, url) {
        this.name = name;
        this.genre = genre;
        this.image = image;
        this.url = url;
    }

    toText(){
        return `${this.name} (${this.genre})`;
    }

    toImage(){
        return `
        <div>
            <h1>${this.name} (<a href = "${this.url}"> Link </a>)</h1>
            <p>${this.genre}</p>
            <img src = "${this.image}" width = "150px"></img>        
        </div>
        
        `
    }

}



const request = fetch("./data.json")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        for (let i = 0; i < json.length; i++){
            const tvShow = new TVshow (json[i].name, json[i].genres[0], json[i].image.original, json[i].url);
            document.body.innerHTML += tvShow.toImage();
        }
    });

console.log(request);
