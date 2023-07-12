import Friends from './friends/friends';
import Profile from './profile/profile';
import Statistics from './statistics/statistics';
import Tranzactions from './transactions/transactions';


const App = () => {
  return (
    <div className="root-container">
      <Profile />
      <Statistics />
      <Friends />
      <Tranzactions />
    </div>
  );
};

export default App;