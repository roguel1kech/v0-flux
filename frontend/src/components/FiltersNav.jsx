import { useState } from "react";
import searchIcon from "../assets/icons/search.svg";
import filtersIcon from "../assets/icons/filters.svg";
import FiltersModal from "./FiltersModal";

export default function FiltersNav({ searchTerm, setSearchTerm }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <nav className="filters__nav container">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="search-form__input"
          type="search"
          placeholder="Поиск"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="search-icon">
          <img src={searchIcon} alt="search" />
        </span>
      </form>
      <div className="filters">
        <button
          className="filters__button"
          id="open-filters"
          aria-label="Фильтры"
          onClick={() => setModalOpen(true)}
        >
          <img src={filtersIcon} alt="filters" />
        </button>
        <FiltersModal active={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </nav>
  );
}
