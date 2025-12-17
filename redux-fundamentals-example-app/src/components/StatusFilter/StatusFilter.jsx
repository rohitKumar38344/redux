export const StatusFilter = ({ value: filter, onChange }) => {
  function handleFilterStatus(e) {
    console.log('clicked');
    let filter = e.target.dataset.action;
    if (!filter) return;
    onChange(filter);
  }

  return (
    <div>
      <p>Filter by Status</p>
      <div onClick={handleFilterStatus} className="button-ctn">
        <button
          data-action="All"
          className={filter === 'All' ? 'active-filter' : ''}
        >
          All
        </button>
        <button
          data-action="Active"
          className={filter === 'Active' ? 'active-filter' : ''}
        >
          Active
        </button>
        <button
          data-action="Completed"
          className={filter === 'Completed' ? 'active-filter' : ''}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
