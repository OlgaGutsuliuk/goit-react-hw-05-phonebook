import React from 'react'
import PropsTypes from 'prop-types'
import style from '../contactsList/ContactsList.module.css'

const ContactsList = ({telNumbers, deleteTelContact }) => (
    <ul className={style.list}>
        { telNumbers.map(telNumber =>
        (<li className={style.list_item} key={telNumber.id}>
            <p>{telNumber.name}: </p>
            <p>{telNumber.number}</p>
             <button className={style.list_button} type="button" onClick={deleteTelContact} id={telNumber.id}>Delete</button>
            </li>
    ))}    
    </ul>
)
       
export default ContactsList;

ContactsList.propTypes = {
    deleteTelContact: PropsTypes.func.isRequired,
    telNumbers: PropsTypes.array.isRequired
}