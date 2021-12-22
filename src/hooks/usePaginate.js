import { useState, useEffect } from 'react';

const usePaginate = (path) => {

    const [url, setUrl] = useState(path);
    const [page, setPage] = useState(1);

    const prev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const next = () => {
        setPage(page + 1);
    }

    useEffect(() => {
        setUrl(`${path}?page=${page}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return { url, prev, next }
}

export default usePaginate;