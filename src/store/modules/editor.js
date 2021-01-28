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
              '<div>\n' +
              '  <b-carousel\n' +
              '    id="carousel-fade"\n' +
              '    style="text-shadow: 0px 0px 2px #000"\n' +
              '    fade\n' +
              '    indicators\n' +
              '    img-width="1024"\n' +
              '    img-height="480"\n' +
              '  >\n' +
              '    <b-carousel-slide\n' +
              '      caption="First slide"\n' +
              '      img-src="https://picsum.photos/1024/480/?image=10"\n' +
              '    ></b-carousel-slide>\n' +
              '    <b-carousel-slide\n' +
              '      caption="Second Slide"\n' +
              '      img-src="https://picsum.photos/1024/480/?image=12"\n' +
              '    ></b-carousel-slide>\n' +
              '    <b-carousel-slide\n' +
              '      caption="Third Slide"\n' +
              '      img-src="https://picsum.photos/1024/480/?image=22"\n' +
              '    ></b-carousel-slide>\n' +
              '  </b-carousel>\n' +
              '</div>',
            preview: 'https://picsum.photos/900/250/?image=3',
          },
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
        ],
      },
      {
        name: 'Медиа',
        items: [
          {
            html:
              '<div>\n' +
              '  <b-card>\n' +
              '    <b-media>\n' +
              '      <template #aside>\n' +
              '        <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>\n' +
              '      </template>\n' +
              '\n' +
              '      <h5 class="mt-0">Media Title</h5>\n' +
              '      <p>\n' +
              '        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n' +
              '        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n' +
              '        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n' +
              '      </p>\n' +
              '      <p>\n' +
              '        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque\n' +
              '        penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n' +
              '      </p>\n' +
              '\n' +
              '      <b-media>\n' +
              '        <template #aside>\n' +
              '          <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>\n' +
              '        </template>\n' +
              '\n' +
              '        <h5 class="mt-0">Nested Media</h5>\n' +
              '        <p class="mb-0">\n' +
              '          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in\n' +
              '          faucibus.\n' +
              '        </p>\n' +
              '      </b-media>\n' +
              '    </b-media>\n' +
              '  </b-card>\n' +
              '</div>',
            preview: 'https://picsum.photos/900/250/?image=3',
          },
          {
            html:
              '<div>\n' +
              '  <ul class="list-unstyled">\n' +
              '    <b-media tag="li">\n' +
              '      <template #aside>\n' +
              '        <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>\n' +
              '      </template>\n' +
              '      <h5 class="mt-0 mb-1">List-based media object</h5>\n' +
              '      <p class="mb-0">\n' +
              '        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n' +
              '        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n' +
              '        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n' +
              '      </p>\n' +
              '    </b-media>\n' +
              '\n' +
              '    <b-media tag="li" class="my-4">\n' +
              '      <template #aside>\n' +
              '       <b-img blank blank-color="#cba" width="64" alt="placeholder"></b-img>\n' +
              '      </template>\n' +
              '\n' +
              '      <h5 class="mt-0 mb-1">List-based media object</h5>\n' +
              '      <p class="mb-0">\n' +
              '        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n' +
              '        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n' +
              '        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n' +
              '      </p>\n' +
              '    </b-media>\n' +
              '\n' +
              '    <b-media tag="li">\n' +
              '      <template #aside>\n' +
              '        <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>\n' +
              '      </template>\n' +
              '\n' +
              '      <h5 class="mt-0 mb-1">List-based media object</h5>\n' +
              '      <p class="mb-0">\n' +
              '        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n' +
              '        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc\n' +
              '        ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n' +
              '      </p>\n' +
              '    </b-media>\n' +
              '  </ul>\n' +
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
