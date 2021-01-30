import React from 'react';
import StarIcon from '@material-ui/icons/Star';

const TableHeader = () => {
    return (
        <thead className="table__head">
            <tr className="table__row">
                <th className="table__head-column">Name</th>
                <th className="table__head-column">Price &euro;</th>
                <th className="table__head-column">Type</th>
                <th className="table__head-column">Basic</th>
                <th className="table__head-column">Advanced</th>
                <th className="table__head-column">Premium</th>
                <th className="table__head-column">Premium <StarIcon style={{ fontSize: '12px', color: '#ffd700' }} /></th>
                <th className="table__head-column">Luxury</th>
                <th className="table__head-column">Luxury <StarIcon style={{ fontSize: '12px', color: '#ffd700' }} /></th>
            </tr>
        </thead>
    )
}

export default TableHeader;