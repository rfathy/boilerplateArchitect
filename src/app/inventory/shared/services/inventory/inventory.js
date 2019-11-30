import { httpClient } from '@/app/shared/services';

import { apiConstants } from '../../config';

const fetchInventory = () => {
  const url = apiConstants.inventory;

  return httpClient.get(url).then(res => res.data);
};

export { fetchInventory };
