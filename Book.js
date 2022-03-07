class Book {
    constructor() {
        // this.id = num;
        // this.title = this.getTitle(txt);
        // this.chapters = this.getChapters(txt);
        // this.subTitles = this.getSubTitles(txt);
        // this.planeTexts = this.getTexts
        this.title = null;
        this.chapters = null;
        this.subTitles = null;
        this.planeTexts = null;
        // this.dir = dir;
        this.articles = [];
        this.defaultText = null;
        // this.currentArticle = 0;
        // this.texts = []; // .txt
    }

    // getTitle(txt) {
    getTitle(txt) {
        // console.log("txt: ");
        // console.log(txt);
        const title = txt.match(/<Title>(.*)<\/Title>/i);
        console.log("title:");
        console.log(title);
        this.title = title[0].replace(/<Title>(.*)<\/Title>/i, "$1");
        // return title.replace(/<Title>(.*)<\/Title>/i, "$1");
    }

    // getChapters(txt) {
    getChapters(txt) {
        const tempArray = txt.match(/<Chapter>(.*)<\/Chapter>/gi);
        console.log("tempArray: ");
        console.log(tempArray);
        let chapters = [];
        for(let i = 0; i < tempArray.length; i++){
            chapters.push(tempArray[i].replace(/<Chapter>(.*)<\/Chapter>/i, "$1"));
        }
        this.chapters = chapters;
        // return chapters;
    }

    // getSubTitles(txt) {
    getSubTitles(txt) {
        const tempArray = txt.match(/<Sub>(.*)<\/Sub>/gi);
        let subs = [];
        for(let i = 0; i < tempArray.length; i++){
            subs.push(tempArray[i].replace(/<Sub>(.*)<\/Sub>/i, "$1"));
        }
        this.subTitles = subs;
        // return subs;
    }

    // getTexts(txt) {
    getTexts(txt) {
        let array = [];
        let replaced = txt.replace(/<Break(.*)\/>/gi, "#BR#");
        replaced = replaced.split("#BR#");
        for(let i = 0; i < replaced.length; i++){
            let str = replaced[i].replace(/<Title>(.*)<\/Title>((\r\n)*|(\r)*|(\n)*)/gi, "");
            // str = str.replace(/<Chapter>(.*)<\/Chapter>((\r\n)*|(\r)*|(\n)*)/gi, "");
            // str = str.replace(/<Sub>(.*)<\/Sub>((\r\n)*|(\r)*|(\n)*)/gi, "");
            array.push(str);
            // array.push(replaced);
        }
        this.defaultText = txt;
        this.planeTexts = array;
        // return array;
    }

    async init(txt){
        return await this.initPromise(txt);
    }

    initPromise(txt) {
        return new Promise(resolve => {
            this.getTitle(txt);
            this.getChapters(txt);
            this.getSubTitles(txt);
            this.getTexts(txt);
            resolve();
        });
    }

    async getArticles() {
        return await this.getArticlesPromise();
    }

    getArticlesPromise() {
        return new Promise(resolve => {
            let i = 0;
            this.planeTexts.map((text) => {
                this.articles.push(new Article(i, text));
                i++;
            });
            resolve();
        });
    }

    // separateText() {
    //     const chapters = this.defaultText.match(/<Chapter>(.*)<\/Chapter>/g);
    //     console.log(chapters);
    // }
}