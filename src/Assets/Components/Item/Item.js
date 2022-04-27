// scss file
import './item.scss'

function Item({ id, title, deleteItem, selected, isCompleted }) {
  return (
    <li className="item" data-id={id}>
      <input
        type="checkbox"
        checked={isCompleted}
        data-id={id}
        onChange={selected}
      />
      <strong className={isCompleted ? 'completed' : ''}>{title}</strong>
      <button
        className="item-btn"
        type="button"
        data-id={id}
        onClick={deleteItem}
      >
        Delete
      </button>
    </li>
  )
}

export default Item
