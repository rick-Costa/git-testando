import { path, join } from './path';
import debounce from './debounce.js';
import Request from './request.js';

export function main(full_path, options = { source_file: '' }) {
        let resolve;

        if (join(options.source_file, '/file/arquivos.txt')) {
                resolve = path(full_path, options);
        }

        return resolve;

}

export function dummy(full_path, options = { source_file: '' }) {
        let resolve

        if (join(options.source_file, '/file/arquivos.txt')) {
                resolve = path(full_path, options)
        } else if (options === null) {
                return null;
        }

        const callback = debounce(function () {
                return 'valor'
        })

        const request = new Request('/file/arquivos.txt')

        return resolve
}

export function deep(full_path, options = { source_file: '' }) {
        let resolve

        if (join(options.source_file, '/file/arquivos.txt')) {
                resolve = path(full_path, options)
                const callback = debounce(function () {
                        return 'valor'
                })

                const request = new Request('/file/arquivos.txt')
        }

        return resolve
}