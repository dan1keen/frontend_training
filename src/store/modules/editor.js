// import axios from '@/api/axios';
// import { setItem, removeItem } from '@/helpers/persistanceStorage';
const state = {
  blocks: [],
  templates: [],
};

const mutations = {
  setBlocks(state, payload) {
    state.blocks = [...state.blocks, payload];
  },
  setTemplates(state, payload) {
    state.templates = payload;
  },
};

const actions = {
  initTemplates(context) {
    const templates = [
      {
        name: 'Слайдеры',
        items: [
          {
            html:
              '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">\n' +
              '        <div class="carousel-inner">\n' +
              '            <div class="carousel-item active">\n' +
              '                <img src="https://picsum.photos/900/250/?image=3" class="d-block w-100" alt="...">\n' +
              '            </div>\n' +
              '            <div class="carousel-item">\n' +
              '                <img src="https://picsum.photos/900/250/?image=3" class="d-block w-100" alt="...">\n' +
              '            </div>\n' +
              '            <div class="carousel-item">\n' +
              '                <img src="https://picsum.photos/900/250/?image=3" class="d-block w-100" alt="...">\n' +
              '            </div>\n' +
              '        </div>\n' +
              '        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">\n' +
              '            <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n' +
              '            <span class="sr-only">Previous</span>\n' +
              '        </a>\n' +
              '        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">\n' +
              '            <span class="carousel-control-next-icon" aria-hidden="true"></span>\n' +
              '            <span class="sr-only">Next</span>\n' +
              '        </a>\n' +
              '    </div> ',
            preview: 'https://picsum.photos/900/250/?image=3',
          },
          {
            html:
              '<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>\n' +
              '\n' +
              '        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">\n' +
              '            <li>\n' +
              '                <img src="https://picsum.photos/900/250/?image=3" alt="">\n' +
              '                <div class="uk-position-center uk-panel"><h1>1</h1></div>\n' +
              '            </li>\n' +
              '            <li>\n' +
              '                <img src="https://picsum.photos/900/250/?image=3" alt="">\n' +
              '                <div class="uk-position-center uk-panel"><h1>2</h1></div>\n' +
              '            </li>\n' +
              '            <li>\n' +
              '                <img src="https://picsum.photos/900/250/?image=3" alt="">\n' +
              '                <div class="uk-position-center uk-panel"><h1>3</h1></div>\n' +
              '            </li>\n' +
              '            <li>\n' +
              '                <img src="https://picsum.photos/900/250/?image=3" alt="">\n' +
              '                <div class="uk-position-center uk-panel"><h1>4</h1></div>\n' +
              '            </li>\n' +
              '            <li>\n' +
              '                <img src="https://picsum.photos/900/250/?image=3" alt="">\n' +
              '                <div class="uk-position-center uk-panel"><h1>5</h1></div>\n' +
              '            </li>\n' +
              '            <li>\n' +
              '                <img src="https://picsum.photos/900/250/?image=3" alt="">\n' +
              '                <div class="uk-position-center uk-panel"><h1>6</h1></div>\n' +
              '            </li>\n' +
              '            <li>\n' +
              '                <img src="https://picsum.photos/900/250/?image=3" alt="">\n' +
              '                <div class="uk-position-center uk-panel"><h1>7</h1></div>\n' +
              '            </li>\n' +
              '            <li>\n' +
              '                <img src="https://picsum.photos/900/250/?image=3" alt="">\n' +
              '                <div class="uk-position-center uk-panel"><h1>8</h1></div>\n' +
              '            </li>\n' +
              '            <li>\n' +
              '                <img src="https://picsum.photos/900/250/?image=3" alt="">\n' +
              '                <div class="uk-position-center uk-panel"><h1>9</h1></div>\n' +
              '            </li>\n' +
              '            <li>\n' +
              '                <img src="https://picsum.photos/900/250/?image=3" alt="">\n' +
              '                <div class="uk-position-center uk-panel"><h1>10</h1></div>\n' +
              '            </li>\n' +
              '        </ul>\n' +
              '\n' +
              '        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>\n' +
              '        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>\n' +
              '\n' +
              '    </div>',
            preview: 'https://picsum.photos/900/250/?image=3',
          },
        ],
      },
      {
        name: 'Карточки',
        items: [
          {
            html:
              '<div class="card">\n' +
              '  <div class="card-header">\n' +
              '    Featured\n' +
              '  </div>\n' +
              '  <div class="card-body">\n' +
              '    <h5 class="card-title">Special title treatment</h5>\n' +
              '    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\n' +
              '    <a href="#" class="btn btn-primary">Go somewhere</a>\n' +
              '  </div>\n' +
              '</div>',
            preview: 'https://picsum.photos/900/250/?image=3',
          },
        ],
      },
    ];
    context.commit('setTemplates', templates);
  },
  addBlock(context, payload) {
    context.commit('setBlocks', payload);
  },
};

export default {
  state,
  mutations,
  actions,
};
