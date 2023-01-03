export default class Request {
        constructor(url, options) {
                this.url = url;
                this.options = options;
                this.callback;
        }

        async init() {
                try {
                        const response = fetch(url);
                        const json = await response.json();
                        
                        return this.callback(json);
                } catch (erro) {
                        console.error(erro);
                }
        }

}
