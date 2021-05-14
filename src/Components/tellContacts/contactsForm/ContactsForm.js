import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from '../contactsForm/TelContacts.module.css'

class ContactsForm extends Component {
  state = {
    contacts: [],
    name: "",
    filter: "",
    number: ""
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.addTelContact(this.state);
    this.setState({
      contacts: [],
      name: "",
      filter: "",
      number: ""
    });
  };

  onHandleChange = e => {
    const {name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form className={style.contact_form} onSubmit={this.onHandleSubmit}>
        <label className={style.form_label}>
          Name:{" "}
          <input className={style.form_input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.onHandleChange}
            value={this.state.name}
          />
        </label>
        <label className={style.form_label}>
          Number:
          <input className={style.form_input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.onHandleChange}
            value={this.state.number}
          />
        </label>
        <button className={style.form_button} type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactsForm;

ContactsForm.propTypes = {
  addTelContact: PropTypes.func.isRequired,
  state: PropTypes.shape({
    contacts: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })
}
