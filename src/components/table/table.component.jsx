import React from 'react';

import TableHead from './table-head/table-head.component';
import TableBody from './table-body/table-body.component';

const Table = () => {
    return (
        <React.Fragment>
            <table className="table">
                <TableHead />
                <TableBody />
            </table>
        </React.Fragment>
    )
}

export default Table;