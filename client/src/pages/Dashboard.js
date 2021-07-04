import { useQuery } from '@apollo/client';
import StatsModal from '../components/StatsModal';
import StatList from '../components/StatList';
//import { GET_DAYLOGS } from '../utils/queries';
const Dashboard = () => {
  //const { loading, data} = useQuery(GET_DAYLOGS); 
  return ( 
    <section> 
     <div>    
  <StatsModal />
  </div>
<div> 
  <StatList />
  </div>
  </section>
  )
};

export default Dashboard;