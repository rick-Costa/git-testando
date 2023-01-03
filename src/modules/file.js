import { path, join } from './path';

export function main(full_path, options = { source_file: '' }) {
        let resolve;

        if (join(options.source_file, '/file/arquivos.txt')) {
                resolve = path(full_path, options);
        }

        return resolve;

}
