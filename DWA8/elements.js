const elements = {
    list: {
      items: document.querySelector("[data-list-items]"),
      message: document.querySelector("[data-list-message]"),
      button: document.querySelector("[data-list-button]"),
      active: document.querySelector("[data-list-active]"),
      blur: document.querySelector("[data-list-blur]"),
      image: document.querySelector("[data-list-image]"),
      title: document.querySelector("[data-list-title]"),
      subtitle: document.querySelector("[data-list-subtitle]"),
      description: document.querySelector("[data-list-description]"),
      close: document.querySelector("[data-list-close]"),
    },
    search: {
      header: document.querySelector("[data-header-search]"),
      overlay: document.querySelector("[data-search-overlay]"),
      form: document.querySelector("[data-search-form]"),
      title: document.querySelector("[data-search-title]"),
      genres: document.querySelector("[data-search-genres]"),
      authors: document.querySelector("[data-search-authors]"),
      cancel: document.querySelector("[data-search-cancel]"),
    },
    settings: {
      header: document.querySelector("[data-header-settings]"),
      overlay: document.querySelector("[data-settings-overlay]"),
      form: document.querySelector("[data-settings-form]"),
      theme: document.querySelector("[data-settings-theme]"),
      cancel: document.querySelector("[data-settings-cancel]"),
    },
  }; 
  export{
    elements
  }   

  