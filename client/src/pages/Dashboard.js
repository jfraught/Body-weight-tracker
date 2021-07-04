import { useQuery } from '@apollo/client';
import StatsModal from '../components/StatsModal';
import StatList from '../components/StatList';
import Auth from '../utils/auth';
import { GET_DAYLOGS } from '../utils/queries';
const Dashboard = () => {
  // use hook to make request
  //const { loading, data} = useQuery(GET_DAYLOGS); 

 // const logs = data?.logs || [];
  const loggedIn = Auth.loggedIn()
  return ( 
    <section> 
      
        {loggedIn && (  
     <div>    
     <StatsModal />
  </div>
  )}
  <div className={ `col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loggedIn ? (
            <div>Loading...</div>
          ) : (
            <StatList   title="Some daily stats(s)..."/> 
          )}
  </div>
  </section>
  )
};

export default Dashboard;