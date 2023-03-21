import PropTypes from 'prop-types';

export const ContactForm = ({ onFormEvent, state, onFormSabmit }) => {
  const { name, number } = state;
  return (
    <form onSubmit={onFormSabmit}>
      <label>
        <span>Name</span>
        <input
          value={name}
          onChange={onFormEvent}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <span>Number</span>
        <input
          value={number}
          onChange={onFormEvent}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onFormEvent: PropTypes.func.isRequired,
};
