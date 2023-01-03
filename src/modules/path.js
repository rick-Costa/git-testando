export function path(full_path, options = { source_file: '' }) {
        if (full_path === null) return null

        const path_resolve = file_path.join(options.source_file);

        return path_resolve;
}

export function join(...paths) {
        const path_joinded = paths.reduce(function (previous, current) {
                return (previous += current);
        }, "");

        return path_joinded;
}

export function task(...paths) {
        const path_joinded = paths.reduce(function (previous, current) {
                return (previous += current)
        }, '')

        return path_joinded
}
