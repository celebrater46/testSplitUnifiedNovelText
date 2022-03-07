class Book {
    constructor(dir, txt) {
        // this.id = num;
        this.title = this.getTitle(txt);
        this.chapters = this.getChapters(txt);
        this.subTitles = this.getSubTitles(txt);
        this.planeTexts = this.getTexts(txt);
        this.dir = dir;
        this.articles = [];
        this.defaultText = txt;
        // this.currentArticle = 0;
        // this.texts = []; // .txt
    }

    getTitle(txt) {
        const title = txt.match(/<Title>(.*)<\/Title>/i);
        return title.replace(/<Title>(.*)<\/Title>/i, "$1");
    }

    getChapters(txt) {
        const tempArray = txt.match(/<Chapter>(.*)<\/Chapter>/gi);
        let chapters = [];
        for(let i = 0; i < tempArray.length; i++){
            chapters.push(tempArray[i][0]);
        }
        return chapters;
    }

    getSubTitles(txt) {
        const tempArray = txt.match(/<Sub>(.*)<\/Sub>/gi);
        let subs = [];
        for(let i = 0; i < tempArray.length; i++){
            subs.push(tempArray[i][0]);
        }
        return subs;
    }

    getTexts(txt) {
        let array = [];
        let replaced = txt.replace(/<Break(.*)\/>/gi, "#BR#");
        replaced = replaced.split("#BR#");
        for(let i = 0; i < replaced.length; i++){
            let str = replaced[i].replace(/<Title>(.*)<\/Title>/gi, "");
            str = str.replace(/<Chapter>(.*)<\/Chapter>/gi, "");
            str = str.replace(/<Sub>(.*)<\/Sub>/gi, "");
            array.push(str);
        }
        return array;
    }

    // separateText() {
    //     const chapters = this.defaultText.match(/<Chapter>(.*)<\/Chapter>/g);
    //     console.log(chapters);
    // }
}