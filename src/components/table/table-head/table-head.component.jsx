import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './table-head.styles.scss';

const TableHeader = () => {
    return (
        <thead className="table__head">
            <tr className="table__table-row">
                <th className="table__table-head">Name</th>
                <th className="table__table-head">Price &euro;</th>
                <th className="table__table-head">Type</th>
                <th className="table__table-head">Basic</th>
                <th className="table__table-head">Advanced</th>
                <th className="table__table-head">Premium</th>
                <th className="table__table-head">Premium <StarIcon style={{ fontSize: '12px', color: '#ffd700' }} /></th>
                <th className="table__table-head">Luxury</th>
                <th className="table__table-head">Luxury <StarIcon style={{ fontSize: '12px', color: '#ffd700' }} /></th>
            </tr>
        </thead>
    )
}

export default TableHeader;