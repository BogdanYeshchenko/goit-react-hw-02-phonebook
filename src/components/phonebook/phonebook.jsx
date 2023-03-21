import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

const { Component } = require('react');

// model.id = nanoid();

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleFormEvent = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    console.log(this.getFilteredContacts());
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.setState(prev => {
      return {
        contacts: [
          ...prev.contacts,
          { id: nanoid(), name: [prev.name], number: [prev.number] },
        ],
        name: '',
        number: '',
      };
    });
  };

  handleFilterChenge = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  //   const {users, submitSearch} = this.state
  //   return users.filter(user => user.name.toLowerCase().includes(submitSearch.toLowerCase()))

  render = () => {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onFormEvent={this.handleFormEvent}
          state={this.state}
          onFormSabmit={this.handleFormSubmit}
        />

        <h2>Contacts</h2>
        <Filter
          onChangeFilter={this.handleFilterChenge}
          filterWord={this.state.filter}
        />
        <ContactList contacts={this.getFilteredContacts()} />
      </div>
    );
  };
}

export default PhoneBook;
