import React from 'react';
import PropTypes from 'prop-types';
import style from '../contactsForm/TelContacts.module.css'

const TelContactFilter = ({filter, setFilter}) => {
    return (
        <label className={style.form_label}> 
        Find contacts by name
        <input className={style.form_input} type="text" value={filter} onChange={setFilter}/>
       </label>
    );
}

export default TelContactFilter;

TelContactFilter.propTepes = {
    setFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
}