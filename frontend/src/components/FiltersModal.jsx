import closeIcon from "../assets/icons/filters.svg";

export default function FiltersModal({ active, onClose }) {
  return (
    <div className={`modal-filters ${active ? "active" : ""}`} id="filtersModal">
      <div className="modal-filters__content">
        <div className="modal-filters__header">
          <h2>Фильтр</h2>
          <button className="modal-filters__close" onClick={onClose} aria-label="Закрыть фильтры">
            <img src={closeIcon} alt="close" />
          </button>
        </div>
        <div className="modal-filters__body">
          <div className="categories-filters">
            <div className="slider"></div>
            <span className="main-filter categories-filters__model">Модель</span>
            <span className="main-filter categories-filters__bg">Общие</span>
            <span className="main-filter categories-filters__collection">Коллекция</span>
          </div>
          <div className="word-filters">
            <span className="word-filter word-filters__new">Новые</span>
            <span className="word-filter word-filters__pupular">Популярные</span>
            <span className="word-filter word-filters__more-expensive">Сначала дороже ↑</span>
            <span className="word-filter word-filters__cheaper">Сначала дешевле ↓</span>
          </div>
          <div className="categories-filters__model-list"></div>
        </div>
      </div>
    </div>
  );
}
