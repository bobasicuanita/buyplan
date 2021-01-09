
import './App.css';

// import Profiles from './components/profiles/profiles.component';
import Table from './components/table/table.component';

const App = () => {
  return (
    <div className='page-wrapper'>
      <div className='container'>
        <h1>BuyPlan</h1>
        <Table />
        <footer> <small>Designed and developed by Konstantinos Karasavvas <br></br>&copy; Copyright 2021 </small> </footer>
      </div>
    </div>
  );
}

export default App;
