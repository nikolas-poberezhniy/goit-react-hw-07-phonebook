export const ContactList = ({ visibleContacts, deleteLine }) => {
  return (
    <div>
      {visibleContacts.map(e => {
        return (
          <p key={e.id}>
            {e.name}: {e.phone}
            <button name={e.id} onClick={deleteLine}>
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
};
