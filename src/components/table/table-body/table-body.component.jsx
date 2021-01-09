import React from 'react';
import { connect } from 'react-redux';
import { handleBasicTotal, handleAdvancedTotal, handlePremiumTotal, handlePremiumTwoTotal, handleLuxuryTotal, handleLuxuryTwoTotal } from '../../../redux/table/table.utils';

import data from '../../../api/data';

import Dropdown from '../dropdown/dropdown.component';

import './table-body.styles.css';

const TableBody = ({ handleBasicClick, handleAdvancedClick, handlePremiumClick, handlePremiumTwoClick, handleLuxuryClick, handleLuxuryTwoClick, basicTotal, advancedTotal, premiumTotal, premiumTwoTotal, luxuryTotal, luxuryTwoTotal }) => {

    return (
        <tbody>
            {
                data.map(({ id, name, price, type, ...otherProps }) => {
                    return (<tr key={id} data-key={id} className="simple-tr" >
                        <td className="table-data product-name">
                            {name}
                            <div className="dropdown">
                                <Dropdown key={id} name={name} {...otherProps} />
                            </div>
                        </td>
                        <td className="table-data">{price}</td>
                        <td className="table-data">{type}</td>
                        <td className="table-data small-column"><input className="hidden" type="checkbox" id={`1-${id}`} onClick={handleBasicClick} /><label className="select-one" htmlFor={`1-${id}`}></label></td>
                        <td className="table-data small-column"><input className="hidden" type="checkbox" id={`2-${id}`} onClick={handleAdvancedClick} /><label className="select-one" htmlFor={`2-${id}`}></label></td>
                        <td className="table-data small-column"><input className="hidden" type="checkbox" id={`3-${id}`} onClick={handlePremiumClick} /><label className="select-one" htmlFor={`3-${id}`}></label></td>
                        <td className="table-data small-column"><input className="hidden" type="checkbox" id={`4-${id}`} onClick={handlePremiumTwoClick} /><label className="select-one" htmlFor={`4-${id}`}></label></td>
                        <td className="table-data small-column"><input className="hidden" type="checkbox" id={`5-${id}`} onClick={handleLuxuryClick} /><label className="select-one" htmlFor={`5-${id}`}></label></td>
                        <td className="table-data small-column"><input className="hidden" type="checkbox" id={`6-${id}`} onClick={handleLuxuryTwoClick} /><label className="select-one" htmlFor={`6-${id}`}></label></td>
                    </tr>)
                })
            }

            <tr className='total'>
                <td className='table-data'></td>
                <td className='table-data'></td>
                <td className='table-data'></td>
                <td className='table-data pulse-effect'>{basicTotal} &euro;</td>
                <td className='table-data pulse-effect'>{advancedTotal} &euro;</td>
                <td className='table-data pulse-effect'>{premiumTotal} &euro;</td>
                <td className='table-data pulse-effect'>{premiumTwoTotal} &euro;</td>
                <td className='table-data pulse-effect'>{luxuryTotal} &euro;</td>
                <td className='table-data pulse-effect'>{luxuryTwoTotal} &euro;</td>
            </tr>
        </tbody>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        handleBasicClick: e => dispatch(handleBasicTotal(e)),
        handleAdvancedClick: e => dispatch(handleAdvancedTotal(e)),
        handlePremiumClick: e => dispatch(handlePremiumTotal(e)),
        handlePremiumTwoClick: e => dispatch(handlePremiumTwoTotal(e)),
        handleLuxuryClick: e => dispatch(handleLuxuryTotal(e)),
        handleLuxuryTwoClick: e => dispatch(handleLuxuryTwoTotal(e))
    }
}

const mapStateToProps = state => {
    return {
        basicTotal: state.table.basicTotal,
        advancedTotal: state.table.advancedTotal,
        premiumTotal: state.table.premiumTotal,
        premiumTwoTotal: state.table.premiumTwoTotal,
        luxuryTotal: state.table.luxuryTotal,
        luxuryTwoTotal: state.table.luxuryTwoTotal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);