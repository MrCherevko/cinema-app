export class Movie {
    public id: string;
    public title: string;
    public year: number;
    public runtime: string;
    public genre: string;
    public director: string;
    public posterImage: string;

    constructor(id: string = undefined,title: string, year: number, runtime: string, genre: string, director: string,posterImage: string = undefined){
        this.id = (id) ? id : this.makeId(10);
        this.title = title;
        this.year = year;
        this.runtime = runtime;
        this.genre = genre;
        this.director = director;
        if(!posterImage) posterImage = "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";
        this.posterImage = posterImage;
    }

    public makeId(length): string {
        var id = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < length; i++)
          id += possible.charAt(Math.floor(Math.random() * possible.length));
        return id;
    }
}