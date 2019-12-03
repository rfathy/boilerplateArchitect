import { httpClient } from '@/app/shared/services';

import { apiConstants } from '../../config';

const fetchInventoryManagement = () => {
  const url = apiConstants.inventoryManagement;

  return httpClient.get(url).then(res => res.data);
};

export { fetchInventoryManagement };
