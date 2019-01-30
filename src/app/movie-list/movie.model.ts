export class Movie {
    public id: string;
    public title: string;
    public year: number;
    public runtime: string;
    public gener: string;
    public director: string;

    constructor(id: string = undefined,title: string, year: number, runtime: string, gener: string, director: string){
        this.id = (id) ? id : this.makeId(10);
        this.title = title;
        this.year = year;
        this.runtime = runtime;
        this.gener = gener;
        this.director = director;
    }

    public makeId(length): string {
        var id = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < length; i++)
          id += possible.charAt(Math.floor(Math.random() * possible.length));
        return id;
    }
}