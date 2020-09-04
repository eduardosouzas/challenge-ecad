import {
  CustomFilterMethod, CustomTableFilter,
} from './custom';

export default {
  minRows: 0,
  sortable: true,
  multiSort: true,
  filterable: true,
  showPageJump: true,
  previousText: 'Anterior',
  nextText: 'Próximo',
  loadingText: 'Carregando...',
  noDataText: 'Nenhuma linha encontrada',
  pageText: 'Página',
  ofText: 'de',
  rowsText: 'linhas',
  pageJumpText: 'pula para a página',
  rowsSelectorText: 'linhas por página',
  defaultFilterMethod: CustomFilterMethod,
  FilterComponent: CustomTableFilter,
};
