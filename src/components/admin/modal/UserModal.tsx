interface Props {
  user: User | null;
  onSave: () => void;
}

export default function UserModal({
  user,
  onSave,
}: Props) {
  return (
    <div
      className="modal fade"
      id="userModal"
    >
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5>
              {user
                ? "Edit User"
                : "Add User"}
            </h5>
          </div>

          <div className="modal-body">

            {/* form fields */}

          </div>

          <div className="modal-footer">
            <button
              className="btn btn-primary"
              onClick={onSave}
            >
              Save
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}