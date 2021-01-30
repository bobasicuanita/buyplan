import React from 'react';
import {connect} from 'react-redux';
import StarIcon from "@material-ui/icons/Star";
import {
    selectAdvancedTotal,
    selectBasicTotal, selectLuxuryTotal, selectLuxuryTwoTotal,
    selectPremiumTotal,
    selectPremiumTwoTotal
} from "../../redux/table/table.selectors";

const ResponsiveTableHeader = ({
                                   basicTotal,
                                   advancedTotal,
                                   premiumTotal,
                                   premiumTwoTotal,
                                   luxuryTotal,
                                   luxuryTwoTotal
                               }) => {
    return (
        <div className="total-header">
            <table className="total-header__table">
                <thead className="total-header__table-head">
                <tr className="total-header__table-row">
                    <th className="total-header__head-column">Basic</th>
                    <th className="total-header__head-column">Advanced</th>
                    <th className="total-header__head-column">Premium</th>
                    <th className="total-header__head-column--star">Premium <StarIcon
                        style={{fontSize: '12px', color: '#ffd700'}}/>
                    </th>
                    <th className="total-header__head-column">Luxury</th>
                    <th className="total-header__head-column--star">Luxury <StarIcon
                        style={{fontSize: '12px', color: '#ffd700'}}/>
                    </th>
                </tr>
                </thead>
                <tbody className="total-header__body">
                <tr className="total-header__table-row">
                    <td className='total-header__totals'>{basicTotal} &euro;</td>
                    <td className='total-header__totals'>{advancedTotal} &euro;</td>
                    <td className='total-header__totals'>{premiumTotal} &euro;</td>
                    <td className='total-header__totals'>{premiumTwoTotal} &euro;</td>
                    <td className='total-header__totals'>{luxuryTotal} &euro;</td>
                    <td className='total-header__totals'>{luxuryTwoTotal} &euro;</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        basicTotal: selectBasicTotal(state),
        advancedTotal: selectAdvancedTotal(state),
        premiumTotal: selectPremiumTotal(state),
        premiumTwoTotal: selectPremiumTwoTotal(state),
        luxuryTotal: selectLuxuryTotal(state),
        luxuryTwoTotal: selectLuxuryTwoTotal(state)
    }
};

export default connect(mapStateToProps)(ResponsiveTableHeader);