import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  const activeBtnClass = isActive ? 'active-btn' : ''
  console.log(activeBtnClass)
  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${activeBtnClass}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
