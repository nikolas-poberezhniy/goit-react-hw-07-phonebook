import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);
  const filterNormilized = filter.trim();
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterNormilized)
  );

  return (
    <div>
      {visibleContacts.map(({ id, name, phone }) => {
        return (
          <p key={id}>
            {name}: {phone}
            <button
              name={id}
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
};
