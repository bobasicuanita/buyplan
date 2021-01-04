import React from 'react';

import TableHead from './table-head/table-head.component';
import TableBody from './table-body/table-body.component';

import './table.styles.css';

const Table = () => {
    return (
        <div className='box-container table-width'>
            <table className="table">
                <TableHead />
                <TableBody />
            </table>
        </div>
    )
}

export default Table;