import { KUBEWARDEN_PRODUCT_NAME, PROD_NAME } from '@kubewarden/types';

interface KubewardenRouteConfig {
  name?: string;
  hash?: string;
  query?: {
    [key: string]: any;
  };
  params?: {
    [key: string]: any;
  };
  meta?: {
    [key: string]: any;
  };
}

export const rootKubewardenRoute = (): KubewardenRouteConfig => ({
  name:   `c-cluster-${ PROD_NAME }-${ KUBEWARDEN_PRODUCT_NAME }`,
  params: { product: PROD_NAME },
  meta:   {
    pkg:     KUBEWARDEN_PRODUCT_NAME,
    product: PROD_NAME
  }
});

export const createKubewardenRoute = (config?: KubewardenRouteConfig) => {
  const {
    name, hash, query = {}, params = {}, meta = {}
  } = config || {};

  return {
    name:   name || `c-cluster-${ PROD_NAME }-resource`,
    hash,
    query:  { ...query },
    params: {
      ...rootKubewardenRoute().params,
      ...params
    },
    meta:   {
      ...rootKubewardenRoute().meta,
      ...meta
    }
  };
};
