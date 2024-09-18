import { useEffect } from 'react';
import Title from './components/Title/Title';
import Status from './components/Status/Status';
import DayScore from './components/DayScore/DayScore';
import Logo from './components/Logo/Logo';
import ParamsComponent from './components/ParamsComponent/ParamsComponent';
import GridContainer from './components/GridContainer/GridContainer';
import AppWrap from './components/AppWrap/AppWrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDushnilaStatus } from './redux/slices/status';
import './App.css';

function App() {
  
  const {dushnila} = useSelector((state) => state.dushnila);
  const dispatch = useDispatch();

  useEffect(() => {
    
      dispatch(fetchDushnilaStatus());

  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(fetchDushnilaStatus()); 
    }, 60 * 1000); // minute

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <>
      <AppWrap>
        <GridContainer>
        <Title text={'Душнила'} />
          <Status 
          title={dushnila.good ? 'Душнила доволен вами' : 'Душнила недоволен вами' } 
          text={dushnila.good ? 'Все показатели в норме' : 'CO2 превышает норму'} 
          status={dushnila.good}/>
          <DayScore score={7} />
          <Logo status={dushnila.good} />
          <ParamsComponent 
          temp={dushnila.items.temp} 
          co2={dushnila.items.co2}
          status={dushnila.good} />
        </GridContainer>
      </AppWrap>
    </>
  )
}

export default App;
