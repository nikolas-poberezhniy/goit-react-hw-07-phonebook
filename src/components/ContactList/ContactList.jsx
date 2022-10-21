import PropTypes from 'prop-types';
export const ContactList = ({ visibleContacts, deleteLine }) => {
  return (
    <div>
      {visibleContacts.map(({ id, name, phone }) => {
        return (
          <p key={id}>
            {name}: {phone}
            <button name={id} onClick={deleteLine}>
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  deleteLine: PropTypes.func,
};
