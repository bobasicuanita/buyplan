import React from 'react';
import {connect} from 'react-redux';

import Table from './components/table/table.component';
import Modal from './components/modal/modal.component';

import './App.scss';
import ResponsiveTableHeader from "./components/responsive-table-header/responsive-table-header.component";

const App = ({data}) => {
    return (
        <React.Fragment>
            <div className='page-wrapper'>
                <div className='page-wrapper__container'>
                    <h1 className="heading-primary">BuyPlan</h1>
                    <p className="paragraph">Buy planner for my next desk upgrade.There are 6 different plans according to my budget.</p>
                    <Table/>
                    <footer><small>Designed and Developed by <span className="name">Konstantinos
                        Karasavvas</span> <br></br>&copy; Copyright {new Date().getFullYear()} </small></footer>
                </div>
            </div>
            {data.data.map(({id, ...props}) => <Modal key={id} id={id} {...props} />)}
            <ResponsiveTableHeader />
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
};

export default connect(mapStateToProps)(App);
