import spinner from '../assets/spinner.gif'

const Spinner = () => {
  return <img
      sr={spinner}
      alt='loading...'
      style={{
        width: '100px',
        margin: "auto",
        display: 'block'
      }}/>
};

export default Spinner;