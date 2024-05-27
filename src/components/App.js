import TipCalculator from './TipCalculator.js';
import logo from '../images/logo.svg';

export default function App() {
  return (
    <>
      <img className='logo' src={logo} alt='Logo' />
      <TipCalculator />
    </>
  );
}
