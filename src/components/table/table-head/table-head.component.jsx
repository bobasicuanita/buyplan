import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './table-head.styles.css';

const TableHeader = () => {
    return (
        <thead>
            <tr className="main-tr">
                <th className="main-th">Name</th>
                <th className="main-th">Price &euro;</th>
                <th className="main-th">Type</th>
                <th className="main-th">Basic</th>
                <th className="main-th">Advanced</th>
                <th className="main-th">Premium</th>
                <th className="main-th">Premium <StarIcon style={{ fontSize: '12px', color: '#ffd700' }} /></th>
                <th className="main-th">Luxury</th>
                <th className="main-th">Luxury <StarIcon style={{ fontSize: '12px', color: '#ffd700' }} /></th>
            </tr>
        </thead>
    )
}

export default TableHeader;