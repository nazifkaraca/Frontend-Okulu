class Storage {
    static addFilmToStorage(newFilm) {
        let films = this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(film));
    }

    static getFilmsFromStorage() {
        let films;
        if (localStorage.getItem("films") === null) {
            films = [];
        }
        return films;
    }

    static deleteFilmsFromStorage(title) {
        let films = this.getFilmsFromStorage();
        films.forEach(function (film, index) {
            if (films.title === title) {
                films.splice(index, 1);
            }
        })
        localStorage.setItem("films", JSON.stringify(films));
    }

    static clearAllFilmsFromStorage() {
        localStorage.removeItem("films");
    }
}