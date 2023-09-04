class FetchManager {
    constructor(urls, max, callbackFunc) {
        this.urls = urls;
        this.max = max;
        this.callbackFunc = callbackFunc;
        this.currentIndex = -1;
        this.finishedNum = 0;
        this.blockQueue = [];
        this.results = [];
    }

    run() {
    // if (this.urls.length <= this.max) {
    //   this.runAll(this.urls);
    // } else {
        this.urls.forEach((url, index) => {
            this.blockFetch(url, index);
        });
    // }
    }
    async blockFetch(url, index) {
        if (this.currentIndex >= this.max) {
            await new Promise(resolve => this.blockQueue.push(resolve));
        }
        this.fetchData(url, index);
    }

    async fetchData(url, index) {
        this.currentIndex += 1;
        console.log(`Requesting the data of index ${this.currentIndex}`);
        try {
            const result = await fetch(url);
            this.results[index] = result;
        } catch (error) {
            this.results[index] = error;
        } finally {
            console.log(`Index ${index} request finish.`);
            this.finishedNum += 1;
            if (this.blockQueue.length > 0) {
                this.blockQueue[0]();
                this.blockQueue.shift();
                console.log(`There are ${this.blockQueue.length} still in the queue after shift one`);
            }
            if (this.finishedNum >= this.urls.length) {
                this.callbackFunc(this.results);
            }
        }
    }
    runAll(urls) {
        const promises = urls.map(url => fetch(url));
        Promise.all(promises)
      .then((responses) => {
          this.callbackFunc(responses);
      })
      .catch((error) => {
          this.callbackFunc(error);
      });
    }
}
const main = () => {
    const allRequests = [
        'http://jsonplaceholder.typicode.com/posts/1',
        'http://jsonplaceholder.typicode.com/posts/2',
        'http://jsonplaceholder.typicode.com/posts/3',
        'http://jsonplaceholder.typicode.com/posts/4',
        'http://jsonplaceholder.typicode.com/posts/5',
        'http://jsonplaceholder.typicode.com/posts/6',
        'http://jsonplaceholder.typicode.com/posts/7',
        'http://jsonplaceholder.typicode.com/posts/8',
        'http://jsonplaceholder.typicode.com/posts/9',
        'http://jsonplaceholder.typicode.com/posts/10',
        'http://jsonplaceholder.typicode.com/posts/11',
    ];

    const manager = new FetchManager(allRequests, 5, result => console.log(result));
    manager.run();
};
main();
