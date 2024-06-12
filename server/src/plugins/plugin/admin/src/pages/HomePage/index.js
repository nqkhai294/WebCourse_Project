/*
 *
 * HomePage
 *
 */
import { DateTimePicker } from '@strapi/design-system/DateTimePicker';
import React from 'react';
import './index.css';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

const HomePage = () => {
  // console.log('HomePage');
  // const [dataForm, setdataForm] = useState({
  //   openAt: new Date('1994-12-18T15:00:00.000Z'),
  //   closeAt: new Date('1994-12-18T15:00:00.000Z'),
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setdataForm({
  //     ...dataForm,
  //     [name]: value,
  //   });
  // };
  
  return (
    <div className='container mt-4'>
      <div className='form-group'>
        <DateTimePicker
          label="Open at"
          name = "openAt"
          initialDate={new Date('1994-12-18T15:00:00.000Z')}
          className="form-control custom-label"
          //onChange={(e) => handleChange(e)}
        />
      </div>
      <div className='form-group'>
        <DateTimePicker
          label="Close at"
          name = "closeAt"
          initialDate={new Date('1994-12-18T15:00:00.000Z')}
          className="form-control custom-label"
          //onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default HomePage;
ẽ