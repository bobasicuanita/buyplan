import React, {useEffect} from 'react';
import LaunchIcon from '@material-ui/icons/Launch';
import {connect} from 'react-redux';

import {asyncGetData} from '../../../redux/data/data.utils';

import {
    selectBasicTotal,
    selectAdvancedTotal,
    selectLuxuryTotal,
    selectLuxuryTwoTotal,
    selectPremiumTotal,
    selectPremiumTwoTotal
} from "../../../redux/table/table.selectors";

import {
    handleBasicTotal,
    handleAdvancedTotal,
    handlePremiumTotal,
    handlePremiumTwoTotal,
    handleLuxuryTotal,
    handleLuxuryTwoTotal
} from '../../../redux/table/table.utils';

const TableBody = ({
                       handleBasicClick,
                       handleAdvancedClick,
                       handlePremiumClick,
                       handlePremiumTwoClick,
                       handleLuxuryClick,
                       handleLuxuryTwoClick,
                       getData,
                       basicTotal,
                       advancedTotal,
                       premiumTotal,
                       premiumTwoTotal,
                       luxuryTotal,
                       luxuryTwoTotal,
                       data,
                       pending
                   }) => {

    useEffect(() => {
        getData();
    }, [getData])


    return (
        <tbody>
        {!pending && data.data.length ? data.data.map(({id, name, price, type}) => {
            return (<tr key={id} data-key={id} className="table__row">
                <td className="table__data table__data--product-name">
                    <a href={`#${id}`} className="table__data-link">{name}</a>
                    <a href={`#${id}`} className="table__data-btn"><LaunchIcon/></a>
                </td>
                <td className="table__data">{price}</td>
                <td className="table__data">{type}</td>
                <td className="table__data table__data--input"><input data-id={id}
                    className="table__data--input-hidden" type="checkbox" id={`1-${id}`}
                    onClick={handleBasicClick}/><label className="table__data--input-label"
                                                       htmlFor={`1-${id}`}>&nbsp;</label></td>
                <td className="table__data table__data--input"><input data-id={id}
                    className="table__data--input-hidden" type="checkbox" id={`2-${id}`}
                    onClick={handleAdvancedClick}/><label className="table__data--input-label"
                                                          htmlFor={`2-${id}`}>&nbsp;</label></td>
                <td className="table__data table__data--input"><input data-id={id}
                    className="table__data--input-hidden" type="checkbox" id={`3-${id}`}
                    onClick={handlePremiumClick}/><label className="table__data--input-label"
                                                         htmlFor={`3-${id}`}>&nbsp;</label></td>
                <td className="table__data table__data--input"><input data-id={id}
                    className="table__data--input-hidden" type="checkbox" id={`4-${id}`}
                    onClick={handlePremiumTwoClick}/><label className="table__data--input-label"
                                                            htmlFor={`4-${id}`}>&nbsp;</label></td>
                <td className="table__data table__data--input"><input data-id={id}
                    className="table__data--input-hidden" type="checkbox" id={`5-${id}`}
                    onClick={handleLuxuryClick}/><label className="table__data--input-label"
                                                        htmlFor={`5-${id}`}>&nbsp;</label></td>
                <td className="table__data table__data--input"><input data-id={id}
                    className="table__data--input-hidden" type="checkbox" id={`6-${id}`}
                    onClick={handleLuxuryTwoClick}/><label className="table__data--input-label"
                                                           htmlFor={`6-${id}`}>&nbsp;</label></td>
            </tr>)
        }) : (<tr><td>Loading...</td></tr>)}
        <tr className="table__row table__data--total">
            <td className='table__data '>&nbsp;</td>
            <td className='table__data'>&nbsp;</td>
            <td className='table__data'>&nbsp;</td>
            <td className='table__data'>{basicTotal} &euro;</td>
            <td className='table__data'>{advancedTotal} &euro;</td>
            <td className='table__data'>{premiumTotal} &euro;</td>
            <td className='table__data'>{premiumTwoTotal} &euro;</td>
            <td className='table__data'>{luxuryTotal} &euro;</td>
            <td className='table__data'>{luxuryTwoTotal} &euro;</td>
        </tr>
        </tbody>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        handleBasicClick: e => dispatch(handleBasicTotal(e)),
        handleAdvancedClick: e => dispatch(handleAdvancedTotal(e)),
        handlePremiumClick: e => dispatch(handlePremiumTotal(e)),
        handlePremiumTwoClick: e => dispatch(handlePremiumTwoTotal(e)),
        handleLuxuryClick: e => dispatch(handleLuxuryTotal(e)),
        handleLuxuryTwoClick: e => dispatch(handleLuxuryTwoTotal(e)),
        getData: () => dispatch(asyncGetData())
    }
};

const mapStateToProps = state => {
    return {
        error: state.error,
        data: state.data,
        pending: state.pending,
        basicTotal: selectBasicTotal(state),
        advancedTotal: selectAdvancedTotal(state),
        premiumTotal: selectPremiumTotal(state),
        premiumTwoTotal: selectPremiumTwoTotal(state),
        luxuryTotal: selectLuxuryTotal(state),
        luxuryTwoTotal: selectLuxuryTwoTotal(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);