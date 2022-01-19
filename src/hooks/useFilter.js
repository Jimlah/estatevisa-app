import { useEffect, useState } from 'react';

const useFilter = (filter, data) => {
    const [filteredData, setFilteredData] = useState(data);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const filtered = data.filter(item => {
            return item[filter].toLowerCase().includes(search.toLowerCase());
        });
        setFilteredData(filtered);
    }, [search, data, filter]);

    return { filteredData, setSearch };
}

export default useFilter;