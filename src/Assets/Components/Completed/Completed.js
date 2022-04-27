
// scss file completed scss import
import "./completed.scss";

function Completed ({all, Completed, unCompleted, allItem, completedItem, unCompletedItem}) {
    return (
        <ul className="completed-list">
            <li className="completed-item all-item" onClick={allItem}>All <strong>{all}</strong></li>
            <li className="completed-item completed-item" onClick={completedItem}>Completed <strong>{Completed}</strong></li>
            <li className="completed-item unCompleted-item" onClick={unCompletedItem}>UnCompleted <strong >{unCompleted}</strong></li>
        </ul>
    )
}

export default Completed;