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

        try() {
                function create_animal(animal) {
                        const div = document.createElement('div')
                        div.classList.add('numero-animal')
                        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`

                        return div
                }
                return create_animal(this.options.value);

        }

}
