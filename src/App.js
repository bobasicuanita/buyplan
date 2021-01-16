
import './App.scss';

// import Profiles from './components/profiles/profiles.component';
import Table from './components/table/table.component';

const App = () => {
  return (
    <div className='page-wrapper'>
      <div className='page-wrapper__container'>
        <h1 className="heading-primary">BuyPlan</h1>
        <Table />
        <footer> <small>Designed and Developed by Konstantinos Karasavvas <br></br>&copy; Copyright {new Date().getFullYear()} </small> </footer>
      </div>
    </div>
  );
}

export default App;
