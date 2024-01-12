import { useRef } from 'react';
import { Link } from 'react-router-dom';


const SecondaryNavigation = (props) => {
  const IcedRefreshersRef = props.IcedRefreshersRef;
  const LightIntensityRef = props.LightIntensityRef;
  const MediumIntensityRef = props.MediumIntensityRef;
  const HighIntensityRef = props.HighIntensityRef;
  const CrushedFruitBowlsRef = props.CrushedFruitBowlsRef;

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pagemarginleft pagemarginright row space_center margin-top-M">
      <div className='row space_between w-75 TabletL-w-90 flexwrap TabletS-w-100'>
        <Link to="#" onClick={() => handleScroll(IcedRefreshersRef)}>Iced Refreshers</Link>
        <Link to="#" onClick={() => handleScroll(LightIntensityRef)}>Light Intensity</Link>
        <Link to="#" onClick={() => handleScroll(MediumIntensityRef)}>Medium Intensity</Link>
        <Link to="#" onClick={() => handleScroll(HighIntensityRef)}>High Intensity</Link>
        <Link to="#" onClick={() => handleScroll(CrushedFruitBowlsRef)}>Crushed Fruit Bowls</Link>
      </div>
    </section>
  );
};

export default SecondaryNavigation;

