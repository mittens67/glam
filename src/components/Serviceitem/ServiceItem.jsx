import './ServiceItem.css';

const ServiceItem = ({title, price, tags}) => (
  <div className='app__serviceItem'>
    <div className='app__serviceItem-head'>
      <div className='app__serviceItem-name'>
        <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
      </div>
      <div className='app__serviceItem-dash'/>
      <div className='app__serviceItem-price'>
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>
    <div className='app__serviceItem-sub'>
      <p className='p__opensans' style={{color: '#AAA'}}>{tags}</p>
    </div>
  </div>
);

export default ServiceItem;
