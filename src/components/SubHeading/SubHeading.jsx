import { images } from '../../constants';

const SubHeading = ({title}) => (
  <div style={{marginBottom: '1rem'}}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.scissors} alt='scissors' className='scissors__img' />
  </div>
);

export default SubHeading;
