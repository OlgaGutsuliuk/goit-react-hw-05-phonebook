import React, { Component } from "react";
import ContactsForm from "./contactsForm/ContactsForm";
import ContactsList from "./contactsList/ContactsList";
import { v4 as uuidv4 } from "uuid";
import TelContactFilter from "./telContactFilter/TelContactFilter";
import { connect } from "react-redux";
import { addContacts, deleteContacts, filterContacts, getAllContacts } from "../../redux/tellContactsAction";

class TellContacts extends Component {
  addTelContact = telContact => {
    const searchSameName = this.props.telContacts.map(telContacts => telContacts.name).includes(telContact.name);

    if (searchSameName) {
      return alert(`${telContact.name} is already in contacts`);
    }
    this.props.addContacts({ ...telContact, id: uuidv4() });
    // this.setState(prevState => {
    //   return {
    //     telContacts: [...prevState.telContacts, {...telContact, id: uuidv4()}],
    //   }
    // })
  };

  componentDidMount() {
    const telContacts = localStorage.getItem("telContacts");
    const parsedContacts = JSON.parse(telContacts);
    if (telContacts) {
      this.props.getAllContacts(parsedContacts);
      //  this.setState({telContacts: parsedContacts })
      // }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.telContacts !== prevProps.telContacts) {
      console.log("обновилось");
      localStorage.setItem("telContacts", JSON.stringify(this.props.telContacts));
    }
  }

  deleteTelContact = event => {
    const { id } = event.target;
    this.props.deleteContacts(id);
    // this.setState({
    //   telContacts: this.state.telContacts.filter(telContact => telContact.id !== id)
    // });
  };
  setFilter = e => {
    const { value } = e.target;
    this.props.filterContacts(value);
  };
  getFilterTelContact = () => {
    return this.props.telContacts.filter(telContact => telContact.name.toLowerCase().includes(this.props.filter.toLowerCase()));
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactsForm addTelContact={this.addTelContact} />
        <h2>Contacts</h2>
        <TelContactFilter filter={this.props.filter} setFilter={this.setFilter} />

        <ContactsList telNumbers={this.getFilterTelContact()} deleteTelContact={this.deleteTelContact} />
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    telContacts: state.telContacts,
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllContacts: telContacts => {
      dispatch(getAllContacts(telContacts));
    },
    addContacts: telContacts => {
      dispatch(addContacts(telContacts));
    },
    deleteContacts: telContacts => {
      dispatch(deleteContacts(telContacts));
    },
    filterContacts: telContacts => {
      dispatch(filterContacts(telContacts));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TellContacts);
